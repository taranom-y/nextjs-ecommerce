import Image from 'next/image';
import { Product } from '@/types/productType';

type ProductCardProps = {
  product: Product;
};

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <div className='flex flex-col p-6 mb-8 border-b-gray-400 rounded-2xl shadow-xs bg-gray-100'>
      <Image
        className='mb-1 rounded-2xl bg-stone-300 '
        src={product.thumbnail}
        width={500}
        height={500}
        alt={product.title}
      />

      <h5 className='font-bold line-clamp-1 md:text-lg md:mt-2 md:line-clamp-2'>
        {product.title}
      </h5>

      <div className='flex flex-col justify-center md:flex-row md:justify-between md:mt-2 '>
        <p className='text-amber-900 text-lg font-medium mb-2'>
          ${product.price}
        </p>

        <button
          className='bg-black hover:bg-gray-800 text-white font-light
         rounded-full py-1 px-3  md:py-2 md:px-4 '
        >
          Add to cart
        </button>
      </div>
    </div>
  );
}
