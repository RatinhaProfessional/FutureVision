import { Link } from "react-router-dom";
import NewInMain from "../assets/NewInMain.jpg";
import NewIn1 from "../assets/NewIn1.jpg";
import NewIn2 from "../assets/NewIn2.jpg";

export default function OurVision() {
  return (
    <section className="mt-28">
      <p className="font-paragraph ml-16 text-orange">Our Vision</p>
      <div className="grid grid-rows-1 grid-cols-2 gap-10 mt-28">
        <div className="ml-52 ">
          <h2 className="text-4xl font-header">Our Vision, Your Style</h2>
          <p className=" font-paragraph mt-5 text-justify">
            At Future Vision, we believe that style should be a reflection of
            individuality and innovation. Our jewelry and accessories blend
            cutting-edge technology with timeless design, creating pieces that
            are as unique as you are. From custom smart glasses to futuristic
            accessories, we are driven by the belief that the future of fashion
            is both bold and sustainable. Crafted with precision and a focus on
            authenticity, our creations empower you to express your true self in
            a world of endless possibilities.
          </p>
        </div>
        <div className="grid grid-rows-2 grid-cols-3 gap-5 mr-[3.125rem] grid-rows-[4rem_12rem]">
          <div className="row-span-2">
            <img
              src={NewInMain}
              alt="New In spin animation"
              className="object-cover w-full h-full"
            />
          </div>
          <div className="col-span-2 horizontal-gradient"></div>
          <div>
            <img
              src={NewIn1}
              alt="Our Staff"
              className="object-cover w-full h-full"
            />
          </div>
          <div>
            <img
              src={NewIn2}
              alt="More of our Staff"
              className="object-cover w-full h-full"
            />
          </div>
        </div>
      </div>
      <div className="mt-12 text-end hover:font-bold">
        <Link to="/" className="mr-[9.31rem]">
          Get to know us better
        </Link>
        <div className="arrow-link justify-self-end mt-5 mr-[3.125rem]"></div>
      </div>
    </section>
  );
}
