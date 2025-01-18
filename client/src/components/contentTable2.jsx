import { Link } from "react-scroll";

const ContentTableTwo = () => {
  return (
    <article className="flex flex-row mt-32">
      <div className="vertical-line"></div>
      <div className="flex flex-col ml-16">
        <Link to="new-in" smooth={true} duration={500}>
          <p className="cursor-pointer font-header font-paragraph">New in</p>
        </Link>
        <Link to="sunglasses" smooth={true} duration={500}>
          <p className="cursor-pointer font-header font-paragraph mt-5">
            Sunglasses
          </p>
        </Link>
      </div>
    </article>
  );
};

export default ContentTableTwo;
