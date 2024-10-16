"use client";

import { useEffect, useState } from "react";
import BlogPostCard from "./blogpostcard";
import { BlogPost } from "@/app/types/blogpost";

export default function BlogPostsList({ onPostClick }: { onPostClick: (post: BlogPost) => void }) {
  const [posts, setPosts] = useState<BlogPost[]>([]);

  useEffect(() => {
    fetch("https://elegant-beauty-0e281b25e9.strapiapp.com/api/blog-posts?populate=*")
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
