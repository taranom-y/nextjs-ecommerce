import HeroSection from '@/components/layout/HeroSection';
import Brands from '@/components/ui/Brands';
import { ProductHydration } from '@/providers/ProductHydration';
import ProductList from '@/components/layout/ProductList';
import ReviewsSection from '@/components/layout/Reviews';

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <ProductHydration>
        <Brands />
        <ProductList />
        <ReviewsSection />
      </ProductHydration>
    </>
  );
}
