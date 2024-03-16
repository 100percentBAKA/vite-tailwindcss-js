import ProductCard from "../components/ProductCard";
import { useProducts } from "../services/queries";

const Products = () => {
  const { data, isPending, isError, error } = useProducts();

  if (isError) {
    return <div>Error {error.message}</div>;
  }

  if (isPending) {
    return <div>Loading . . . .</div>;
  }

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-12 justify-items-center">
      {data?.data.products.map((product) => (
        <div key={product.id}>
          <ProductCard
            id={product.id}
            title={product.title}
            description={product.description}
            price={product.price}
            thumbnail={product.thumbnail}
          />
        </div>
      ))}
    </div>
  );
};

export default Products;
