import { ArrowRight } from "lucide-react"
import Image from "next/image"

export function PortfolioSection() {
  const projects = [
    {
      title: "Agrimate - Smart Agriculture Platform",
      description:
        "A comprehensive agricultural management platform that helps farmers optimize crop production, monitor weather conditions, and manage resources efficiently using modern web technologies.",
      tag: "Full Stack Development",
      logo: "/projects/project1_logo.png",
      bgColor: "bg-[#6366F1]",
      illustration: "/projects/project1.png",
      link: "https://agrimatezm.vercel.app/"
    },
    {
      title: "AspiraRemove - Background Removal Tool",
      description:
        "An AI-powered background removal application that allows users to easily remove backgrounds from images with precision and speed, perfect for e-commerce and content creation.",
      tag: "AI/ML Application",
      logo: "https://via.placeholder.com/120x40/FF6B7A/FFFFFF?text=AspiraRemove",
      bgColor: "bg-[#FF6B7A]",
      illustration: "/projects/project2.png",
      link: "#"
    },
    {
      title: "TaskFlow - Project Management System",
      description:
        "A modern project management platform with real-time collaboration, task tracking, and team communication features built with React and Node.js.",
      tag: "Web Application",
      logo: "https://via.placeholder.com/120x40/2F81F7/FFFFFF?text=TaskFlow",
      bgColor: "bg-[#2F81F7]",
      illustration: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=500&h=400&fit=crop&crop=center",
      link: "#"
    },
    {
      title: "EcoTracker - Carbon Footprint Monitor",
      description:
        "A sustainability app that helps users track their carbon footprint, set environmental goals, and discover eco-friendly alternatives in their daily lives.",
      tag: "Mobile App",
      logo: "https://via.placeholder.com/120x40/10B981/FFFFFF?text=EcoTracker",
      bgColor: "bg-[#10B981]",
      illustration: "/projects/project2.png",
      link: "#"
    },
    {
      title: "CryptoWallet - Digital Asset Manager",
      description:
        "A secure cryptocurrency wallet application with portfolio tracking, real-time price alerts, and multi-currency support for managing digital assets.",
      tag: "Blockchain",
      logo: "https://via.placeholder.com/120x40/F59E0B/FFFFFF?text=CryptoWallet",
      bgColor: "bg-[#F59E0B]",
      illustration: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=500&h=400&fit=crop&crop=center",
      link: "#"
    },
  ]

  return (
    <section id="portfolio" className="container mx-auto px-4 py-16 md:py-24">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Take a look at my <br />
            <span className="bg-[#FFC224] text-black px-3 py-1 inline-block">Projects</span>
          </h2>
        </div>

        <div className="space-y-8 mb-12">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group grid md:grid-cols-2 bg-white border-[3px] border-black rounded-[32px] overflow-hidden hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transition-all"
            >
              <div className="p-6 md:p-12 flex flex-col justify-center bg-white">
                <span className="inline-block bg-black text-white text-xs font-semibold px-4 py-1.5 rounded-full mb-6 w-fit">
                  {project.tag}
                </span>

                <h3 className="text-xl md:text-[28px] font-bold mb-4 leading-tight md:leading-[40px] text-[#0B0B0B]">
                  {project.title}
                </h3>

                <p className="text-base md:text-[18px] text-[#393939] mb-8 leading-relaxed md:leading-[30px] font-medium">
                  {project.description}
                </p>

                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 font-semibold text-[#0B0B0B] hover:gap-3 transition-all text-sm md:text-base"
                >
                  View project
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>

              <div className={`${project.bgColor} relative overflow-hidden min-h-[250px] md:min-h-[500px]`}>
                <Image
                  src={project.illustration || "/placeholder.svg"}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-500 ease-out group-hover:scale-110"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
