import { Link } from "react-scroll";

const ContentTable = () => {
  return (
    <article className="flex flex-row mt-40">
      <div className="vertical-line"></div>
      <div className="flex flex-col ml-16">
        <Link to="new-in" smooth={true} duration={500}>
          <p className="cursor-pointer font-header font-paragraph">New in</p>
        </Link>
        <Link to="frame-lab" smooth={true} duration={500}>
          <p className="cursor-pointer font-header font-paragraph mt-5">Frame Lab</p>
        </Link>
        <Link to="our-vision" smooth={true} duration={500}>
          <p className="cursor-pointer font-header font-paragraph mt-5">Our Vision</p>
        </Link>
      </div>
    </article>
  );
};

export default ContentTable;
