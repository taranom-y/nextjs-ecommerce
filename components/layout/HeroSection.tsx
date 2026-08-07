import Image from 'next/image';
import Link from 'next/link';

export default function HeroSection() {
  return (
    <section className='flex flex-col lg:flex-row bg-hero'>
      <div className='mx-6 md:pl-12 space-y-12 mt-8 text-center md:text-start '>
        <h1 className=' text-4xl lg:text-7xl xl:w-2/3 font-bold '>
          FIND CLOTHES THAT MATCHES YOUR STYLE
        </h1>

        <p
          className='xl:w-2/3
            font-medium text-lg 
            text-gray-600'
        >
          Browse through our diverse range of meticulously crafted garments,
          designed to bring out your individuality and cater to your sense of
          style.
        </p>

        <Link
          href='/Shop'
          className='bg-black text-white cursor-pointer rounded-full text-base 
           hover:bg-gray-700 px-20 py-4 md:py-6 md:px-24 md:text-2xl'
        >
          Shop Now
        </Link>
        <div className='flex flex-wrap justify-center gap-4 mb-12 mt-8 md:mt-16 md:justify-start '>
          <div className='p-4'>
            <p className='text-xl font-bold text-black md:text-4xl'>+200</p>
            <p className='text-sm text-gray-600 md:text-lg'>
              International Brands
            </p>
          </div>
          <div className='p-4'>
            <p className='text-xl font-bold text-black md:text-4xl'>+2000</p>
            <p className='text-sm text-gray-600 md:text-lg'>
              High-Quality Products
            </p>
          </div>
          <div className='p-4'>
            <p className='text-xl font-bold text-black md:text-4xl'>+1000</p>
            <p className='text-sm text-gray-600 md:text-lg'>Happy Customers</p>
          </div>
        </div>
      </div>

      <div className='min-h-400px lg:min-w-500px lg:max-h-700px'>
        <Image
          width={1000}
          height={500}
          src='/modal.jpg'
          alt='Fashion model wearing modern clothing'
          className='object-cover'
        />
      </div>
    </section>
  );
}
