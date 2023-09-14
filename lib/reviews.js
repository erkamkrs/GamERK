import "server-only";

import { marked } from 'marked';
import qs from "qs";

// added to .env.local file first then add to gitignore
const CMS_URL = process.env.CMS_URL;

export async function getReview(slug) {
  const { data } = await fetchReviews({
    filters: {slug: { $eq: slug}},
    fields: ["slug", "title", "subtitle", "publishedAt", "body"],
    populate: { image : {fields: ["url"] } },
    pagination: { pageSize: 1, withCount: false},
});
// check if there is any review data or not
  if (data.length === 0) {
    return null;
  }
  const item = data[0];
  return { 
    ...toReview(item),
    body: marked(item.attributes.body, { headerIds: false, mangle: false }),
  };
}

export async function getReviews(pageSize, page) {
const { data, meta } = await fetchReviews({
fields: ["slug", "title", "subtitle", "publishedAt"],
populate: { image : {fields: ["url"] } },
sort: ["publishedAt:desc"], 
pagination: { pageSize, page },
});
  return {
    pageCount: meta.pagination.pageCount,
    reviews: data.map(toReview),
}; 
}

export async function searchReviews(query) {
  const {data} = await fetchReviews({
    filters: {title: { $containsi: query}}, //filter title that contains the query in the search box
    fields: ["slug", "title"],
    sort: ["title"],
    pagination: {pageSize: 5},
  });
  return data.map(({attributes}) =>  ({
    slug: attributes.slug,
    title: attributes.title,
    }));
  }
  

export async function getSlugs() {
const {data} = await fetchReviews({
  fields: ["slug"],
  sort: ["publishedAt:desc"],
  pagination: {pageSize: 100},
});
return data.map((item) =>  item.attributes.slug);
}

async function fetchReviews(parameters) {
  const url = `${CMS_URL}/api/reviews?`
  + qs.stringify(parameters, { encodeValuesOnly: true });

  const response = await fetch(url, {
    next: {
      revalidate: 30, //seconds //
    }
  });
  if (!response.ok) {
    throw new Error(`CMS returned ${respose.status} for ${url}`);
  }
  return await response.json();
  }

function toReview(item) {
  const { attributes } = item;
  return  {    
    slug: attributes.slug,
    title: attributes.title,
    subtitle: attributes.subtitle,
    date: attributes.publishedAt.slice(0, 10),
    image: new URL(attributes.image.data.attributes.url, CMS_URL).href,
  };
}
