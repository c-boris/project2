import Breadcrumb from "@/components/Common/Breadcrumb";
import Projects from "@/components/Projects";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projets | Studio 126, Agence Web",
  description:
    "Agence web, spécialisée dans la création de sites internet, applications web et boutiques en ligne.",
  // other metadata
};

const ProjectPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="Nos réalisations"
        description="Découvrez notre collection de projets innovants et performants."
      />

      <Projects />
    </>
  );
};

export default ProjectPage;
