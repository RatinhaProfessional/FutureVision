import { Link } from "react-router-dom";
import NewInText from "../assets/NewInText.png";
import NewInMain from "../assets/NewInMain.jpg";
import NewIn1 from "../assets/NewIn1.jpg";
import NewIn2 from "../assets/NewIn2.jpg";

export default function NewIn() {
  return (
    <section className="mt-28">
      <p className="font-paragraph ml-16 text-light-green">New In</p>
      <div className="grid grid-rows-3 grid-cols-3 grid-rows-[8rem_23rem_5rem] gap-5 mx-52 mt-28">
        <div className="row-span-3 object-cover w-full h-full relative">
          <img
            className="animate-spin absolute top-0 right-0"
            src={NewInText}
            alt="New In spin animation"
          />
          <img
            src={NewInMain}
            alt="New Glasses image"
            className="object-cover w-full h-full"
          />
        </div>
        <div className="row-span-1 col-span-2 text-end">
          <h2 className="text-4xl font-header">The New Era</h2>
          <p className="font-paragraph text-justify mt-5">
            Step into the future with our latest innovation: smart glasses.
            Blend technology with sleek design, for those who demand both style
            and substance. Discover a new way to see the world—smarter, sharper,
            and more connected than ever.
          </p>
        </div>
        <div>
          <img src={NewIn1} alt="" className="object-cover w-full h-full" />
        </div>
        <div>
          <img src={NewIn2} alt="" className="object-cover w-full h-full" />
        </div>
        <div className="h-48">
          <p className="font-paragraph">huahos</p>
        </div>
        <div className="h-48">
          <p className="font-paragraph">huahos</p>
        </div>
      </div>
      <div className="mt-12 text-end hover:font-bold">
        <Link to="/" className="mr-52">
          Discover more
        </Link>
        <div className="arrow-link justify-self-end mt-5 mr-[3.125rem]"></div>
      </div>
    </section>
  );
}
