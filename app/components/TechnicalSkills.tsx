export default function TechnicalSkills() {
  const skills = [
    "Python",
    "AI & ML",
    "SQL",
    "HTML & CSS",
    "Tableau",
    "JavaScript",
    "Java",
  ]

  return (
    <section className="my-12 max-w-4xl mx-auto">
      <h3 className="text-3xl font-semibold mb-6">Technical Skills</h3>
      <div className="flex flex-wrap gap-4">
        {skills.map((skill, idx) => (
          <span
            key={idx}
            className="bg-blue-200 dark:bg-blue-700 text-blue-900 dark:text-blue-100 rounded-full px-4 py-1 font-medium"
          >
            {skill}
          </span>
        ))}
      </div>
    </section>
  )
}
