import Heading from "@/components/Heading";
import { getReview, getSlugs } from "@/lib/reviews";
import ShareLinkButton from "@/components/ShareLinkButton";

export async function generateStaticParams() {
  const slugs = await getSlugs();
  return slugs.map((slug) => ({ slug }));

}

export async function generateMetaData({params: {slug}}) {
  const review = await getReview(slug);
  return {
    title: review.title
  };
}

export default async function ReviewPage({params: {slug}}) {
  const  review = await getReview(slug);
  return ( 
    <>
      <Heading>{review.title}</Heading>
      <div className="flex gap-3 items-baseline"> 
        <p className="italic pb-2 text-slate-100">{review.date}</p>
        <ShareLinkButton/>
      </div>
      <img src={review.image}
      width="640" height="360" className="mb-2 pt-2 rounded"
      />
      <article dangerouslySetInnerHTML={{ __html: review.body }}
        className="max-w-screen-sm prose prose-slate font-bold font-orbitron text-slate-100 text-sm"
      />
    </>
  );
}
