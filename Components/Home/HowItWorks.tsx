import hanger from "../../public/Images/hanger.svg";
import shipping from "../../public/Images/shipping.svg";

import Image from "next/image";
export default function HowItWorks() {
  const features = [
    {
      name: "1. Buy",
      description:
        "Select the clothes you want on your favorite shopping sites",
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
      name: "2. Only pay for what you like",
      description: `Click "try with OASIS" at checkout`,
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
      name: "3. Try",
      description:
        "Once the clothes arrive, try the clothes on from the comfort of your home",
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
      name: "4. We'll take care of the rest",
      description: `Go to the verification email and click "return" to get the clothes you don't want picked up from home in 15 minutes or less`,
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
          Shipping labels, lost receipts, and post office detours don&apos;t
          make it any easier.
        </h2>
        <p className="mt-2 text-3xl font-bold tracking-tight font-montserrat text-gray-200 sm:text-4xl">
          At OASIS, we can&apos;t choose the clothes you like, but we can return
          the ones you don&apos;t.
        </p>
        <p className="mt-6 text-lg leading-8 text-gray-400">
          Here&apos;s how we guarantee an effortless shopping experience:
        </p>
      </div>
      <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
        <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
          {features.map((feature) => (
            <div key={feature.name} className="relative pl-16">
              <dt className="text-base font-semibold leading-7 text-gray-200 ">
                <div className="absolute select-none left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-blue-600">
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
