import Image from "next/image";
import ClipBoardSVG from "../../../public/clipboard.svg";
import AddContactSvg from "../../../public/addContact.svg";
import AlarmSvg from "../../../public/alarm.svg";
import { josefin_sans, kanit } from "../fonts";

export default function HowItWorks() {
  return (
    <section
      className={` flex flex-col gap-7 text-xl px-5 justify-center items-center`}
    >
      <h2 className={` ${josefin_sans.className} mb-5 text-4xl font-bold`}>
        How It Work`s
      </h2>
      <div className={`flex-1 text-center max-w-2xl ${kanit.className}`}>
        <h3 className={` text-2xl font-bold ${josefin_sans.className}`}>
          Step 1: Sign Up
        </h3>
        <Image className=" m-auto" alt="A clipboard" src={ClipBoardSVG} />
        <p className="">
          Create your account to start using Cold Call Hub. The sign-up process
          is quick and easy, requiring only basic information to get you
          started.
        </p>
      </div>
      <div className={`flex-1 text-center max-w-2xl ${kanit.className}`}>
        <h3 className={` text-2xl font-bold ${josefin_sans.className}`}>
          Step 2: Add Contacts and Notes
        </h3>
        <Image
          className=" m-auto"
          alt="a contact add icon"
          src={AddContactSvg}
        />
        <p>
          Input your contacts and start taking detailed notes. Organize your
          notes with tags and categories for easy retrieval and better
          management.
        </p>
      </div>
      <div className={`flex-1 text-center max-w-2xl ${kanit.className}`}>
        <h3 className={` text-2xl font-bold ${josefin_sans.className}`}>
          Step 3: Get Reminders and Insights
        </h3>
        <Image className=" m-auto" alt="a alarm" src={AlarmSvg} />
        <p>
          Set customizable reminders to follow up with your contacts. Use
          AI-powered insights to analyze your call data and improve your cold
          calling strategy.
        </p>
      </div>
    </section>
  );
}
