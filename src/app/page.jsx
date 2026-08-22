import Banner from "@/components/home/Banner";
import VisualBadges from "@/components/home/VisualBadges";
import AgeFilter from "@/components/home/AgeFilter";
import HomeProducts from "@/components/home/HomeProducts";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import HowItWorks from "@/components/home/HowItWorks";
import Testimonials from "@/components/home/Testimonials";
import Newsletter from "@/components/home/Newsletter";

import { getProducts } from "@/actions/product";
import FlashDealBanner from "@/components/home/FlashDealBanner";

export default async function Home() {
  const products = (await getProducts()) || [];

  return (
    <div className="space-y-16 md:space-y-24">
      {/* 1. Hero Section */}
      <section>
        <Banner />
      </section>
      <section>
        <FlashDealBanner />
      </section>

      {/* 2. Trust Badges right after banner */}
      <section>
        <VisualBadges />
      </section>

      {/* 3. Shop by Age Filter */}
      <section>
        <AgeFilter />
      </section>

      {/* 4. Products Grid */}
      <section>
        <HomeProducts products={products} />
      </section>

      {/* 5. Features & Value Propositions */}
      <section className="space-y-16 md:space-y-24">
        <WhyChooseUs />
        <HowItWorks />
        <Testimonials />
        <Newsletter />
      </section>
    </div>
  );
}