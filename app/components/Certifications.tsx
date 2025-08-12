export default function Certifications() {
  const certifications = [
    { name: "Gen OpenAI Pretrained Transformer", issuer: "Infosys Springboard", year: "2025" },
    { name: "Java Skilling Program", issuer: "Smart Yugam Academy", year: "2025" },
    { name: "Data Science & Analytics", issuer: "HP Foundation", year: "2024" },
    { name: "Excel Regression Analysis", issuer: "Great Learning", year: "2024" },
    { name: "Introduction to MongoDB", issuer: "MongoDB", year: "2024" },
  ]

  return (
    <section className="my-12 max-w-4xl mx-auto">
      <h3 className="text-3xl font-semibold mb-6">Certifications</h3>
      <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
        {certifications.map(({ name, issuer, year }, idx) => (
          <li key={idx}>
            <span className="font-semibold">{name}</span> — {issuer} ({year})
          </li>
        ))}
      </ul>
    </section>
  )
}
