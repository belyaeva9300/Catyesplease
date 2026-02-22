import { useState } from "react";
import { usePosts } from "../contexts/PostContext";
import { Post } from "../components/Post";
import { Header } from "../components/Header";
import { NewPostModal } from "../components/NewPostModal";
import imgImage4 from "figma:asset/834e4661777336c2591da2129c762b69418b08d7.png";
import imgImage5 from "figma:asset/faf0795732406871c02864788d1fca16f96c2044.png";
import svgPaths from "../../imports/svg-fhc12zw4jh";

export default function BurgerhamPage() {
  const { posts } = usePosts();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const burgerhamPosts = posts.filter(post => post.category === "burger + ham");

  return (
    <div className="bg-[#2bb31a] relative min-h-screen">
      <Header />
      
      <div className="flex">
        <div className="w-[332px] pt-6 pl-[18px] sticky top-[95px] h-[calc(100vh-95px)] relative">
          <div className="absolute h-[348px] left-[157px] top-[41px] w-[175px]" data-name="image 4">
            <div className="overflow-hidden size-full">
              <img alt="" className="h-[143.08%] relative left-[-76.72%] max-w-none top-[-13.46%] w-[212.98%]" src={imgImage4} />
            </div>
          </div>
          <div className="absolute h-[281px] left-[18px] top-[126px] w-[173px]" data-name="image 5">
            <div className="overflow-hidden size-full">
              <img alt="" className="h-[229.63%] relative left-[-76.5%] max-w-none top-[-66.67%] w-[279%]" src={imgImage5} />
            </div>
          </div>
        </div>

        <div className="flex-1 flex flex-col items-center py-8 px-4">
          <div className="flex flex-col gap-[30px] w-full max-w-[840px]">
            {burgerhamPosts.length === 0 ? (
              <p className="font-['Gaussian_Blur:Regular',sans-serif] text-[24px] text-white text-center">
                No posts about burger + ham yet!
              </p>
            ) : (
              burgerhamPosts.map((post) => (
                <Post key={post.id} post={post} />
              ))
            )}
          </div>
        </div>
      </div>

      <button 
        onClick={() => setIsModalOpen(true)}
        className="fixed bottom-[42px] left-[40px] size-[91px] hover:scale-110 transition-transform cursor-pointer flex items-center justify-center"
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
