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

import { getProducts } from "@/actions/product";

export default async function Home() {
  const products = (await getProducts()) || [];

  return (
    <div className="space-y-20">
      <section>
        <Banner></Banner>
      </section>

      <section className="space-y-20">
        <VisualBadges />
        
        <Products initialProducts={products} />
        
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