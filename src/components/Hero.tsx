import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card } from "@/components/ui/card";
import { MapPin, Calculator, TrendingUp, Home, Star, Clock } from "lucide-react";
import heroImage1 from "@/assets/hero-couple.jpg";
import heroImage2 from "@/assets/img1.jpg";
import heroImage3 from "@/assets/img2.jpg";
import heroImage4 from "@/assets/img3.jpg";
import { motion, useAnimation } from "framer-motion";

const Hero = () => {
  const [address, setAddress] = useState("");
  const [propertyType, setPropertyType] = useState("");
  const [currentImage, setCurrentImage] = useState(0);
  const [counter1, setCounter1] = useState(0);
  const [counter2, setCounter2] = useState(0);
  const [counter3, setCounter3] = useState(0);
  const controls = useAnimation();

  const images = [heroImage1, heroImage2, heroImage3, heroImage4];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [images.length]);

  useEffect(() => {
    const animateCounters = async () => {
      await controls.start({ opacity: 1, transition: { duration: 1 } });
      const target1 = 50000;
      const target2 = 98;
      const target3 = 60;
      const duration = 2;
      const frames = duration * 60; // 60 FPS approximation

      const step1 = target1 / frames;
      const step2 = target2 / frames;
      const step3 = target3 / frames;

      let frame = 0;
      const animate = setInterval(() => {
        frame++;
        setCounter1((prev) => (frame >= frames ? target1 : prev + step1));
        setCounter2((prev) => (frame >= frames ? target2 : prev + step2));
        setCounter3((prev) => (frame >= frames ? 60 : prev + step3));

        if (frame >= frames) {
          clearInterval(animate);
        }
      }, 1000 / 60);
    };
    animateCounters();
  }, [controls]);

  const handleValuation = () => {
    if (address && propertyType) {
      console.log("Iniciando valoración:", { address, propertyType });
    }
  };

  return (
    <div>
      <section id="inicio" className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-primary/90 to-primary-dark overflow-hidden mt-10">
        <div className="absolute inset-0">
          {images.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`Propiedad ${index + 1}`}
              className={`w-full h-full object-cover absolute transition-opacity duration-1000 ease-in-out ${
                index === currentImage ? "opacity-100" : "opacity-0"
              }`}
            />
          ))}
          <div className="absolute inset-0 bg-gradient-to-b from-primary/60 to-primary/80"></div>
        </div>

        <div className="relative z-10 container mx-auto px-4 py-20">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="mb-12"
            >
              <h1 className="text-4xl md:text-6xl font-bold text-primary-foreground mb-4 leading-tight tracking-tight">
                Descubre el valor real de tu
                <span className="block text-accent px-4 pb-4 pt-1 rounded-full mt-2 bg-secondary/50">
                  vivienda en segundos
                </span>
              </h1>
              <motion.div
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                viewport={{ once: true }}
                className="h-1 w-24 bg-accent mx-auto mt-2 origin-left rounded-full"
              />
              <p className="text-xl md:text-2xl text-primary-foreground/90 max-w-3xl mx-auto mt-6 leading-relaxed">
                Valoración gratuita, instantánea y sin compromiso. Confía en la herramienta líder del mercado inmobiliario.
              </p>
            </motion.div>

            <Card className="max-w-2xl mx-auto p-8 shadow-2xl bg-card/95 backdrop-blur-md border border-primary/20 transform transition-all hover:scale-[1.02]">
              <div className="space-y-6">
                <div className="flex items-center gap-3 justify-center mb-6">
                  <Calculator className="h-7 w-7 text-accent animate-pulse" />
                  <h2 className="text-3xl font-semibold text-card-foreground">
                    Valoración Instantánea
                  </h2>
                </div>

                <div className="space-y-5">
                  <div className="relative group">
                    <MapPin className="absolute left-3 top-3 h-5 w-5 text-accent transition-colors group-hover:text-accent-hover" />
                    <Input
                      placeholder="Calle y número de tu propiedad"
                      value={address}
                      onChange={(e) => setAddress(e.target.value)}
                      className="pl-10 h-12 text-lg border-primary/30 focus:ring-2 focus:ring-accent transition-all"
                    />
                  </div>

                  <Select value={propertyType} onValueChange={setPropertyType}>
                    <SelectTrigger className="h-12 text-lg border-primary/30 focus:ring-2 focus:ring-accent">
                      <SelectValue placeholder="Tipo de propiedad" />
                    </SelectTrigger>
                    <SelectContent className="bg-card border-primary/20">
                      <SelectItem value="piso">Piso/Apartamento</SelectItem>
                      <SelectItem value="casa">Casa/Chalet</SelectItem>
                      <SelectItem value="terreno">Terreno</SelectItem>
                      <SelectItem value="local">Local comercial</SelectItem>
                      <SelectItem value="oficina">Oficina</SelectItem>
                    </SelectContent>
                  </Select>

                  <Button
                    onClick={handleValuation}
                    disabled={!address || !propertyType}
                    className="w-full h-14 text-lg font-semibold bg-accent hover:bg-accent-hover text-accent-foreground shadow-lg hover:shadow-xl transition-all duration-300 group"
                  >
                    <TrendingUp className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
                    Valorar Mi Propiedad Gratis
                  </Button>
                </div>

                <div className="text-sm text-muted-foreground text-center flex items-center justify-center gap-2">
                  <Star className="h-4 w-4 text-accent" />
                  <span>100% Gratuito • Sin registro • Resultados instantáneos</span>
                </div>
              </div>
            </Card>

            <div className="mt-12 grid md:grid-cols-3 gap-6 max-w-3xl mx-auto">
              <motion.div
                initial={{ opacity: 0 }}
                animate={controls}
                className="text-center bg-white/95 py-6 rounded-xl shadow-md hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300"
              >
                <div className="text-4xl font-bold text-accent mb-2">+{Math.round(counter1).toLocaleString('es-ES')}</div>
                <div className="text-lg text-gray-800 flex items-center justify-center gap-2">
                  <Calculator className="h-5 w-5" />
                  Valoraciones realizadas
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0 }}
                animate={controls}
                className="text-center bg-white/95 py-6 rounded-xl shadow-md hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300"
              >
                <div className="text-4xl font-bold text-accent mb-2">{Math.round(counter2)}%</div>
                <div className="text-lg text-gray-800 flex items-center justify-center gap-2">
                  <Star className="h-5 w-5" />
                  Clientes satisfechos
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0 }}
                animate={controls}
                className="text-center bg-white/95 py-6 rounded-xl shadow-md hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300"
              >
                <div className="text-4xl font-bold text-accent mb-2">&lt; {Math.round(counter3)}s</div>
                <div className="text-lg text-gray-800 flex items-center justify-center gap-2">
                  <Clock className="h-5 w-5" />
                  Tiempo de valoración
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;