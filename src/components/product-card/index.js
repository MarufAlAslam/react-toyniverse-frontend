import { Card } from "antd";
import React from "react";
import { Link } from "react-router-dom";

import { FaStar } from "react-icons/fa";

const ProductCard = ({ item }) => {
  return (
    <Card className="hover:shadow-md" key={item.id}>
      <div className="w-full overflow-hidden">
        <img src={item.image} alt="product" className="w-full" />
      </div>

      <div className="mt-5 text-left">
        {/* rating */}
        <div className="flex items-center mb-3">
          <span className="text-xl font-bold flex justify-start items-center text-[#0f674d]">
            <FaStar className="mr-1" />
            {item.rating}
          </span>
          <span className="text-gray-500 ml-2">
            ({item.reviews.length} reviews)
          </span>
        </div>
        <h3 className="text-xl font-bold">{item.name} </h3>
        <p className="text-gray-500 slice">{item.description}</p>
      </div>
      <div className="border-t mt-3"></div>
      <div className="mt-5 flex justify-between items-center">
        <span className="text-xl font-bold">৳ {item.price}</span>
        <Link
          to={`./product/${item.id}`}
          className="bg-[#0f674d] text-white px-4 py-2 rounded-full"
        >
          View Details
        </Link>
      </div>
    </Card>
  );
};

export default ProductCard;
