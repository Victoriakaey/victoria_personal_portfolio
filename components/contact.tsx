"use client";

import React, { useContext } from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";
import { sendEmail } from "@/action/sendEmail";
import SubmitBtn from "./submit-btn";
import toast from "react-hot-toast";
import { LanguageContext } from "@/context/language-context";
import {
  cn_contactContent,
  cn_contentItems,
  en_contactContent,
  en_contentItems,
} from "@/lib/contact-content";

export default function Contact() {
  const { language } = useContext(LanguageContext);
  const contactContent =
    language === "en" ? en_contactContent : cn_contactContent;
  const contactItems = language === "en" ? en_contentItems : cn_contentItems;
  const { ref } = useSectionInView("Contact");

  return (
    <motion.section
      id="contact"
      ref={ref}
      className="mb-20 sm:mv-28 w-[min(100%,38rem)] text-center"
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      transition={{
        duration: 0.8,
      }}
      viewport={{
        once: true,
      }}
    >
      <SectionHeading>{contactItems.title}</SectionHeading>
      <p className="text-gray-700 -mt-5 dark:text-white/80">{contactContent}</p>
      <form
        className="mt-4 flex flex-col dark:text-black"
        action={async (formData) => {
          const { data, error } = await sendEmail(formData);
          if (error) {
            toast.error(error);
            return;
          }

          toast.success(
            "Email sent! Thank you for reaching out to me. I will get back to you as soon as possible!"
          );
        }}
      >
        <input
          className="h-14 px-4 rounded-lg borderBlack dark:bg-white dark:bg-opacity-85 dark:focus:bg-opacity-100 transition-all dark:outline-none"
          name="senderEmail"
          type="email"
          required
          maxLength={500}
          placeholder={contactItems.contactFormPlaceholder}
        />
        <textarea
          className="h-52 my-3 rounded-lg borderBlack p-4 dark:bg-white dark:bg-opacity-85 dark:focus:bg-opacity-100 transition-all dark:outline-none"
          name="message"
          required
          maxLength={5000}
          placeholder={contactItems.contactFormMessagePlaceholder}
        />
        <SubmitBtn content={contactItems.contactFormSubmitBtn} />
      </form>
    </motion.section>
  );
}
