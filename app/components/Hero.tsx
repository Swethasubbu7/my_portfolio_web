"use client";

import { motion, type Variants, type Transition } from "framer-motion";
import Image from "next/image";

// ✅ Typed fadeInUp function for Framer Motion
const fadeInUp = (delay = 0): Variants => ({
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: "easeOut" , // Type-safe fix
      delay,
    },
  },
});

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900 px-6">
      <div className="max-w-6xl grid grid-cols-1 md:grid-cols-2 items-center gap-10">

        {/* Profile Image */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex justify-center"
        >
          <Image
            src="/swetha..jpg"
            alt="Swetha"
            width={300}
            height={300}
            className="rounded-full border-4 border-blue-600"
          />
        </motion.div>

        {/* Intro */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
        >
          <motion.h1
            variants={fadeInUp(0.3)}
            initial="hidden"
            animate="show"
            className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4"
          >
            Hi, I’m Swetha
          </motion.h1>

          <motion.h2
            variants={fadeInUp(0.5)}
            initial="hidden"
            animate="show"
            className="text-2xl font-semibold text-blue-600 mb-3"
          >
            AI & Web Developer
          </motion.h2>

          <motion.p
            variants={fadeInUp(0.7)}
            initial="hidden"
            animate="show"
            className="text-lg text-gray-700 dark:text-gray-300"
          >
            Proficient in Python, AI/ML, Java, SQL, and Web Development. I build
            functional, elegant solutions powered by data and intelligence.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}
