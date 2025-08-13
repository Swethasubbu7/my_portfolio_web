"use client";

import ProjectCard from "../components/Projects";

export default function WorkPage() {
  const projects = [
    {
      title: "Blood IQ",
      description:
        "A web app for processing blood reports with AI to give real-time health suggestions.",
      image: "/project1.jpeg",
      link: "https://github.com/yourusername/blood-iq",
    },
    {
      title: "SAR Image Colorization",
      description:
        "Deep learning model to colorize SAR images using GANs and CNNs.",
      image: "/project2.jpeg",
      link: "https://github.com/yourusername/sar-colorization",
    },
    {
      title: "Bubble Bee Boutique",
      description:
        "Full-stack boutique web application with real-time updates and secure auth.",
      image: "/project3.jpeg",
      link: "https://github.com/yourusername/bubble-bee-boutique",
    },
  ];

  return (
    <main className="min-h-screen bg-gray-50 px-6 py-12 pt-32">
      <h1 className="text-4xl font-bold text-center mb-12 text-gray-900">
        My Work
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} delay={index * 0.2} />
        ))}
      </div>
    </main>
  );
}
