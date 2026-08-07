import Header from '@/components/layout/Header';
import '@fortawesome/fontawesome-free/css/all.min.css';
import './style.css';
import HeroSection from '@/components/layout/HeroSection';
import Brands from '@/components/ui/Brands';
import { Hydration } from '@/providers/Hydration';
import ProductList from '@/components/layout/ProductList';

export default async function HomePage() {
  return (
    <div>
      <HeroSection />
      <Brands />
      <Hydration>
        <ProductList />
      </Hydration>
    </div>
  );
}
