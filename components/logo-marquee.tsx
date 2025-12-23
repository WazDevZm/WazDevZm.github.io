export function LogoMarquee() {
  const items = [
    { logo: "/logos/images.jpg", alt: "company 1" },
    { logo: "/logos/images.png", alt: "company 2" },
    { logo: "/logos/images (1).png", alt: "company 3" },
    { logo: "/logos/images.jpg", alt: "company 4" },
    { logo: "/logos/images.png", alt: "company 5" },
    { logo: "/logos/images (1).png", alt: "company 6" },
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
