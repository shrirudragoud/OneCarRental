"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, MapPin, Users } from "lucide-react"
import { useState } from "react"

const cars = [
  {
    id: 1,
    brand: "HONDA",
    logo: "/honda-logo.jpg",
    name: "Honda Civic Type R",
    specs: "Automatic • Petrol • 4 Seats",
    colors: ["bg-yellow-400", "bg-red-500", "bg-blue-500", "bg-gray-400"],
    image: "/yellow-honda-civic-type-r-sports-car-side-view.jpg",
    price: 64,
  },
  {
    id: 2,
    brand: "BMW",
    logo: null,
    name: "BMW M3 Competition",
    specs: "Automatic • Petrol • 4 Seats",
    colors: ["bg-blue-600", "bg-black", "bg-white", "bg-gray-600"],
    image: "/blue-bmw-m3-luxury-sports-sedan.jpg",
    price: 89,
  },
  {
    id: 3,
    brand: "MERCEDES",
    logo: null,
    name: "Mercedes C-Class",
    specs: "Automatic • Petrol • 5 Seats",
    colors: ["bg-gray-300", "bg-black", "bg-blue-800", "bg-red-600"],
    image: "/silver-mercedes-c-class-luxury-sedan.jpg",
    price: 75,
  },
]

export function HeroSection() {
  const [selectedCar, setSelectedCar] = useState(0)

  const handleCarClick = (index: number) => {
    setSelectedCar(index)
  }

  return (
    <section id="home" className="relative min-h-screen bg-gradient-to-br from-amber-50 via-background to-orange-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="text-center mb-6">
          <Badge variant="outline" className="text-sm font-medium mb-3 bg-primary/10 text-primary border-primary/20">
            🌟 Create Unforgettable Memories
          </Badge>
          <h1 className="text-3xl md:text-4xl font-bold text-balance leading-tight mb-4">
            Adventure Awaits <span className="text-primary">With Friends & Family</span>
          </h1>
          <p className="text-base text-muted-foreground text-pretty max-w-2xl mx-auto">
            We provide the best car options and expert services for the greatest customer experience.
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <Card className="bg-white/80 backdrop-blur shadow-xl overflow-hidden">
            <CardContent className="p-6">
              {/* Cars Section */}
              <div className="mb-6">
                <style jsx>{`
                  .car-layout {
                    width: 100%;
                    display: flex;
                    flex-direction: row-reverse;
                    gap: 16px;
                    height: 320px;
                  }
                  .car-card {
                    transition: all 0.6s cubic-bezier(0.4, 0, 0.2, 1);
                    cursor: pointer;
                    overflow: hidden;
                    border-radius: 12px;
                  }
                  .car-expanded {
                    flex: 2.5;
                    transform: scale(1.02);
                    z-index: 10;
                    box-shadow: 0 10px 25px rgba(0,0,0,0.15);
                  }
                  .car-collapsed {
                    flex: 0.8;
                    opacity: 0.85;
                  }
                  .grow1 {
                    flex-grow: 1;
                  }
                  .car-image {
                    transition: all 0.5s ease;
                    object-fit: cover;
                    border-radius: 8px;
                  }
                  .car-expanded .car-image {
                    height: 160px;
                  }
                  .car-collapsed .car-image {
                    height: 100px;
                  }
                  .car-content {
                    transition: all 0.5s ease;
                  }
                  .car-expanded .car-content {
                    padding: 1.5rem;
                  }
                  .car-collapsed .car-content {
                    padding: 1rem;
                  }
                  .car-details {
                    transition: all 0.5s ease;
                  }
                  .car-collapsed .car-details {
                    opacity: 0.8;
                    transform: scale(0.95);
                  }
                `}</style>

                <section className="car-layout">
                  {/* Car 1 - Default expanded */}
                  <div
                    className={`car-card ${selectedCar === 0 ? "car-expanded" : "car-collapsed"}`}
                    onClick={() => handleCarClick(0)}
                  >
                    <Card className="bg-gradient-to-br from-yellow-50 to-orange-50 shadow-md h-full border-0">
                      <CardContent className="car-content p-0">
                        <div className="car-details">
                          <div className="flex items-center gap-2 mb-3">
                            {cars[0].logo ? (
                              <img
                                src={cars[0].logo || "/placeholder.svg"}
                                alt={cars[0].brand}
                                className="h-5 w-auto"
                              />
                            ) : (
                              <div className="w-5 h-5 rounded-full bg-red-600 flex items-center justify-center">
                                <span className="text-white text-xs font-bold">H</span>
                              </div>
                            )}
                            <span className="text-xs font-medium text-muted-foreground">{cars[0].brand}</span>
                          </div>

                          <h3 className={`font-bold mb-2 ${selectedCar === 0 ? "text-xl" : "text-sm"}`}>
                            {cars[0].name}
                          </h3>
                          {selectedCar === 0 && <p className="text-sm text-muted-foreground mb-3">{cars[0].specs}</p>}

                          <div className="flex gap-1 mb-4">
                            {cars[0].colors.map((color, idx) => (
                              <div
                                key={idx}
                                className={`${selectedCar === 0 ? "w-3 h-3" : "w-2 h-2"} rounded-full ${color} ${color === "bg-white" ? "border border-gray-300" : ""}`}
                              ></div>
                            ))}
                          </div>
                        </div>

                        <div className="relative mb-4 overflow-hidden rounded-lg">
                          <img
                            src={cars[0].image || "/placeholder.svg"}
                            alt={cars[0].name}
                            className="car-image w-full"
                          />
                        </div>

                        <div className="car-details">
                          <div className="flex items-center justify-between">
                            <div>
                              <span className={`font-bold text-primary ${selectedCar === 0 ? "text-2xl" : "text-lg"}`}>
                                ${cars[0].price}
                              </span>
                              <span className="text-sm text-muted-foreground">/day</span>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>

                  {/* Car 2 */}
                  <div
                    className={`car-card ${selectedCar === 1 ? "car-expanded" : "car-collapsed"}`}
                    onClick={() => handleCarClick(1)}
                  >
                    <Card className="bg-gradient-to-br from-blue-50 to-indigo-50 shadow-md h-full border-0">
                      <CardContent className="car-content p-0">
                        <div className="car-details">
                          <div className="flex items-center gap-2 mb-3">
                            <div className="w-5 h-5 rounded-full bg-blue-600 flex items-center justify-center">
                              <span className="text-white text-xs font-bold">B</span>
                            </div>
                            <span className="text-xs font-medium text-muted-foreground">{cars[1].brand}</span>
                          </div>

                          <h3 className={`font-bold mb-2 ${selectedCar === 1 ? "text-xl" : "text-sm"}`}>
                            {cars[1].name}
                          </h3>
                          {selectedCar === 1 && <p className="text-sm text-muted-foreground mb-3">{cars[1].specs}</p>}

                          <div className="flex gap-1 mb-4">
                            {cars[1].colors.map((color, idx) => (
                              <div
                                key={idx}
                                className={`${selectedCar === 1 ? "w-3 h-3" : "w-2 h-2"} rounded-full ${color} ${color === "bg-white" ? "border border-gray-300" : ""}`}
                              ></div>
                            ))}
                          </div>
                        </div>

                        <div className="relative mb-4 overflow-hidden rounded-lg">
                          <img
                            src={cars[1].image || "/placeholder.svg"}
                            alt={cars[1].name}
                            className="car-image w-full"
                          />
                        </div>

                        <div className="car-details">
                          <div className="flex items-center justify-between">
                            <div>
                              <span className={`font-bold text-primary ${selectedCar === 1 ? "text-2xl" : "text-lg"}`}>
                                ${cars[1].price}
                              </span>
                              <span className="text-sm text-muted-foreground">/day</span>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>

                  {/* Car 3 - Takes more space when not selected */}
                  <div
                    className={`car-card ${selectedCar === 2 ? "car-expanded" : "car-collapsed grow1"}`}
                    onClick={() => handleCarClick(2)}
                  >
                    <Card className="bg-gradient-to-br from-gray-50 to-slate-50 shadow-md h-full border-0">
                      <CardContent className="car-content p-0">
                        <div className="car-details">
                          <div className="flex items-center gap-2 mb-3">
                            <div className="w-5 h-5 flex items-center justify-center">
                              <span className="text-sm font-bold">★</span>
                            </div>
                            <span className="text-xs font-medium text-muted-foreground">{cars[2].brand}</span>
                          </div>

                          <h3 className={`font-bold mb-2 ${selectedCar === 2 ? "text-xl" : "text-sm"}`}>
                            {cars[2].name}
                          </h3>
                          {selectedCar === 2 && <p className="text-sm text-muted-foreground mb-3">{cars[2].specs}</p>}

                          <div className="flex gap-1 mb-4">
                            {cars[2].colors.map((color, idx) => (
                              <div
                                key={idx}
                                className={`${selectedCar === 2 ? "w-3 h-3" : "w-2 h-2"} rounded-full ${color} ${color === "bg-white" ? "border border-gray-300" : ""}`}
                              ></div>
                            ))}
                          </div>
                        </div>

                        <div className="relative mb-4 overflow-hidden rounded-lg">
                          <img
                            src={cars[2].image || "/placeholder.svg"}
                            alt={cars[2].name}
                            className="car-image w-full"
                          />
                        </div>

                        <div className="car-details">
                          <div className="flex items-center justify-between">
                            <div>
                              <span className={`font-bold text-primary ${selectedCar === 2 ? "text-2xl" : "text-lg"}`}>
                                ${cars[2].price}
                              </span>
                              <span className="text-sm text-muted-foreground">/day</span>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </section>

                <div className="flex justify-center gap-2 mt-4">
                  {cars.map((_, idx) => (
                    <button
                      key={idx}
                      className={`w-3 h-3 rounded-full transition-all ${selectedCar === idx ? "bg-primary scale-110" : "bg-gray-300 hover:bg-gray-400"}`}
                      onClick={() => setSelectedCar(idx)}
                    />
                  ))}
                </div>
              </div>

              <div className="border-t pt-6">
                <h3 className="text-lg font-semibold mb-4 text-center">Book Your Adventure</h3>
                <div className="grid md:grid-cols-4 gap-4 mb-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium flex items-center gap-2">
                      <MapPin className="h-4 w-4 text-primary" />
                      Pick-up Location
                    </label>
                    <select className="w-full p-3 rounded-lg border border-border bg-background text-sm focus:ring-2 focus:ring-primary/20 focus:border-primary">
                      <option>Select location</option>
                      <option>New York</option>
                      <option>Los Angeles</option>
                      <option>Miami</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium flex items-center gap-2">
                      <Calendar className="h-4 w-4 text-primary" />
                      Pick-up Date
                    </label>
                    <input
                      type="date"
                      className="w-full p-3 rounded-lg border border-border bg-background text-sm focus:ring-2 focus:ring-primary/20 focus:border-primary"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium flex items-center gap-2">
                      <Calendar className="h-4 w-4 text-primary" />
                      Return Date
                    </label>
                    <input
                      type="date"
                      className="w-full p-3 rounded-lg border border-border bg-background text-sm focus:ring-2 focus:ring-primary/20 focus:border-primary"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium flex items-center gap-2">
                      <Users className="h-4 w-4 text-primary" />
                      Passengers
                    </label>
                    <select className="w-full p-3 rounded-lg border border-border bg-background text-sm focus:ring-2 focus:ring-primary/20 focus:border-primary">
                      <option>2 passengers</option>
                      <option>4 passengers</option>
                      <option>7+ passengers</option>
                    </select>
                  </div>
                </div>
                <Button
                  className="w-full bg-primary hover:bg-primary/90 text-white font-semibold py-4 text-lg rounded-lg shadow-lg hover:shadow-xl transition-all"
                  size="lg"
                >
                  RENT NOW - {cars[selectedCar].name} (${cars[selectedCar].price}/day)
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
