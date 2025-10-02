import { Star } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'Product Manager, TechCorp',
      content: 'SOND 3D helped us rapidly prototype our product ideas. Their attention to detail and quick turnaround time was instrumental in our product launch.',
      rating: 5,
    },
    {
      name: 'Michael Chen',
      role: 'Independent Designer',
      content: 'The quality of prints is exceptional. SOND 3D brings my creative visions to life with precision that exceeds expectations every single time.',
      rating: 5,
    },
    {
      name: 'Emily Rodriguez',
      role: 'Manufacturing Lead, InnovateCo',
      content: 'Professional service from start to finish. Their design consultation helped us refine our concept, and the final products were flawless.',
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
