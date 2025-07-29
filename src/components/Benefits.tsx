import { Card, CardContent } from "@/components/ui/card";
import { Clock, Shield, TrendingUp, Users, Database, Smartphone } from "lucide-react";

const Benefits = () => {
  const benefits = [
    {
      icon: Clock,
      title: "Resultados Inmediatos",
      description: "Obtén la valoración de tu propiedad al instante, sin esperas ni trámites."
    },
    {
      icon: Shield,
      title: "Sin Compromiso",
      description: "Servicio 100% gratuito. Úsalo todas las veces que quieras sin obligaciones."
    },
    {
      icon: Database,
      title: "Base de Datos Líder",
      description: "La mayor base de datos de viviendas a nivel nacional con información actualizada."
    },
    {
      icon: Smartphone,
      title: "100% Online",
      description: "Desde casa, sin citas ni papeleo. Disponible 24/7 desde cualquier dispositivo."
    },
    {
      icon: TrendingUp,
      title: "Máxima Precisión",
      description: "Combinamos cientos de datos del mercado, vecindario, oferta y demanda."
    },
    {
      icon: Users,
      title: "Asesoramiento Experto",
      description: "Acceso opcional a valoración profesional personalizada con agentes locales."
    }
  ];

  return (
    <section className="py-10 bg-gradient-subtle">
      <div className=" mx-auto px-4" style={{maxWidth:"1400px", margin:"0px auto"}}>
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            La herramienta de valoraciones 
            <span className="text-primary"> más fiable</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Combinamos tecnología avanzada con la experiencia de profesionales inmobiliarios 
            para ofrecerte la valoración más precisa del mercado.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8  mx-auto" style={{maxWidth:"1400px", margin:"0px auto"}}>
          {benefits.map((benefit, index) => (
            <Card key={index} className="group hover:shadow-card transition-all duration-300 hover:-translate-y-2 bg-card border-border">
              <CardContent className="p-8">
                <div className="mb-6">
                  <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                    <benefit.icon className="h-8 w-8 text-primary" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-card-foreground mb-4">
                  {benefit.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {benefit.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Professional valuation CTA */}
        <div className="mt-20">
          <Card className=" mx-auto bg-primary text-primary-foreground shadow-form" style={{maxWidth:"1400px", margin:"0px auto"}}>
            <CardContent className="p-12 text-center">
              <h3 className="text-3xl font-bold mb-4">
                ¿Necesitas una valoración más precisa?
              </h3>
              <p className="text-xl mb-8 opacity-90">
                Más del 40% de los propietarios infravaloran su casa un 8%. 
                Solicita una consulta gratuita con un agente profesional.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="px-8 py-4 bg-accent hover:bg-accent-hover text-accent-foreground font-semibold rounded-lg transition-colors duration-300">
                  Valoración Profesional Gratuita
                </button>
                <button className="px-8 py-4 border-2 border-primary-foreground/20 hover:border-primary-foreground/40 text-primary-foreground font-semibold rounded-lg transition-colors duration-300">
                  Saber Más
                </button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Benefits;