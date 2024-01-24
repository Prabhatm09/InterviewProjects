const Popup = ({ product, onClose }) => {
  console.log(product);
  if (!product) {
    // If there is no selected product, return null or handle it accordingly
    return null;
  }
  return (
    <div className="popup fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-75">
      <div className="bg-white p-8 rounded shadow-md w-96">
        <h2 className="text-2xl font-bold mb-4">{product.title}</h2>
        <img
          src={product.image}
          alt={product.title}
          className="mb-4 max-w-full h-40 object-cover rounded"
        />
        <p>{product.description}</p>
        <button
          className="bg-blue-500 text-white px-4 py-2 mt-4 rounded"
          onClick={onClose}
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default Popup;
