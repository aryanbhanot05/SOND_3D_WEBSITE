import { Building2, Target, Users } from 'lucide-react';
import workshopImage from '@/assets/workshop.jpg';

const About = () => {
  return (
    <section id="about" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="relative animate-fade-in">
            <div className="absolute inset-0 bg-gradient-accent rounded-2xl blur-xl opacity-20" />
            <img
              src={workshopImage}
              alt="SOND 3D workshop with professional 3D printers"
              className="relative rounded-2xl shadow-large w-full h-auto"
            />
          </div>

          {/* Content */}
          <div className="space-y-6 animate-fade-in-up">
            <div className="inline-block">
              <span className="text-accent font-semibold text-sm uppercase tracking-wider">
                About Us
              </span>
            </div>
            
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground">
              Your Trusted Partner in{' '}
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                3D Innovation
              </span>
            </h2>

            <p className="text-lg text-muted-foreground leading-relaxed">
              SOND 3D is a proud division of{' '}
              <span className="font-semibold text-foreground">Sond Industries</span>, 
              dedicated to providing innovative, reliable, and affordable 3D printing solutions. 
              We bridge the gap between imagination and reality.
            </p>

            <p className="text-lg text-muted-foreground leading-relaxed">
              Whether you're a business looking for rapid prototyping or an individual 
              with a creative vision, we have the expertise and technology to bring your 
              ideas to life with precision and quality.
            </p>

            {/* Value props */}
            <div className="grid sm:grid-cols-3 gap-6 pt-4">
              <div className="text-center p-4 rounded-lg bg-card hover:shadow-medium transition-shadow">
                <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Building2 className="w-6 h-6 text-accent" />
                </div>
                <h3 className="font-semibold text-foreground mb-1">Innovation</h3>
                <p className="text-sm text-muted-foreground">Cutting-edge technology</p>
              </div>

              <div className="text-center p-4 rounded-lg bg-card hover:shadow-medium transition-shadow">
                <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Target className="w-6 h-6 text-accent" />
                </div>
                <h3 className="font-semibold text-foreground mb-1">Reliability</h3>
                <p className="text-sm text-muted-foreground">Consistent quality</p>
              </div>

              <div className="text-center p-4 rounded-lg bg-card hover:shadow-medium transition-shadow">
                <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Users className="w-6 h-6 text-accent" />
                </div>
                <h3 className="font-semibold text-foreground mb-1">Affordable</h3>
                <p className="text-sm text-muted-foreground">Competitive pricing</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
