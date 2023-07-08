import Image from "next/image";
import hero from "../public/Images/hero.jpg";

export function Hero({}) {
  return (
    <div className="lg:my-16 my-0">
      <Image
        className="lg:opacity-80 lg:relative absolute opacity-0 flex-shrink-1 rounded-xl "
        style={{ left: "70%" }}
        src={hero}
        width={600}
        alt="hero"
      />
      <a
        className="relative text-gray-300 text-xs lg:opacity-70 opacity-0"
        style={{ left: "70%" }}
        href="https://www.freepik.com/free-vector/women-buying-clothes-apparel-store-dress-lady-accessory-flat-vector-illustration-fashion-shopping_11672056.htm#query=shopping&position=11&from_view=search&track=sph"
      >
        Image by pch.vector on Freepik
      </a>{" "}
    </div>
  );
}
