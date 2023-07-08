import Image from "next/image";
import logo from "../public/Images/oasis.png";
import logo2 from "../public/Images/oasis2.png";

export default function Logo() {
  return (
    <>
      {/* <h1 className="font-montserrat   bg-gradient-to-r from-yellow-300 to-sky-400 bg-clip-text text-transparent font-semibold text-3xl text-gray-900 text-center uppercase tracking-wider ">
        OASIS
      </h1> */}
      <Image src={logo} alt="logo" width={100} height={100}></Image>
    </>
  );
}
