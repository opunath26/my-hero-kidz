import Banner from "@/components/home/Banner";
import HomeProducts from "@/components/home/HomeProducts";
import Testimonials from "@/components/home/Testimonials";
import AgeFilter from "@/components/home/AgeFilter";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import Newsletter from "@/components/home/Newsletter";
import HowItWorks from "@/components/home/HowItWorks";
import FunStats from "@/components/home/FunStats";
import VisualBadges from "@/components/home/VisualBadges";

import { getProducts } from "@/actions/product";

export default async function Home() {
  const products = (await getProducts()) || [];

  return (
    <div className="space-y-20">
      <section>
        <Banner />
      </section>

      <section className="space-y-20">
        <VisualBadges />
        
        <HomeProducts products={products} />
        
        <FunStats />
        <WhyChooseUs />
        <AgeFilter />
        <HowItWorks />
        <Testimonials />
        <Newsletter />
      </section>
    </div>
  );
}