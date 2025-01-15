"use client";

import SectionTitle from "../Common/SectionTitle";
import Image from "next/image";
import AnimatedCards from "../Common/AnimatedCards";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";

const Projects = () => {
  const projects = [
    {
      title: "Les Notaires du cherche midi",
      image: "/images/blog/notaire.png",
    },
    {
      title: "Got Wet Surfwear",
      image: "/images/blog/gotwet.png",
    },
    {
      title: "Julie Voix Off",
      image: "/images/blog/voixoff.png",
    },
  ];

  return (
    <section id="projects" className="relative z-10 py-16 md:py-20 lg:py-28">
      <div className="container">
        <SectionTitle
          title="Nos réalisations"
          paragraph="Découvrez notre collection de projets innovants et performants."
          center
          width="665px"
        />

        <div className="grid grid-cols-1 gap-x-8 gap-y-10 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <AnimatedCards key={project.title} index={index}>
              <Card className={cn(
                "relative overflow-hidden bg-indigo-100 dark:bg-gray-dark",
                "hover:shadow-lg transition-shadow duration-300"
              )}>
                <CardHeader>
                  <CardTitle className="text-lg font-semibold">
                    {project.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-0">
                  <Image
                    src={project.image}
                    alt={project.title}
                    width={600}
                    height={300}
                    className="rounded-b-lg transition-transform duration-300 hover:scale-105"
                  />
                </CardContent>
              </Card>
            </AnimatedCards>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;