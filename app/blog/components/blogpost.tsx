import React, { useRef, useEffect, ReactNode } from 'react';
import { BlogPost } from '@/app/types/blogpost';
import { ArrowLeft } from 'react-feather';
import Image from 'next/image';

interface TextBlock {
  type: 'text';
  text: string;
  bold?: boolean;
  italic?: boolean;
  underline?: boolean;
  code?: boolean;
}

interface LinkBlock {
  type: 'link';
  url: string;
  children: Block[];
}

interface ParagraphBlock {
  type: 'paragraph';
  children: Block[];
}

interface HeadingBlock {
  type: 'heading-one' | 'heading-two' | 'heading-three';
  children: Block[];
}

interface ListItemBlock {
  type: 'list-item';
  children: Block[];
}

interface ListBlock {
  type: 'bulleted-list' | 'numbered-list';
  children: Block[];
}

interface QuoteBlock {
  type: 'quote';
  children: Block[];
}

interface ImageBlock {
  type: 'image';
  url: string;
}



type Block =
  | TextBlock
  | LinkBlock
  | ParagraphBlock
  | HeadingBlock
  | ListItemBlock
  | ListBlock
  | QuoteBlock
  | ImageBlock;

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

  // Render content blocks
  const renderContent = (blocks: Block[]): ReactNode => {
    return blocks.map((block, index) => {
      const { type } = block;
      const children = 'children' in block ? block.children : undefined;

      switch (type) {
        case 'paragraph':
          return (
            <p key={index} className="my-4">
              {children && renderChildren(children)}
            </p>
          );
        case 'heading-one':
          return (
            <h1 className="mt-10 mb-6" key={index}>
              {children && renderChildren(children)}
            </h1>
          );
        case 'heading-two':
          return (
            <h2 className="mt-8 mb-5" key={index}>
              {children && renderChildren(children)}
            </h2>
          );
        case 'heading-three':
          return (
            <h3 className="mt-6 mb-4" key={index}>
              {children && renderChildren(children)}
            </h3>
          );
        case 'bulleted-list':
        case 'numbered-list':
          const ListTag = type === 'bulleted-list' ? 'ul' : 'ol';
          return (
            <ListTag key={index}>
              {children && renderChildren(children)}
            </ListTag>
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
          const imageBlock = block as ImageBlock;
          return (
            <Image
              key={index}
              src={imageBlock.url}
              alt=""
            />
          );
        default:
          return null;
      }
    });
  };

  // Render children with formatting
  const renderChildren = (children: Block[]): ReactNode => {
    return children.map((child, index) => {
      switch (child.type) {
        case 'text':
          return renderText(child as TextBlock, index);
        case 'link':
          const linkBlock = child as LinkBlock;
          return (
            <a key={index} href={linkBlock.url}>
              {linkBlock.children && renderChildren(linkBlock.children)}
            </a>
          );
        default:
          // Recursively render other block types
          return renderContent([child]);
      }
    });
  };

  // Helper function to render text with formatting
  const renderText = (textBlock: TextBlock, key: number): ReactNode => {
    let textElement = <>{textBlock.text}</>;

    if (textBlock.bold) {
      textElement = (
        <strong key={key} className="font-bold my-2 inline-block">
          {textElement}
        </strong>
      );
    }
    if (textBlock.italic) {
      textElement = (
        <em key={key}>
          {textElement}
        </em>
      );
    }
    if (textBlock.underline) {
      textElement = (
        <u key={key}>
          {textElement}
        </u>
      );
    }
    if (textBlock.code) {
      textElement = (
        <code key={key}>
          {textElement}
        </code>
      );
    }

    return textElement;
  };

  return (
    <div
      className="container mx-auto px-4 w-2/3 mt-20 pl-10 relative pr-20"
      style={{ maxHeight: 'calc(100vh - 100px)' }}
    >
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
          scrollbarColor: 'rgba(155, 155, 155, 0.5) transparent',
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
              src={post.CoverImage.url}
              alt={post.Title}
              width={1000}
              height={1000}
              className="absolute w-full h-full object-cover object-center"
            />
          </div>
        </div>
        <div className="prose max-w-none">
          {renderContent(post.Content as Block[])}
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
