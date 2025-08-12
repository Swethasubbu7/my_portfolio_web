"use client"

import Navbar from "./components/Navbar"
import Image from "next/image"
import Link from "next/link"

export default function Home() {
  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-gray-100 dark:bg-gray-900 p-8 flex flex-col items-center pt-24">
        {/* Profile Image */}
        <div className="relative w-40 h-40 rounded-full overflow-hidden mt-8 shadow-lg">
          <Image
            src="/swetha..jpg"
            alt="Swetha"
            fill
            style={{ objectFit: "cover" }}
            priority
          />
        </div>

        {/* Intro Section */}
        <section className="max-w-3xl text-center mt-8 mb-16">
          <h1 className="text-5xl font-bold mb-4 text-gray-900 dark:text-white">
            Hi, I’m Swetha
          </h1>
          <p className="text-xl mb-6 text-gray-700 dark:text-gray-300">
            A passionate developer who loves building beautiful web experiences.
          </p>

          <a
            href="/Swetha Resume .pdf"
            download
            className="inline-block bg-green-600 text-white px-6 py-3 rounded hover:bg-green-700 transition mb-4"
          >
            Download Resume
          </a>

          <Link
            href="/projects"
            className="inline-block bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700 transition"
          >
            See My Projects
          </Link>
        </section>

        {/* Education Section */}
        <section
          id="education"
          className="max-w-4xl w-full bg-white dark:bg-gray-800 p-8 rounded-lg shadow-md mb-16"
        >
          <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">Education</h2>
          <ul className="space-y-6 text-gray-700 dark:text-gray-300">
            <li>
              <p className="font-semibold text-lg">
                B. Tech Artificial Intelligence and Data Science
              </p>
              <p>Kathir College of Engineering</p>
              <p className="italic text-sm">Pursuing | 7.65 CGPA | May 2022 | Tirupur</p>
            </li>
            <li>
              <p className="font-semibold text-lg">HSC</p>
              <p>Palaniyammal Municipal GHSS</p>
              <p className="italic text-sm">85% | May 2020 | Tirupur</p>
            </li>
            <li>
              <p className="font-semibold text-lg">SSLC</p>
              <p>Vijayapuram GHSS</p>
              <p className="italic text-sm">85%</p>
            </li>
          </ul>
        </section>

        {/* Certifications Section */}
        <section
          id="certifications"
          className="max-w-4xl w-full bg-white dark:bg-gray-800 p-8 rounded-lg shadow-md mb-16"
        >
          <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">Certifications</h2>
          <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
            <li>Gen OpenAI Pretrained Transformer — Infosys Springboard (2025)</li>
            <li>Java Skilling Program — Smart Yugam Academy (2025)</li>
            <li>Data Science & Analytics — HP Foundation (2024)</li>
            <li>Excel Regression Analysis — Great Learning (2024)</li>
            <li>Introduction to MongoDB — MongoDB (2024)</li>
          </ul>
        </section>

        {/* Skills Section */}
        <section
          id="skills"
          className="max-w-4xl w-full bg-white dark:bg-gray-800 p-8 rounded-lg shadow-md mb-16"
        >
          <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">Technical Skills</h2>
          <div className="flex flex-wrap gap-4 text-gray-700 dark:text-gray-300">
            {[
              "Python",
              "AI & ML",
              "SQL",
              "HTML & CSS",
              "Tableau",
              "JavaScript",
              "Java",
            ].map((skill) => (
              <span
                key={skill}
                className="bg-blue-200 dark:bg-blue-700 text-blue-900 dark:text-blue-100 rounded-full px-4 py-1 font-medium"
              >
                {skill}
              </span>
            ))}
          </div>
        </section>
      </main>
    </>
  )
}
