import Image from "next/image";
import { josefin_sans, kanit } from "../fonts";

export default function HowItWorks() {
  return (
    <section className=" flex flex-col justify-center items-center">
      <h2 className={` ${josefin_sans.className} text-4xl font-bold`}>
        How It Work`s
      </h2>
      <div className={`flex-1 ${kanit.className}`}>
        <h3 className={` text-2xl font-bold ${josefin_sans.className}`}>
          Step 1
        </h3>
      </div>
      <div className={`flex-1 ${kanit.className}`}>
        <h3 className={` text-2xl font-bold ${josefin_sans.className}`}></h3>
      </div>
      <div className={`flex-1 ${kanit.className}`}>
        <h3 className={` text-2xl font-bold ${josefin_sans.className}`}></h3>
      </div>
    </section>
  );
}
