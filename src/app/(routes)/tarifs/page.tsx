import Breadcrumb from "@/components/Common/Breadcrumb";
import Pricing from "@/components/Pricing";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tarifs | Studio 126, Agence Web",
  description:
    "Agence web, spécialisée dans la création de sites internet, applications web et boutiques en ligne.",
  // other metadata
};

const PricingPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="Nos tarifs"
        description="Des solutions adaptées à votre budget."
      />
      <Pricing />
    </>
  );
};

export default PricingPage;
