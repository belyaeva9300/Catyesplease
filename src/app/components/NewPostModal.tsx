import { useState } from "react";
import { usePosts, CatCategory } from "../contexts/PostContext";

interface NewPostModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function NewPostModal({ isOpen, onClose }: NewPostModalProps) {
  const { addPost } = usePosts();
  const [username, setUsername] = useState("@username");
  const [text, setText] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [category, setCategory] = useState<CatCategory>("baby");

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!text.trim()) return;

    addPost({
      username,
      text,
      imageUrl: imageUrl || undefined,
      category,
    });

    setUsername("@username");
    setText("");
    setImageUrl("");
    setCategory("baby");
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50" onClick={onClose}>
      <div 
        className="bg-white rounded-[10px] p-8 w-full max-w-[600px] mx-4"
        onClick={(e) => e.stopPropagation()}
      >
        <h2 className="font-['Gaussian_Blur:Regular',sans-serif] text-[32px] mb-6">Create New Post</h2>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <div>
            <label className="font-['Gaussian_Blur:Regular',sans-serif] text-[20px] block mb-2">
              Username
            </label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-[5px] font-['Gaussian_Blur:Regular',sans-serif] text-[18px]"
              placeholder="@username"
            />
          </div>

          <div>
            <label className="font-['Gaussian_Blur:Regular',sans-serif] text-[20px] block mb-2">
              Cat Category
            </label>
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value as CatCategory)}
              className="w-full p-3 border border-gray-300 rounded-[5px] font-['Gaussian_Blur:Regular',sans-serif] text-[18px]"
            >
              <option value="baby">baby</option>
              <option value="tenders">tenders</option>
              <option value="burger + ham">burger + ham</option>
              <option value="jo + beth">jo + beth</option>
              <option value="other">other</option>
            </select>
          </div>

          <div>
            <label className="font-['Gaussian_Blur:Regular',sans-serif] text-[20px] block mb-2">
              Post Text
            </label>
            <textarea
              value={text}
              onChange={(e) => setText(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-[5px] font-['Gaussian_Blur:Regular',sans-serif] text-[18px] min-h-[120px]"
              placeholder="What's happening with the cats?"
              required
            />
          </div>

          <div>
            <label className="font-['Gaussian_Blur:Regular',sans-serif] text-[20px] block mb-2">
              Image URL (optional)
            </label>
            <input
              type="url"
              value={imageUrl}
              onChange={(e) => setImageUrl(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-[5px] font-['Gaussian_Blur:Regular',sans-serif] text-[18px]"
              placeholder="https://..."
            />
          </div>

          <div className="flex gap-4 mt-4">
            <button
              type="submit"
              className="flex-1 bg-black text-white py-3 rounded-[5px] font-['Gaussian_Blur:Regular',sans-serif] text-[20px] hover:bg-gray-800 transition-colors"
            >
              Post
            </button>
            <button
              type="button"
              onClick={onClose}
              className="flex-1 bg-gray-300 text-black py-3 rounded-[5px] font-['Gaussian_Blur:Regular',sans-serif] text-[20px] hover:bg-gray-400 transition-colors"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
