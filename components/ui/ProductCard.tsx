import Image from 'next/image';
import type { Product } from '@/types/productType';
import StarRating from './StarRating';

type ProductCardProps = {
  product: Product;
};

export default function ProductCard({ product }: ProductCardProps) {
  const discountAmount = product.price * (product.discountPercentage / 100);

  const discountedPrice = product.price - discountAmount;
  return (
    <div
      className='flex flex-col p-6 border-b border-gray-400
     rounded-2xl shadow-stone-500 shadow-xs bg-gray-100'
    >
      <div className='relative aspect-square overflow-hidden rounded-2xl bg-stone-300'>
        <Image
          src={product.thumbnail}
          alt={product.title}
          fill
          sizes='(max-width: 768px) 100vw, 50vw'
          className='object-cover'
        />
      </div>

      <h3 className='font-bold text-lg my-4 line-clamp-1'>{product.title}</h3>
      <StarRating rating={product.rating} />
      <div className='flex justify-between text-lg font-medium mt-3'>
        <p>${product.price}</p>
        <p className='text-amber-800 '>- %{product.discountPercentage}</p>
      </div>
      <div className='flex justify-between rounded-full bg-red-100 text-red-900 px-2 mt-2'>
        <p>${discountedPrice.toFixed(2)}</p>
        <p>${discountAmount.toFixed(2)} OFF</p>
      </div>
    </div>
  );
}
