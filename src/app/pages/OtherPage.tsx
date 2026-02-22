import { useState } from "react";
import { usePosts } from "../contexts/PostContext";
import { Post } from "../components/Post";
import { Header } from "../components/Header";
import { NewPostModal } from "../components/NewPostModal";
import imgImage7 from "figma:asset/ee6d29635d53f551706c8d45a0896fa208382018.png";
import svgPaths from "../../imports/svg-g3v9bzvgq9";

export default function OtherPage() {
  const { posts } = usePosts();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const otherPosts = posts.filter(post => post.category === "other");

  return (
    <div className="bg-[#70566d] relative min-h-screen">
      <Header />
      
      <div className="flex">
        <div className="w-[296px] pt-6 pl-0 sticky top-[95px] h-[calc(100vh-95px)]">
          <div className="flex h-[339px] items-center justify-center w-[296px]">
            <div className="-scale-y-100 flex-none rotate-180">
              <div className="h-[339px] relative w-[296px]" data-name="image 7">
                <img alt="" className="max-w-none object-cover size-full" src={imgImage7} />
              </div>
            </div>
          </div>
        </div>

        <div className="flex-1 flex flex-col items-center py-8 px-4">
          <div className="flex flex-col gap-[30px] w-full max-w-[840px]">
            {otherPosts.length === 0 ? (
              <p className="font-['Gaussian_Blur:Regular',sans-serif] text-[24px] text-white text-center">
                No posts about other cats yet!
              </p>
            ) : (
              otherPosts.map((post) => (
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
