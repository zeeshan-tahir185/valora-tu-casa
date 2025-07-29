import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "María González",
      location: "Madrid",
      text: "Increíble lo rápido y preciso que fue. La valoración coincidió exactamente con la tasación oficial que hice después.",
      rating: 5,
      avatar: "/images/client2.jpeg"
    },
    {
      name: "Carlos Martín",
      location: "Barcelona", 
      text: "Perfecto para tener una idea antes de poner en venta. Me ayudó a fijar un precio competitivo desde el primer día.",
      rating: 5,
      avatar: "/images/client1.jpeg"
    },
    {
      name: "Ana Rodríguez",
      location: "Valencia",
      text: "Lo usé para saber cuánto había revalorizado mi piso en estos años. El resultado me sorprendió gratamente.",
      rating: 5,
      avatar: "/images/client4.webp"
    }
  ];

  const stats = [
    { value: "+50.000", label: "Valoraciones completadas" },
    { value: "98%", label: "Precisión promedio" },
    { value: "4.9/5", label: "Satisfacción del cliente" },
    { value: "< 60s", label: "Tiempo promedio" }
  ];

  return (
    <section className="py-20 bg-gradient-subtle" id="testimonios">
      <div className=" mx-auto px-4" style={{maxWidth:"1400px", margin:"0px auto"}}>
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Confían en nosotros más de 
            <span className="text-primary"> 50.000 propietarios</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Descubre por qué somos la herramienta de valoración más confiable del mercado.
          </p>
        </div>

        {/* Statistics */}
        <div className="grid md:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <Card key={index} className="text-center bg-card border-border hover:bg-accent/10 transition-all duration-300">
              <CardContent className="p-8">
                <div className="text-4xl font-bold text-primary mb-2">
                  {stat.value}
                </div>
                <div className="text-muted-foreground font-medium">
                  {stat.label}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Testimonials */}
        <div className="grid lg:grid-cols-3 gap-8  mx-auto" style={{maxWidth:"1400px", margin:"0px auto"}}>
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="group hover:shadow-card transition-all duration-300 hover:-translate-y-2 bg-card border-border">
              <CardContent className="p-8">
                {/* Quote icon */}
                <div className="mb-6">
                  <Quote className="h-8 w-8 text-primary/30" />
                </div>

                {/* Rating */}
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-amber-400 text-amber-400" />
                  ))}
                </div>

                {/* Testimonial text */}
                <p className="text-card-foreground mb-6 leading-relaxed italic">
                  "{testimonial.text}"
                </p>

                {/* Author */}
                <div className="flex items-center gap-4">
                  <img
                    src={testimonial.avatar}
                    alt={`${testimonial.name}'s avatar`}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <div className="font-semibold text-card-foreground">
                      {testimonial.name}
                    </div>
                    <div className="text-muted-foreground text-sm">
                      {testimonial.location}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Trust badge */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-6 px-8 py-6 bg-accent/10 rounded-2xl hover:bg-accent/20 transition-all duration-300">
            <div className="flex items-center gap-2">
              <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center">
                <Star className="h-6 w-6 text-accent-foreground fill-current" />
              </div>
              <div>
                <div className="text-2xl font-bold text-foreground">4.9/5</div>
                <div className="text-sm text-muted-foreground">+1000 reseñas</div>
              </div>
            </div>
            <div className="w-px h-12 bg-border"></div>
            <div className="text-left">
              <div className="font-semibold text-foreground">Valoración verificada</div>
              <div className="text-sm text-muted-foreground">Por clientes reales</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;