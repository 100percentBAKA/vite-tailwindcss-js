import { useParams } from "react-router-dom";
import { useProducts } from "../services/queries";

const ProductDetails = () => {
  const { productID } = useParams();
  const { data, isPending, isError, error } = useProducts();

  const id = parseInt(productID);
  const product = data?.data?.products.find((product) => product.id === id);

  if (isPending) {
    return <div>Loading . . . </div>;
  }

  if (isError) {
    return <div>{error.message}</div>;
  }

  if (!product) {
    return <div>Product not found</div>;
  }

  // Display the product details
  return (
    <div className="h-screen w-screen bg-slate-300 flex items-center justify-center">
      <div>
        <div className="carousel rounded-box flex">
          {product.images.map((image) => (
            <div className="carousel-item" key={product.id}>
              <img src={image} alt={image} />
            </div>
          ))}
        </div>
        <p>{product.description}</p>
      </div>
    </div>
  );
};

export default ProductDetails;
