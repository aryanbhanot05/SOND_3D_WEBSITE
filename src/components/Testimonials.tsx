import { Star } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const Testimonials = () => {
  const testimonials = [
    {
    name: 'Jon Mook',
    role: 'Client',
    content: 'SOND 3D designed and delivered a fully customized chess board for my son. They perfectly incorporated personal touches into the design, and the final product was of outstanding quality. A thoughtful and unique gift made possible by their craftsmanship.',
    rating: 5,
  },
  {
    name: 'Bryan',
    role: 'Parent',
    content: 'SOND 3D helped us create a bottle prototype for my son’s school project. The design was accurate, the print quality was excellent, and it made the project stand out. I really appreciated their responsiveness and creativity.',
    rating: 5,
  },
  {
    name: 'Sukhwinder Singh',
    role: 'Client',
    content: 'I needed a replacement part for my machinery, and SOND 3D delivered exactly what I needed. The precision and durability of the print saved me time and money, and I’ll definitely return for future needs.',
    rating: 5,
  },
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in-up">
          <span className="text-accent font-semibold text-sm uppercase tracking-wider">
            Testimonials
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mt-4 mb-6">
            What Our{' '}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Clients Say
            </span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Don't just take our word for it - hear from businesses and individuals 
            who have experienced the SOND 3D difference.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="bg-card hover:shadow-large transition-all duration-300 hover:scale-105 animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardContent className="p-6">
                {/* Stars */}
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-accent text-accent" />
                  ))}
                </div>

                {/* Quote */}
                <p className="text-muted-foreground mb-6 italic">
                  "{testimonial.content}"
                </p>

                {/* Author */}
                <div className="border-t border-border pt-4">
                  <p className="font-semibold text-foreground">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
