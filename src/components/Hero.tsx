import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card } from "@/components/ui/card";
import { MapPin, Calculator, TrendingUp, Star, Clock } from "lucide-react";
import heroImage1 from "@/assets/bg_map.png";
import Partners from "@/components/Partners";
import { motion, useAnimation, Variants, Transition } from "framer-motion";

const Hero = () => {
  const [address, setAddress] = useState("");
  const [propertyType, setPropertyType] = useState("");
  const [currentImage, setCurrentImage] = useState(0);
  const [counter1, setCounter1] = useState(0);
  const [counter2, setCounter2] = useState(0);
  const [counter3, setCounter3] = useState(0);
  const [showPopup, setShowPopup] = useState(false);
  const controls = useAnimation();

  const images = [heroImage1];

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
      const frames = duration * 60;

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
      setShowPopup(true);
    }
  };

  const closePopup = () => {
    setShowPopup(false);
  };

  // Define animation variants with proper typing
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      } as Transition,
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      } as Transition,
    },
  };

  const cardHoverVariants: Variants = {
    hover: {
      scale: 1.03,
      transition: { duration: 0.3 } as Transition,
    },
  };

  const popupVariants: Variants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.3, ease: "easeOut" } },
  };

  return (
    <div className="hero_bg_gradient">
      <section id="inicio" className="relative min-h-screen flex items-center justify-center overflow-hidden mt-10">
        <div className="relative z-10 container mx-auto px-4 py-20">
          <motion.div
            className="max-w-4xl mx-auto text-center"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.div variants={itemVariants} className="mb-12">
              <h1 className="text-4xl md:text-6xl font-bold text-[#2C5389] mb-4 leading-tight tracking-tight">
                Descubre el valor real de tu
                <motion.span
                  className="block text-accent px-4 pb-4 pt-1 rounded-full mt-2 bg-secondary/50"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                >
                  vivienda en segundos
                </motion.span>
              </h1>
              <motion.div
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                viewport={{ once: true }}
                className="h-1 w-24 bg-accent mx-auto mt-2 origin-left rounded-full"
              />
              <motion.p
                variants={itemVariants}
                className="text-xl md:text-2xl text-[#2C5389] max-w-3xl mx-auto mt-6 leading-relaxed"
              >
                Valoración gratuita, instantánea y sin compromiso. Confía en la herramienta líder del mercado inmobiliario.
              </motion.p>
            </motion.div>

            <motion.div variants={itemVariants}>
              <motion.div
                variants={cardHoverVariants}
                whileHover="hover"
                transition={{ duration: 0.3 }}
              >
                <Card className="max-w-2xl mx-auto p-8 shadow-2xl bg-card/95 backdrop-blur-md border border-primary/20">
                  <motion.div
                    className="space-y-6"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                  >
                    <motion.div
                      variants={itemVariants}
                      className="flex items-center gap-3 justify-center mb-6"
                    >
                      <Calculator className="h-7 w-7 text-accent animate-pulse" />
                      <h2 className="text-3xl font-semibold text-card-foreground">
                        Valoración Instantánea
                      </h2>
                    </motion.div>

                    <motion.div variants={itemVariants} className="space-y-5">
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

                      <motion.div
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        transition={{ duration: 0.2 }}
                      >
                        <Button
                          onClick={handleValuation}
                          disabled={!address || !propertyType}
                          className="w-full h-14 text-lg font-semibold bg-accent hover:bg-accent-hover text-accent-foreground shadow-lg hover:shadow-xl transition-all duration-300 group"
                        >
                          <motion.div
                            className="mr-2 h-5 w-5"
                            animate={{ scale: [1, 1.2, 1] }}
                            transition={{ repeat: Infinity, duration: 1.5 }}
                          >
                            <TrendingUp />
                          </motion.div>
                          Valorar Mi Propiedad Gratis
                        </Button>
                      </motion.div>
                    </motion.div>

                    <motion.div
                      variants={itemVariants}
                      className="text-sm text-muted-foreground text-center flex items-center justify-center gap-2"
                    >
                      <Star className="h-4 w-4 text-accent" />
                      <span>100% Gratuito • Sin registro • Resultados instantáneos</span>
                    </motion.div>
                  </motion.div>
                </Card>
              </motion.div>
            </motion.div>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="mt-12 grid md:grid-cols-3 gap-6 max-w-3xl mx-auto"
            >
              {[
                { value: counter1, icon: Calculator, label: "Valoraciones realizadas" },
                { value: counter2, icon: Star, label: "Clientes satisfechos" },
                { value: counter3, icon: Clock, label: "Tiempo de valoración" },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{
                    scale: 1.05,
                    boxShadow: "0px 8px 20px rgba(0, 0, 0, 0.1)",
                    transition: { duration: 0.3 },
                  }}
                  className="text-center bg-white/95 py-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300"
                >
                  <div className="text-4xl font-bold text-accent mb-2">
                    {index === 0 && `+${Math.round(item.value).toLocaleString('es-ES')}`}
                    {index === 1 && `${Math.round(item.value)}%`}
                    {index === 2 && `< ${Math.round(item.value)}s`}
                  </div>
                  <div className="text-lg text-gray-800 flex items-center justify-center gap-2">
                    <item.icon className="h-5 w-5" />
                    {item.label}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>

        {showPopup && (
          <motion.div
            className="fixed inset-0 flex items-center justify-center z-50 bg-black/50"
            initial="hidden"
            animate="visible"
            variants={popupVariants}
          >
            <Card className="max-w-md p-6 bg-white shadow-xl rounded-lg">
              <motion.p
                className="text-lg text-gray-800 mb-4 text-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                Thank you for sending your details to ValoraTuCasa. We will contact you shortly.
              </motion.p>
              <Button
                onClick={closePopup}
                className="w-full h-12 text-lg font-semibold bg-accent hover:bg-accent-hover text-accent-foreground"
              >
                Close
              </Button>
            </Card>
          </motion.div>
        )}
      </section>
      <Partners />
    </div>
  );
};

export default Hero;