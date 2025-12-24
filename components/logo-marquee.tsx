export function LogoMarquee() {
  const items = [
    { logo: "/logos/12.png", alt: "Company Logo" },
    { logo: "/logos/aspira-high-resolution-logo-transparent (2).png", alt: "Aspira" },
    { logo: "/logos/ChatGPT_Image_Nov_16__2025__02_51_19_AM-removebg-preview (1).png", alt: "AI Project" },
    { logo: "/logos/go-ye-therefore-high-resolution-logo-black-transparent.png", alt: "Go Ye Therefore" },
    { logo: "/logos/grindcastzm-high-resolution-logo-transparent - Copy[1].png", alt: "GrindCast ZM" },
    { logo: "/logos/images (1).png", alt: "Company 1" },
    { logo: "/logos/images.jpg", alt: "Company 2" },
    { logo: "/logos/images.png", alt: "Company 3" },
    { logo: "/logos/matrix-designs-high-resolution-logo-black-transparent.png", alt: "Matrix Designs" },
    { logo: "/logos/medipredict-high-resolution-logo-black-transparent.png", alt: "MediPredict" },
  ]

  return (
    <div className="overflow-hidden">
      <div className="relative overflow-hidden bg-black py-16 -rotate-[5deg] mt-32 mb-16 min-w-[120vw] -mx-[10vw] left-0">
        <div className="flex items-center gap-16 animate-marquee whitespace-nowrap">
          {[...items, ...items, ...items, ...items].map((item, index) => (
            <img key={index} src={item.logo || "/placeholder.svg"} alt={item.alt} className="h-12 w-auto" />
          ))}
        </div>
      </div>
    </div>
  )
}
