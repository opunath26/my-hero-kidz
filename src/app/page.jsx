import Banner from "@/components/home/Banner";
import Products from "@/components/home/Products";
import Testimonials from "@/components/home/Testimonials";
import AgeFilter from "@/components/home/AgeFilter";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import Image from "next/image";

export default function Home() {
  // throw new Error("Testing Hero Kidz Error Page!");
  return (
    <div className="space-y-20">
      <section>
        <Banner></Banner>
      </section>

      <section>
        <Products></Products>
        <WhyChooseUs></WhyChooseUs>
        <AgeFilter></AgeFilter>
        <Testimonials />
      </section>
      
    </div>
  );
}



