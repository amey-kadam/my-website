
import { motion } from "framer-motion";
import { Card, CardContent } from "./ui/card";
import { Badge } from "./ui/badge";

const projects = [
  {
    title: "Website for a Dubai based company",
    description: "A modern website for a General Trading company built with React and Python",
    image: "photo-1486312338219-ce68d2c6f44d",
    tags: ["Web Development", "Logo Design", "Business Cards", "Posters"],
  },
  {
    title: "AI Resume Editor",
    description: "Developed a AI resume editor where you can imporve your resume and get feedback on it",
    image: "photo-1488590528505-98d2b5aba04b",
    tags: ["Web Development", "Logo Design"],
  },
];

export const FeaturedWork = () => {
  return (
    <section className="py-20 bg-gray-50" id="work">
      <div className="container px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-4">Featured Work</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
          Here are some of my recent projects that highlight my expertise in building dynamic websites and software solutions
          </p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="overflow-hidden hover:shadow-lg transition-shadow">
                <CardContent className="p-0">
                  <img
                    src={`https://images.unsplash.com/${project.image}`}
                    alt={project.title}
                    className="w-full h-64 object-cover"
                  />
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                    <p className="text-gray-600 mb-4">{project.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <Badge key={tag} variant="secondary">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
