import React from "react";
import Link from "next/link";
import Image from "next/image";

interface NavbarProps {
  openSidebar: () => void;
  isSidebarOpen: boolean;
}

const Navbar: React.FC<NavbarProps> = ({ openSidebar, isSidebarOpen }) => {
  return (
    <header className="bg-white dark:bg-gray-900 shadow-md relative z-40">
      <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="md:flex md:items-center md:gap-12">
            <Link href="/">
              <Image
                src="/mini-logo.png"
                alt="Logo"
                width={50}
                height={50}
                objectFit="contain"
              />
            </Link>
          </div>

          {!isSidebarOpen && (
            <nav aria-label="Global" className="hidden md:block">
              <ul className="flex items-center gap-6 text-sm">
                {[
                  { name: "Home", path: "/" },
                  { name: "About", path: "/about" },
                  { name: "Blogs", path: "/blogs" },
                  { name: "FAQ", path: "/faq" },
                ].map((item, index) => (
                  <li key={index}>
                    <Link
                      className="text-gray-500 transition hover:text-teal-600 dark:text-white dark:hover:text-teal-400"
                      href={item.path}
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          )}

          <div className="flex items-center gap-4">
            <div className="sm:flex sm:gap-4">
              <Link
                className="rounded-md bg-teal-600 px-5 py-2.5 text-sm font-medium text-white shadow-sm hover:bg-teal-500 transition"
                href="/create"
              >
                Create
              </Link>

              <div className="hidden sm:flex">
                <Link
                  className="rounded-md bg-gray-100 px-5 py-2.5 text-sm font-medium text-teal-600 hover:bg-gray-200 transition"
                  href="/blogs"
                >
                  Explore
                </Link>
              </div>
            </div>

            <button
              onClick={openSidebar}
              className="rounded-sm bg-gray-100 p-2 text-gray-600 transition hover:text-gray-800 dark:bg-gray-800 dark:text-white dark:hover:text-gray-300 cursor-pointer"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
