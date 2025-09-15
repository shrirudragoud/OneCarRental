"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ChevronLeft, ChevronRight, Phone } from "lucide-react"
import { useState } from "react"

const cars = [
  {
    id: 1,
    brand: "MARUTI SUZUKI",
    logo: null,
    name: "Maruti Suzuki Swift",
    specs: "Manual • Petrol • 5 Seats",
    colors: ["bg-red-500", "bg-white", "bg-blue-500", "bg-gray-400"],
    image: "/maruti-suzuki-swift-red.jpg",
    price: 25,
  },
  {
    id: 2,
    brand: "MARUTI SUZUKI",
    logo: null,
    name: "Maruti Ertiga",
    specs: "Manual • Petrol • 7 Seats",
    colors: ["bg-gray-600", "bg-white", "bg-blue-600", "bg-red-600"],
    image: "/maruti-ertiga-gray.jpg",
    price: 35,
  },
  {
    id: 3,
    brand: "TATA",
    logo: null,
    name: "Tata Tiago",
    specs: "Manual • Petrol • 5 Seats",
    colors: ["bg-blue-600", "bg-white", "bg-red-500", "bg-gray-500"],
    image: "/tata-tiago-blue.jpg",
    price: 20,
  },
]

export function HeroSection() {
  const [selectedCar, setSelectedCar] = useState(0)

  const handleCarClick = (index: number) => {
    setSelectedCar(index)
  }

  const nextCar = () => {
    setSelectedCar((prev) => (prev + 1) % cars.length)
  }

  const prevCar = () => {
    setSelectedCar((prev) => (prev - 1 + cars.length) % cars.length)
  }

  return (
    <section id="home" className="relative min-h-screen bg-gradient-to-br from-amber-50 via-background to-orange-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="text-center mb-6">
          <Badge variant="outline" className="text-sm font-medium mb-3 bg-primary text-white border-primary">
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
                  /* Desktop Layout */
                  .car-layout {
                    width: 100%;
                    display: flex;
                    flex-direction: row-reverse;
                    gap: 16px;
                    height: 320px;
                  }
                  
                  /* Mobile Layout */
                  @media (max-width: 768px) {
                    .car-layout {
                      flex-direction: column;
                      height: auto;
                      gap: 12px;
                    }
                    
                    .mobile-carousel {
                      position: relative;
                      overflow: hidden;
                    }
                    
                    .mobile-car-container {
                      display: flex;
                      transition: transform 0.5s ease;
                      transform: translateX(-${selectedCar * 100}%);
                    }
                    
                    .mobile-car-slide {
                      min-width: 100%;
                      flex-shrink: 0;
                    }
                    
                    .mobile-nav-button {
                      position: absolute;
                      top: 50%;
                      transform: translateY(-50%);
                      z-index: 20;
                      background: rgba(255, 255, 255, 0.9);
                      border: 1px solid rgba(0, 0, 0, 0.1);
                      border-radius: 50%;
                      width: 40px;
                      height: 40px;
                      display: flex;
                      align-items: center;
                      justify-content: center;
                      cursor: pointer;
                      transition: all 0.2s ease;
                    }
                    
                    .mobile-nav-button:hover {
                      background: white;
                      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
                    }
                    
                    .mobile-nav-left {
                      left: 10px;
                    }
                    
                    .mobile-nav-right {
                      right: 10px;
                    }
                  }
                  
                  .car-card {
                    transition: all 0.6s cubic-bezier(0.4, 0, 0.2, 1);
                    cursor: pointer;
                    overflow: hidden;
                    border-radius: 12px;
                  }
                  
                  /* Desktop car states */
                  @media (min-width: 769px) {
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
                  }
                  
                  /* Mobile car states */
                  @media (max-width: 768px) {
                    .car-card {
                      height: 300px;
                    }
                    .car-expanded, .car-collapsed {
                      flex: none;
                      transform: none;
                      opacity: 1;
                    }
                  }
                  
                  .car-image {
                    transition: all 0.5s ease;
                    object-fit: cover;
                    border-radius: 8px;
                    width: 100%;
                  }
                  
                  /* Desktop image sizing */
                  @media (min-width: 769px) {
                    .car-expanded .car-image {
                      height: 140px;
                    }
                    .car-collapsed .car-image {
                      height: 80px;
                    }
                  }
                  
                  /* Mobile image sizing */
                  @media (max-width: 768px) {
                    .car-image {
                      height: 120px;
                    }
                  }
                  
                  .car-content {
                    transition: all 0.5s ease;
                  }
                  
                  /* Desktop content padding */
                  @media (min-width: 769px) {
                    .car-expanded .car-content {
                      padding: 1.25rem;
                    }
                    .car-collapsed .car-content {
                      padding: 0.75rem;
                    }
                  }
                  
                  /* Mobile content padding */
                  @media (max-width: 768px) {
                    .car-content {
                      padding: 1rem;
                    }
                  }
                  
                  .car-details {
                    transition: all 0.5s ease;
                  }
                  
                  /* Desktop details scaling */
                  @media (min-width: 769px) {
                    .car-collapsed .car-details {
                      opacity: 0.9;
                      transform: scale(0.9);
                    }
                    .car-collapsed .car-title {
                      font-size: 0.875rem;
                      line-height: 1.25rem;
                    }
                    .car-collapsed .car-specs {
                      font-size: 0.75rem;
                      line-height: 1rem;
                    }
                  }
                  
                  /* Responsive text sizing */
                  .car-title-expanded {
                    font-size: 1.25rem;
                    line-height: 1.75rem;
                  }
                  
                  .car-title-collapsed {
                    font-size: 0.875rem;
                    line-height: 1.25rem;
                  }
                  
                  .car-specs-text {
                    font-size: 0.875rem;
                    line-height: 1.25rem;
                  }
                  
                  @media (max-width: 768px) {
                    .car-title-expanded, .car-title-collapsed {
                      font-size: 1.125rem;
                      line-height: 1.5rem;
                    }
                    .car-specs-text {
                      font-size: 0.8rem;
                      line-height: 1.125rem;
                    }
                  }
                `}</style>

                <div className="hidden md:block">
                  {/* Desktop Layout */}
                  <section className="car-layout">
                    {cars.map((car, index) => (
                      <div
                        key={car.id}
                        className={`car-card ${
                          selectedCar === index ? "car-expanded" : "car-collapsed"
                        } ${index === 2 && selectedCar !== 2 ? "grow1" : ""}`}
                        onClick={() => handleCarClick(index)}
                      >
                        <Card
                          className={`${
                            index === 0
                              ? "bg-gradient-to-br from-yellow-50 to-orange-50"
                              : index === 1
                                ? "bg-gradient-to-br from-blue-50 to-indigo-50"
                                : "bg-gradient-to-br from-gray-50 to-slate-50"
                          } shadow-md h-full border-0`}
                        >
                          <CardContent className="car-content p-0">
                            <div className="car-details">
                              <div className="flex items-center gap-2 mb-3">
                                {car.logo ? (
                                  <img src={car.logo || "/placeholder.svg"} alt={car.brand} className="h-5 w-auto" />
                                ) : (
                                  <div
                                    className={`w-5 h-5 rounded-full ${
                                      index === 0 ? "bg-red-600" : index === 1 ? "bg-blue-600" : "bg-blue-800"
                                    } flex items-center justify-center`}
                                  >
                                    <span className="text-black text-xs font-bold">{car.brand.charAt(0)}</span>
                                  </div>
                                )}
                                <span className="text-xs font-medium text-muted-foreground">{car.brand}</span>
                              </div>

                              <h3
                                className={`font-bold mb-2 ${selectedCar === index ? "car-title-expanded" : "car-title-collapsed"}`}
                              >
                                {car.name}
                              </h3>
                              {selectedCar === index && (
                                <p className="car-specs-text text-muted-foreground mb-3">{car.specs}</p>
                              )}

                              <div className="flex gap-1 mb-4">
                                {car.colors.map((color, idx) => (
                                  <div
                                    key={idx}
                                    className={`${selectedCar === index ? "w-3 h-3" : "w-2 h-2"} rounded-full ${color} ${color === "bg-white" ? "border border-gray-300" : ""}`}
                                  ></div>
                                ))}
                              </div>
                            </div>

                            <div className="relative mb-4 overflow-hidden rounded-lg">
                              <img src={car.image || "/placeholder.svg"} alt={car.name} className="car-image w-full" />
                            </div>

                            <div className="car-details">
                              <div className="flex items-center justify-between">
                                <div>
                                  <span
                                    className={`font-bold text-primary ${selectedCar === index ? "text-2xl" : "text-lg"}`}
                                  >
                                    ${car.price}
                                  </span>
                                  <span className="text-sm text-muted-foreground">/day</span>
                                </div>
                              </div>
                            </div>
                          </CardContent>
                        </Card>
                      </div>
                    ))}
                  </section>
                </div>

                <div className="md:hidden">
                  {/* Mobile Carousel Layout */}
                  <div className="mobile-carousel">
                    <div className="mobile-car-container">
                      {cars.map((car, index) => (
                        <div key={car.id} className="mobile-car-slide">
                          <Card
                            className={`${
                              index === 0
                                ? "bg-gradient-to-br from-yellow-50 to-orange-50"
                                : index === 1
                                  ? "bg-gradient-to-br from-blue-50 to-indigo-50"
                                  : "bg-gradient-to-br from-gray-50 to-slate-50"
                            } shadow-md h-full border-0 mx-2`}
                          >
                            <CardContent className="car-content p-0">
                              <div className="flex items-center gap-2 mb-3">
                                {car.logo ? (
                                  <img src={car.logo || "/placeholder.svg"} alt={car.brand} className="h-6 w-auto" />
                                ) : (
                                  <div
                                    className={`w-6 h-6 rounded-full ${
                                      index === 0 ? "bg-red-600" : index === 1 ? "bg-blue-600" : "bg-blue-800"
                                    } flex items-center justify-center`}
                                  >
                                    <span className="text-black text-sm font-bold">{car.brand.charAt(0)}</span>
                                  </div>
                                )}
                                <span className="text-sm font-medium text-muted-foreground">{car.brand}</span>
                              </div>

                              <h3 className="car-title-expanded font-bold mb-2">{car.name}</h3>
                              <p className="car-specs-text text-muted-foreground mb-3">{car.specs}</p>

                              <div className="flex gap-1 mb-4">
                                {car.colors.map((color, idx) => (
                                  <div
                                    key={idx}
                                    className={`w-3 h-3 rounded-full ${color} ${color === "bg-white" ? "border border-gray-300" : ""}`}
                                  ></div>
                                ))}
                              </div>

                              <div className="relative mb-4 overflow-hidden rounded-lg">
                                <img
                                  src={car.image || "/placeholder.svg"}
                                  alt={car.name}
                                  className="car-image w-full"
                                />
                              </div>

                              <div className="flex items-center justify-between">
                                <div>
                                  <span className="font-bold text-primary text-2xl">${car.price}</span>
                                  <span className="text-sm text-muted-foreground">/day</span>
                                </div>
                              </div>
                            </CardContent>
                          </Card>
                        </div>
                      ))}
                    </div>

                    <button className="mobile-nav-button mobile-nav-left" onClick={prevCar}>
                      <ChevronLeft className="h-5 w-5" />
                    </button>
                    <button className="mobile-nav-button mobile-nav-right" onClick={nextCar}>
                      <ChevronRight className="h-5 w-5" />
                    </button>
                  </div>
                </div>

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

              {/* Book Your Adventure Section */}
              <div className="border-t pt-6">
                <div className="text-center space-y-4">
                  <h3 className="text-xl font-semibold">Ready to Book {cars[selectedCar].name}?</h3>
                  <p className="text-muted-foreground">
                    Starting from{" "}
                    <span className="text-2xl font-bold text-primary">₹{cars[selectedCar].price * 75}</span>/day
                  </p>
                  <Button
                    className="bg-primary hover:bg-primary/90 text-white font-semibold py-3 px-4 md:py-4 md:px-8 text-sm md:text-lg rounded-lg shadow-lg hover:shadow-xl transition-all w-full md:w-auto"
                    size="lg"
                  >
                    <Phone className="h-4 w-4 md:h-5 md:w-5 mr-2" />
                    <span className="md:hidden">Call Us Now</span>
                    <span className="hidden md:inline">Call Us Now - Book {cars[selectedCar].name}</span>
                  </Button>
                  <p className="text-sm text-muted-foreground">
                    Call us at <span className="font-semibold text-primary">+91 9860571601</span> to book instantly
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
