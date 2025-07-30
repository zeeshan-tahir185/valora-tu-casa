"use client";

import { Card, CardContent } from "@/components/ui/card";
import {
  Clock,
  Shield,
  TrendingUp,
  Users,
  Database,
  Smartphone,
} from "lucide-react";
import { motion } from "framer-motion";

const Benefits = () => {
  const benefits = [
    {
      icon: Clock,
      title: "Resultados Inmediatos",
      description:
        "Obtén la valoración de tu propiedad al instante, sin esperas ni trámites.",
    },
    {
      icon: Shield,
      title: "Sin Compromiso",
      description:
        "Servicio 100% gratuito. Úsalo todas las veces que quieras sin obligaciones.",
    },
    {
      icon: Database,
      title: "Base de Datos Líder",
      description:
        "La mayor base de datos de viviendas a nivel nacional con información actualizada.",
    },
    {
      icon: Smartphone,
      title: "100% Online",
      description:
        "Desde casa, sin citas ni papeleo. Disponible 24/7 desde cualquier dispositivo.",
    },
    {
      icon: TrendingUp,
      title: "Máxima Precisión",
      description:
        "Combinamos cientos de datos del mercado, vecindario, oferta y demanda.",
    },
    {
      icon: Users,
      title: "Asesoramiento Experto",
      description:
        "Acceso opcional a valoración profesional personalizada con agentes locales.",
    },
  ];

  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.15, duration: 0.6 },
    }),
  };

  return (
    <section
      className="py-20 bg-gradient-to-b from-white via-gray-50 to-white"
      id="beneficios"
    >
      <div className="mx-auto px-4" style={{ maxWidth: "1400px" }}>
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            La herramienta de valoraciones{" "}
            <span className="text-primary">más fiable</span>
          </h2>

          {/* ✨ Animated separator line */}
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "80px" }}
            transition={{ duration: 0.8 }}
            className="h-1 bg-primary mx-auto rounded-full mb-6"
          />

          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Combinamos tecnología avanzada con la experiencia de profesionales
            inmobiliarios para ofrecerte la valoración más precisa del mercado.
          </p>
        </div>

        <div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-10"
          style={{ maxWidth: "1400px", margin: "0px auto" }}
        >
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              initial="hidden"
              animate="visible"
              custom={index}
            >
              <div className="relative bg-white/60 border border-gray-200 backdrop-blur-xl shadow-sm rounded-3xl p-8 group transition-all duration-300 hover:shadow-xl hover:scale-[1.02]">
                {/* Icon floating at top center */}
                <div className="absolute -top-8 left-1/2 transform -translate-x-1/2">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-tr from-primary to-primary/80 flex items-center justify-center shadow-md group-hover:scale-110 transition-transform duration-300">
                    <benefit.icon className="h-8 w-8 text-white" />
                  </div>
                </div>

                {/* Card content */}
                <div className="pt-10 text-center">
                  <h3 className="text-lg font-semibold text-card-foreground mb-2">
                    {benefit.title}
                  </h3>
                  <div className="w-10 h-1 bg-primary/30 rounded-full mx-auto mb-4"></div>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}

        </div>

        {/* 🟢 Enhanced CTA Card */}
        <motion.div
          className="mt-24"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <Card className="mx-auto custom_pattern_bg bg-gradient-to-tr from-primary to-primary/90 text-primary-foreground shadow-lg rounded-2xl" style={{ maxWidth: "1400px" }}>
            <CardContent className="p-12 text-center">
              <h3 className="text-3xl font-bold mb-4">
                ¿Necesitas una valoración más precisa?
              </h3>
              <p className="text-xl mb-8 opacity-90">
                Más del 40% de los propietarios infravaloran su casa un 8%.
                Solicita una consulta gratuita con un agente profesional.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="px-8 py-4 bg-accent hover:bg-accent-hover text-accent-foreground font-semibold rounded-lg transition-all duration-300">
                  Valoración Profesional Gratuita
                </button>
                <button className="px-8 py-4 border-2 border-primary-foreground/30 hover:border-primary-foreground text-primary-foreground font-semibold rounded-lg transition-all duration-300">
                  Saber Más
                </button>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};

export default Benefits;
