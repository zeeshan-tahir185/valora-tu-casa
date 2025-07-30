"use client";

import { FaStar, FaUsers } from "react-icons/fa";
import { motion } from "framer-motion";

const testimonials = [
  {
    name: "María González",
    role: "Propietaria en Madrid",
    review:
      "Increíble lo rápido y preciso que fue. La valoración coincidió exactamente con la tasación oficial que hice después.",
    image: "/images/client2.jpeg",
    location: "Madrid, Spain",
    date: "Sep 2024",
  },
  {
    name: "Carlos Martín",
    role: "Vendedor en Barcelona",
    review:
      "Perfecto para tener una idea antes de poner en venta. Me ayudó a fijar un precio competitivo desde el primer día.",
    image: "/images/client1.jpeg",
    highlighted: true,
    location: "Barcelona, Spain",
    date: "Jan 2025",
  },
  {
    name: "Ana Rodríguez",
    role: "Inversionista en Valencia",
    review:
      "Lo usé para saber cuánto había revalorizado mi piso en estos años. El resultado me sorprendió gratamente.",
    image: "/images/client4.webp",
    location: "Valencia, Spain",
    date: "July 2025",
  },
];

export default function Testimonials() {
  return (
    <section className="py-10 bg-background">
      <div className="max-w-[1440px] mx-auto px-4 text-center mb-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Más de{" "}
            <motion.span
              className="text-primary"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1.5, repeat: Infinity, repeatType: "reverse" }}
            >
              50.000+
            </motion.span>{" "}
            propietarios confían en nosotros
          </h2>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "80px" }}
            transition={{ duration: 0.8 }}
            className="h-1 bg-primary mx-auto rounded-full mb-6"
          />

          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mt-4">
            Descubre por qué somos la herramienta de valoración más confiable del mercado.
          </p>
        </motion.div>
      </div>

      {/* Testimonial Rows */}
      <div className="relative overflow-hidden">
        {/* First Row: Left to Right */}
        <div className="relative flex overflow-hidden mb-6">
          <div className="absolute inset-0 pointer-events-none z-10"></div>
          <div className="flex animate-marquee-left-to-right">
            {[...testimonials, ...testimonials, ...testimonials].map((t, i) => (
              <div
                key={`row1-${i}`}
                className={`flex-shrink-0 p-6 py-8 rounded-xl shadow-md mx-2 w-[340px] min-w-[340px] bg-card transition-all duration-300 hover:shadow-xl border ${t.highlighted ? "bg-primary/10 border border-primary" : ""
                  }`}
              >
                <div className="flex mb-3">
                  {[...Array(5)].map((_, j) => (
                    <FaStar key={j} className="text-amber-400 text-sm" />
                  ))}
                </div>
                <p className="text-sm text-card-foreground mb-4 italic leading-relaxed">
                  "{t.review}"
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <img
                      src={t.image}
                      alt={t.name}
                      width={36}
                      height={36}
                      className="rounded-full mr-3"
                    />
                    <div className="text-left">
                      <p className="font-semibold text-sm text-foreground">{t.name}</p>
                      <p className="text-xs text-muted-foreground">{t.role}</p>
                      <p className="text-xs text-muted-foreground">{t.location} - {t.date}</p>
                    </div>
                  </div>
                  <div className="flex items-center text-muted-foreground">
                    <FaUsers className="mr-1 text-sm" />
                    <span className="text-xs">Clientes</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Second Row: Right to Left */}
        <div className="relative flex overflow-hidden">
          <div className="absolute inset-0 pointer-events-none z-10"></div>
          <div className="flex animate-marquee-right-to-left">
            {[...testimonials, ...testimonials, ...testimonials].map((t, i) => (
              <div
                key={`row2-${i}`}
                className={`flex-shrink-0 p-6 py-8 rounded-xl shadow-md mx-2 w-[340px] min-w-[340px] bg-card transition-all duration-300 hover:shadow-xl border ${t.highlighted ? "bg-primary/10 border border-primary" : ""
                  }`}
              >
                <div className="flex mb-3">
                  {[...Array(5)].map((_, j) => (
                    <FaStar key={j} className="text-amber-400 text-sm" />
                  ))}
                </div>
                <p className="text-sm text-card-foreground mb-4 italic leading-relaxed">
                  "{t.review}"
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <img
                      src={t.image}
                      alt={t.name}
                      width={36}
                      height={36}
                      className="rounded-full mr-3"
                    />
                    <div className="text-left">
                      <p className="font-semibold text-sm text-foreground">{t.name}</p>
                      <p className="text-xs text-muted-foreground">{t.role}</p>
                      <p className="text-xs text-muted-foreground">{t.location} - {t.date}</p>
                    </div>
                  </div>
                  <div className="flex items-center text-muted-foreground">
                    <FaUsers className="mr-1 text-sm" />
                    <span className="text-xs">Clientes</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}