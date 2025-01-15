"use client";

import SectionTitle from "../Common/SectionTitle";
import toast from "react-hot-toast";
import { sendEmail } from "@/actions/sendEmail";
import SubmitBtn from "./submit-btn";
import AnimatedCards from "../Common/AnimatedCards";

const Contact = () => {
  return (
    <section id="contact" className="overflow-hidden py-16 md:py-20 lg:py-28">
      <div className="container">
        <SectionTitle
          title="Nous contacter"
          paragraph="Pour toute correspondance, veuillez utiliser le formulaire
                ci-dessous. Nous sommes à votre disposition pour répondre à vos
                questions et vous assister."
          center
          width="665px"
        />
        <AnimatedCards index={0}>
          <div className="-mx-4 flex flex-wrap">
            <div className="mx-auto w-full px-4 lg:w-7/12 xl:w-8/12">
              <div
                className="mb-12 rounded-md bg-indigo-100 px-8 py-11 shadow-three dark:bg-gray-dark sm:p-[55px] lg:mb-5 lg:px-8 xl:p-[55px]"
                data-wow-delay=".15s"
              >
                <form
                  action={async (formData) => {
                    const { data, error } = await sendEmail(formData);

                    if (error) {
                      toast.error(error);
                      return;
                    }

                    toast.success("Email envoyé!");
                  }}
                >
                  <div className="-mx-4 flex flex-wrap">
                    <div className="w-full px-4 md:w-1/2">
                      <div className="mb-8">
                        <label
                          htmlFor="email"
                          className="mb-3 block text-sm font-medium text-dark dark:text-white"
                        >
                          Email
                        </label>
                        <input
                          id="email"
                          type="email"
                          name="senderEmail"
                          required
                          maxLength={50}
                          autoComplete="email"
                          placeholder="Enter your email"
                          className="border-stroke w-full rounded-md border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:text-body-color-dark dark:shadow-two dark:focus:border-primary dark:focus:shadow-none"
                        />
                      </div>
                    </div>
                    <div className="w-full px-4">
                      <div className="mb-8">
                        <label
                          htmlFor="message"
                          className="mb-3 block text-sm font-medium text-dark dark:text-white"
                        >
                          Message
                        </label>
                        <textarea
                          id="message"
                          name="message"
                          required
                          maxLength={5000}
                          rows={5}
                          placeholder="Enter your Message"
                          className="border-stroke w-full resize-none rounded-md border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:text-body-color-dark dark:shadow-two dark:focus:border-primary dark:focus:shadow-none"
                        ></textarea>
                      </div>
                    </div>
                    <div className="w-full px-4">
                      <SubmitBtn />
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </AnimatedCards>
      </div>
    </section>
  );
};

export default Contact;
