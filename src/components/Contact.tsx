import { useState } from 'react';
import { MapPin, Mail, Phone, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';

// ⬅️ 1. Define your Formspree URL here
const FORMSPREE_URL = 'https://formspree.io/f/mkgqbqrw';
// NOTE: You will need to sign up for Formspree to get this ID.

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch(FORMSPREE_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        toast({
          title: 'Message sent successfully!',
          description: "We'll get back to you as soon as possible.",
        });
        // Clear the form on success
        setFormData({ name: '', email: '', message: '' });
      } else {
        // Handle errors, e.g., validation failure from Formspree
        toast({
          title: 'Submission Failed',
          description: 'There was an issue sending your message. Please try again.',
          variant: 'destructive',
        });
      }
    } catch (error) {
      toast({
        title: 'Network Error',
        description: 'Could not connect to the server. Check your internet connection.',
        variant: 'destructive',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in-up">
          <span className="text-accent font-semibold text-sm uppercase tracking-wider">
            Contact Us
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mt-4 mb-6">
            Let's Bring Your{' '}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Ideas to Life
            </span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Have a question or ready to start your project? We'd love to hear from you.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Info (No changes needed here) */}
          <div className="space-y-8 animate-fade-in">
            {/* ... Contact Info Content ... */}
            <div className="bg-card p-8 rounded-2xl shadow-medium">
              <h3 className="text-2xl font-bold text-foreground mb-6">
                Get in Touch
              </h3>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Visit Us</h4>
                    <p className="text-muted-foreground">
                      7356 107 Ave SE #110
                      <br />
                      Calgary, AB T2C 5N6
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Email</h4>
                    <a
                      href="mailto:aryanbhanot2005@gmail.com"
                      className="text-muted-foreground hover:text-accent transition-colors"
                    >
                      aryanbhanot2005@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Call</h4>
                    <a
                      href="tel:+18259353555"
                      className="text-muted-foreground hover:text-accent transition-colors"
                    >
                      +1 (825) 935-3555
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Map */}
            <div className="bg-card p-4 rounded-2xl shadow-medium overflow-hidden h-64">
              <iframe
                title="SOND 3D Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2507.8743626889744!2d-113.95468492346886!3d51.04471794261542!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x53717b8c7f8d8c8d%3A0x8c0c0c0c0c0c0c0c!2s7356%20107%20Ave%20SE%20%23110%2C%20Calgary%2C%20AB%20T2C%205N6!5e0!3m2!1sen!2sca!4v1234567890123!5m2!1sen!2sca"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                className="rounded-lg"
              />
            </div>
          </div>

          {/* Contact Form */}
          <div className="animate-fade-in-up">
            <form onSubmit={handleSubmit} className="bg-card p-8 rounded-2xl shadow-medium space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                  Name *
                </label>
                <Input
                  id="name"
                  name="name"
                  type="text"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your name"
                  className="w-full"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                  Email *
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="your@email.com"
                  className="w-full"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                  Message *
                </label>
                <Textarea
                  id="message"
                  name="message"
                  required
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us about your project..."
                  rows={6}
                  className="w-full resize-none"
                />
              </div>

              {/* ⬅️ Add a hidden field to set the recipient email */}
              <input 
                type="hidden" 
                name="_replyto" 
                value={formData.email} 
              />
              <input 
                type="hidden" 
                name="_subject" 
                value="New Contact Form Submission from SOND 3D WEBSITE" 
              />
              <input 
                type="hidden" 
                name="_to" 
                value="aryanbhanot2005@gmail.com" 
              />


              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-accent hover:shadow-glow transition-all group"
                size="lg"
              >
                {isSubmitting ? (
                  'Sending...'
                ) : (
                  <>
                    Send Message
                    <Send className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </>
                )}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;