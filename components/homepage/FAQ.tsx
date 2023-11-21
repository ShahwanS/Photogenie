"use client";

import { Link } from "lucide-react";
import React, { useState } from "react";
import {
  IoIosAddCircleOutline,
  IoIosRemoveCircleOutline,
} from "react-icons/io";

type FaqItemProps = {
  faq: { question: string; answer: string };
  isOpen: boolean;
  onToggle: () => void;
};

const FaqItem: React.FC<FaqItemProps> = ({ faq, isOpen, onToggle }) => {
  const contentClass = isOpen
    ? "max-h-96 transition-max-height duration-700 ease-in-out overflow-hidden"
    : "max-h-0 transition-max-height duration-700 ease-in-out overflow-hidden";

  return (
    <div className="border-b border-gray-700">
      <button
        className="flex items-center justify-between w-full p-5 text-left text-lg text-white hover:bg-[#252525]"
        onClick={onToggle}
      >
        <span className="flex-1">{faq.question}</span>
        {isOpen ? (
          <IoIosRemoveCircleOutline size={35} className="flex-shrink-0" />
        ) : (
          <IoIosAddCircleOutline size={35} className="flex-shrink-0" />
        )}
      </button>
      <div className={contentClass}>
        <div className="p-5 text-white bg-[#303030] text-base">
          {faq.answer}
        </div>
      </div>
    </div>
  );
};

const faqs = [
  {
    question: "Where are the best photo spots in Marburg?",
    answer:
      "Marburg offers picturesque locations like Marburg Castle, the Old Town, and the banks of the Lahn River.",
  },
  {
    question: "Are there photography workshops in Marburg?",
    answer: "Yes, especially in summer and autumn, various workshops are held.",
  },
  {
    question: "Is drone photography allowed in Marburg?",
    answer:
      "Drone photography is permitted in some areas, but local regulations and no-fly zones should be observed.",
  },
  {
    question: "Can you do night photography in Marburg?",
    answer:
      "Yes, the lively nightlife and well-lit historic buildings provide excellent opportunities for night shots.",
  },
  {
    question: "Are there photography clubs in Marburg that I can join?",
    answer:
      "There are several photography clubs and communities in Marburg that offer networking and learning opportunities.",
  },
  {
    question: "Which season is best for photography in Marburg?",
    answer:
      "Autumn is particularly beautiful for photography when the leaves change their colors.",
  },
];

const Faq = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="flex flex-col justify-center items-center w-full h-full bg-[#1E1E1E]">
      <div className=" p-6 rounded-lg w-full ">
        <h1 className="text-3xl text-[#9E9E9E] mb-6 self-center">
          Frequently Asked Questions
        </h1>

        {faqs.map((faq, index) => (
          <FaqItem
            key={index}
            faq={faq}
            isOpen={index === openIndex}
            onToggle={() => handleToggle(index)}
          />
        ))}
      </div>

      <h1 className="sm:text-5xl text-[#9E9E9E] mb-6 self-center m-5">
        Still Have questions?
      </h1>
      <p className="text-2xl ">Feel free to reach out to us</p>
      <a
        className="border-2 rounded-xl p-4 m-5 hover:opacity-70"
        href="/Contact"
      >
        Contact
      </a>
    </div>
  );
};

export default Faq;
