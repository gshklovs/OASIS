import hanger from "../../public/Images/hanger.svg";
import shipping from "../../public/Images/shipping.svg";

import Image from "next/image";
export default function HowItWorks() {
  const features = [
    {
      name: "One-click purchase",
      description:
        "Find us on your favorite apparel websites and use our extension to buy the clothes you want with one click.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="white"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3 8.688c0-.864.933-1.405 1.683-.977l7.108 4.062a1.125 1.125 0 010 1.953l-7.108 4.062A1.125 1.125 0 013 16.81V8.688zM12.75 8.688c0-.864.933-1.405 1.683-.977l7.108 4.062a1.125 1.125 0 010 1.953l-7.108 4.062a1.125 1.125 0 01-1.683-.977V8.688z"
          />
        </svg>
      ),
    },
    {
      name: "Delivered on-demand",
      description:
        "Get your items delivered to your doorstep in 4 hours or less.",
      icon: (
        <div className="invert">
          <Image
            src={shipping}
            alt="shipping"
            width={24}
            height={24}
            className="w-6 h-6"
          />
        </div>
      ),
    },
    {
      name: "Try before you buy",
      description:
        "We'll send you the clothes you want to try on, and you only pay for what you keep.",
      icon: (
        <div className="invert">
          <Image
            src={hanger}
            alt="hanger"
            width={24}
            height={24}
            className="w-6 h-6"
          />
        </div>
      ),
    },
    {
      name: "Free returns",
      description:
        "We'll send someone to pick up your order once you've decided what you want to keep. No shipping fees, no labels, no hassle.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="white"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9 15L3 9m0 0l6-6M3 9h12a6 6 0 010 12h-3"
          />
        </svg>
      ),
    },
  ];

  return (
    <div className="mx-auto max-w-7xl px-6 lg:px-8">
      <div className="mx-auto max-w-2xl lg:text-center">
        <h2 className="text-base font-semibold leading-7 text-blue-500">
          Shop with confidence
        </h2>
        <p className="mt-2 text-3xl font-bold tracking-tight invert font-montserrat text-gray-900 sm:text-4xl">
          We deliver the perfect fit
        </p>
        <p className="mt-6 text-lg leading-8 text-gray-400">
          Order as many clothing items as you want, get them delivered to your
          door in an hour, try them on, and only pay for what you keep.
        </p>
      </div>
      <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
        <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
          {features.map((feature) => (
            <div key={feature.name} className="relative pl-16">
              <dt className="text-base font-semibold leading-7 text-gray-200 ">
                <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-blue-600">
                  {feature.icon}
                </div>
                {feature.name}
              </dt>
              <dd className="mt-2 text-base leading-7 text-gray-400">
                {feature.description}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </div>
  );
}
