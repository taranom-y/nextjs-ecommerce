'use client';
import { GetProducts } from '@/lib/api/GetProducts';
import { useQuery } from '@tanstack/react-query';
import StarRating from '../ui/StarRating';
import { useState } from 'react';

export default function ReviewsSection() {
  const {
    data: products = [],
    isPending,
    isError,
  } = useQuery({
    queryKey: ['products'],
    queryFn: GetProducts,
  });

  const [currentSlide, setCurrentSlide] = useState(0);

  const reviewsSlides = 3;

  const reviews = products.flatMap((product) => product.reviews ?? []);

  const totalSlides = Math.ceil(reviews.length / reviewsSlides);

  const nextSlide = () =>
    setCurrentSlide((prev) => (prev === totalSlides - 1 ? 0 : prev + 1));
  console.log(totalSlides);
  console.log(currentSlide);

  const previousSlide = () =>
    setCurrentSlide((prev) => (prev === 0 ? totalSlides - 1 : prev - 1));
  console.log(totalSlides);
  console.log(currentSlide);
  return (
    <section className='mx-8 my-20'>
      <div className='flex flex-row justify-between gap-2'>
        <h2 className='text-2xl md:text-4xl font-extrabold'>
          OUR CUSTOMERS REVIEWS
        </h2>
        <div className='flex flex-row text-gray-700 md:text-lg '>
          <button
            type='button'
            onClick={previousSlide}
            aria-label='previous reviews'
            className='px-4 py-1 cursor-pointer'
          >
            <i className='fa-solid fa-angles-left'></i>
          </button>

          <button
            type='button'
            onClick={nextSlide}
            aria-label='next reviews'
            className='px-4 py-1 cursor-pointer'
          >
            <i className='fa-solid fa-angles-right'></i>
          </button>
        </div>
      </div>
      <div className='my-8 mx-2 overflow-hidden'>
        <div
          className='flex flex-row transition-transform duration-500 ease-in-out'
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {Array.from({ length: totalSlides }).map((_, slideIndex) => (
            <div
              key={slideIndex}
              className='grid grid-cols-1 md:grid-cols-3 min-w-full gap-4 '
            >
              {reviews
                .slice(
                  slideIndex * reviewsSlides,
                  slideIndex * reviewsSlides + reviewsSlides,
                )
                .map((rev, index) => (
                  <div
                    key={`${rev.reviewerName}-${index}`}
                    className='flex min-h-48 flex-col rounded-2xl border
                     border-gray-300 p-6'
                  >
                    <StarRating rating={rev.rating} />
                    <p className='mt-3 font-semibold'>{rev.reviewerName}</p>
                    <p className='mt-2 text-gray-600'> {rev.comment} </p>
                    <p className='mt-auto pt-4 text-sm text-gray-400'>
                      {new Date(rev.date).toLocaleDateString()}
                    </p>
                  </div>
                ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
