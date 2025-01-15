import SectionTitle from "../Common/SectionTitle";
import OfferList from "./OfferList";
import PricingBox from "./PricingBox";
import AnimatedCards from "../Common/AnimatedCards";

const Pricing = () => {
  return (
    <section id="pricing" className="relative z-10 py-16 md:py-20 lg:py-28">
      <div className="container">
        <SectionTitle
          title="Des solutions adaptées à votre budget"
          paragraph="Nous créons des sites web sur mesure pour répondre à vos besoins spécifiques et votre budget."
          center
          width="665px"
        />

        <div className="grid grid-cols-1 gap-x-8 gap-y-10 md:grid-cols-2 lg:grid-cols-3">
          <AnimatedCards index={0}>
            <PricingBox
              packageName="Lite"
              price="950"
              duration="mo"
              subtitle="Site internet simple et efficace."
            >
              <OfferList text="Site internet 1 page" status="active" />
              <OfferList text="Nom de domaine et hébergement" status="active" />
              <OfferList
                text="Intégration logo, images et textes"
                status="active"
              />
              <OfferList
                text="Conformité RGPD, mention légales"
                status="active"
              />
              <OfferList text="Google Maps, Google reviews" status="inactive" />
              <OfferList text="Formulaire de contact" status="inactive" />
            </PricingBox>
          </AnimatedCards>

          <AnimatedCards index={1}>
            <PricingBox
              packageName="Basic"
              price="1500"
              duration="mo"
              subtitle="Site vitrine professionnel."
            >
              <OfferList text="Site internet 1 page" status="active" />
              <OfferList text="Nom de domaine et hébergement" status="active" />
              <OfferList
                text="Intégration logo, images et textes"
                status="active"
              />
              <OfferList
                text="Conformité RGPD, mention légales"
                status="active"
              />
              <OfferList text="Google Maps, Google reviews" status="active" />
              <OfferList text="Formulaire de contact" status="active" />
            </PricingBox>
          </AnimatedCards>

          <AnimatedCards index={2}>
            <PricingBox
              packageName="Plus"
              price="3000"
              duration="mo"
              subtitle="Site avec fonctionnalités avancées."
            >
              <OfferList text="Site internet page multiple" status="active" />
              <OfferList text="Nom de domaine et hébergement" status="active" />
              <OfferList
                text="Intégration logo, images et textes"
                status="active"
              />
              <OfferList
                text="Conformité RGPD, mention légales"
                status="active"
              />
              <OfferList text="Google Maps, Google reviews" status="active" />
              <OfferList text="Formulaire de contact" status="active" />
            </PricingBox>
          </AnimatedCards>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 z-[-1]">
        <svg
          width="239"
          height="601"
          viewBox="0 0 239 601"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            opacity="0.3"
            x="-184.451"
            y="600.973"
            width="196"
            height="541.607"
            rx="2"
            transform="rotate(-128.7 -184.451 600.973)"
            fill="url(#paint0_linear_93:235)"
          />
          <rect
            opacity="0.3"
            x="-188.201"
            y="385.272"
            width="59.7544"
            height="541.607"
            rx="2"
            transform="rotate(-128.7 -188.201 385.272)"
            fill="url(#paint1_linear_93:235)"
          />
          <defs>
            <linearGradient
              id="paint0_linear_93:235"
              x1="-90.1184"
              y1="420.414"
              x2="-90.1184"
              y2="1131.65"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#4A6CF7" />
              <stop offset="1" stopColor="#4A6CF7" stopOpacity="0" />
            </linearGradient>
            <linearGradient
              id="paint1_linear_93:235"
              x1="-159.441"
              y1="204.714"
              x2="-159.441"
              y2="915.952"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#4A6CF7" />
              <stop offset="1" stopColor="#4A6CF7" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </section>
  );
};

export default Pricing;
