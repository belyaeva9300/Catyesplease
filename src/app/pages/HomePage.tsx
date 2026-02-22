import { useState } from "react";
import { usePosts } from "../contexts/PostContext";
import { Post } from "../components/Post";
import { Header } from "../components/Header";
import { NewPostModal } from "../components/NewPostModal";
import imgImage1 from "figma:asset/9d7832c5cd08c74437bfc591b5cd57cb6b06af55.png";
import svgPaths from "../../imports/svg-f89byn8s8h";

const categoryColors: Record<string, string> = {
  "baby": "#2b9eb3",
  "tenders": "#dfb018",
  "burger + ham": "#2bb31a",
  "jo + beth": "#f8333c",
  "other": "#70566d",
};

export default function HomePage() {
  const { posts } = usePosts();
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="bg-[#f9f9f9] relative min-h-screen">
      <Header />
      
      <div className="flex">
        <div className="w-[300px] pt-6 pl-[14px] sticky top-[95px] h-[calc(100vh-95px)]">
          <div className="w-[274px] h-[228px]" data-name="image 1">
            <div className="relative overflow-hidden h-full">
              <img alt="" className="absolute h-[103.23%] left-0 max-w-none top-[-3.15%] w-full" src={imgImage1} />
            </div>
          </div>
        </div>

        <div className="flex-1 flex flex-col items-center py-8 px-4">
          <p className="font-['Gaussian_Blur:Regular','Noto_Sans:Regular',sans-serif] leading-[normal] text-[40px] text-black mb-8" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100, 'wght' 400" }}>
            uf's number 1 cat destination
          </p>
          
          <div className="flex flex-col gap-[30px] w-full max-w-[840px]">
            {posts.map((post) => (
              <Post 
                key={post.id} 
                post={post} 
                backgroundColor={categoryColors[post.category]}
              />
            ))}
          </div>
        </div>
      </div>

      <button 
        onClick={() => setIsModalOpen(true)}
        className="fixed bottom-[36px] left-[40px] size-[91px] hover:scale-110 transition-transform cursor-pointer flex items-center justify-center"
      >
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 91 91">
          <circle cx="45.5" cy="45.5" fill="black" r="45.5" />
        </svg>
        <svg className="relative size-[40px]" fill="none" viewBox="0 0 44.25 44.25">
          <path d={svgPaths.p250f2720} stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" />
        </svg>
      </button>

      <NewPostModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
}
