"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ChevronLeft, ChevronRight, Phone } from "lucide-react"
import { useState } from "react"

const cars = [
  {
    id: 1,
    brand: "  MARUTI SUZUKI",
    logo: "/logo.png",
    name: "  Maruti Suzuki Swift",
    specs: "  Manual • Petrol • 5 Seats",
    colors: ["bg-red-500", "bg-white", "bg-blue-500", "bg-gray-400"],
    image: "/maruti-suzuki-swift-red.jpg",
    price: 25,
  },
  {
    id: 2,
    brand: "  MARUTI SUZUKI",
    logo: "/logo.png",
    name: "  Maruti Ertiga",
    specs: " Manual • Petrol • 7 Seats",
    colors: ["bg-gray-600", "bg-white", "bg-blue-600", "bg-red-600"],
    image: "/maruti-ertiga-gray.jpg",
    price: 35,
  },
  {
    id: 3,
    brand: " TATA",
    logo: "/logo.png",
    name: "  Tata Tiago",
    specs: "  Manual • Petrol • 5 Seats",
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
        <div className="text-center mb-8 md:mb-12">
          <Badge variant="outline" className="text-sm md:text-base font-semibold mb-4 md:mb-6 bg-primary text-white border-primary px-4 py-2">
            🌟 Create Unforgettable Memories
          </Badge>
          <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold text-balance leading-tight mb-4 md:mb-6">
            Adventure Awaits <span className="text-primary">With Friends & Family</span>
          </h1>
          <p className="text-base md:text-lg lg:text-xl text-muted-foreground text-pretty max-w-3xl mx-auto px-4">
            We provide the best car options and expert services for the greatest customer experience.
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <Card className="bg-white/95 backdrop-blur shadow-2xl overflow-hidden border border-gray-200 hover:shadow-3xl transition-all duration-300">
            <CardContent className="p-4 md:p-8">
              {/* Cars Section */}
              <div className="mb-4">
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
                      gap: 16px;
                    }
                    
                    .mobile-carousel {
                      position: relative;
                      overflow: hidden;
                      border-radius: 16px;
                      margin: 0 8px;
                    }
                    
                    .mobile-car-container {
                      display: flex;
                      transition: transform 0.5s ease;
                      transform: translateX(-${selectedCar * 100}%);
                    }
                    
                    .mobile-car-slide {
                      min-width: 100%;
                      flex-shrink: 0;
                      padding: 0 4px;
                    }
                    
                    .mobile-nav-button {
                      position: absolute;
                      top: 50%;
                      transform: translateY(-50%);
                      z-index: 20;
                      background: rgba(255, 255, 255, 0.98);
                      border: 2px solid rgba(0, 0, 0, 0.15);
                      border-radius: 50%;
                      width: 48px;
                      height: 48px;
                      display: flex;
                      align-items: center;
                      justify-content: center;
                      cursor: pointer;
                      transition: all 0.3s ease;
                      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
                    }
                    
                    .mobile-nav-button:hover {
                      background: white;
                      box-shadow: 0 6px 20px rgba(0, 0, 0, 0.25);
                      transform: translateY(-50%) scale(1.08);
                      border-color: rgba(0, 0, 0, 0.2);
                    }
                    
                    .mobile-nav-button:active {
                      transform: translateY(-50%) scale(0.95);
                    }
                    
                    .mobile-nav-left {
                      left: 4px;
                    }
                    
                    .mobile-nav-right {
                      right: 4px;
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
                      height: 380px;
                      margin-bottom: 8px;
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
                      height: 160px;
                      object-fit: cover;
                      border-radius: 12px;
                    }
                  }
                  
                  .car-content {
                    transition: all 0.5s ease;
                  }
                  
                  /* Desktop content padding */
                  @media (min-width: 769px) {
                    .car-expanded .car-content {
                      padding: 1.75rem;
                    }
                    .car-collapsed .car-content {
                      padding: 1.5rem;
                    }
                  }
                  
                  /* Mobile content padding */
                  @media (max-width: 768px) {
                    .car-content {
                      padding: 1.75rem;
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
                    font-size: 1.3rem;
                    line-height: 1.6rem;
                    font-weight: 700;
                  }
                  
                  .car-title-collapsed {
                    font-size: 1rem;
                    line-height: 1.3rem;
                    font-weight: 600;
                  }
                  
                  .car-specs-text {
                    font-size: 0.9rem;
                    line-height: 1.3rem;
                    font-weight: 500;
                  }
                  
                  @media (max-width: 768px) {
                    .car-title-expanded, .car-title-collapsed {
                      font-size: 1.2rem;
                      line-height: 1.5rem;
                      font-weight: 700;
                    }
                    .car-specs-text {
                      font-size: 0.95rem;
                      line-height: 1.4rem;
                      font-weight: 500;
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
                          } shadow-xl h-full border border-gray-200 hover:border-gray-300 hover:shadow-2xl transition-all duration-300`}
                        >
                          <CardContent className="car-content p-0">
                            <div className="car-details">
                              <div className="flex items-center gap-2 mb-3">
                                {car.logo ? (
                                  <img src={car.logo || "/placeholder.svg"} alt={car.brand} className="h-6 w-6 object-contain" />
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

                            </div>

                            <div className="relative mb-4 overflow-hidden rounded-xl border border-gray-200 shadow-md">
                              <img src={car.image || "/placeholder.svg"} alt={car.name} className="car-image w-full" />
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
                            } shadow-xl h-full border border-gray-200 hover:border-gray-300 hover:shadow-2xl transition-all duration-300 mx-2`}
                          >
                            <CardContent className="car-content p-0">
                              <div className="flex items-center gap-2 mb-3">
                                {car.logo ? (
                                  <img src={car.logo || "/placeholder.svg"} alt={car.brand} className="h-7 w-7 object-contain" />
                                ) : (
                                  <div
                                    className={`w-6 h-6 rounded-full ${
                                      index === 0 ? "bg-red-600" : index === 1 ? "bg-blue-600" : "bg-blue-800"
                                    } flex items-center justify-center`}
                                  >
                                    <span className="text-white text-sm font-bold">{car.brand.charAt(0)}</span>
                                  </div>
                                )}
                                <span className="text-base font-semibold text-muted-foreground">{car.brand}</span>
                              </div>

                              <h3 className="text-xl font-bold mb-3">{car.name}</h3>
                              <p className="text-base text-muted-foreground mb-4">{car.specs}</p>


                              <div className="relative mb-4 overflow-hidden rounded-xl border border-gray-200 shadow-md">
                                <img
                                  src={car.image || "/placeholder.svg"}
                                  alt={car.name}
                                  className="car-image w-full"
                                />
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
              <div className="border-t pt-4 md:pt-6">
                <div className="text-center space-y-4 md:space-y-5">
                  <h3 className="text-xl md:text-2xl font-bold">Ready to Book {cars[selectedCar].name}?</h3>
                  <Button
                    onClick={() => window.open('tel:+917972456728', '_self')}
                    className="bg-primary hover:bg-primary/90 text-white font-bold py-4 px-8 md:py-5 md:px-10 text-lg md:text-xl rounded-xl shadow-lg hover:shadow-xl transition-all w-full max-w-sm mx-auto md:w-auto md:mx-0"
                    size="lg"
                  >
                    <Phone className="h-5 w-5 md:h-6 md:w-6 mr-3" />
                    <span className="md:hidden">Call Us Now</span>
                    <span className="hidden md:inline">Call Us Now - Book {cars[selectedCar].name}</span>
                  </Button>
                  <p className="text-base md:text-lg text-muted-foreground">
                    Call us at <span className="font-bold text-primary text-lg md:text-xl">+91 7972456728</span> to book instantly
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
