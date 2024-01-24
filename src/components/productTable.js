import React from "react";

const ProductTable = ({ products, onView, onUpdate, onDelete }) => {
  return (
    <table className="table-auto w-full">
      <thead>
        <tr>
          <th className="px-4 py-2">Product Title</th>
          <th className="px-4 py-2">Product Price</th>
          <th className="px-4 py-2">Product Description</th>
          <th className="px-4 py-2">Product Category</th>
          <th className="px-4 py-2">Action</th>
        </tr>
      </thead>
      <tbody>
        {products.map((product) => (
          <tr key={product.id}>
            <td className="border px-4 py-2">{product.title}</td>
            <td className="border px-4 py-2">₹ {product.price}</td>
            <td className="border px-4 py-2">{product.description}</td>
            <td className="border px-4 py-2">{product.category}</td>
            <td className="border px-4 py-2 flex gap-2 flex-col justify-center items-center ">
              <button
                className="bg-blue-500 w-full text-white px-2 py-1 mr-2 rounded"
                onClick={() => onView(product)}
              >
                View
              </button>
              <button
                className="bg-yellow-500 w-full text-white px-2 py-1 mr-2 rounded"
                onClick={() => onUpdate(product)}
              >
                Update
              </button>
              <button
                className="bg-red-500 w-full text-white px-2 py-1 rounded"
                onClick={() => onDelete(product.id)}
              >
                Delete
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default ProductTable;
