import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Star } from "lucide-react"

const testimonials = [
  {
    name: "Prakash & Family",
    role: "Pune ➝ Mahabaleshwar Weekend",
    rating: 5,
    comment:
      "Smooth drive from Pune to Mahabaleshwar! The car handled the ghats perfectly and we had enough space for everyone. Fresh strawberries, viewpoints, and stress-free travel—awesome experience.",
    avatar: "/placeholder.svg",
  },
  {
    name: "Mumbai Friends Group",
    role: "Monsoon Drive to Lonavala",
    rating: 5,
    comment:
      "Perfect monsoon getaway! Clean car, great mileage, and super comfy for the expressway drive. Tiger Point, bhajiyas, chai—memories for life!",
    avatar: "/placeholder.svg",
  },
  {
    name: "Sneha & Rohan",
    role: "Alibaug Beach Escape",
    rating: 5,
    comment:
      "A quick beach break from Mumbai—the car was spotless and the ride was super smooth. Loved the flexibility to explore Kashid and Revdanda on our own time.",
    avatar: "/placeholder.svg",
  },
  {
    name: "Kolhapur Riders",
    role: "Heritage & Food Trail",
    rating: 5,
    comment:
      "From temples to misal pav to jaggery markets—the trip was seamless. Reliable car, easy pickup, and great support whenever we needed directions.",
    avatar: "/placeholder.svg",
  },
  {
    name: "Nashik Wine Crew",
    role: "Sula Vineyards Day Trip",
    rating: 5,
    comment:
      "Zero hassle drive from Thane to Nashik. Plenty of boot space, strong AC, and a super comfy ride. Made our vineyard hopping easy and fun!",
    avatar: "/placeholder.svg",
  },
]

export function TestimonialsSection() {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <Badge variant="secondary" className="mb-4">
            🌟 Real Stories
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">
            Stories of <span className="text-primary">Joy, Laughter & Adventure</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Every rental is the beginning of a new story. Here's what our travelers have shared about their
            unforgettable journeys.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="group hover:shadow-lg transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>

                <p className="text-muted-foreground mb-6 text-pretty">"{testimonial.comment}"</p>

                <div className="flex items-center gap-3">
                  <img
                    src={testimonial.avatar || "/placeholder.svg"}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <h4 className="font-semibold">{testimonial.name}</h4>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
