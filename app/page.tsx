"use client";
import { Dialog } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { useState } from "react";
// import { EmailForm } from "./../Components/EmailForm";
import { Hero } from "./../Components/Hero";
import Header from "@/Components/Navbar";
import HowItWorks from "@/Components/Home/HowItWorks";
import EmailForm from "@/Components/EmailForm";

export default function Home() {
  const navigation = [{ name: "Home", href: "./home" }];
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="relative w-screen overflow-x-clip isolate px-6 py-8 lg:px-8">
      <div className="bg-green-40 relative mx-auto lg:max-w-4xl max-w-2xl my-12 sm:my-18 lg:my-24 ">
        <div className="text-center">
          <h1 className="text-4xl font-montserrat font-bold tracking-tight text-amber-50  sm:text-6xl">
            Finding clothes that fit, feel, and look the way you want can be a
            chore.
            {/* No more nuisance. Make Home your OASIS. */}
            {/* Wear your confidence */}
            {/* We&apos;d love to learn from you. Express your interest in helping us shape the future of  */}
          </h1>
          <p className=" mt-6 text-lg leading-8 text-gray-400">
            Returning the clothes you don&apos;t want is a bigger burden.
          </p>
          <div className="sm:mb-8 sm:flex sm:justify-center">
            <div className="relative rounded-full px-3 py-1 my-10 text-sm leading-6 text-gray-400 ring-1 ring-gray-200/10 hover:ring-gray-200/20 ">
              Get notified when we launch.{" "}
              <a href="#email-form" className="font-semibold text-yellow-400">
                <span className="absolute inset-0" aria-hidden="true" />
                I&apos;m interested <span aria-hidden="true">&rarr;</span>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div
        className="absolute inset-x-0 -z-10 transform-gpu  blur-3xl"
        aria-hidden="true"
      >
        <div
          className="relative left-[calc(50%+3rem)] top-60  aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-r from-teal-200 to-teal-300 opacity-30 sm:left-[calc(50%+22rem)] sm:w-[50.1875rem]"
          style={{
            clipPath:
              "polygon(32% 70%, 58% 79%, 91% 100%, 53% 95%, 12% 100%, 20% 85%, 13% 66%, 40% 59%, 0% 35%, 21% 3%)",
          }}
        />
      </div>
      {/* <Hero /> */}
      <HowItWorks />
      <EmailForm />
    </div>
  );
}
