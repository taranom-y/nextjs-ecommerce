'use client';
import { GetProducts } from '@/lib/api/GetProducts';
import { useQuery } from '@tanstack/react-query';
import Link from 'next/link';

export default function Brands() {
  const { data: products = [] } = useQuery({
    queryKey: ['products'],
    queryFn: GetProducts,
  });
  const brandsUnique = [
    ...new Set(
      products
        .filter((product) => product.brand)
        .map((product) => product.brand),
    ),
  ];

  return (
    <section
      id='brands'
      className='flex flex-wrap justify-center
       bg-black text-white gap-8 w-full p-4 xl:p-8
       text-2xl xl:text-4xl xl:gap-12'
    >
      {brandsUnique.map((brand) => (
        <Link key={brand} href={`/brands/${encodeURIComponent(brand)}`}>
          {brand}
        </Link>
      ))}
    </section>
  );
}
