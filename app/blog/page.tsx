"use client"

import RootLayout from "../components/layout/layout";
import Resume from "../components/sections/landingPage/resume";
import BlogPostPage from "./components/blogpost";
import BlogPostsList from "./components/blogpostlist";
import { BlogPost } from "@/app/types/blogpost";
import { useState } from 'react';

export default function BlogPage() {
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);

  const handlePostClick = (post: BlogPost) => {
    setSelectedPost(post);
  };

  const handleBack = () => {
    setSelectedPost(null);
  };

  return (
    <RootLayout>
      <div className="flex max-h-screen">
        <Resume />
        {!selectedPost && <BlogPostsList onPostClick={handlePostClick} />}
        {selectedPost && (
          <BlogPostPage post={selectedPost} onBack={handleBack} />
        )}
      </div>
    </RootLayout>
  );
}