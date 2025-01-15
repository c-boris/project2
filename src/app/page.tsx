import AboutSectionOne from "@/components/About/AboutSectionOne";
import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import ScrollUp from "@/components/Common/ScrollUp";
import Contact from "@/components/Contact";
import Features from "@/components/Features";
import Hero from "@/components/Hero";
import Pricing from "@/components/Pricing";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Studio 126 | Agence Web à Lyon - Création de Sites Internet",
  description:
    "Agence web à Lyon spécialisée dans la création de sites internet, applications web et boutiques en ligne. Développement sur mesure et référencement naturel.",
  keywords:
    "agence web lyon, création site internet, développement web, site e-commerce, référencement naturel, SEO",
  openGraph: {
    title: "Studio 126 | Agence Web à Lyon - Création de Sites Internet",
    description:
      "Agence web à Lyon spécialisée dans la création de sites internet, applications web et boutiques en ligne. Développement sur mesure et référencement naturel.",
    url: "https://studio-126.com",
    siteName: "Studio 126",
    images: [
      {
        url: "https://studio-126.com/og",
        width: 1200,
        height: 630,
      },
    ],
    locale: "fr_FR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Studio 126 | Agence Web à Lyon - Création de Sites Internet",
    description:
      "Agence web à Lyon spécialisée dans la création de sites internet, applications web et boutiques en ligne. Développement sur mesure et référencement naturel.",
    images: ["https://studio-126.com/og"],
  },
  alternates: {
    canonical: "https://studio-126.com",
  },
};

export default function Home() {
  return (
    <>
      <ScrollUp />
      <Hero />
      <Features />
      <AboutSectionOne />
      <AboutSectionTwo />
      <Pricing />
      <Contact />
    </>
  );
}
