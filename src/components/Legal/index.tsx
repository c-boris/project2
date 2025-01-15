import SectionTitle from "../Common/SectionTitle";

const Legal = () => {
  return (
    <section id="legal" className="relative z-10 py-16 md:py-20 lg:py-28">
      <div className="container">
        <SectionTitle
          title="Mentions légales"
          paragraph=""
          center
          width="665px"
        />

        <div className="-mx-4 flex flex-wrap justify-center">
          <div className="w-full px-4 lg:w-8/12">
            <article>
              <h2 className="mb-8 text-3xl font-bold leading-tight text-black dark:text-white sm:text-4xl">
                Confidentialité
              </h2>
              <p className="mb-6 text-base leading-relaxed text-body-color dark:text-body-color-dark">
                Le site{" "}
                <a
                  href="https://studio-126.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-base font-bold text-body-color duration-300 hover:text-primary dark:text-body-color-dark dark:hover:text-primary"
                >
                  studio-126.com
                </a>{" "}
                n’enregistre pas d’informations personnelles permettant
                l’identification, sauf dans les formulaires que l’utilisateur
                est libre de remplir. Ces informations sont utilisées uniquement
                pour vous adresser des courriers, brochures, devis ou vous
                contacter. Vous bénéficiez d’un droit d’accès, de rectification,
                et de suppression sur simple demande par email à{" "}
                <a
                  href="mailto:contact@studio-126.com"
                  className="text-base font-bold text-body-color duration-300 hover:text-primary dark:text-body-color-dark dark:hover:text-primary"
                >
                  contact@studio-126.com
                </a>
                .
              </p>
            </article>

            <article>
              <h2 className="mb-8 text-3xl font-bold leading-tight text-black dark:text-white sm:text-4xl">
                Liens hypertexte
              </h2>
              <p className="mb-6 text-base leading-relaxed text-body-color dark:text-body-color-dark">
                Le site{" "}
                <a
                  href="https://studio-126.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-base font-bold text-body-color duration-300 hover:text-primary dark:text-body-color-dark dark:hover:text-primary"
                >
                  studio-126.com
                </a>{" "}
                ne contrôle pas les sites liés et n’est pas responsable de leur
                contenu. L’utilisation de ces sites est à vos risques et périls.
              </p>
            </article>

            <article>
              <h2 className="mb-8 text-3xl font-bold leading-tight text-black dark:text-white sm:text-4xl">
                Collecte de Cookies
              </h2>
              <p className="mb-6 text-base leading-relaxed text-body-color dark:text-body-color-dark">
                Nos serveurs ne collectent pas d’informations nominatives sur
                les visiteurs. Les données de trafic collectées via des cookies
                sont anonymes et utilisées uniquement pour analyser la
                fréquentation et améliorer le contenu.
              </p>
              <ul className="mb-6 list-inside list-disc text-body-color dark:text-body-color-dark">
                <li>
                  <a
                    href="https://support.mozilla.org/fr/kb/cookies-informations-sites-enregistrent"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:underline"
                  >
                    Mozilla Firefox
                  </a>
                </li>
                <li>
                  <a
                    href="https://support.google.com/chrome/answer/95647?hl=fr"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:underline"
                  >
                    Google Chrome
                  </a>
                </li>
                <li>
                  <a
                    href="https://support.apple.com/fr-fr/guide/safari/sfri11471/mac"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:underline"
                  >
                    Safari
                  </a>
                </li>
                <li>
                  <a
                    href="https://support.microsoft.com/fr-fr/help/17442/windows-internet-explorer-delete-manage-cookies"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:underline"
                  >
                    Internet Explorer
                  </a>
                </li>
                <li>
                  <a
                    href="http://help.opera.com/Windows/10.20/fr/cookies.html"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:underline"
                  >
                    Opera
                  </a>
                </li>
              </ul>
            </article>

            <article>
              <h2 className="mb-8 text-3xl font-bold leading-tight text-black dark:text-white sm:text-4xl">
                Éditeur
              </h2>
              <p className="mb-6 text-base leading-relaxed text-body-color dark:text-body-color-dark">
                <a
                  href="https://studio-126.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-base font-bold text-body-color duration-300 hover:text-primary dark:text-body-color-dark dark:hover:text-primary"
                >
                  studio-126.com
                </a>{" "}
                <br />
                Code APE/NAF : 6201Z <br />
                Siège social : 126, Rue de SEZE 69006 Lyon <br />
                N° de téléphone : 06 52 24 77 22
              </p>
            </article>

            <article>
              <h2 className="mb-8 text-3xl font-bold leading-tight text-black dark:text-white sm:text-4xl">
                Hébergement
              </h2>
              <p className="mb-6 text-base leading-relaxed text-body-color dark:text-body-color-dark">
                <a
                  href="https://vercel.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-base font-bold text-body-color duration-300 hover:text-primary dark:text-body-color-dark dark:hover:text-primary"
                >
                  Vercel Inc.
                </a>{" "}
                <br />
                340 S Lemon Ave #4133 Walnut, CA 91789 <br />
                N° de téléphone : (559) 288-7060
              </p>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Legal;
