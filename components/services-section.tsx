import { Mail } from 'lucide-react'
import { Button } from "@/components/ui/button"
import Image from "next/image"

export function ServicesSection() {
  const services = [
    {
      title: "Web Development",
      description: "Full-stack web development using modern technologies like React, Next.js, Node.js, and databases to create responsive and scalable web applications.",
      image: "https://images.unsplash.com/photo-1627398242454-45a1465c2479?w=400&h=300&fit=crop&crop=center",
    },
    {
      title: "Computer Vision Integration",
      description: "Implementing AI-powered computer vision solutions for image recognition, object detection, and automated visual analysis in your applications.",
      image: "https://images.unsplash.com/photo-1555255707-c07966088b7b?w=400&h=300&fit=crop&crop=center",
    },
    {
      title: "Mobile App Development",
      description: "Creating cross-platform mobile applications using React Native and Flutter to deliver seamless user experiences on iOS and Android.",
      image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=400&h=300&fit=crop&crop=center",
    },
    {
      title: "AI and ML Integration",
      description: "Integrating artificial intelligence and machine learning models into applications for predictive analytics, automation, and intelligent features.",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=400&h=300&fit=crop&crop=center",
    },
    {
      title: "Video Editing",
      description: "Professional video editing services for content creation, promotional videos, tutorials, and social media content using industry-standard tools.",
      image: "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=400&h=300&fit=crop&crop=center",
    },
    {
      title: "Private Tutoring",
      description: "One-on-one tutoring in programming, mathematics, computer science concepts, and technology skills for students and professionals.",
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=400&h=300&fit=crop&crop=center",
    },
    {
      title: "Personal Branding (LinkedIn Optimization)",
      description: "Enhancing your professional online presence through LinkedIn profile optimization, content strategy, and personal brand development.",
      image: "https://images.unsplash.com/photo-1611944212129-29977ae1398c?w=400&h=300&fit=crop&crop=center",
    },
  ]

  return (
    <section id="services" className="bg-white py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-4xl md:text-[52px] md:leading-[60px] font-bold mb-4">
              My broad <span className="bg-[#FF4A60] text-white px-3 py-1 inline-block">set of services</span>
            </h2>
            <p className="text-[#393939] text-base md:text-lg font-medium leading-relaxed md:leading-[30px] max-w-2xl mx-auto">
              I offer a comprehensive range of technical services from web development to AI integration, helping businesses and individuals leverage technology to achieve their goals and enhance their digital presence.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white border-[3px] border-black rounded-[32px] overflow-hidden hover:translate-y-[-4px] hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transition-all duration-300 min-h-[480px] flex flex-col group"
              >
                <div className="mb-6 -mx-[3px] -mt-[3px] overflow-hidden rounded-t-[29px]">
                  <img
                    src={service.image || "/placeholder.svg"}
                    alt={service.title}
                    className="w-full h-[328px] object-cover rounded-t-[29px] group-hover:scale-110 transition-transform duration-500 ease-out"
                  />
                </div>
                <div className="px-8 pb-8 flex-1 flex flex-col">
                  <h3 className="text-[28px] leading-[40px] font-bold mb-3 text-[#0B0B0B]">{service.title}</h3>
                  <p className="text-[18px] leading-[30px] font-medium text-[#393939]">{service.description}</p>
                </div>
              </div>
            ))}

            <div className="bg-[#FFC224] border-[3px] border-black rounded-[32px] p-8 md:p-12 flex flex-col items-center justify-center text-center hover:translate-y-[-4px] transition-transform min-h-[480px] relative shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
              <div className="mb-8">
                <img
                  src="https://images.unsplash.com/photo-1423666639041-f56000c27a9a?w=92&h=92&fit=crop&crop=center"
                  alt="Get in touch"
                  className="w-[92px] h-[92px] rounded-full object-cover border-2 border-black"
                />
              </div>
              <h3 className="text-[28px] leading-[40px] font-bold mb-4 text-[#0B0B0B]">Get in touch</h3>
              <p className="text-[18px] leading-[30px] font-medium text-[#393939] mb-8">
                Looking for another service? Get in touch with me, there is a high chance that I will be able to help!
              </p>
              <Button className="bg-black text-white hover:bg-black/90 rounded-[16px] px-12 py-6 font-medium text-[18px] w-full max-w-[340px] h-[64px]">
                <Mail className="w-5 h-5 mr-2" />
                Get in touch
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
