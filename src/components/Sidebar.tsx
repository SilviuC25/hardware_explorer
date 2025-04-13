import React from "react";
import Link from "next/link";
import Image from "next/image";

interface SidebarProps {
  closeSidebar: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ closeSidebar }) => {
  return (
    <div className="fixed inset-0 z-50 flex">
      <aside className="w-64 h-full bg-white shadow-xl border-r border-gray-300 z-50">
        <div className="p-4 flex justify-between items-center border-b">
          <Link href="/">
            <Image
              src="/mini-logo.png"
              alt="Logo"
              width={50}
              height={50}
              objectFit="contain"
            />
          </Link>
          <button
            onClick={closeSidebar}
            className="text-gray-600 hover:text-gray-900 transition cursor-pointer"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <ul className="mt-4 space-y-2 px-4">
          <li>
            <Link
              href="/"
              className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-700 hover:bg-teal-500 hover:text-white"
              onClick={closeSidebar}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              href="/about"
              className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-teal-500 hover:text-white"
              onClick={closeSidebar}
            >
              About
            </Link>
          </li>
          <li>
            <Link
              href="/blogs"
              className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-teal-500 hover:text-white"
              onClick={closeSidebar}
            >
              Blogs
            </Link>
          </li>
          <li>
            <Link
              href="/faq"
              className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-teal-500 hover:text-white"
              onClick={closeSidebar}
            >
              FAQ
            </Link>
          </li>
        </ul>
      </aside>

      <div
        className="flex-1 bg-black bg-opacity-25"
        onClick={closeSidebar}
      ></div>
    </div>
  );
};

export default Sidebar;
