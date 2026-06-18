import Link from "next/link";

export default function Brands() {
  return (
    <div className="bg-black text-white flex flex-wrap justify-center gap-4 w-full p-4 cursor-pointer text-4xl md:gap-12">
      <Link href="/">VERSACE</Link>

      <Link href="/">ZARA</Link>

      <Link href="/">GUCCI</Link>

      <Link href="/">PRADA</Link>

      <Link href="/">Calvin Klein</Link>
    </div>
  );
}
