"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Divider from "@/components/Divider";
import Image from "next/image";
import { motion } from "framer-motion";

interface Blog {
  id: number;
  title: string;
  content: string;
  images: { url: string; title: string }[];
}

export default function BlogDetailPage() {
  const { id } = useParams();
  const [blog, setBlog] = useState<Blog | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!id) return;

    const fetchBlog = async () => {
      try {
        const res = await fetch(`/api/get-blog?id=${id}`);
        const data = await res.json();
        if (res.ok) {
          setBlog(data);
        } else {
          console.error(data.error);
          setBlog(null);
        }
      } catch (error) {
        console.error("Error fetching blog:", error);
        setBlog(null);
      } finally {
        setLoading(false);
      }
    };

    fetchBlog();
  }, [id]);

  if (loading) {
    return <div className="text-white p-8">Loading...</div>;
  }

  if (!blog) {
    return (
      <div className="bg-gray-900 min-h-screen text-white p-8">
        <Header />
        <div className="text-center mt-20 text-2xl">Blog not found.</div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="bg-gray-900 min-h-screen flex flex-col">
      <Header />

      <main className="flex-1 p-6 max-w-6xl mx-auto text-white">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl font-bold text-left mb-8">{blog.title}</h1>

          <p className="mt-6 mb-12 text-gray-300 text-lg leading-relaxed text-left whitespace-pre-line break-words">
            {blog.content}
          </p>

          {blog.images && blog.images.length > 0 ? (
            <section className="space-y-12">
              {blog.images.map((img) => (
                <div key={img.url} className="text-center">
                  <Divider text={img.title || "Untitled Image"} />
                  <div className="mt-4 flex justify-center">
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.3 }}
                      className="rounded-xl overflow-hidden shadow-lg"
                    >
                      <Image
                        src={img.url}
                        alt={img.title || "Image"}
                        width={1000}
                        height={700}
                        className="mx-auto"
                      />
                    </motion.div>
                  </div>
                </div>
              ))}
            </section>
          ) : (
            <div className="text-center text-gray-400">No images available.</div>
          )}
        </motion.div>
      </main>

      <Footer />
    </div>
  );
}
