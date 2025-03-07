import React from "react";
import { RiDeleteBin3Line } from "react-icons/ri";

const CartContents = () => {
  const cartProducts = [
    {
      productId: 1,
      name: "T-shirt",
      size: "M",
      color: "Red",
      quantity: 1,
      price: 15,
      image: "https://picsum.photos/200?random=1",
    },
    {
      productId: 2,
      name: "Jeans",
      size: "L",
      color: "Blue",
      quantity: 1,
      price: 30,
      image: "https://picsum.photos/200?random=2",
    },
  ];

  return (
    <div className="p-4">
      {cartProducts.map((product) => (
        <div
          key={product.productId}
          className="flex items-center justify-between py-4 border-b"
        >
          {/* Product Image */}
          <img
            src={product.image}
            alt={product.name}
            className="w-20 h-24 object-cover rounded"
          />

          {/* Product Details */}
          <div className="flex-1 px-4">
            <h3 className="font-semibold">{product.name}</h3>
            <p className="text-gray-500 text-sm">
              Size: {product.size} | Color: {product.color}
            </p>
            <div className="flex items-center mt-2">
              <button className="border rounded px-2 py-1 text-xl font-medium">
                -
              </button>
              <span className="mx-4">{product.quantity}</span>
              <button className="border rounded px-2 py-1 text-xl font-medium">
                +
              </button>
            </div>
          </div>

          {/* Price & Delete Button */}
          <div className="flex flex-col items-end">
            <p className="font-medium text-lg">${product.price.toLocaleString()}</p>
            <button>
              <RiDeleteBin3Line className="h-6 w-6 mt-2 text-red-600" />
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CartContents;
