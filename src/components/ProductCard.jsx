import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const ProductCard = ({ id, title, description, price, thumbnail }) => {
  return (
    <Link to={`/products/${id}`}>
      <div className="rounded-[10px] bg-gray-300 shadow-lg p-2 w-[300px]">
        <div className="flex flex-col space-y-2">
          <img
            src={thumbnail}
            alt="thumbnail"
            className="h-[200px] object-cover"
          />

          <div className="flex justify-between p-2 items-center">
            <div>{title}</div>
            <div className="text-[18px] font-semibold">{price}</div>
          </div>

          <div>{description}</div>
        </div>
      </div>
    </Link>
  );
};

ProductCard.propTypes = {
  id: PropTypes.number,
  title: PropTypes.string,
  description: PropTypes.string,
  price: PropTypes.number,
  thumbnail: PropTypes.string,
};

export default ProductCard;
