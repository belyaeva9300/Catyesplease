import { Post as PostType } from "../contexts/PostContext";

interface PostProps {
  post: PostType;
  backgroundColor?: string;
}

const categoryColors: Record<string, string> = {
  "baby": "#2b9eb3",
  "tenders": "#dfb018",
  "burger + ham": "#2bb31a",
  "jo + beth": "#f8333c",
  "other": "#70566d",
};

export function Post({ post, backgroundColor }: PostProps) {
  const bgColor = backgroundColor || "#e0e0e0";
  
  return (
    <div 
      className="flex flex-col gap-[30px] items-start pb-[30px] pt-[20px] px-[20px] rounded-[5px] w-full max-w-[840px]" 
      style={{ backgroundColor: bgColor }}
    >
      <div className="flex items-center justify-between w-full">
        <p className="font-['Gaussian_Blur:Regular',sans-serif] leading-[normal] not-italic text-[40px] text-black">
          {post.username}
        </p>
        {backgroundColor && (
          <span 
            className="font-['Gaussian_Blur:Regular',sans-serif] text-[20px] px-3 py-1 rounded"
            style={{ 
              backgroundColor: categoryColors[post.category],
              color: "white"
            }}
          >
            {post.category}
          </span>
        )}
      </div>
      <p className="font-['Gaussian_Blur:Regular','Noto_Sans:Regular',sans-serif] leading-[normal] text-[20px] text-black" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100, 'wght' 400" }}>
        {post.text}
      </p>
      {post.imageUrl && (
        <img 
          src={post.imageUrl} 
          alt="Post content" 
          className="rounded-[5px] max-w-[549px] max-h-[270px] object-cover"
        />
      )}
    </div>
  );
}
