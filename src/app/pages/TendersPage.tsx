import { useState } from "react";
import { usePosts } from "../contexts/PostContext";
import { Post } from "../components/Post";
import { Header } from "../components/Header";
import { NewPostModal } from "../components/NewPostModal";
import imgImage3 from "figma:asset/28eb05ac180088e6593a479c5260e41a09421a7e.png";
import svgPaths from "../../imports/svg-yfx78rqbhf";

export default function TendersPage() {
  const { posts } = usePosts();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const tendersPosts = posts.filter(post => post.category === "tenders");

  return (
    <div className="bg-[#dfb018] relative min-h-screen">
      <Header />
      
      <div className="flex">
        <div className="w-[324px] pt-6 pl-0 sticky top-[95px] h-[calc(100vh-95px)]">
          <div className="h-[366px] w-[324px]" data-name="image 3">
            <img alt="" className="max-w-none object-cover size-full" src={imgImage3} />
          </div>
        </div>

        <div className="flex-1 flex flex-col items-center py-8 px-4">
          <div className="flex flex-col gap-[30px] w-full max-w-[840px]">
            {tendersPosts.length === 0 ? (
              <p className="font-['Gaussian_Blur:Regular',sans-serif] text-[24px] text-white text-center">
                No posts about tenders yet!
              </p>
            ) : (
              tendersPosts.map((post) => (
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
