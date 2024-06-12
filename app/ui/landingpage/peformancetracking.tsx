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
          <div className=" px-5 border border-cch_accent bg-cch_secondary border-r-0 flex-1">
            <h3 className={` ${josefin_sans.className} text-2xl font-bold`}>
              Average Call Length
            </h3>
          </div>
          <div className=" pr-5 border border-cch_accent bg-cch_secondary border-r-0 flex-1">
            <h3 className={` ${josefin_sans.className} text-2xl font-bold`}>
              Call Performance Metricsd Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Dolorem sed qui eligendi laborum consectetur
              expedita amet rem repellat, enim iusto voluptates tenetur natus,
              fugiat eius ut cupiditate suscipit fugit consequatur.
            </h3>
          </div>
        </div>
        {
          //last one
        }
        <div className=" border border-cch_accent mx-auto bg-cch_secondary flex-1 md:w-1/3">
          <h3 className={` ${josefin_sans.className} text-2xl font-bold`}>
            Performance Dashboard
          </h3>
        </div>
      </div>
    </section>
  );
}
