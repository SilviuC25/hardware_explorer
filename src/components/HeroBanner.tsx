import Image from "next/image";
import Link from "next/link";

export default function HeroBanner() {
  return (
    <section className="bg-gray-900 text-white">
      <div className="mx-auto max-w-screen-xl px-4 py-2 lg:flex lg:h-screen lg:items-center">
        <div className="mx-auto max-w-3xl text-center">
          
          <div className="flex justify-center">
            <Image
              src="/logo-transparent.png"
              alt="Logo"
              width={1200}
              height={450}
              objectFit="contain"
            />
          </div>

          <h1 className="bg-gradient-to-r from-teal-600 via-blue-500 to-purple-800 bg-clip-text text-3xl font-extrabold text-transparent sm:text-5xl mt-4">
            Learn the tech behind the hardware.
          </h1>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a
              className="block w-full rounded-sm border border-teal-600 bg-teal-600 px-12 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-white focus:ring-3 focus:outline-hidden sm:w-auto"
              href="/create"
            >
              Create Blog
            </a>

            <Link
              className="block w-full rounded-sm border border-teal-600 px-12 py-3 text-sm font-medium text-white hover:bg-teal-600 focus:ring-3 focus:outline-hidden sm:w-auto"
              href="/blogs"
            >
              Read Our Blogs
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
