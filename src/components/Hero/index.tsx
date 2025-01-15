import AnimatedCards from "../Common/AnimatedCards";
import Link from "next/link";
import HeroCircleSVG from "../SvgBackground/HeroCircleSVG";
import HeroPathSVG from "../SvgBackground/HeroPathSVG";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative z-10 h-screen overflow-hidden bg-white pb-16 pt-[120px] dark:bg-gray-dark md:pb-[120px] md:pt-[150px] xl:pb-[160px] xl:pt-[180px] 2xl:pb-[200px] 2xl:pt-[210px]"
    >
      <div className="container">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4 py-12">
            <div className="mx-auto max-w-[800px] text-center">
              <AnimatedCards index={0}>
                <h1 className="mb-5 text-3xl font-bold leading-tight text-black dark:text-white sm:text-4xl sm:leading-tight md:text-5xl md:leading-tight">
                  Studio 126, Agence Web
                </h1>
                <p className="mb-12 text-base !leading-relaxed text-body-color dark:text-body-color-dark sm:text-lg md:text-xl">
                  Offrez à votre entreprise la vitrine qu&apos;elle mérite avec
                  un site web sur mesure. <br />
                  Développez votre activité avec des applications web
                  personnalisées, <br />
                  soigneusement conçues pour améliorer l&apos;expérience
                  utilisateur, maximiser le référencement et accroître les taux
                  de conversion.
                </p>

                <div className="flex flex-col items-center justify-center space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
                  <Link
                    href="/contact"
                    className="rounded-full bg-primary px-8 py-4 text-base font-semibold text-white duration-300 ease-in-out hover:bg-primary/80"
                  >
                    Devis gratuit
                  </Link>
                </div>
              </AnimatedCards>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute right-0 top-0 z-[-1] opacity-30 lg:opacity-100">
        <HeroCircleSVG />
      </div>
      <div className="absolute bottom-0 left-0 z-[-1] opacity-30 lg:opacity-100">
        <HeroPathSVG />
      </div>
    </section>
  );
};

export default Hero;
