import { Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-1">
            <h3 className="text-2xl font-bold mb-4 bg-gradient-accent bg-clip-text text-transparent">
              SOND 3D
            </h3>
            <p className="text-primary-foreground/80 text-sm">
              A division of Sond Industries, bringing your 3D printing dreams to reality.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Quick Links</h4>
            <nav className="space-y-2">
              {['Home', 'About Us', 'Services', 'Products', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase().replace(' ', ''))}
                  className="block text-primary-foreground/80 hover:text-accent transition-colors text-sm"
                >
                  {item}
                </button>
              ))}
            </nav>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Services</h4>
            <ul className="space-y-2 text-sm text-primary-foreground/80">
              <li>Custom Design & Print</li>
              <li>Ready-to-Order Products</li>
              <li>Design Consultations</li>
              <li>Small-Batch Manufacturing</li>
              <li>Replacement Parts</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Contact</h4>
            <div className="space-y-3">
              <div className="flex items-start gap-2 text-sm text-primary-foreground/80">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0 text-accent" />
                <span>
                  7356 107 Ave SE #110
                  <br />
                  Calgary, AB T2C 5N6
                </span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <Mail className="w-4 h-4 flex-shrink-0 text-accent" />
                <a
                  href="mailto:aryanbhanot2005@gmail.com"
                  className="text-primary-foreground/80 hover:text-accent transition-colors"
                >
                  aryanbhanot2005@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <Phone className="w-4 h-4 flex-shrink-0 text-accent" />
                <a
                  href="tel:+18259353555"
                  className="text-primary-foreground/80 hover:text-accent transition-colors"
                >
                  +1 (825) 935-3555
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center">
          <p className="text-sm text-primary-foreground/60">
            &copy; {currentYear} SOND 3D. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
