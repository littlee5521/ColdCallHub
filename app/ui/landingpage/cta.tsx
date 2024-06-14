import Link from "next/link";
import { kanit, josefin_sans } from "../fonts";
export default function Cta() {
  return (
    <section className={` ${kanit.className} px-6 py-12 text-xl text-center `}>
      <h2 className={` text-4xl font-bold mb-5 ${josefin_sans.className}`}>
        Ready to Boost Your Cold Calling Efficiency?
      </h2>
      <p className=" mb-5">
        Sign up today and start transforming your cold call process.
      </p>
      <Link className={` ${kanit.className} w-fit mx-auto`} href={"/dashboard"}>
        <p className="text-3xl w-fit py-2 border border-cch_accent px-4 transform transition-transform duration-300 hover:shadow-lg hover:-translate-y-1 shadow-md bg-cch_primary rounded-md m-auto">
          Sign up Now
        </p>
      </Link>
    </section>
  );
}
