import Breadcrumb from "@/components/Common/Breadcrumb";
import Legal from "@/components/Legal";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mentions légales | Studio 126, Agence Web",
  description:
    "Agence web, spécialisée dans la création de sites internet, applications web et boutiques en ligne.",
  // other metadata
};

const LegalPage = () => {
  return (
    <>
      <Breadcrumb pageName="Mentions légales" description="" />

      <Legal />
    </>
  );
};

export default LegalPage;
