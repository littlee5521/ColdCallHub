import Link from "next/link";
import { kanit } from "../fonts";

export default function NavBar() {
  return (
    <nav
      className={` ${kanit.className} border-b sticky top-0 bg-cch_background text-lg border-b-black`}
    >
      <div className=" max-w-screen-3xl m-auto">
        <div className="px-6 flex justify-between py-5">
          <div className=" font-bold text-cch_text">
            <Link href={"/"}>Cold Call Hub</Link>
          </div>
          <div className=" hover:text-cch_text_hover text-cch_text">
            <Link href={"/signIn"}>Sign In</Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
