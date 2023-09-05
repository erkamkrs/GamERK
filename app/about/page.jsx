import Heading from "@/components/Heading";


// Important to Add  META TAgs such as Title or description for SEO \\

export const metadata = {
  title: "About"
};

export default function AboutPage() {
  return (
    <>
      <Heading>About</Heading>
      <p className="font-orbitron">
        A website created to learn Next.js
      </p>
    </>
  );
}
