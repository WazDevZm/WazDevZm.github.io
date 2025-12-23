import { GraduationCap, Calendar } from "lucide-react"
import Image from "next/image"

export function EducationSection() {
  const education = [
    {
      period: "November 2023",
      institution: "The Copperbelt University",
      degree: "Bachelor's degree, Computer Engineering",
      description: "Comprehensive study in computer engineering fundamentals, software development, and system design.",
      logo: "/images/company.png",
      bgColor: "bg-[#6366F1]",
    },
    {
      period: "January 2020 - November 2022",
      institution: "Hillcrest National STEM School",
      degree: "Secondary School Certificate",
      description: "Focused on Science, Technology, Engineering, and Mathematics with strong foundation in analytical thinking.",
      logo: "/images/startup.png",
      bgColor: "bg-[#2F81F7]",
    },
  ]

  return (
    <section className="container mx-auto px-4 py-16 md:py-24">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            My Educational <br />
            <span className="bg-[#FF6B7A] text-white px-3 py-1 inline-block">Journey</span>
          </h2>
          <p className="text-[#393939] text-base md:text-lg font-medium leading-relaxed max-w-2xl mx-auto">
            Building a strong foundation in computer engineering and technology through quality education and continuous learning.
          </p>
        </div>

        <div className="space-y-8">
          {education.map((edu, index) => (
            <div
              key={index}
              className="group grid md:grid-cols-2 bg-white border-[3px] border-black rounded-[32px] overflow-hidden hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transition-all"
            >
              <div className="p-6 md:p-12 flex flex-col justify-center bg-white">
                <div className="flex items-center gap-3 mb-6">
                  <Calendar className="w-6 h-6 text-[#393939]" />
                  <span className="text-base md:text-lg font-semibold text-[#393939]">{edu.period}</span>
                </div>

                <h3 className="text-xl md:text-[28px] font-bold mb-2 leading-tight md:leading-[40px] text-[#0B0B0B]">
                  {edu.institution}
                </h3>

                <h4 className="text-lg md:text-xl font-semibold mb-4 text-[#2F81F7]">
                  {edu.degree}
                </h4>

                <p className="text-base md:text-[18px] text-[#393939] leading-relaxed md:leading-[30px] font-medium">
                  {edu.description}
                </p>
              </div>

              <div className={`${edu.bgColor} relative overflow-hidden min-h-[250px] md:min-h-[400px] flex items-center justify-center`}>
                <div className="text-center text-white p-8">
                  <GraduationCap className="w-24 h-24 md:w-32 md:h-32 mx-auto mb-4 opacity-80" />
                  <div className="text-2xl md:text-3xl font-bold opacity-90">Education</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}