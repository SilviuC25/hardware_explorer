"use client";

import { useEffect, useState } from "react";
import BlogCard from "@/components/BlogCard";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

interface Blog {
  id: string;
  title: string;
  content: string;
  images: { url: string; title: string }[];
}

export default function BlogsPage() {
  const [blogs, setBlogs] = useState<Blog[]>([]);

  useEffect(() => {
    const fetchBlogs = async () => {
      const res = await fetch("/api/get-blogs");
      const data = await res.json();
      setBlogs(data);
    };

    fetchBlogs();
  }, []);

  return (
    <div className="bg-gray-900 min-h-screen flex flex-col">
      <Header />

      <main className="flex-1 p-6 max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold mb-8 text-white text-center">
          Explore Blogs
        </h1>

        <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {blogs.map((blog) => (
            <BlogCard
              key={blog.id}
              id={blog.id}
              title={blog.title}
              content={blog.content}
              image={blog.images[0]}
            />
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
}
