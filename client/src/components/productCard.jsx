import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingBag } from "@fortawesome/free-solid-svg-icons";
import NewIn1 from "../assets/NewIn1.jpg";
import NewIn2 from "../assets/NewIn2.jpg";
import NewIn3 from "../assets/NewIn3.jpg";
import { Link } from "react-router-dom";

export default function ProductCard({ products }) {
  const templateImages = [NewIn1, NewIn2, NewIn3];
  const randomImage = templateImages[Math.floor(Math.random() * templateImages.length)];

  return (
    <article>
      <div className="flex flex-col mt-14">
        <img src={randomImage} alt={products.imageALT} className="h-[20rem] w-[20rem] object-cover"/>
        <Link to="">
        <p className="font-paragraph font-bold">{products.productName}</p>
        <div className="flex flex-row justify-between">
        <p className="font-paragraph mt-5">{products.productPrice}</p>
        <Link className="mt-5"><FontAwesomeIcon icon={faShoppingBag} /></Link>
        </div>
        </Link>
      </div>
    </article>
  );
}
