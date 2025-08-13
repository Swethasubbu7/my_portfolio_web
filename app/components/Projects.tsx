"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function ProjectCard({
  title,
  description,
  image,
  link,
  delay,
}: {
  title: string;
  description: string;
  image: string;
  link: string;
  delay?: number;
}) {
  return (
    <motion.div
      className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 hover:shadow-xl transition"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      viewport={{ once: true }}
    >
      <Image
        src={image}
        alt={title}
        width={300}
        height={200}
        className="rounded-lg mb-4 object-cover"
      />
      <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
        {title}
      </h3>
      <p className="text-gray-600 dark:text-gray-300 mb-4">{description}</p>
      <Link
        href={link}
        target="_blank"
        className="inline-block px-4 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition"
      >
        View Project
      </Link>
    </motion.div>
  );
}
