export default function Coursework() {
  const courses = [
    "Artificial Intelligence",
    "Machine Learning",
    "Deep Learning",
    "Java",
    "Python",
    "Database (SQL, MongoDB)",
    "Web Development",
    "Data Analytics",
  ]

  return (
    <section className="my-12 max-w-4xl mx-auto">
      <h3 className="text-3xl font-semibold mb-6">Coursework</h3>
      <ul className="list-disc list-inside text-gray-700 dark:text-gray-300">
        {courses.map((course, idx) => (
          <li key={idx}>{course}</li>
        ))}
      </ul>
    </section>
  )
}
