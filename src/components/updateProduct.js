import React, { useState, useEffect } from "react";

const UpdateProductComponent = ({ product, onUpdate, onClose }) => {
  const [updatedProduct, setUpdatedProduct] = useState({ ...product });

  useEffect(() => {
    // Reset the updated product when the product prop changes
    setUpdatedProduct({ ...product });
  }, [product]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUpdatedProduct((prevProduct) => ({
      ...prevProduct,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onUpdate(updatedProduct);
    onClose();
  };

  return (
    <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-gray-400 p-8 rounded-lg shadow-lg w-[50em]">
      <h2 className="text-2xl text-black font-semibold mb-4">Update Product</h2>
      <form onSubmit={handleSubmit}>
        <label className="block text-sm font-medium text-black">Title:</label>
        <input
          type="text"
          name="title"
          value={updatedProduct.title}
          onChange={handleChange}
          className="w-full p-2 mb-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
        />

        <label className="block text-sm font-medium text-black">Price:</label>
        <input
          type="number"
          name="price"
          value={updatedProduct.price}
          onChange={handleChange}
          className="w-full p-2 mb-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
        />

        <label className="block text-sm font-medium text-black">
          Description:
        </label>
        <textarea
          name="description"
          value={updatedProduct.description}
          onChange={handleChange}
          className="w-full p-2 mb-4 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
        />

        <div className="flex justify-end">
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 mr-2 rounded-md"
          >
            Update
          </button>
          <button
            type="button"
            onClick={onClose}
            className="bg-gray-300 text-black px-4 py-2 rounded-md"
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default UpdateProductComponent;
