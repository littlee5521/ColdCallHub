import { kanit, josefin_sans } from "./fonts";

export default function Footer() {
  return (
    <section
      className={` ${kanit.className} flex flex-col md:w-2/3 mx-auto justify-between sm:flex-row text-center`}
    >
      <div className="flex flex-col flex-1">
        <h4 className={` ${josefin_sans.className} text-xl font-bold`}>
          Quick Links:
        </h4>
        <p>Home</p>
        <p>Features</p>
        <p>Pricing</p>
        <p>Contact</p>
      </div>
      <div className="flex flex-col flex-1">
        <h4 className={` ${josefin_sans.className} text-xl font-bold`}>
          About Us
        </h4>
        <p>
          Cold Call Hub is dedicated to helping businesses streamline their cold
          calling process and achieve better results through customizable
          insights and intuitive tools.
        </p>
      </div>
      <div className="flex flex-col flex-1">
        <h4 className={` ${josefin_sans.className} text-xl font-bold`}>
          Contact Us
        </h4>
        <p>Email: support@coldcallhub.com</p>
        <p>Phone: (123) 456-7890</p>
        <p>Contact Form: [Link to contact form]</p>
      </div>
    </section>
  );
}
