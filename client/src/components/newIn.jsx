import { NavLink } from "react-router-dom";
import NewInText from "../assets/NewInText.png";
import NewInMain from "../assets/NewInMain.jpg";
import NewIn1 from "../assets/NewIn1.jpg";
import NewIn2 from "../assets/NewIn2.jpg";

export default function NewIn() {
  return (
    <section className="mt-28">
      <p className="font-paragraph ml-16 text-light-green">New In</p>
      <div className="grid grid-rows-3 grid-cols-3 gap-5 mx-52">
        <img
          src={NewInMain}
          alt="New Glasses image"
          className="row-span-3 mt-28 object-cover h-96"
        />
        <img
          className="animate-spin absolute z-index-0"
          src={NewInText}
          alt="New In spin animation"
        />
        <div className="mt-28 col-span-2 text-end">
          <h2 className="text-4xl font-header">The New Era</h2>
          <p className="ont-paragraph">
            Step into the future with our latest innovation: smart glasses.< br/>
            Blend technology with sleek design, for those who demand both style and substance. < br/>
            Discover a new way to see the world—smarter, sharper, and more connected than ever.
          </p>
        </div>
        <img src={NewIn1} alt="" />
        <img src={NewIn2} alt="" />
      </div>
      <NavLink to="/"></NavLink>
    </section>
  );
}
