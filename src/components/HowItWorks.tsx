import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Search, CheckCircle } from "lucide-react";

const HowItWorks = () => {
  const steps = [
    {
      number: "01",
      icon: MapPin,
      title: "Introduce tu dirección",
      description: "Escribe la calle y número de tu propiedad. Nuestro sistema reconoce automáticamente la ubicación."
    },
    {
      number: "02", 
      icon: Search,
      title: "Selecciona el tipo",
      description: "Elige si es un piso, casa, terreno u otro tipo de inmueble para una valoración más precisa."
    },
    {
      number: "03",
      icon: CheckCircle,
      title: "Obtén tu valoración",
      description: "Recibe instantáneamente el valor de mercado de tu propiedad basado en datos reales y actualizados."
    }
  ];

  return (
    <section className="py-20 bg-background" id="como-funciona">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Cómo funciona en 
            <span className="text-primary"> 3 sencillos pasos</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Nuestro proceso está diseñado para ser rápido, sencillo y totalmente transparente.
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                {/* Connection line for desktop */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-20 left-full w-full h-0.5 bg-gradient-to-r from-primary/30 to-transparent z-0" />
                )}
                
                <Card className="relative z-10 group hover:shadow-card transition-all duration-300 hover:-translate-y-2 bg-card border-border">
                  <CardContent className="p-8 text-center">
                    <div className="mb-6 relative">
                      {/* Step number */}
                      <div className="absolute -top-4 -right-4 w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold text-lg">
                        {step.number}
                      </div>
                      
                      {/* Icon */}
                      <div className="w-20 h-20 bg-gradient-trust rounded-full flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300">
                        <step.icon className="h-10 w-10 text-accent-foreground" />
                      </div>
                    </div>
                    
                    <h3 className="text-2xl font-semibold text-card-foreground mb-4">
                      {step.title}
                    </h3>
                    
                    <p className="text-muted-foreground leading-relaxed">
                      {step.description}
                    </p>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>

        {/* Additional info */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-4 px-8 py-4 bg-accent/10 rounded-full">
            <CheckCircle className="h-6 w-6 text-accent" />
            <span className="text-lg font-medium text-foreground">
              Proceso 100% automatizado y seguro
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;