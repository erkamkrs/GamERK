import Image from "next/image";
import { notFound } from "next/navigation";
import Heading from "@/components/Heading";
import { getReview, getSlugs } from "@/lib/reviews";
import ShareLinkButton from "@/components/ShareLinkButton";

export async function generateStaticParams() {
  const slugs = await getSlugs();
 
  return slugs.map((slug) => ({slug}));
}

export async function generateMetaData({params: {slug}}) {
  console.log("ReviewPAge rendering:", slug);
  const review = await getReview(slug);
  // stops the rendering process if the slug doesn´t exist on data
  if (!review) {
    notFound();
  }
  return {
    title: review.title
  };
}

export default async function ReviewPage({params: {slug}}) {
  const  review = await getReview(slug);
    // returns 404 error if the slug doesn´t exist
  if (!review) {
    notFound();
  }
  return ( 
    <>
      <Heading>{review.title}</Heading>
      <p className="font-semibold pb-3">
        {review.subtitle}
      </p> 
      <div className="flex gap-3 items-baseline"> 
        <p className="italic pb-2 text-slate-100">{review.date}</p>
        <ShareLinkButton/>
      </div>
      <Image src={review.image} alt="" 
      width="640" height="360" className="mb-2 pt-2 rounded"
      />
      <article dangerouslySetInnerHTML={{ __html: review.body }}
        className="max-w-screen-sm prose prose-slate font-bold font-orbitron text-slate-100 text-sm"
      />
    </>
  );
}
