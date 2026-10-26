import Image from 'next/image';
import Link from 'next/link';

export default function HeroSection() {
  return (
    <section>
      <div className='grid grid-cols-1 lg:grid-cols-2 '>
        <div
          className='flex flex-col mx-12 mt-16
        justify-center text-center space-y-8  
        lg:col-span-1 lg:pl-12 lg:space-y-12 lg:justify-start lg:text-start 
        xl:mt-48 xl:space-y-24'
        >
          <h1 className=' text-3xl font-bold  md:text-5xl xl:text-7xl '>
            FIND CLOTHES THAT MATCHES YOUR STYLE
          </h1>
          <p
            className='text-lg font-normal text-gray-600 
          md:font-bold md:text-2xl xl:text-4xl '
          >
            Browse through our diverse range <br />
            of meticulously crafted garments,
            <br /> designed to bring out your individuality <br />
            and cater to your sense of style.
          </p>

          <Link href='/shop'>
            <button
              className='bg-black text-white cursor-pointer rounded-full text-base 
           hover:bg-gray-700  px-20 py-4  lg:py-5 lg:px-24 lg:text-2xl'
            >
              Shop Now
            </button>
          </Link>

          <div className='flex flex-wrap gap-4 justify-center lg:justify-start '>
            <div className='p-2'>
              <p className='text-xl font-bold text-black  lg:text-2xl xl:text-4xl'>
                +200
              </p>
              <p className='text-sm text-gray-600 xl:text-lg'>
                International Brands
              </p>
            </div>
            <div className='p-2'>
              <p className='text-xl font-bold text-black lg:text-2xl xl:text-4xl'>
                +2000
              </p>
              <p className='text-sm text-gray-600 xl:text-lg'>
                High-Quality Products
              </p>
            </div>
            <div className='p-2'>
              <p className='text-xl font-bold text-black lg:text-2xl xl:text-4xl'>
                +1000
              </p>
              <p className='text-sm text-gray-600 xl:text-lg'>
                Happy Customers
              </p>
            </div>
          </div>
        </div>

        <Image
          width={1000}
          height={500}
          src='/modal.jpg'
          alt='Fashion model wearing modern clothing'
          className='lg:col-span-1 mt-12 lg:mt-0 w-full h-auto max-w-1000px object-cover '
          priority
        />
      </div>
    </section>
  );
}
