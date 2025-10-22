import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { MapPin, Star, Camera } from "lucide-react"

const destinations = [
  {
    id: 1,
    name: "Goa",
    state: "Goa",
    description: "Beautiful beaches, vibrant nightlife, and Portuguese heritage",
    image: "/goa-beach-destination.jpg",
    rating: 4.8,
    popular: true,
    highlights: ["Beaches", "Nightlife", "Heritage"],
  },
  {
    id: 2,
    name: "Manali",
    state: "Himachal Pradesh",
    description: "Snow-capped mountains, adventure sports, and scenic valleys",
    image: "/manali-mountains-destination.jpg",
    rating: 4.9,
    popular: false,
    highlights: ["Mountains", "Adventure", "Nature"],
  },
  {
    id: 3,
    name: "Rajasthan",
    state: "Rajasthan",
    description: "Royal palaces, desert safaris, and rich cultural heritage",
    image: "/rajasthan-palace-destination.jpg",
    rating: 4.7,
    popular: false,
    highlights: ["Palaces", "Desert", "Culture"],
  },
  {
    id: 4,
    name: "Kerala Backwaters",
    state: "Kerala",
    description: "Serene backwaters, lush greenery, and Ayurvedic wellness",
    image: "/kerala-backwaters-destination.jpg",
    rating: 4.6,
    popular: true,
    highlights: ["Backwaters", "Nature", "Wellness"],
  },
  {
    id: 5,
    name: "Ladakh",
    state: "Jammu & Kashmir",
    description: "High-altitude desert, Buddhist monasteries, and adventure",
    image: "/ladakh-landscape-destination.jpg",
    rating: 4.9,
    popular: false,
    highlights: ["Adventure", "Monasteries", "Landscape"],
  },
  {
    id: 6,
    name: "Udaipur",
    state: "Rajasthan",
    description: "City of lakes, magnificent palaces, and romantic ambiance",
    image: "/udaipur-lake-palace-destination.jpg",
    rating: 4.8,
    popular: false,
    highlights: ["Lakes", "Palaces", "Romance"],
  },
]

export function CarCatalogue() {
  return (
    <section id="destinations" className="py-12 md:py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 md:mb-16">
          <Badge variant="secondary" className="mb-4 md:mb-6 text-sm md:text-base px-4 py-2">
            🏔️ Popular Destinations
          </Badge>
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 text-balance">
            Explore <span className="text-primary">Incredible India</span>
          </h2>
          <p className="text-base md:text-xl text-muted-foreground max-w-3xl mx-auto text-pretty px-4">
            Discover India's most beautiful destinations with our reliable car rental service. From beaches to
            mountains, we'll get you there safely.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {destinations.map((destination) => (
            <Card key={destination.id} className="group hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-200 hover:border-gray-300 shadow-lg">
              <CardContent className="p-0">
                <div className="relative">
                  <img
                    src={
                      destination.image ||
                      `/placeholder.svg?height=200&width=400&query=${destination.name || "/placeholder.svg"} India destination`
                    }
                    alt={destination.name}
                    className="w-full h-32 md:h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  {destination.popular && (
                    <Badge className="absolute top-3 left-3 bg-primary text-xs md:text-sm px-3 py-1">⭐ Popular</Badge>
                  )}
                  <div className="absolute top-3 right-3 bg-background/90 backdrop-blur rounded-full p-2 md:p-3">
                    <div className="flex items-center gap-1">
                      <Star className="h-4 w-4 md:h-5 md:w-5 fill-yellow-400 text-yellow-400" />
                      <span className="text-sm md:text-base font-semibold">{destination.rating}</span>
                    </div>
                  </div>
                </div>

                <div className="p-4 md:p-6">
                  <div className="mb-3 md:mb-4">
                    <div className="flex items-center gap-2 mb-2">
                      <MapPin className="h-3 w-3 md:h-4 md:w-4 text-primary" />
                      <span className="text-xs md:text-sm text-muted-foreground font-medium">{destination.state}</span>
                    </div>
                    <h3 className="text-base md:text-lg font-semibold mb-2">{destination.name}</h3>
                    <p className="text-xs md:text-sm text-muted-foreground leading-relaxed">{destination.description}</p>
                  </div>

                  <div className="flex flex-wrap gap-1.5 mb-3 md:mb-4">
                    {destination.highlights.map((highlight, index) => (
                      <Badge key={index} variant="outline" className="text-xs px-2 py-1">
                        {highlight}
                      </Badge>
                    ))}
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="hidden md:flex items-center gap-2 text-xs text-muted-foreground">
                      <Camera className="h-3 w-3" />
                      <span>Perfect for road trips</span>
                    </div>
                    <Button
                      variant="outline"
                      size="sm"
                      className="text-xs md:text-sm ml-auto md:ml-0 bg-transparent px-3 py-1.5 md:px-4 md:py-2 border hover:bg-primary hover:text-white transition-all"
                    >
                      Explore
                    </Button>
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
