"use client";

import { useState } from "react";
import { motion } from "framer-motion";

interface AccordionProps {
  title: string;
  content: string;
}

export default function Accordion({ title, content }: AccordionProps) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="w-full mb-4">
      <button
        onClick={toggleAccordion}
        className="flex justify-between items-center w-full p-4 bg-black text-white rounded-lg"
      >
        <span className="text-lg font-medium">{title}</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className={`h-6 w-6 transform transition-transform duration-200 ${
            isOpen ? "rotate-180" : ""
          }`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      <motion.div
        initial={false}
        animate={{ height: isOpen ? "auto" : 0, opacity: isOpen ? 1 : 0 }}
        transition={{ duration: 0.3 }}
        className="overflow-hidden"
      >
        <div
          className="p-4 bg-white text-gray-500 font-mono tracking-wider text-sm sm:text-base"
          dangerouslySetInnerHTML={{ __html: content }}
        ></div>
      </motion.div>
    </div>
  );
}
