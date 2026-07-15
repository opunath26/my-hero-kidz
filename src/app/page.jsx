import Banner from "@/components/home/Banner";
import Products from "@/components/home/Products";
import Testimonials from "@/components/home/Testimonials";
import AgeFilter from "@/components/home/AgeFilter";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import Newsletter from "@/components/home/Newsletter";
import Image from "next/image";
import HowItWorks from "@/components/home/HowItWorks";
import FunStats from "@/components/home/FunStats";
import VisualBadges from "@/components/home/VisualBadges";

export default function Home() {
  // throw new Error("Testing Hero Kidz Error Page!");
  return (
    <div className="space-y-20">
      <section>
        <Banner></Banner>
      </section>

      <section>
        <VisualBadges />
        <Products></Products>
        <FunStats />
        <WhyChooseUs></WhyChooseUs>
        <AgeFilter></AgeFilter>
        <HowItWorks />
        <Testimonials />
        <Newsletter></Newsletter>
      </section>
      
    </div>
  );
}




