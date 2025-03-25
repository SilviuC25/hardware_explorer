import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Divider from "@/components/Divider";
import Image from "next/image";

export default function About() {
  return (
    <div className="bg-gray-900 text-white">
      <Header />

      <h1 className="text-center bg-white bg-clip-text text-3xl font-extrabold text-transparent sm:text-5xl mt-16">
        About Hardware Explorer
      </h1>

      <section>
        <div className="mx-auto w-screen max-w-screen-xl px-4 py-16 sm:px-6 sm:py-24 md:grid md:grid-cols-2 md:items-center md:gap-4 lg:px-8 lg:py-32">
          <div className="max-w-prose text-left">
            <h1 className="text-4xl font-bold sm:text-5xl">
              What <strong className="bg-gradient-to-r from-teal-600 via-blue-500 to-purple-800 bg-clip-text text-transparent">We</strong> Do
            </h1>
            <p className="mt-4 text-base text-pretty sm:text-lg/relaxed text-gray-300">
              At Hardware Explorer, I post blogs and articles focused on the evolution of computer components and technology.
            </p>
          </div>

          <div className="mx-auto hidden max-w-md md:block">
          <Image
            src="/about-banner-image-1.jpg"
            alt="Hardware Image"
            width={500}
            height={350}
            className="rounded-lg shadow-lg border-2 border-transparent hover:border-teal-600 transition-all duration-800"
          />
          </div>
        </div>
      </section>

			<Divider 
        text="Hardware. Innovation. Future."
      />

      <section className="lg:grid lg:h-screen lg:place-content-center">
        <div className="mx-auto w-screen max-w-screen-xl px-4 py-16 sm:px-6 sm:py-24 md:grid md:grid-cols-2 md:items-center md:gap-4 lg:px-8 lg:py-32">
          <div className="mx-auto hidden max-w-md md:block">
            <Image
              src="/about-banner-image-2.jpg"
              alt="Team Collaboration"
              width={500}
              height={350}
              className="rounded-lg shadow-lg border-2 border-transparent hover:border-teal-600 transition-all duration-800"
            />
          </div>

          <div className="max-w-prose text-left md:text-right">
            <h1 className="text-4xl font-bold sm:text-5xl">
              Understanding <strong className="bg-gradient-to-r from-teal-600 via-blue-500 to-purple-800 bg-clip-text text-transparent">Computer Components</strong>
            </h1>
            <p className="mt-4 text-base text-pretty sm:text-lg/relaxed text-gray-300">
              This is a personal project dedicated to exploring the world of hardware. I aim to bring attention to the development of computer components and technology through informative and engaging content.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
