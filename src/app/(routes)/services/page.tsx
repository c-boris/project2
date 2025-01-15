import AboutSectionOne from "@/components/About/AboutSectionOne";
import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import Breadcrumb from "@/components/Common/Breadcrumb";
import Features from "@/components/Features";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services | Studio 126, Agence Web",
  description:
    "Agence web, spécialisée dans la création de sites internet, applications web et boutiques en ligne.",
};

const ServicePage = () => {
  return (
    <>
      <Breadcrumb
        pageName="Nos services"
        description="Agence web, spécialisée dans la création de sites internet, applications web et boutiques en ligne."
      />
      <Features />
      <AboutSectionOne />
      <AboutSectionTwo />
    </>
  );
};

export default ServicePage;
