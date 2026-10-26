'use client';
import { GetProducts } from '@/lib/api/GetProducts';
import ProductCard from '../ui/ProductCard';
import { useQuery } from '@tanstack/react-query';
import Link from 'next/link';

export default function ProductList() {
  const {
    data: products = [],
    isPending,
    isError,
  } = useQuery({
    queryKey: ['products'],
    queryFn: GetProducts,
  });

  const showProducts = products
    .filter((product) => product.discountPercentage > 0)
    .toSorted((a, b) => b.discountPercentage - a.discountPercentage)
    .slice(0, 4);
  return (
    <section id='on_sale' className='m-12 text-center'>
      <h2 className=' font-bold text-4xl'> On Sale</h2>
      {isPending ? (
        <p className='font-bold text-2xl my-28 text-purple-800'>
          Loading products...
        </p>
      ) : isError ? (
        <p className='font-bold text-2xl my-28 text-orange-800'>
          Unable to load products. Please try again.
        </p>
      ) : (
        <>
          <div
            className='grid grid-cols-1 gap-12 mt-12
       md:grid-cols-2 
       lg:grid-cols-4 '
          >
            {showProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          <Link
            href='/shop'
            className='block mx-auto mt-12 w-fit 
         border border-gray-500
         text-gray-700 text-lg
         hover:bg-gray-200 
          rounded-4xl
          py-2 px-12 md:px-24 '
          >
            View all
          </Link>
        </>
      )}
    </section>
  );
}
