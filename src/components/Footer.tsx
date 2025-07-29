import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin, Phone, Mail, Calculator, Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

const Footer = () => {
  const quickLinks = [
    { name: "Cómo funciona", href: "#como-funciona" },
    { name: "Precios", href: "#precios" }, 
    { name: "Testimonios", href: "#testimonios" },
    { name: "Contacto", href: "#contacto" }
  ];

  const legalLinks = [
    { name: "Aviso Legal", href: "/aviso-legal" },
    { name: "Política de Privacidad", href: "/privacidad" },
    { name: "Política de Cookies", href: "/cookies" },
    { name: "Términos de Uso", href: "/terminos" }
  ];

  const socialLinks = [
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Linkedin, href: "#", label: "LinkedIn" }
  ];

  return (
    <footer className="bg-primary text-primary-foreground">
      {/* Main footer content */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-4 gap-12">
          {/* Company info */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-6">
              <Calculator className="h-8 w-8 text-accent" />
              <span className="text-2xl font-bold">ValoraTuCasa</span>
            </div>
            <p className="text-primary-foreground/80 mb-6 leading-relaxed">
              La plataforma líder en valoración online de inmuebles. 
              Resultados instantáneos, precisos y completamente gratuitos.
            </p>
            <div className="flex items-center gap-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="w-10 h-10 bg-primary-foreground/10 hover:bg-accent hover:text-accent-foreground rounded-full flex items-center justify-center transition-all duration-300"
                  aria-label={social.label}
                >
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="text-xl font-semibold mb-6">Enlaces Rápidos</h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href}
                    className="text-primary-foreground/80 hover:text-accent transition-colors duration-300"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-xl font-semibold mb-6">Legal</h3>
            <ul className="space-y-3">
              {legalLinks.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href}
                    className="text-primary-foreground/80 hover:text-accent transition-colors duration-300"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xl font-semibold mb-6">Contacto</h3>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <MapPin className="h-5 w-5 text-accent" />
                <span className="text-primary-foreground/80">
                  españa
                </span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-accent" />
                <span className="text-primary-foreground/80">
                  +34 2489243898
                </span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-accent" />
                <span className="text-primary-foreground/80">
                  info@valoratucasa.es
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA section */}
      <div className="border-t border-primary-foreground/10">
        <div className="container mx-auto px-4 py-12">
          <Card className="bg-accent text-accent-foreground p-8 text-center">
            <h3 className="text-2xl font-bold mb-4">
              ¿Listo para conocer el valor de tu propiedad?
            </h3>
            <p className="text-lg mb-6 opacity-90">
              Únete a miles de propietarios que ya conocen el valor real de su vivienda
            </p>
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary-hover text-primary-foreground font-semibold px-8 py-4"
            >
              Valorar Mi Propiedad Ahora
            </Button>
          </Card>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-primary-foreground/10">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-primary-foreground/60 text-sm">
              © 2025 ValoraTuCasa. Todos los derechos reservados.
            </p>
            <div className="flex items-center gap-6 text-sm text-primary-foreground/60">
              <span>🔒 Conexión segura SSL</span>
              <span>✓ Datos protegidos</span>
              <span>⚡ Resultados instantáneos</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;