import Header from "@/components/Header";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "./style.css";
import HeroSection from "@/components/HeroSection";
import Brands from "@/components/Brands";
export default function Home() {
  return (
    <div>
      <Header />
      <HeroSection />
      <Brands />
    </div>
  );
}
