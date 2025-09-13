import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Star } from "lucide-react"

const testimonials = [
  {
    name: "Sarah & Family",
    role: "Family Road Trip",
    rating: 5,
    comment:
      "Our kids still talk about our cross-country adventure! The spacious SUV was perfect for all our gear and the memories we made will last forever. Thank you for making our family dream trip possible!",
    avatar: "/smiling-brown-haired-woman.png",
  },
  {
    name: "The College Crew",
    role: "Friends Reunion",
    rating: 5,
    comment:
      "Five friends, one epic road trip! We laughed until our stomachs hurt and took the most amazing photos. The car was spotless and perfect for our spontaneous detours and late-night drives.",
    avatar: "/smiling-asian-man-glasses.png",
  },
  {
    name: "Emma & Jake",
    role: "Couple's Getaway",
    rating: 5,
    comment:
      "Our romantic weekend escape was absolutely perfect. Driving through the mountains with the windows down, sharing playlists, and discovering hidden gems together - pure magic!",
    avatar: "/professional-blonde-woman.png",
  },
  {
    name: "The Adventure Squad",
    role: "Group Expedition",
    rating: 5,
    comment:
      "Six friends, three cars, one incredible journey! The group booking was seamless and every vehicle was adventure-ready. We created memories that will bond us for life.",
    avatar: "/smiling-bearded-man.png",
  },
  {
    name: "Maria & Sisters",
    role: "Girls Trip",
    rating: 5,
    comment:
      "Sister bonding at its finest! We sang along to our favorite songs, stopped at every scenic viewpoint, and had the most therapeutic conversations. This trip healed our souls.",
    avatar: "/smiling-latina-woman.png",
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
