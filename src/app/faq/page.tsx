import Header from "@/components/Header";
import Footer from "@/components/Footer";
import QuestionItem from "@/components/QuestionItem";

export default function Faq() {
  return (
    <div className="bg-gray-900 text-white">
      <Header />

      <div className="px-4 sm:px-6 lg:px-8 my-16">
        <h1 className="text-center bg-white bg-clip-text text-3xl font-extrabold text-transparent sm:text-5xl">
          Frequently Asked Questions
        </h1>
      </div>

      <div className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto my-12 space-y-8"> 
        <QuestionItem 
          question="What is Hardware Explorer?" 
          answer="Hardware Explorer is a platform dedicated to exploring and discussing computer hardware, components, and technological advancements. We publish blogs, articles, and guides about the latest trends in the hardware industry." 
        />
        
        <QuestionItem 
          question="Who runs Hardware Explorer?" 
          answer="Hardware Explorer is a personal project created by an enthusiast passionate about computer hardware and technology. The goal is to share knowledge and insights with like-minded individuals." 
        />

        <QuestionItem 
          question="What topics do you cover?" 
          answer={`The evolution of computer processors, GPUs, and storage devices
          Comparisons between different hardware components
          Reviews of the latest technological innovations
          Guides on building and optimizing PC setups`} 
        />
        
        <QuestionItem 
          question="How often do you post new content?" 
          answer="We strive to post new articles regularly, depending on the latest trends and developments in the industry. Check back frequently for updates!" 
        />

        <QuestionItem 
          question="Can I contribute to Hardware Explorer?" 
          answer="At the moment, this is a personal project, but guest contributions may be considered in the future. Feel free to reach out if you have valuable insights to share!" 
        />

        <QuestionItem 
          question="Do you offer hardware recommendations?" 
          answer="Yes! Many of our articles include recommendations for different use cases, whether for gaming, productivity, or budget-friendly PC builds."
        />
      </div>
			
			<Footer />
    </div>
  );
}
