import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Heart, MapPin, Camera, Users } from "lucide-react"

const services = [
  {
    icon: Heart,
    title: "Memory Makers",
    description:
      "Every journey becomes a story worth telling. Create unforgettable moments with friends and family on the open road.",
    color: "text-primary",
  },
  {
    icon: MapPin,
    title: "Adventure Ready",
    description:
      "From spontaneous weekend getaways to planned family vacations - we have the perfect vehicle for every adventure.",
    color: "text-secondary",
  },
  {
    icon: Camera,
    title: "Picture Perfect Moments",
    description:
      "Capture those golden hour selfies and scenic route stops. Our clean, stylish cars are Instagram-ready for your travel photos.",
    color: "text-accent",
  },
  {
    icon: Users,
    title: "Group Friendly",
    description:
      "Special rates for friend groups and families. The more you travel together, the more memories you create and save.",
    color: "text-primary",
  },
]

export function ServicesSection() {
  return (
    <section id="services" className="py-12 md:py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 md:mb-12">
          <Badge variant="secondary" className="mb-2 md:mb-4 text-xs md:text-sm">
            ✨ Why Choose Us
          </Badge>
          <h2 className="text-xl md:text-3xl lg:text-4xl font-bold mb-2 md:mb-4 text-balance">
            More Than Just Car Rental - <span className="text-primary">We Create Experiences</span>
          </h2>
          <p className="text-sm md:text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            We understand that the best trips aren't just about the destination - they're about the laughter, the
            spontaneous stops, and the memories you make along the way.
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-6">
          {services.map((service, index) => (
            <Card key={index} className="group hover:shadow-lg transition-all duration-300 text-center">
              <CardContent className="p-4 md:p-8">
                <div className="mb-3 md:mb-6">
                  <div className={`inline-flex p-2 md:p-4 rounded-full bg-muted ${service.color}`}>
                    <service.icon className="h-4 w-4 md:h-8 md:w-8" />
                  </div>
                </div>
                <h3 className="text-sm md:text-xl font-bold mb-2 md:mb-3">{service.title}</h3>
                <p className="text-xs md:text-base text-muted-foreground text-pretty">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
