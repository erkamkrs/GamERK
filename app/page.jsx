import Heading from "@/components/Heading";
import { getLatestReview } from "@/lib/reviews";
import Link from "next/link";


function getShortenedBody(body, maxLength = 295) {
  if (body.length <= maxLength) {
    return body;
  }
  return body.slice(0, maxLength) + '...';
}

export default async function HomePage() {
  const latestReview = await getLatestReview();
  const shortenedBody = getShortenedBody(latestReview.body);


  
  return (
    <>
      <Heading>GamERK</Heading>
      <p className="pb-3 font-bold font-orbitron text-slate-100">
        Only the best video games, reviewed for you.
      </p>
      <div className='bg-slate-300 border rounded shadow w-80 hover:shadow-xl sm:w-full lg:w-8/12'>
        <Link href={`/reviews/${latestReview.slug}`} className="flex flex-col sm:flex-row">
          <img src={latestReview.image} alt="" width="320" height="180" className="rounded-t sm:rounded-r-none" />
          <div className="p-4">
            <h2 className='font-orbitron font-semibold'>
              {latestReview.title}
            </h2>
            <article dangerouslySetInnerHTML={{ __html: shortenedBody }}
              className="max-w-screen-sm prose prose-slate font-bold font-orbitron text-slate-950 text-sm"
              />
          </div>
        </Link>
      </div>
    </>
  );
}

