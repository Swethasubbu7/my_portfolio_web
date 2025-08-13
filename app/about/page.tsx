"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-gray-50 px-6 py-12">
      {/* Top Section */}
      <motion.h1
        className="text-3xl font-bold text-center text-gray-800"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Introduction
      </motion.h1>

      <motion.h2
        className="text-4xl font-bold text-center text-blue-600 mb-4"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        About Me
      </motion.h2>

      <motion.p
        className="text-center max-w-2xl mx-auto text-gray-600 mb-12"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        Hi, I&apos;m Swetha 👋 — a passionate AI &amp; Web Developer who loves
        crafting user-friendly and impactful solutions using modern
        technologies.
      </motion.p>

      {/* Profile Section */}
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
        <motion.div
          className="flex justify-center"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <Image
            src="/swetha..jpg"
            alt="Swetha"
            width={300}
            height={300}
            className="rounded-2xl shadow-lg object-cover"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-semibold mb-4 text-gray-800">
            Who am I?
          </h3>
          <p className="text-gray-600 leading-relaxed mb-4">
            I specialize in Python, Java, SQL, MongoDB, AI, Machine Learning,
            and modern web frameworks. I enjoy creating products that are both
            functional and visually appealing.
          </p>
          <p className="text-gray-600 leading-relaxed">
            My journey in tech is driven by curiosity, problem-solving, and
            continuous learning.
          </p>
        </motion.div>
      </div>

      {/* Cards Section */}
      <motion.div
        className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-6 mb-16"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{
          visible: { transition: { staggerChildren: 0.2 } },
        }}
      >
        {[
          {
            icon: "/code-icon.png",
            title: "Languages",
            desc: "Python, Java, JavaScript, SQL",
            bg: "bg-blue-100",
          },
          {
            icon: "/edu-icon.png",
            title: "Education",
            desc: "B.Tech in Computer Science",
            bg: "bg-green-100",
          },
          {
            icon: "/project-icon.png",
            title: "Projects",
            desc: "AI, ML, Web Apps, Data Analytics",
            bg: "bg-yellow-100",
          },
        ].map((card, i) => (
          <motion.div
            key={i}
            className="bg-white shadow-md rounded-xl p-6 text-center hover:shadow-lg transition"
            initial={{ opacity: 0, y: 20 }}
            variants={{
              visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
              hidden: { opacity: 0, y: 20 },
            }}
          >
            <div
              className={`w-16 h-16 mx-auto mb-3 flex items-center justify-center rounded-full ${card.bg}`}
            >
              <Image src={card.icon} alt={card.title} width={32} height={32} />
            </div>
            <h3 className="text-lg font-semibold mb-2 text-gray-800">
              {card.title}
            </h3>
            <p className="text-gray-600">{card.desc}</p>
          </motion.div>
        ))}
      </motion.div>

      {/* Tools Section */}
      <motion.div
        className="max-w-5xl mx-auto text-center"
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h3 className="text-2xl font-semibold mb-6 text-gray-800">Tools</h3>
        <div className="flex flex-wrap justify-center gap-6">
          {[
            "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
            "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg",
            "https://cdn.worldvectorlogo.com/logos/postman.svg",
            "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg",
          ].map((src, i) => (
            <Image key={i} src={src} alt="Tool" width={50} height={50} />
          ))}
        </div>
      </motion.div>
    </main>
  );
}
