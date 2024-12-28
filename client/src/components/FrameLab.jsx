import { Link } from "react-router-dom";

export default function FrameLab() {
  return (
    <section className="mt-28" id="frame-lab">
      <p className="font-paragraph ml-16 text-pink">FrameLab</p>
      <div className="justify-items-end">
        <h2 className="text-4xl font-header mr-[3.125rem]">
          Forge your own Vision
        </h2>
        <p className="text-justify font-paragraph w-[37.06rem] mt-5 mr-[3.125rem]">
          Unleash your creativity with our customization options. Choose your
          perfect model and personalize it with a variety of colors to match
          your unique style. Whether you're looking for sleek sophistication or
          a bold statement, our customizer lets you create pieces that are as
          individual as you are.
        </p>
        <div className="mt-12 text-end hover:font-bold relative">
          <Link to="/" className="mr-52 link-with-underline">
            Start Forging
          </Link>
        </div>
      </div>
      <div className="mx-5"></div>
      <p className="ml-16 ml-52 font-paragraph w-[37.06rem] mt-5 text-justify">
        Each custom piece is crafted with care, ensuring a unique creation just
        for you. Our production process takes approximately 10 weeks, as we
        prioritize quality and precision at every step. Committed to
        sustainability, we use eco-friendly materials and ethical manufacturing
        practices, so you can feel good about your purchase, knowing it’s
        designed with both style and the planet in mind.
      </p>
    </section>
  );
}
