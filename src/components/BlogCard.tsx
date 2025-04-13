"use client";

import Link from "next/link";
import { motion } from "framer-motion";

interface BlogCardProps {
  id: string;
  title: string;
  content: string;
  image?: { url: string; title: string };
}

const truncate = (text: string, maxLength = 160) =>
  text.length > maxLength ? text.slice(0, maxLength) + "..." : text;

export default function BlogCard({ id, title, content, image }: BlogCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="overflow-hidden rounded-2xl border border-gray-800 bg-gray-900 shadow-md hover:shadow-teal-700/40 transition-shadow"
    >
      {image && (
        <img
          alt={image.title}
          src={image.url}
          className="h-56 w-full object-cover"
        />
      )}

      <div className="p-4 sm:p-6">
        <Link href={`/blogs/${id}`}>
          <h3 className="text-lg font-semibold text-white hover:text-teal-400 transition-colors">
            {title}
          </h3>
        </Link>

        <p className="mt-2 text-sm text-gray-400 line-clamp-3">
          {truncate(content)}
        </p>

        <Link
          href={`/blogs/${id}`}
          className="group mt-4 inline-flex items-center gap-1 text-sm font-medium text-teal-400"
        >
          Read more
          <span
            aria-hidden="true"
            className="block transition-all group-hover:translate-x-1"
          >
            →
          </span>
        </Link>
      </div>
    </motion.article>
  );
}
