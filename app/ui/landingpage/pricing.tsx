import { josefin_sans, kanit } from "../fonts";
import Image from "next/image";
import PadLockSvg from "../../../public/padlock.svg";
import PersonSvg from "../../../public/person.svg";
import PersonProSvg from "../../../public/person-pro.svg";
import CrownSvg from "../../../public/crown.svg";
import Link from "next/link";

export default function PrcingLandingPage() {
  return (
    <section className={` ${kanit.className} px-6 py-12 text-xl text-center `}>
      <h2 className={` text-4xl font-bold mb-5 ${josefin_sans.className}`}>
        Pricing
      </h2>
      <div className="flex flex-col  xl:flex-row gap-6">
        <div className=" flex gap-6 flex-col lg:flex-row flex-1">
          <div className="flex-1 px-5 border relative border-cch_accent w-5/6 md:w-2/3 mx-auto lg:w-full bg-cch_secondary">
            <Image
              className=" mx-auto pl-5 w-24 h-24 "
              alt="a padlock icon "
              src={PadLockSvg}
            />
            <h3 className={`text-2xl ${josefin_sans.className} font-bold`}>
              Free Plan
            </h3>
            <p className=" text-2xl mb-3 font-bold">$0</p>
            <p className=" mb-5">Includes</p>
            <ul className=" pl-5 list-disc">
              <li className="mb-3 w-fit mx-auto">Up to 50 contacts</li>
              <li className="mb-3 w-fit mx-auto">Basic note-taking</li>
              <li className="mb-3 w-fit mx-auto">Email support</li>
              <li className="mb-3 w-fit mx-auto">Manual call logging</li>
              <li className="mb-3 w-fit mx-auto">
                Basic performance metrics (e.g., average call length)
              </li>
            </ul>
            {
              // dog this feels so cheap, if your looking at this forgive me lmao. Its a invisbile div to keep the absoultely positioned links from overlaying on top of the text
            }
            <div className={` ${kanit.className} invisible w-fit mx-auto`}>
              <p className="text-xl w-fit py-2 mb-5 border border-cch_accent px-4 transform transition-transform duration-300 hover:shadow-lg hover:-translate-y-1 shadow-md bg-cch_primary rounded-md m-auto">
                Get Started
              </p>
            </div>
            <Link
              className={` ${kanit.className} absolute bottom-0 left-1/2 transform -translate-x-1/2 w-fit mx-auto`}
              href={"/dashboard"}
            >
              <p className="text-xl w-fit py-2 mb-5 border border-cch_accent px-4 transform transition-transform duration-300 hover:shadow-lg hover:-translate-y-1 shadow-md bg-cch_primary rounded-md m-auto">
                Get Started
              </p>
            </Link>
          </div>
          <div className="flex-1 border relative border-cch_accent px-5 w-5/6 md:w-2/3 mx-auto lg:w-full bg-cch_secondary">
            <Image
              className=" mx-auto w-24 h-24 "
              alt="a padlock icon "
              src={PersonSvg}
            />
            <h3 className={`text-2xl ${josefin_sans.className} font-bold`}>
              Basic Plan
            </h3>
            <p className=" text-2xl mb-3 font-bold">$8/Month</p>
            <p className=" mb-5">Includes</p>
            <ul className=" pl-5 list-disc">
              <li className="mb-3 w-fit mx-auto">Up to 250 contacts</li>
              <li className="mb-3 w-fit mx-auto">
                Advanced note-taking (tags and categories)
              </li>
              <li className="mb-3 w-fit mx-auto">Priority email support</li>
              <li className="mb-3 w-fit mx-auto">Manual call logging</li>
              <li className="mb-3 w-fit mx-auto">
                Performance metrics (average call length, call count)
              </li>
            </ul>
            <div className={` ${kanit.className} invisible w-fit mx-auto`}>
              <p className="text-xl w-fit py-2 mb-5 border border-cch_accent px-4 transform transition-transform duration-300 hover:shadow-lg hover:-translate-y-1 shadow-md bg-cch_primary rounded-md m-auto">
                Get Started
              </p>
            </div>
            <Link
              className={` ${kanit.className} absolute bottom-0 left-1/2 transform -translate-x-1/2 w-fit mx-auto`}
              href={"/dashboard"}
            >
              <p className="text-xl w-fit py-2 mb-5 border border-cch_accent px-4 transform transition-transform duration-300 hover:shadow-lg hover:-translate-y-1 shadow-md bg-cch_primary rounded-md m-auto">
                Get Started
              </p>
            </Link>
          </div>
        </div>
        <div className=" flex flex-col lg:flex-row gap-6 flex-1">
          <div className="flex-1 border ps-5 relative border-cch_accent w-5/6 md:w-2/3 mx-auto lg:w-full bg-cch_secondary">
            <Image
              className=" mx-auto w-24 h-24 "
              alt="a padlock icon "
              src={PersonProSvg}
            />
            <h3 className={`text-2xl ${josefin_sans.className} font-bold`}>
              Pro Plan
            </h3>
            <p className=" text-2xl mb-3 font-bold">$15/Month</p>
            <p className=" mb-5">Includes</p>
            <ul className=" pl-5 list-disc">
              <li className="mb-3 w-fit mx-auto">Up to 1000 contacts</li>
              <li className="mb-3 w-fit mx-auto">
                Advanced note-taking (tags, categories, search functionality)
              </li>
              <li className="mb-3 w-fit mx-auto">
                Priority support (email and chat)
              </li>
              <li className="mb-3 w-fit mx-auto">Manual call logging</li>
              <li className="mb-3 w-fit mx-auto">
                Advanced performance metrics (success rate, conversion rate)
              </li>
              <li className="mb-3 w-fit mx-auto">Customizable reminders</li>
            </ul>
            <div className={` ${kanit.className} invisible w-fit mx-auto`}>
              <p className="text-xl w-fit py-2 mb-5 border border-cch_accent px-4 transform transition-transform duration-300 hover:shadow-lg hover:-translate-y-1 shadow-md bg-cch_primary rounded-md m-auto">
                Get Started
              </p>
            </div>
            <Link
              className={` ${kanit.className} absolute bottom-0 left-1/2 transform -translate-x-1/2 w-fit mx-auto`}
              href={"/dashboard"}
            >
              <p className="text-xl w-fit py-2 mb-5 border border-cch_accent px-4 transform transition-transform duration-300 hover:shadow-lg hover:-translate-y-1 shadow-md bg-cch_primary rounded-md m-auto">
                Get Started
              </p>
            </Link>
          </div>
          <div className="flex-1 border px-5 relative border-cch_accent w-5/6 md:w-2/3 mx-auto lg:w-full bg-cch_secondary">
            <Image
              className=" mx-auto w-24 h-24 "
              alt="a padlock icon "
              src={CrownSvg}
            />
            <h3 className={`text-2xl ${josefin_sans.className} font-bold`}>
              Premium Plan
            </h3>
            <p className=" text-2xl mb-3 font-bold">$30/Month</p>
            <p className=" mb-5">Includes</p>
            <ul className=" pl-5 list-disc">
              <li className="mb-3 w-fit mx-auto">Unlimited contacts</li>
              <li className="mb-3 w-fit mx-auto">
                Full-featured note-taking (tags, categories, search
                functionality)
              </li>
              <li className="mb-3 w-fit mx-auto">
                24/7 premium support (email, chat, phone)
              </li>
              <li className="mb-3 w-fit mx-auto">
                Comprehensive call analytics and insights
              </li>
              <li className="mb-3 w-fit mx-auto">Personalized dashboards</li>
              <li className="mb-3 w-fit mx-auto">AI-powered insights</li>
            </ul>
            <div
              className={` ${kanit.className} bottom-0 invisible left-1/2 transform -translate-x-1/2 w-fit mx-auto`}
            >
              <p className="text-xl w-fit py-2 mb-5 border border-cch_accent px-4 transform transition-transform duration-300 hover:shadow-lg hover:-translate-y-1 shadow-md bg-cch_primary rounded-md m-auto">
                Get Started
              </p>
            </div>
            <Link
              className={` ${kanit.className} absolute bottom-0 left-1/2 transform -translate-x-1/2 w-fit mx-auto`}
              href={"/dashboard"}
            >
              <p className="text-xl w-fit py-2 mb-5 border border-cch_accent px-4 transform transition-transform duration-300 hover:shadow-lg hover:-translate-y-1 shadow-md bg-cch_primary rounded-md m-auto">
                Get Started
              </p>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
