import { josefin_sans, kanit } from "../fonts";
import Image from "next/image";
import NoteSvg from "../../../public/notes.svg";
import AiSvg from "../../../public/ai.svg";
import DashBoardSvg from "../../../public/dashboard.svg";

export default function HeroFeatures() {

  return (
    <section className={` ${kanit.className} py-12 text-center px-6`}>
      <h2 className={` ${josefin_sans.className} font-bold mb-8 text-4xl`}>
        Features
      </h2>
      <div className=" flex-col gap-6 flex text-xl lg:flex-row justify-between">
        <div
          className={` bg-cch_secondary border border-cch_accent flex-1 min-w-0 p-6 rounded-lg `}
        >
          <Image
            className=" w-48 h-48 m-auto"
            alt="a photo of notes"
            src={NoteSvg}
          />
          <h3 className={`${josefin_sans.className} font-bold pb-2 text-2xl `}>
            Rich Note Taking
          </h3>
          <p className="">
            Enhance your note-taking experience with advanced text formatting
            options. Use bold, italics, and underline to emphasize key points,
            and organize your thoughts with bullet points and numbered lists.
            Easily categorize and tag your notes for quick access and efficient
            management, and leverage powerful search functionality to find
            exactly what you need in seconds.
          </p>
        </div>
        <div
          className={` bg-cch_secondary border border-cch_accent flex-1 min-w-0 p-6 rounded-lg `}
        >
          <Image
            className=" w-48 h-48 m-auto"
            alt="a photo of ai"
            src={AiSvg}
          />
          <h3 className={`${josefin_sans.className} font-bold pb-2 text-2xl `}>
            AI driven Insights
          </h3>
          <p>
            Unlock the power of artificial intelligence to gain actionable
            insights from your call data. Our AI-driven analytics identify
            patterns and trends, helping you understand what works and where you
            can improve. Make data-informed decisions to optimize your cold
            calling strategy and boost your success rates.
          </p>
        </div>
        <div
          className={` bg-cch_secondary border border-cch_accent flex-1 min-w-0 p-6 rounded-lg `}
        >
          <Image
            className=" w-48 h-48 m-auto"
            alt="a dashboard"
            src={DashBoardSvg}
          />
          <h3 className={`${josefin_sans.className} font-bold pb-2 text-2xl `}>
            Customizable Insights
          </h3>
          <p>
            Never miss a follow-up with our highly customizable reminder system.
            Set reminders based on your specific needs, whether it`s a follow-up
            call, a meeting, or a task. Customize the frequency and timing of
            reminders to align with your workflow, ensuring you stay on top of
            every opportunity.
          </p>
        </div>
      </div>
    </section>
  );
}
