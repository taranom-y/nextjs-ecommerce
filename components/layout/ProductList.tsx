'use client';
import { GetProducts } from '@/lib/api/Products';
import ProductCard from '../ui/ProductCard';
import { Product } from '@/types/productType';
import { useQuery } from '@tanstack/react-query';

export default function ProductList() {
  const { data: products = [] } = useQuery({
    queryKey: ['products'],
    queryFn: GetProducts,
  });

  const featuredProducts = products.slice(0, 4);
  return (
    <section id='on_sale' className='mb-4 mx-8 '>
      <h2 className='text-center font-bold text-4xl mt-12'> On Sale</h2>

      <div className='grid grid-cols-2 md:grid-cols-4 gap-4 mt-12'>
        {featuredProducts.map((product: Product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
      <button className='block mx-auto mt-8 border border-gray-700 text-gray-700 text-lg hover:bg-gray-200 rounded-4xl py-2 px-12 md:px-24 '>
        View all
      </button>
    </section>
  );
}
