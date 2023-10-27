import Image from "next/image";
import { Inter } from "next/font/google";
import { createClient } from "next-sanity";
import Home from "@/components/Home";
const inter = Inter({ subsets: ["latin"] });

export default function Hom({ blogs }) {
  return (
    <>
    <Home blog={ blogs} />
    </>
  );
}

export async function getServerSideProps(context) {
  const client = createClient({
    projectId: "y1oguca2",
    dataset: "production",
    useCdn: true,
  });
  const query = `*[_type == "blog"]`;
  const blogs = await client.fetch(query);
  return { props: { blogs } };
}
