"use client";

import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Search, CheckCircle } from "lucide-react";
import { motion } from "framer-motion";

const HowItWorks = () => {
  const steps = [
    {
      number: "01",
      icon: MapPin,
      title: "Introduce tu dirección",
      description:
        "Escribe la calle y número de tu propiedad. Nuestro sistema reconoce automáticamente la ubicación.",
    },
    {
      number: "02",
      icon: Search,
      title: "Selecciona el tipo",
      description:
        "Elige si es un piso, casa, terreno u otro tipo de inmueble para una valoración más precisa.",
    },
    {
      number: "03",
      icon: CheckCircle,
      title: "Obtén tu valoración",
      description:
        "Recibe instantáneamente el valor de mercado de tu propiedad basado en datos reales y actualizados.",
    },
  ];

  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.2, duration: 0.6 },
    }),
  };

  return (
    <section className="py-24 bg-background" id="como-funciona">
      <div className="container mx-auto px-4">
        {/* Section heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Cómo funciona en <span className="text-primary">3 sencillos pasos</span>
          </h2>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "80px" }}
            transition={{ duration: 0.8 }}
            className="h-1 bg-primary mx-auto rounded-full mb-6"
          />
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Nuestro proceso está diseñado para ser rápido, sencillo y totalmente transparente.
          </p>
        </motion.div>

        {/* Step Cards */}
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-10 relative">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                custom={index}
                viewport={{ once: true }}
                className="relative"
              >
                {/* Connecting line */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-20 left-full w-full h-0.5 bg-gradient-to-r from-primary/30 to-transparent z-0" />
                )}

                <div className="relative z-10 group bg-white/60 backdrop-blur-lg border border-border rounded-3xl p-8 shadow-md hover:shadow-xl hover:scale-[1.02] transition-all duration-300">
                  {/* Step Number (now on left) */}
                  <div className="absolute -top-4 -left-4 w-12 h-12 bg-gradient-to-tr from-primary to-primary/90 text-white rounded-full flex items-center justify-center font-bold text-lg shadow-md">
                    {step.number}
                  </div>

                  {/* Icon */}
                  <div className="w-20 h-20 rounded-full bg-gradient-to-tr from-accent to-accent/70 text-white flex items-center justify-center mx-auto mb-6 shadow-inner group-hover:scale-105 transition-transform duration-300">
                    <step.icon className="h-10 w-10" />
                  </div>

                  {/* Text */}
                  <div className="text-center">
                    <h3 className="text-xl font-semibold text-foreground mb-2">
                      {step.title}
                    </h3>

                    {/* Decorative underline */}
                    <div className="w-10 h-1 bg-primary/40 rounded-full mx-auto mb-4"></div>

                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Final Badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="inline-flex items-center gap-3 px-8 py-4 border border-accent/20 bg-accent/10 rounded-full shadow-sm hover:shadow-md transition-shadow">
            <CheckCircle className="h-6 w-6 text-accent" />
            <span className="text-base font-medium text-foreground">
              Proceso 100% automatizado y seguro
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HowItWorks;
