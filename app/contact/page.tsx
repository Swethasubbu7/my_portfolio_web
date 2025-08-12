import Navbar from "../components/Navbar"

export default function Contact() {
  return (
    <>
      <Navbar />
      <main className="max-w-3xl mx-auto p-8 text-center space-y-6">
        <h2 className="text-4xl font-bold mb-6">Get in Touch</h2>

        <p className="text-lg text-gray-700">
          Tirupur
        </p>
        
        <p className="text-lg text-gray-700">
          Email: <a href="mailto:swethasubbu07@gmail.com" className="text-blue-600 underline">swethasubbu07@gmail.com</a>
        </p>
        
        <p className="text-lg text-gray-700">
          LinkedIn: <a href="https://linkedin.com/in/swetha" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">Swetha</a>
        </p>
        
        <p className="text-lg text-gray-700">
          Phone: <a href="tel:+916379972563" className="text-blue-600 underline">6379972563</a>
        </p>
      </main>
    </>
  )
}
