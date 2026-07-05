import About from "@/components/home/About";
import Banner from "@/components/home/Banner";
import Contact from "@/components/home/Contect";
import Products from "@/components/home/Products";
import Image from "next/image";

export default function Home() {
  return (
    <div className="space-y-20">
      <section>
        <Banner></Banner>
      </section>

      <section>
        <Products></Products>
      </section>
      <section>
        <About></About>
        <Contact></Contact>
      </section>
    </div>
  );
}

