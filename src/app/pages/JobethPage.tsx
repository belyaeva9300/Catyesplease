import { useState } from "react";
import { usePosts } from "../contexts/PostContext";
import { Post } from "../components/Post";
import { Header } from "../components/Header";
import { NewPostModal } from "../components/NewPostModal";
import imgImage6 from "figma:asset/0d442e6781cdc3c120ff5cc47b9a79a8698be109.png";
import imgImage8 from "figma:asset/9a69730820a569847b5546661e4e9178b396018f.png";
import svgPaths from "../../imports/svg-7y5vmv90wd";

export default function JobethPage() {
  const { posts } = usePosts();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const jobethPosts = posts.filter(post => post.category === "jo + beth");

  return (
    <div className="bg-[#f8333c] relative min-h-screen">
      <Header />
      
      <div className="flex">
        <div className="w-[356px] pt-6 pl-0 sticky top-[95px] h-[calc(100vh-95px)] relative">
          <div className="absolute h-[223px] left-[143px] top-[84px] w-[213px]" data-name="image 6">
            <div className="overflow-hidden size-full">
              <img alt="" className="h-[127.24%] relative left-0 max-w-none top-[-27.05%] w-full" src={imgImage6} />
            </div>
          </div>
          <div className="absolute h-[252px] left-0 top-[36px] w-[189px]" data-name="image 8">
            <img alt="" className="max-w-none object-cover size-full" src={imgImage8} />
          </div>
        </div>

        <div className="flex-1 flex flex-col items-center py-8 px-4">
          <div className="flex flex-col gap-[30px] w-full max-w-[840px]">
            {jobethPosts.length === 0 ? (
              <p className="font-['Gaussian_Blur:Regular',sans-serif] text-[24px] text-white text-center">
                No posts about jo + beth yet!
              </p>
            ) : (
              jobethPosts.map((post) => (
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
