import Navbar from "../components/Navbar"

export default function About() {
  return (
    <>
      <Navbar />
      <main className="max-w-3xl mx-auto p-8">
        <h2 className="text-4xl font-bold mb-6 text-center">About Me</h2>
        <p className="text-lg text-gray-700">
          I am a passionate developer focused on creating clean and performant web applications using modern technologies.
        </p>
      </main>
    </>
  )
}
