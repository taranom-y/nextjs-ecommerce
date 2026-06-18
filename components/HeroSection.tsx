import Image from "next/image";

export default function HeroSection() {
  return (
    <section className=" flex flex-col lg:flex-row  items-center   bg-hero  ">
      <div className="ml-12  space-y-12 mt-8">
        <h1 className=" text-4xl lg:text-7xl xl:w-2/3 text-start font-bold ">
          FIND CLOTHES THAT MATCHES YOUR STYLE
        </h1>

        <p
          className="xl:w-2/3
            font-medium text-lg 
            text-gray-600
            text-start
            "
        >
          Browse through our diverse range of meticulously crafted garments,
          designed to bring out your individuality and cater to your sense of
          style.
        </p>

        <button className="bg-black text-white text-base rounded-full px-20 py-3  ">
          Shop Now
        </button>
        <div className="flex flex-wrap gap-6 mb-12 md:mt-12 ">
          <div className="px-4">
            <p className="text-xl font-bold text-black md:text-4xl">+200</p>
            <p className="text-sm text-gray-600 md:text-lg">
              International Brands
            </p>
          </div>
          <div className="px-4">
            <p className="text-xl font-bold text-black md:text-4xl">+2000</p>
            <p className="text-sm text-gray-600 md:text-lg">
              High-Quality Products
            </p>
          </div>
          <div className="px-4">
            <p className="text-xl font-bold text-black md:text-4xl">+1000</p>
            <p className="text-sm text-gray-600 md:text-lg">Happy Customers</p>
          </div>
        </div>
      </div>

      <div>
        <Image
          src="/modal.jpg"
          width={1000}
          height={500}
          alt="Fashion model wearing modern clothing"
        ></Image>
      </div>
    </section>
  );
}
