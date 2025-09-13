import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Star, Users, Fuel, Settings } from "lucide-react"

const cars = [
  {
    id: 1,
    name: "Mercedes C-Class",
    type: "Luxury Sedan",
    price: 89,
    rating: 4.8,
    passengers: 4,
    fuel: "Petrol",
    transmission: "Automatic",
    image: "/silver-mercedes-c-class-luxury-sedan.jpg",
    popular: true,
  },
  {
    id: 2,
    name: "BMW X5",
    type: "Premium SUV",
    price: 125,
    rating: 4.9,
    passengers: 7,
    fuel: "Hybrid",
    transmission: "Automatic",
    image: "/white-bmw-x5-suv-family-car.jpg",
    popular: false,
  },
  {
    id: 3,
    name: "Ford Mustang",
    type: "Sports Car",
    price: 95,
    rating: 4.7,
    passengers: 4,
    fuel: "Petrol",
    transmission: "Manual",
    image: "/red-ford-mustang-sports-car-convertible.jpg",
    popular: false,
  },
  {
    id: 4,
    name: "Honda CR-V",
    type: "Family SUV",
    price: 75,
    rating: 4.6,
    passengers: 5,
    fuel: "Hybrid",
    transmission: "Automatic",
    image: "/blue-honda-cr-v-family-suv.jpg",
    popular: true,
  },
  {
    id: 5,
    name: "Tesla Model 3",
    type: "Electric Sedan",
    price: 110,
    rating: 4.9,
    passengers: 5,
    fuel: "Electric",
    transmission: "Automatic",
    image: "/white-tesla-model-3-electric-sedan.jpg",
    popular: false,
  },
  {
    id: 6,
    name: "Jeep Wrangler",
    type: "Adventure SUV",
    price: 85,
    rating: 4.5,
    passengers: 4,
    fuel: "Petrol",
    transmission: "Manual",
    image: "/green-jeep-wrangler-off-road-adventure-suv.jpg",
    popular: false,
  },
]

export function CarCatalogue() {
  return (
    <section id="catalogue" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <Badge variant="secondary" className="mb-4">
            🚗 Car Catalogue
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">
            All Cars That <span className="text-primary">You Need</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Choose from our diverse fleet of vehicles perfect for every adventure, from family road trips to romantic
            getaways.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {cars.map((car) => (
            <Card key={car.id} className="group hover:shadow-lg transition-all duration-300 overflow-hidden">
              <CardContent className="p-0">
                <div className="relative">
                  <img
                    src={car.image || "/placeholder.svg"}
                    alt={car.name}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  {car.popular && <Badge className="absolute top-3 left-3 bg-primary">⭐ Popular</Badge>}
                  <div className="absolute top-3 right-3 bg-background/80 backdrop-blur rounded-full p-2">
                    <div className="flex items-center gap-1">
                      <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      <span className="text-sm font-medium">{car.rating}</span>
                    </div>
                  </div>
                </div>

                <div className="p-6">
                  <div className="mb-4">
                    <h3 className="text-xl font-bold mb-1">{car.name}</h3>
                    <p className="text-muted-foreground text-sm">{car.type}</p>
                  </div>

                  <div className="flex items-center gap-4 mb-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Users className="h-4 w-4" />
                      <span>{car.passengers}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Fuel className="h-4 w-4" />
                      <span>{car.fuel}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Settings className="h-4 w-4" />
                      <span>{car.transmission}</span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-2xl font-bold text-primary">${car.price}</span>
                      <span className="text-muted-foreground">/day</span>
                    </div>
                    <Button>Book Now</Button>
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
