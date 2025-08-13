"use client";

import { motion } from "framer-motion";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-gray-50 px-6 py-12">
      {/* Title */}
      <motion.h1
        className="text-4xl font-bold text-center mb-8 text-gray-900"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        About Me
      </motion.h1>

      {/* Content */}
      <motion.div
        className="max-w-4xl mx-auto text-gray-700 leading-relaxed space-y-4"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        viewport={{ once: true }}
      >
        <p>
          Hi, I&apos;m Swetha — a passionate developer with expertise in Python,
          Java, SQL, MongoDB, AI, Machine Learning, and Web Development. I love
          solving problems creatively and building applications that have
          real-world impact.
        </p>
        <p>
          I have hands-on experience developing AI-powered solutions, building
          scalable web applications, and creating insightful data analytics
          dashboards. My projects range from healthcare applications to image
          processing tools.
        </p>
        <p>
          I&apos;m eager to contribute my skills to projects that challenge me
          and allow me to grow as a developer.
        </p>
      </motion.div>
    </main>
  );
}
