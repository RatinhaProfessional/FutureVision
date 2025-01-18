import { useEffect, useState } from "react";
import ProductCard from "./productCard";

function Products() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch(
          "https://futurevision.onrender.com/products"
        );
        if (!response.ok) {
          throw new Error("Failed to fetch products");
        }
        const data = await response.json();
        setProducts(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);
  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="mt-28">
      <p className="font-paragraph ml-16 text-orange">Sunglasses</p>
      <div className="flex flex-wrap justify-around mx-52 mt-14" id="sunglasses">
        {products.map((products) => (
          <ProductCard key={products._id} products={products} />
        ))}
      </div>
    </div>
  );
}

export default Products;
