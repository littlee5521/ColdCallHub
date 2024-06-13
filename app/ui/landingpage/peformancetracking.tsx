import Image from "next/image";
import StopWatchSvg from "../../../public/stopwatch.svg";
import PieChartSvg from "../../../public/piechart.svg";
import GaugeSvg from "../../../public/gauge.svg";

import { josefin_sans, kanit } from "../fonts";

export default function PerformanceTrackingLandingPage() {
  return (
    <section className={` text-xl px-6 py-12 text-center ${kanit.className}`}>
      <h2 className={` text-4xl mb-5 font-bold ${josefin_sans.className}`}>
        Performance Tracking
      </h2>
      {
        //main container
      }
      <div className=" flex flex-col justify-center lg:flex-row">
        {
          //first 2
        }
        <div className=" lg:w-2/3 flex flex-col justify-center md:flex-row">
          <div className=" px-5 border pt-2 pb-2 border-cch_accent bg-cch_secondary border-r-0 flex-1">
            <Image
              className=" w-24 h-24 mx-auto"
              alt="a stopwatch icom"
              src={StopWatchSvg}
            />
            <h3 className={` ${josefin_sans.className} text-2xl font-bold`}>
              Average Call Length
            </h3>
            <p>
              Monitor your average call length to gauge the efficiency of your
              interactions and identify opportunities for improvement.
            </p>
          </div>
          <div className=" pr-5 border pt-2 pb-2 border-cch_accent bg-cch_secondary border-r-0 flex-1">
            <Image
              className=" mx-auto w-24 h-24"
              alt="a piechart icon"
              src={PieChartSvg}
            />
            <h3 className={` ${josefin_sans.className} text-2xl font-bold`}>
              Call Performance
            </h3>
            <p>
              Measure the effectiveness of your calls with key performance
              metrics like success rate, conversion rate, and response rate.
            </p>
          </div>
        </div>
        {
          //last one
        }
        <div className=" border border-cch_accent mx-auto pt-2 pb-2 bg-cch_secondary flex-1 w-full md:w-2/3 lg:w-2/3">
          <Image
            className=" mx-auto w-24 h-24"
            alt="a gauge icon"
            src={GaugeSvg}
          />
          <h3 className={` ${josefin_sans.className} text-2xl font-bold`}>
            Performance Dashboard
          </h3>
          <p>
            Stay informed with personalized performance dashboards displaying
            your key metrics and trends, enabling goal setting and progress
            tracking.
          </p>
        </div>
      </div>
    </section>
  );
}
