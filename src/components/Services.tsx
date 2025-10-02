import { Palette, ShoppingBag, Lightbulb, PackageCheck, Settings } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const Services = () => {
  const services = [
    {
      icon: Palette,
      title: 'Custom Design & Print Solutions',
      description: 'From concept to finished product, we provide tailored solutions for your unique needs. Our design team works closely with you to bring your vision to life.',
    },
    {
      icon: ShoppingBag,
      title: 'Ready-to-Order Products',
      description: 'Browse our catalog of pre-designed items available for quick purchase and delivery. Perfect for immediate needs and popular designs.',
    },
    {
      icon: Lightbulb,
      title: 'Designing Facilities',
      description: 'Full design services, consultations, and reviews. Our expert team helps refine your ideas with professional guidance and iterative feedback.',
    },
    {
      icon: PackageCheck,
      title: 'Small-Batch Manufacturing',
      description: 'Ideal for prototyping and low-volume production runs. Perfect for testing market fit before scaling up your production.',
    },
    {
      icon: Settings,
      title: 'Replacement Parts & Accessories',
      description: 'On-demand printing for hard-to-find or discontinued parts. We help extend the life of your products with custom replacements.',
    },
  ];

  return (
    <section id="services" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in-up">
          <span className="text-accent font-semibold text-sm uppercase tracking-wider">
            Our Services
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mt-4 mb-6">
            Comprehensive{' '}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              3D Printing Solutions
            </span>
          </h2>
          <p className="text-lg text-muted-foreground">
            From rapid prototyping to full-scale production, we offer a complete range of 
            services to meet your 3D printing needs.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card
                key={index}
                className="group hover:shadow-large transition-all duration-300 hover:scale-105 hover:border-accent/50 bg-card animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardHeader>
                  <div className="w-14 h-14 bg-gradient-accent rounded-lg flex items-center justify-center mb-4 group-hover:animate-glow transition-all">
                    <Icon className="w-7 h-7 text-accent-foreground" />
                  </div>
                  <CardTitle className="text-xl font-bold group-hover:text-accent transition-colors">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    {service.description}
                  </CardDescription>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4">
            Not sure which service is right for you?
          </p>
          <button
            onClick={() => {
              const element = document.getElementById('contact');
              if (element) element.scrollIntoView({ behavior: 'smooth' });
            }}
            className="text-accent font-semibold hover:underline inline-flex items-center group"
          >
            Contact us for a consultation
            <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Services;
