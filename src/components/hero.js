import { useEffect, useState } from "react";
import Popup from "./popup";
import ProductTable from "./productTable";
import UpdateProduct from "./updateProduct";

const Hero = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [products, setProducts] = useState([]);
  const [isUpdateProductOpen, setIsUpdateProductOpen] = useState(false);
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [isBlur, setIsBlur] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((data) => setProducts(data))
      .catch((error) => console.error("Error fetching products:", error));
  }, []);

  const openUpdateProduct = (productId) => {
    setSelectedProduct(productId);
    setIsUpdateProductOpen(true);
    setIsBlur(true);
  };

  const closeUpdateProduct = () => {
    setIsUpdateProductOpen(false);
    setIsBlur(false);
  };

  const openPopup = (productId) => {
    setSelectedProduct(productId);
    setIsPopupOpen(true);
    setIsBlur(true);
  };

  const closePopup = () => {
    setIsPopupOpen(false);
    setIsBlur(false);
  };

  const handleView = (product) => {
    openPopup(product);
  };

  const handleUpdate = (updatedProduct) => {
    setIsUpdateProductOpen(true);
    setSelectedProduct(updatedProduct);
    setIsBlur(true);
    // Make API call to update the product
    fetch(`https://fakestoreapi.com/products/${updatedProduct.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedProduct),
    })
      .then((response) => response.json())
      .then((data) => {
        // Display the response data in the console
        console.log("Product updated:", data);
        // Update the product list after the update
        setProducts((prevProducts) =>
          prevProducts.map((product) =>
            product.id === updatedProduct.id ? data : product
          )
        );
        // Close the popup or perform any other necessary actions
        closeUpdateProduct();
      })
      .catch((error) => {
        console.error("Error updating product:", error);
        // Display an alert box with the error message
        alert("Error updating product. Please try again.");
      });
  };

  const handleDelete = (productId) => {
    // Make API call to delete the product
    fetch(`https://fakestoreapi.com/products/${productId}`, {
      method: "DELETE",
    })
      .then((response) => response.json())
      .then((data) => {
        // Display the response data in the console
        console.log("Product deleted:", data);

        // Update the product list after deletion
        setProducts((prevProducts) =>
          prevProducts.filter((product) => product.id !== productId)
        );

        // Close the popup or perform any other necessary actions
        closePopup();
      })
      .catch((error) => {
        console.error("Error deleting product:", error);

        // Display an alert box with the error message
        alert("Error deleting product. Please try again.");
      });
  };

  const handleClosePopup = () => {
    setIsUpdateProductOpen(false);
    setIsBlur(false);
  };

  // Filter products based on search term and selected category
  const filteredProducts = products.filter(
    (product) =>
      product.title.toLowerCase().includes(searchTerm.toLowerCase()) &&
      (selectedCategory === "All" || product.category === selectedCategory)
  );

  // Get unique categories for dropdown options
  const categories = [...new Set(products.map((product) => product.category))];

  return (
    <div className="container mx-auto mt-16 mb-32">
      <div className="flex  justify-between">
        <div className="mb-4">
          <input
            type="text"
            placeholder="Search products..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="p-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="category" className="mr-2">
            Select Category:
          </label>
          <select
            id="category"
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="p-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
          >
            <option value="All">All</option>
            {categories.map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
        </div>
      </div>
      <ProductTable
        products={filteredProducts}
        onView={handleView}
        onUpdate={openUpdateProduct}
        onDelete={handleDelete}
      />
      {selectedProduct && (
        <>
          {isPopupOpen && (
            <Popup product={selectedProduct} onClose={closePopup} />
          )}
          {isUpdateProductOpen && (
            <UpdateProduct
              product={selectedProduct}
              onUpdate={handleUpdate}
              onClose={handleClosePopup}
            />
          )}
        </>
      )}
    </div>
  );
};

export default Hero;
