import SectionTitle from "../Common/SectionTitle";
import SingleFeature from "./SingleFeature";
import featuresData from "./featuresData";
import AnimatedCards from "../Common/AnimatedCards";

const Features = () => {
  return (
    <>
      <section id="features" className="py-16 md:py-20 lg:py-28">
        <div className="container">
          <SectionTitle
            title="Nos services"
            paragraph="Agence web, spécialisée dans la création de sites internet, applications web, et boutiques en ligne."
            center
          />

          <div className="grid grid-cols-1 gap-x-8 gap-y-14 md:grid-cols-2 lg:grid-cols-4">
            {featuresData.map((feature, index) => (
              <AnimatedCards key={feature.id} index={index}>
                <SingleFeature feature={feature} />
              </AnimatedCards>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Features;
