import React from "react";
import { useNavigate } from "react-router-dom";

function Card({
  productName,
  price,
  rating,
  discount,
  availability,
  imageUrl,
  id,
}) {
  const navigate = useNavigate();

  const handleClick = (id) => {
    navigate(`/productPage/${id}`);
  };

  return (
    <div
      className="max-w-sm rounded overflow-hidden shadow-lg m-4"
      onClick={() => {
        handleClick(id);
      }}
    >
      <img className="w-full" src={imageUrl} alt="Laptop" />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">Laptop Details</div>
        <p className="text-gray-700 text-base">
          <strong>Name:</strong> {productName}
        </p>
        <p className="text-gray-700 text-base">
          <strong>Quantity:</strong> {price}
        </p>
        <p className="text-gray-700 text-base">
          <strong>Rating:</strong> {rating} / 5
        </p>
        <p className="text-gray-700 text-base">
          <strong>Discount:</strong> {discount}%
        </p>
        <p
          className={`text-base ${
            availability ? "text-green-500" : "text-red-500"
          }`}
        >
          <strong>Availability:</strong>{" "}
          {availability ? "In Stock" : "Out of Stock"}
        </p>
      </div>
    </div>
  );
}

export default Card;
