
import { Code, Image, Layout, PenTool } from "lucide-react";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";

const services = [
  {
    icon: Code,
    title: "Web Development",
    description: "Custom websites built with modern technologies.",
  },
  {
    icon: Layout,
    title: "Business Cards",
    description: "Professional business card designs that make a lasting impression.",
  },
  {
    icon: Image,
    title: "Logo Design",
    description: "Unique and memorable logos that represent your brand identity.",
  },
  {
    icon: PenTool,
    title: "Print Design",
    description: "Eye-catching posters and brochures that communicate your message effectively.",
  },
];

export const Services = () => {
  return (
    <section className="py-20 px-4" id="services">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-4">Services I Offer</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            From web development to print design, I provide comprehensive solutions to help your business thrive in both digital and physical spaces.
          </p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="h-full"
            >
              <Card className="hover:shadow-lg transition-shadow h-full flex flex-col">
                <CardHeader>
                  <service.icon className="w-10 h-10 text-blue-500 mb-4" />
                  <CardTitle>{service.title}</CardTitle>
                </CardHeader>
                <CardContent className="flex-grow">
                  <p className="text-gray-600">{service.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
