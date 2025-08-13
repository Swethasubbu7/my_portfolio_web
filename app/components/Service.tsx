"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Service({
  title,
  desc,
  img,
  delay,
}: {
  title: string;
  desc: string;
  img: string;
  delay?: number;
}) {
  return (
    <motion.div
      className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 text-center hover:shadow-xl transition"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      viewport={{ once: true }}
    >
      <Image
        src={img}
        alt={title}
        width={80}
        height={80}
        className="mx-auto mb-4"
      />
      <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
        {title}
      </h3>
      <p className="text-gray-600 dark:text-gray-300">{desc}</p>
    </motion.div>
  );
}
