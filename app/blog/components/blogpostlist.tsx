"use client";

import { useEffect, useState } from "react";
import BlogPostCard from "./blogpostcard";
import { Playfair_Display } from 'next/font/google';
import { BlogPost } from "@/app/types/blogpost";

const playfairDisplay = Playfair_Display({ subsets: ['latin'] });



export default function BlogPostsList({ onPostClick }: { onPostClick: (post: BlogPost) => void }) {
  const [posts, setPosts] = useState<BlogPost[]>([]);

  useEffect(() => {
    fetch("http://localhost:1337/api/blog-posts?populate=*")
      .then((response) => response.json())
      .then((data) => setPosts(data.data))
      .catch((error) => console.error("Error fetching blog posts:", error));
  }, []);

  return (
    <div className="container mx-auto px-4 w-2/3 mt-40 pl-10">
      <ul className="flex gap-10 overflow-x-auto">
        {posts.map((post) => (
          <BlogPostCard key={post.id} post={post} onPostClick={onPostClick} />
        ))}
      </ul>
    </div>
  );
}
