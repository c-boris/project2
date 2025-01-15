import Breadcrumb from "@/components/Common/Breadcrumb";
import Contact from "@/components/Contact/index";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact | Studio 126, Agence Web",
  description:
    "Agence web, spécialisée dans la création de sites internet, applications web et boutiques en ligne.",
  // other metadata
};

const ContactPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="Nous contacter"
        description="Pour toute correspondance, veuillez utiliser le formulaire ci-dessous. Nous sommes à votre disposition pour répondre à vos questions et vous assister."
      />

      <Contact />
    </>
  );
};

export default ContactPage;
