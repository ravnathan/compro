import Body from "@/components/body";
import Hero from "@/components/hero";
import Testimonials from "@/components/testimonials";
import { Metadata } from "next";

export const metadata : Metadata = {
  title: "DeTea",
  description: "Homepage"
}

export default function Home() {
  return (
    <div className="">
      <Hero/>
      <Body/>
      <Testimonials/>
    </div>
  );
}
