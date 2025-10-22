import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const services = [
  {
    icon: "https://cdn-icons-png.flaticon.com/512/2211/2211392.png",
    title: "Clean Cars",
    description: "Spotless vehicles for your comfort",
    color: "text-primary",
  },
  {
    icon: "https://cdn-icons-png.flaticon.com/512/3967/3967544.png",
    title: "Trusted Drivers",
    description: "Professional and experienced drivers",
    color: "text-secondary",
  },
  {
    icon: "https://cdn-icons-png.flaticon.com/512/8728/8728083.png",
    title: "On-Time Service",
    description: "Punctual pickups and drop-offs",
    color: "text-accent",
  },
  {
    icon: "https://cdn-icons-png.flaticon.com/512/2760/2760491.png",
    title: "First Aid in Car",
    description: "Safety kit in every vehicle",
    color: "text-primary",
  },
  {
    icon: "https://cdn-icons-png.flaticon.com/512/8118/8118961.png",
    title: "Water Bottles",
    description: "Complimentary water provided",
    color: "text-secondary",
  },
  {
    icon: "https://cdn-icons-png.flaticon.com/512/883/883768.png",
    title: "Tissues & Napkins",
    description: "Fresh tissues for your comfort",
    color: "text-accent",
  },
]

export function ServicesSection() {
  return (
    <section id="services" className="py-6 md:py-12">
      <div className="container mx-auto px-3 sm:px-6 lg:px-8">
        <div className="text-center mb-4 md:mb-8">
          <Badge variant="secondary" className="mb-1 md:mb-3 text-xs md:text-sm">
            ✨ Why Choose Us
          </Badge>
          <h2 className="text-base md:text-2xl lg:text-3xl font-bold mb-1 md:mb-3 text-balance">
            Our <span className="text-primary">Service Promise</span>
          </h2>
          <p className="text-xs md:text-base text-muted-foreground max-w-xl mx-auto text-pretty">
            We ensure your comfort, safety, and convenience with every ride.
          </p>
        </div>

        <div className="grid grid-cols-3 gap-2 md:gap-4">
          {services.map((service, index) => (
            <Card key={index} className="group hover:shadow-lg transition-all duration-300 text-center border-2 hover:border-primary/20 bg-card">
              <CardContent className="p-2 md:p-4">
                <div className="mb-2 md:mb-3">
                  <div className={`inline-flex p-2 md:p-4 rounded-lg bg-card border-2 border-border shadow-sm hover:shadow-md transition-all duration-300 ${service.color}`}>
                    <img 
                      src={service.icon} 
                      alt={service.title}
                      className="h-5 w-5 md:h-8 md:w-8 object-contain filter-none"
                    />
                  </div>
                </div>
                <h3 className="text-xs md:text-sm font-bold mb-1 md:mb-2">{service.title}</h3>
                <p className="text-xs md:text-xs text-muted-foreground">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
