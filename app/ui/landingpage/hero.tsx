import { poppins, kanit, josefin_sans } from "../fonts";
import Image from "next/image";
import HeroImg from "../../../public/hero.png";
import Link from "next/link";

export default function LandingHero() {
  return (
    <section className={`  text-center px-6 block sm:flex py-12 `}>
      <div
        className={` ${poppins.className} flex justify-between py-14 gap-5 sm:gap-0 flex-col`}
      >
        {
          //this is going to be the titles
        }

        <h1 className={` ${josefin_sans.className} text-5xl font-bold`}>
          Organize Your Cold Call Leads
        </h1>
        <h2 className={` ${kanit.className} text-2xl`}>
          Effortlessly manage and track your cold call contacts and follow-ups
        </h2>
        {
          //this will be a text blurb
        }
        <p className={` ${kanit.className} text-2xl`}>
          Simplify your outreach process with powerful tools to organize, track,
          and follow up with your contacts.
        </p>
        <p className={` ${kanit.className} text-2xl`}>
          Stay on top of your communication with timely reminders and a
          streamlined interface.
        </p>
        <Link
          className={` ${kanit.className} w-fit mx-auto`}
          href={"/dashboard"}
        >
          <p className="text-2xl w-fit py-2 px-4 transform transition-transform duration-300 hover:shadow-lg hover:-translate-y-1 shadow-md bg-cch_primary rounded-md m-auto">
            Get Started
          </p>
        </Link>
      </div>
      <div className="">
        <Image alt="text" src={HeroImg} />
      </div>
    </section>
  );
}
