import React, { useRef, useEffect } from 'react';
import { BlogPost } from '@/app/types/blogpost';
import { ArrowLeft } from 'react-feather';
import Image from 'next/image';

export default function BlogPostPage({
  post,
  onBack,
}: {
  post: BlogPost;
  onBack: () => void;
}) {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;
    if (scrollContainer) {
      let scrollTimer: NodeJS.Timeout;
      const handleScroll = () => {
        scrollContainer.classList.add('scrolling');
        clearTimeout(scrollTimer);
        scrollTimer = setTimeout(() => {
          scrollContainer.classList.remove('scrolling');
        }, 1000);
      };

      scrollContainer.addEventListener('scroll', handleScroll);
      return () => {
        scrollContainer.removeEventListener('scroll', handleScroll);
      };
    }
  }, []);

  // Recursive function to render content blocks
  const renderContent = (contentBlocks: any[]) => {
    return contentBlocks.map((block, index) => {
      const { type, children } = block;

      // Render different block types
      switch (type) {
        case 'paragraph':
          return (
            <p key={index} className="my-4">
              {children && renderChildren(children)}
            </p>
          );
        case 'heading-one':
          return (
            <h1 className='mt-10 mb-6' key={index}>
              {children && renderChildren(children)}
            </h1>
          );
        case 'heading-two':
          return (
            <h2 className='mt-8 mb-5' key={index}>
              {children && renderChildren(children)}
            </h2>
          );
        case 'heading-three':
          return (
            <h3 className='mt-6 mb-4' key={index}>
              {children && renderChildren(children)}
            </h3>
          );
        case 'bulleted-list':
          return (
            <ul key={index}>
              {children && renderChildren(children)}
            </ul>
          );
        case 'numbered-list':
          return (
            <ol key={index}>
              {children && renderChildren(children)}
            </ol>
          );
        case 'list-item':
          return (
            <li key={index}>
              {children && renderChildren(children)}
            </li>
          );
        case 'quote':
          return (
            <blockquote key={index}>
              {children && renderChildren(children)}
            </blockquote>
          );
        case 'image':
          return (
            <Image
              key={index}
              src={block.url}
              alt={block.alt || ''}
              width={block.width}
              height={block.height}
            />
          );
        default:
          return null;
      }
    });
  };

  // Function to render children with formatting
  const renderChildren = (children: any[]) => {
    return children.map((child, index) => {
      if (child.type === 'text') {
        let textElement = <>{child.text}</>;

        // Apply text formatting
        if (child.bold) {
          textElement = <strong className='font-bold my-2 inline-block' key={index}>{textElement}</strong>;
        }
        if (child.italic) {
          textElement = <em key={index}>{textElement}</em>;
        }
        if (child.underline) {
          textElement = <u key={index}>{textElement}</u>;
        }
        if (child.code) {
          textElement = <code key={index}>{textElement}</code>;
        }

        return textElement;
      } else if (child.type === 'link') {
        return (
          <a key={index} href={child.url}>
            {child.children && renderChildren(child.children)}
          </a>
        );
      } else {
        // Recursively render nested children
        return renderContent([child]);
      }
    });
  };

  return (
    <div className="container mx-auto px-4 w-2/3 mt-20 pl-10 relative pr-20" style={{ maxHeight: 'calc(100vh - 100px)' }}>
      <div className="sticky top-0 bg-white z-10 py-4">
        <button
          onClick={onBack}
          className="flex items-center mb-4 text-gray-600 hover:text-gray-800 transition-colors duration-200"
        >
          <ArrowLeft size={20} className="mr-2" />
          <span>Back to Posts</span>
        </button>
      </div>
      <div 
        ref={scrollContainerRef}
        className="overflow-y-auto custom-scrollbar" 
        style={{ 
          maxHeight: 'calc(100vh - 300px)',
          scrollbarWidth: 'thin',
          scrollbarColor: 'rgba(155, 155, 155, 0.5) transparent'
        }}
      >
        <h1 className="text-3xl font-bold mb-6">{post.Title}</h1>
        <div className="mb-4">
          <p className="text-gray-600">
            {new Date(post.Date).toLocaleDateString('es-ES', {
              day: '2-digit',
              month: '2-digit',
              year: 'numeric',
            })}
          </p>
        </div>
        <div className="mb-6">
          <div className="relative w-full h-64 overflow-hidden rounded-lg">
            <Image
              src={'http://localhost:1337' + post.CoverImage.url}
              alt={post.Title}
              className="absolute w-full h-full object-cover object-center"
     
            />
          </div>
        </div>
        <div className="prose max-w-none">
          {renderContent(post.Content)}
        </div>
      </div>
      <style jsx global>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 8px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: transparent;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background-color: rgba(155, 155, 155, 0.5);
          border-radius: 20px;
          border: transparent;
        }
        .custom-scrollbar:not(.scrolling)::-webkit-scrollbar-thumb {
          background-color: transparent;
        }
      `}</style>
    </div>
  );
}
