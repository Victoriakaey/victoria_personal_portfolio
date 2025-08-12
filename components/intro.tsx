"use client";

import Image from "next/image";
import React, { useContext } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { BsArrowRight, BsLinkedin } from "react-icons/bs";
import { HiDownload } from "react-icons/hi";
import { FaGithubSquare } from "react-icons/fa";
import { RiNeteaseCloudMusicFill } from "react-icons/ri";
import { useSectionInView } from "@/lib/hooks";
import { useActiveSectionContext } from "@/context/active-section-context";
import { LanguageContext } from "@/context/language-context";
import {
  cn_introContent,
  cn_introItems,
  en_introContent,
  en_introItems,
  introBtns,
  introIcons,
  introLinks,
} from "@/lib/intro-content";

export default function Intro() {
  const { ref } = useSectionInView("Home", 0.5);
  const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();
  const { language } = useContext(LanguageContext);

  const introContent = language === "en" ? en_introContent : cn_introContent;
  const items = language === "en" ? en_introItems : cn_introItems;

  return (
    <section
      ref={ref}
      id="home"
      className="mb-28 max-w-[50rem] text-center sm:mb-0 scroll-mt-[100rem]"
    >
      <div className="flex items-center justify-center">
        <div className="relative">
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "tween",
              duration: 0.2,
            }}
          >
            <Image
              src="/self_img.jpg"
              alt="Victoria's portrait"
              width="192"
              height="192"
              quality="95"
              priority={true}
              className="h-24 w-24 rounded-full object-cover border-[0.35rem] boarder-white shadow-xl"
            />
          </motion.div>

          <motion.span
            className="absolute -top-3 right-1 text-4xl"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1, rotate: 30 }}
            transition={{
              type: "spring",
              stiffness: 125,
              delay: 0.1,
              duration: 0.7,
            }}
          >
            👑
          </motion.span>
        </div>
      </div>

      {/* text-2xl sm:text-4xl */}
      <motion.h1
        className="mb-10 mt-4 px-4 font-medium !leading-[1.5]"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
      >
        {introContent}
      </motion.h1>

      <motion.div
        className="flex flex-col sm:flex-row items-center justify-center gap-4 px-4 text-lg font-medium"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.1,
        }}
      >
        <Link
          href="#contact"
          className="group bg-gray-900 border-none shadow-lg text-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 transition"
          onClick={() => {
            setActiveSection("Contact");
            setTimeOfLastClick(Date.now());
          }}
        >
          <p className="text-sm lg:text-lg">{items.contact}</p>
          <BsArrowRight className="opacity-70 group-hover:translate-x-1 transition" />
        </Link>

        <a
          className="group bg-white/80 border-none shadow-lg px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10"
          href="/Jiaqi_Duan_Resume.pdf"
          download
        >
          <p className="text-sm lg:text-lg">{items.download}</p>
          <HiDownload className="opacity-60 group-hover:translate-y-1" />
        </a>

        <div className="mt-1 lg:mt-0 flex gap-5">
          {introBtns.map((btn, index) => (
            <a
              key={index}
              className="bg-white/80 border-none shadow-lg p-4 text-gray-700 flex items-center gap-2 rounded-full focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950  active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60"
              href={btn.href}
              target="_blank"
            >
              {btn.icon}
            </a>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
