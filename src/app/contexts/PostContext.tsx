import React, { createContext, useContext, useState, ReactNode } from "react";

export type CatCategory = "baby" | "tenders" | "burger + ham" | "jo + beth" | "other";

export interface Post {
  id: string;
  username: string;
  text: string;
  imageUrl?: string;
  category: CatCategory;
  timestamp: Date;
}

interface PostContextType {
  posts: Post[];
  addPost: (post: Omit<Post, "id" | "timestamp">) => void;
}

const PostContext = createContext<PostContextType | undefined>(undefined);

export function PostProvider({ children }: { children: ReactNode }) {
  const [posts, setPosts] = useState<Post[]>([
    {
      id: "1",
      username: "@username",
      text: "i saw tenders the other day isn't she so cute",
      category: "tenders",
      timestamp: new Date(Date.now() - 3600000),
    },
    {
      id: "2",
      username: "@catfan22",
      text: "baby is the sweetest cat ever! saw her napping today",
      category: "baby",
      timestamp: new Date(Date.now() - 7200000),
    },
    {
      id: "3",
      username: "@username",
      text: "i saw burger and ham together! the other day aren't they so cute",
      category: "burger + ham",
      timestamp: new Date(Date.now() - 10800000),
    },
    {
      id: "4",
      username: "@username",
      text: "i saw jo and beth together the other day aren't they so cute",
      category: "jo + beth",
      timestamp: new Date(Date.now() - 14400000),
    },
    {
      id: "5",
      username: "@username",
      text: "i saw this weird cat the other day...who is that?",
      category: "other",
      timestamp: new Date(Date.now() - 18000000),
    },
  ]);

  const addPost = (post: Omit<Post, "id" | "timestamp">) => {
    const newPost: Post = {
      ...post,
      id: Date.now().toString(),
      timestamp: new Date(),
    };
    setPosts([newPost, ...posts]);
  };

  return (
    <PostContext.Provider value={{ posts, addPost }}>
      {children}
    </PostContext.Provider>
  );
}

export function usePosts() {
  const context = useContext(PostContext);
  if (!context) {
    throw new Error("usePosts must be used within a PostProvider");
  }
  return context;
}
