"use client";

import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

// O funcție pentru a genera un ID unic pentru fiecare imagine
const generateUniqueId = () => '_' + Math.random().toString(36).substr(2, 9);

export default function CreateBlog() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [images, setImages] = useState<File[]>([]);
  const [imageTitles, setImageTitles] = useState<{ id: string; title: string }[]>([]);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const files = Array.from(e.target.files);
      setImages((prevImages) => [...prevImages, ...files]);

      setImageTitles((prevTitles) => [
        ...prevTitles,
        ...files.map((_, index) => ({
          id: generateUniqueId(), // Generează un ID unic pentru fiecare imagine
          title: `Image Title ${prevTitles.length + index + 1}`,
        })),
      ]);
    }
  };

  const handleRemoveImage = (id: string) => {
    // Filtrează imaginea și titlul după ID
    const updatedImages = images.filter((_, i) => imageTitles[i].id !== id);
    const updatedTitles = imageTitles.filter((image) => image.id !== id);

    setImages(updatedImages);
    setImageTitles(updatedTitles);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const blogData = {
      title,
      content,
      images: images.map((file, index) => ({
        url: URL.createObjectURL(file),
        title: imageTitles[index].title,
      })),
    };

    const response = await fetch("/api/create-blog", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(blogData),
    });

    if (response.ok) {
      alert("Blog created successfully!");
    } else {
      alert("Error creating blog");
    }
  };

  return (
    <div className="bg-gray-900 min-h-screen flex flex-col text-white">
      <Header />

      <main className="flex-grow flex items-center justify-center">
        <div className="max-w-3xl w-full mx-auto mt-10 p-6 bg-gray-800 rounded-lg shadow-lg">
          <h1 className="text-3xl font-bold text-white text-center mb-6">
            Create a New Blog
          </h1>

          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              placeholder="Title"
              className="w-full p-2 rounded bg-gray-900 text-white border border-transparent focus:border-teal-600 focus:outline-none transition"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
            />

            <textarea
              placeholder="Write your blog content here..."
              className="w-full p-2 h-40 rounded bg-gray-900 text-white border border-transparent focus:border-teal-600 focus:outline-none transition"
              value={content}
              onChange={(e) => setContent(e.target.value)}
              required
            />

            <div className="flex items-center gap-4">
              <label className="px-4 py-2 bg-teal-600 text-white rounded-lg cursor-pointer hover:bg-teal-500 transition">
                Choose Files
                <input
                  type="file"
                  multiple
                  onChange={handleImageChange}
                  className="hidden"
                />
              </label>
              <span className="text-sm text-gray-400">
                {images.length > 0 ? `${images.length} files selected` : "No files chosen"}
              </span>
            </div>

            {images.map((img, index) => (
              <div key={imageTitles[index].id} className="mt-2 flex items-center justify-between">
                <input
                  type="text"
                  placeholder={`Image Title ${index + 1}`}
                  className="w-full p-2 rounded bg-gray-900 text-white border border-transparent focus:border-teal-600 focus:outline-none transition"
                  onChange={(e) => {
                    const updatedTitles = imageTitles.map((title) =>
                      title.id === imageTitles[index].id ? { ...title, title: e.target.value } : title
                    );
                    setImageTitles(updatedTitles);
                  }}
                />
                <button
                  type="button"
                  onClick={() => handleRemoveImage(imageTitles[index].id)} // Folosim ID-ul pentru a șterge imaginea corect
                  className="ml-2 w-8 h-8 bg-gray-600 text-white rounded-full flex justify-center items-center hover:bg-gray-500 hover:cursor-pointer transition"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="w-4 h-4"
                  >
                    <line x1="18" y1="6" x2="6" y2="18" />
                    <line x1="6" y1="6" x2="18" y2="18" />
                  </svg>
                </button>
              </div>
            ))}

            <button
              type="submit"
              className="px-4 py-2 bg-teal-600 text-white rounded w-full hover:bg-teal-500 hover:cursor-pointer transition"
            >
              Create Blog
            </button>
          </form>
        </div>
      </main>

      <Footer />
    </div>
  );
}
