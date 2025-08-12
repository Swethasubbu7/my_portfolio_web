export default function Education() {
  const education = [
    {
      degree: "B. Tech Artificial Intelligence and Data Science",
      institution: "Kathir College of Engineering",
      year: "Pursuing",
      details: "7.65 CGPA",
      location: "May 2022 | Tirupur",
    },
    {
      degree: "HSC",
      institution: "Palaniyammal Municipal GHSS",
      year: "2020",
      details: "85%",
      location: "May 2020 | Tirupur",
    },
    {
      degree: "SSLC",
      institution: "Vijayapuram GHSS",
      year: "2018",
      details: "85%",
    },
  ]

  return (
    <section className="my-12 max-w-4xl mx-auto">
      <h3 className="text-3xl font-semibold mb-6">Education</h3>
      <ul className="space-y-6 text-gray-700 dark:text-gray-300">
        {education.map(({ degree, institution, year, details, location }, idx) => (
          <li key={idx}>
            <p className="font-semibold text-lg">{degree}</p>
            <p>{institution}</p>
            <p>{location && <span>{location}</span>}</p>
            <p className="italic text-sm">{details}</p>
          </li>
        ))}
      </ul>
    </section>
  )
}
