import { Button } from '@/components/ui/button';
import productChess from '@/assets/product-chess.jpg';
import productTops from '@/assets/product-tops.jpg';
import productDecor from '@/assets/product-decor.jpg';
import productAccessories from '@/assets/product-accessories.jpg';

const Products = () => {
  const products = [
    {
      title: 'Custom Chess Sets',
      description: 'Elegant, hand-designed chess boards and pieces in premium materials',
      image: productChess,
    },
    {
      title: 'Spinning Tops',
      description: 'Colorful, precision-balanced tops with intricate geometric patterns',
      image: productTops,
    },
    {
      title: 'Home Décor',
      description: 'Modern minimalist vases, sculptures, and decorative pieces',
      image: productDecor,
    },
    {
      title: 'Accessories',
      description: 'Phone stands, cable organizers, and practical desk gadgets',
      image: productAccessories,
    },
  ];

  return (
    <section id="products" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in-up">
          <span className="text-accent font-semibold text-sm uppercase tracking-wider">
            Product Showcase
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mt-4 mb-6">
            Explore Our{' '}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              3D Printed Creations
            </span>
          </h2>
          <p className="text-lg text-muted-foreground">
            From functional accessories to artistic pieces, see the quality and creativity 
            we bring to every project.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product, index) => (
            <div
              key={index}
              className="group cursor-pointer animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="relative overflow-hidden rounded-2xl bg-card shadow-medium hover:shadow-large transition-all duration-300">
                {/* Image container */}
                <div className="aspect-square overflow-hidden bg-secondary/50">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>

                {/* Content overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-primary/95 via-primary/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                  <h3 className="text-xl font-bold text-primary-foreground mb-2">
                    {product.title}
                  </h3>
                  <p className="text-primary-foreground/90 text-sm mb-4">
                    {product.description}
                  </p>
                  <Button
                    variant="outline"
                    className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary w-full"
                    onClick={() => {
                      const element = document.getElementById('contact');
                      if (element) element.scrollIntoView({ behavior: 'smooth' });
                    }}
                  >
                    Request Quote
                  </Button>
                </div>

                {/* Default content */}
                <div className="p-6 group-hover:opacity-0 transition-opacity duration-300">
                  <h3 className="text-xl font-bold text-foreground mb-2">
                    {product.title}
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    {product.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Coming soon notice */}
        <div className="mt-12 text-center p-8 bg-card rounded-2xl shadow-subtle">
          <p className="text-muted-foreground">
            <span className="font-semibold text-foreground">E-commerce coming soon!</span>
            {' '}In the meantime, contact us to order any of these products or request custom designs.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Products;
