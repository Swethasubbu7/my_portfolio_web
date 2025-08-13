"use client";

import Service from "../components/Service";

export default function ServicesPage() {
  const services = [
    {
      title: "Web Development",
      desc: "Crafting modern, responsive web applications tailored to your needs.",
      img: "/web-icon.png",
    },
    {
      title: "Data Analytics",
      desc: "Transforming raw data into actionable insights for smarter decisions.",
      img: "/graphics-icon.png",
    },
    {
      title: "Machine Learning",
      desc: "Designing AI-powered solutions that adapt and evolve with your goals.",
      img: "/mobile-icon.png",
    },
  ];

  return (
    <main className="min-h-screen bg-gray-50 px-6 py-12 pt-32">
      <h1 className="text-4xl font-bold text-center mb-12 text-gray-900">
        My Services
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {services.map((service, index) => (
          <Service key={index} {...service} delay={index * 0.2} />
        ))}
      </div>
    </main>
  );
}
