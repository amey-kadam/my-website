import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Navbar } from "@/components/Navbar"; // Import the Navbar component

const PricingTier = ({ 
  title, 
  price, 
  description, 
  features, 
  popular = false,
  delay = 0 
}: { 
  title: string; 
  price: string; 
  description: string; 
  features: string[]; 
  popular?: boolean;
  delay?: number;
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      className="flex h-full"
    >
      <Card className={`w-full border border-gray-200 dark:border-gray-700 transition-all duration-300 hover:border-gray-900 hover:dark:border-gray-300 hover:shadow-xl flex flex-col ${
        popular ? 'border-gray-900 dark:border-gray-300 shadow-xl' : ''
      }`}>
        
        <CardHeader>
          <CardTitle className="text-2xl">{title}</CardTitle>
          <div className="mt-4 flex items-baseline text-gray-900 dark:text-white">
            <span className="text-5xl font-extrabold tracking-tight">{price}</span>
            {price !== 'Custom' && <span className="ml-1 text-xl font-semibold text-gray-500 dark:text-gray-400">/project</span>}
          </div>
          <CardDescription className="mt-2">{description}</CardDescription>
        </CardHeader>
        <CardContent className="flex-grow">
          <ul className="space-y-3">
            {features.map((feature, i) => (
              <li key={i} className="flex items-start">
                <Check className="h-5 w-5 flex-shrink-0 text-green-500 dark:text-green-400 mr-2" />
                <span className="text-gray-600 dark:text-gray-300">{feature}</span>
              </li>
            ))}
          </ul>
        </CardContent>
        <CardFooter className="mt-auto">
          <Button 
            className={`w-full ${
              popular 
                ? 'bg-gradient-to-r from-gray-900 to-gray-700 dark:from-white dark:to-gray-300 dark:text-gray-900 shadow-lg hover:shadow-xl' 
                : ''
            }`}
          >
            Get Started
          </Button>
        </CardFooter>
      </Card>
    </motion.div>
  );
};

const Pricing = () => {
  return (
    <>
      <Navbar />
      <div className="min-h-screen pt-28 pb-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-400"
            >
              Transparent Pricing for Quality Work
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-xl text-gray-600 dark:text-gray-300"
            >
              Choose the package that fits your needs. All prices are starting points and may vary based on project complexity.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto h-full">
            <PricingTier
              title="Basic Website"
              price="$799"
              description="Perfect for small businesses just getting started online."
              features={[
                "Responsive design",
                "Up to 5 pages",
                "Contact form integration",
                "Social media links",
                "2 rounds of revisions",
                "1 weeks delivery"
              ]}
              delay={0.2}
            />
            
            <PricingTier
              title="Premium Website"
              price="$1,499"
              description="Professional solution for established businesses."
              features={[
                "Responsive design",
                "Up to 10 pages",
                "Custom animations",
                "Blog/news section",
                "Newsletter integration",
                "Google Analytics setup",
                "3 rounds of revisions",
                "2 weeks delivery"
              ]}
              popular={true}
              delay={0.3}
            />
            
            <PricingTier
              title="E-Commerce Solution"
              price="$2,499"
              description="Full-featured online store to sell your products."
              features={[
                "Everything in Premium",
                "Product catalog",
                "Shopping cart & checkout",
                "Payment gateway integration",
                "Inventory management",
                "Order notifications",
                "4 rounds of revisions",
                "3 weeks delivery"
              ]}
              delay={0.4}
            />
          </div>

          <div className="mt-16 max-w-4xl mx-auto">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="bg-gray-50 dark:bg-gray-800 rounded-xl p-8 text-center"
            >
              <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Need a custom solution?</h2>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                Let's discuss your specific requirements and create a tailored package just for you.
              </p>
              <Button size="lg" variant="outline" className="border-gray-900 dark:border-gray-300">
                Request a Quote
              </Button>
            </motion.div>
          </div>

          <div className="mt-20 max-w-4xl mx-auto">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="text-3xl font-bold mb-12 text-center text-gray-900 dark:text-white"
            >
              Additional Design Services
            </motion.h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                { title: "Logo Design", price: "$100 - 300" },
                { title: "Business Cards", price: "$50" },
                { title: "Brochures", price: "$100 - 150" },
                { title: "Posters", price: "$50" }                
              ].map((service, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.7 + (i * 0.1) }}
                  className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm border border-gray-100 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-500 hover:shadow-md transition-all duration-300 flex justify-between items-center"
                >
                  <h3 className="font-medium text-gray-900 dark:text-white">{service.title}</h3>
                  <p className="font-bold text-gray-900 dark:text-white">{service.price}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Pricing;