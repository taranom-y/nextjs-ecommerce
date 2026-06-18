export default function Header() {
  return (
    <>
      <div
        className=" fixed top-0 w-full text-center font-light py-1 bg-black
       xl:font-medium   "
      >
        <p className="text-white">
          Sign up and get 20% off to your first order.
          <span className="underline underline-offset-2 cursor-pointer">
            Sign Up Now
          </span>
        </p>
      </div>

      <nav
        className=" bg-neutral-50 sticky mt-10  w-full flex items-center justify-center
      px-6 md:px-2 lg:px-24 xl:px-32 py-2 text-gray-950 shadow"
      >
        <button
          type="button"
          className=" inline-flex items-center justify-center rounded-md p-4
           text-gray-800 md:hidden "
        >
          <i className="fa-solid fa-bars text-2xl"></i>
        </button>
        <a
          className="link link-neutral text-4xl font-bold no-underline "
          href=""
        >
          VELORA
        </a>
        <ul className="hidden items-center space-x-8  me-12  md:flex  md:pl-20 ">
          <li>
            <a href="#" className="text-lg">
              Shop
            </a>
          </li>
          <li>
            <a href="#" className="text-lg">
              On Sale
            </a>
          </li>
          <li>
            <a href="#" className="text-lg">
              New Arrivals
            </a>
          </li>
          <li>
            <a href="#" className="text-lg">
              Brands
            </a>
          </li>
        </ul>

        <div
          className="hidden w-3/12 lg:flex items-center text-base gap-2 border
         border-gray-300 px-4  rounded-full me-12 "
        >
          <input
            className="py-3 w-full bg-transparent outline-none placeholder-gray-500"
            type="text"
            placeholder="Search for products"
          />
          <i className="fa-solid fa-magnifying-glass text-gray-600"></i>
        </div>
        <div className="flex gap-2 mx-5 cursor-pointer">
          <div className="md:hidden">
            <i className="fa-solid fa-magnifying-glass text-xl"></i>
          </div>
          <i className="fa-solid fa-cart-shopping text-xl"></i>
          <i className="fa-solid fa-circle-user text-xl"></i>
        </div>
      </nav>
    </>
  );
}
