"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import profilePic from "@/public/swetha..jpg";

const fadeInUp = (delay = 0) => ({
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut", delay },
  },
});

export default function HomePage() {
  return (
    <section className="h-screen flex items-center bg-gray-50 dark:bg-gray-900 relative">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10 px-6 w-full">
        {/* Profile Image */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex-shrink-0 flex justify-center md:justify-start w-full md:w-auto"
        >
          <Image
            src={profilePic}
            alt="Profile picture of Swetha"
            className="rounded-full border-4 border-blue-600"
            width={200}
            height={200}
            priority
          />
        </motion.div>

        {/* Intro Text */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          className="text-center md:text-left flex flex-col justify-center"
        >
          <motion.p
            variants={fadeInUp(0.3)}
            initial="hidden"
            animate="show"
            className="text-lg text-gray-800 dark:text-gray-200"
          >
            Hi! I&apos;m{" "}
            <span className="font-semibold text-blue-600">Swetha</span> 👋
          </motion.p>

          <motion.h2
            variants={fadeInUp(0.5)}
            initial="hidden"
            animate="show"
            className="mt-2 text-4xl md:text-5xl font-bold leading-tight text-gray-900 dark:text-white"
          >
            AI &amp; Web Developer <br />
          </motion.h2>

          <motion.p
            variants={fadeInUp(0.7)}
            initial="hidden"
            animate="show"
            className="mt-4 text-gray-600 dark:text-gray-300 max-w-xl"
          >
            I&apos;m a passionate developer skilled in Python, Java, SQL,
            MongoDB, AI, Machine Learning, and Web Development — building
            solutions that create real impact.
          </motion.p>

          {/* Buttons */}
          <motion.div
            variants={fadeInUp(0.9)}
            initial="hidden"
            animate="show"
            className="mt-6 flex gap-4 justify-center md:justify-start"
          >
            <a
              href="/contact"
              className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition"
            >
              Contact Me →
            </a>
            <a
              href="/Swetha Resume .pdf"
              className="border border-gray-400 dark:border-gray-500 px-6 py-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition"
            >
              My Resume 📄
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
