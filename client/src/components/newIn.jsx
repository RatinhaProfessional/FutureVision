import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import NewInText from "../assets/NewInText.png";
import NewInMain from "../assets/NewInMain.jpg";
import NewIn1 from "../assets/NewIn1.jpg";
import NewIn2 from "../assets/NewIn2.jpg";

export default function NewIn() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("https://futurevision.onrender.com/products/NewIn");
        if (!response.ok) {
          throw new Error("Failed to fetch products");
        }
        const data = await response.json();
        setProducts(data);
      } catch (err) {
        console.error("Error fetching products:", err);
      }
    };

    fetchProducts();
  }, []);
  return (
    <section className="mt-28" id="new-in">
      <p className="font-paragraph ml-16 text-light-green">New In</p>
      <div className="grid grid-rows-3 grid-cols-3 grid-rows-[8rem_23rem_5rem] gap-5 mx-52 mt-28">
        <div className="row-span-3 object-cover w-full h-full relative">
          <img
            className="animate-spin slow-spin absolute top-[-5rem] right-[-5rem] z-0 w-36 h-36"
            src={NewInText}
            alt="New In spin animation"
          />
          <img
            src={NewInMain}
            alt="New Glasses image"
            className="object-cover absolute w-full h-full z-20"
          />
        </div>
        <div className="row-span-1 col-span-2 justify-items-end">
          <h2 className="text-4xl font-header text-end">The New Era</h2>
          <p className="font-paragraph text-justify mt-5 w-[40rem]">
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
          {products[0] ? (
            <>
              <p className="font-paragraph font-bold">
                {products[0].productName}
              </p>
              <p className="font-paragraph mt-5">{products[0].productPrice}</p>
            </>
          ) : (
            <p className="font-paragraph">Loading first product...</p>
          )}
        </div>
        <div className="h-48">
          {products[1] ? (
            <>
              <p className="font-paragraph font-bold">
                {products[1].productName}
              </p>
              <p className="font-paragraph mt-5">{products[1].productPrice}</p>
            </>
          ) : (
            <p className="font-paragraph">Loading first product...</p>
          )}
        </div>
      </div>
      <div className="mt-12 text-end hover:font-bold relative">
        <Link to="/" className="mr-52 link-with-underline">
          Discover more
        </Link>
      </div>
    </section>
  );
}
