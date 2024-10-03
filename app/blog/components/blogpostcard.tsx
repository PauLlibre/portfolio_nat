import Image from "next/image";
import { useState } from "react";
import { Playfair_Display } from 'next/font/google';
import { BlogPost } from "@/app/types/blogpost";

const playfairDisplay = Playfair_Display({ subsets: ['latin'] });

export default function BlogPostCard({
    post,
    onPostClick,
  }: {
    post: BlogPost;
    onPostClick: (post: BlogPost) => void;
  }) {    const [isHovered, setIsHovered] = useState(false);

    return (
        <div 
            className="relative bg-white shadow-md rounded-lg mb-4 max-w-80 overflow-hidden cursor-pointer"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            onClick={() => onPostClick(post)}
        >
            <Image 
                src={'http://localhost:1337' + post.CoverImage.url} 
                alt={post.Title} 
                width={600} 
                height={600} 
                objectFit="cover"
                layout="responsive"
                unoptimized
                className="rounded-lg"
            />
            <div className={`absolute inset-0 bg-black flex flex-col justify-between p-4 text-white transition-all duration-500 ease-in-out ${isHovered ? 'opacity-70' : 'opacity-0'}`}>
                <div className="flex justify-between items-start w-full">
                    <h3 className={`text-lg font-semibold ${playfairDisplay.className}`}>{post.Title}</h3>
                    <p className="text-[10px]">{new Date(post.Date).toLocaleDateString('es-ES', { day: '2-digit', month: '2-digit', year: 'numeric' })}</p>
                </div>
                <p className="text-sm">{post.Excerpt}</p>
            </div>
        </div>
    )
}