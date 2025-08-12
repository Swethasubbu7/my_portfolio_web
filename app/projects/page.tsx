import Navbar from "../components/Navbar"

type Project = {
  title: string
  subtitle?: string
  date?: string
  points: string[]
}

const projects: Project[] = [
  {
    title: "BLOOD IQ - Large Language Model (LLM)",
    date: "Feb 2025",
    points: [
      "Developed ’Blood IQ’ web application using Flask, supporting processing of blood reports from PDFs, PSF, and images with 95% parameter extraction accuracy",
      "Integrated Mistral-7B and LLaMA models for analyzing 20+ blood panels and offering real-time food and health suggestions based on deficiencies",
      "Implemented multi-language support (Tamil, Hindi, English), enhancing user interaction by 50% and handling patient records in MongoDB."
    ],
  },
  {
    title: "SAR IMAGE COLORIZATION – Deep Learning (DL)",
    points: [
      "Utilized SAR image colorization with Deep Learning methods such as GANs and CNNs to transform grayscale SAR images into improved color visuals.",
      "Used data augmentation and transfer learning to enhance model performance and deal with data shortage issues."
    ],
  },
  {
    title: "BUBBLE BEE BOUTIQUE – React Framework",
    date: "Aug 2024 - Dec 2024",
    points: [
      "Created a full-stack boutique web application with React, Node.js, and Flask that facilitates optimal data flow and real-time user engagement.",
      "Implemented RESTful API and secure authentication that makes frontend-backend data communication efficient as well as gives real-time data updates."
    ],
  },
]

export default function Projects() {
  return (
    <>
      <Navbar />
      <main className="max-w-5xl mx-auto p-8">
        <h2 className="text-4xl font-bold mb-8 text-center">My Projects</h2>

        <div className="space-y-12">
          {projects.map(({ title, date, points }, idx) => (
            <div key={idx} className="border rounded-lg p-6 hover:shadow-lg transition">
              <div className="flex justify-between items-center mb-3">
                <h3 className="text-2xl font-semibold">{title}</h3>
                {date && <span className="text-gray-500 italic">{date}</span>}
              </div>

              <ul className="list-disc list-inside space-y-2 text-gray-700">
                {points.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </main>
    </>
  )
}
