import React, { useState } from "react";

function AddProductForm({ products, setProductList }) {
  const [formData, setFormData] = useState({
    name: "",
    image: "",
    description: "",
    price: 0,
    category: "",
    favorite: false,
    purchases_count: 0,
  });

  const handleInputChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Send POST request to add new product
    fetch("http://localhost:3000/products", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((data) => {
        // Update product list with new product
        setProductList([...products, data]);
        // Reset form data
        setFormData({
          name: "",
          image: "",
          description: "",
          price: 0,
          category: "",
          favorite: false,
          purchases_count: 0,
        });
      })
      .catch((error) => console.error(error));
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3>Add Product Form</h3>
      <br />
      <label htmlFor="productName">Product Name</label>
      <input
        type="text"
        name="name"
        value={formData.name}
        onChange={handleInputChange}
        placeholder="Enter name"
      />
      <label htmlFor="productImage">Product Image</label>
      <input
        type="text"
        name="image"
        value={formData.image}
        onChange={handleInputChange}
        placeholder="Enter image URL"
      />
      <label htmlFor="productDescription">Product Description</label>
      <input
        type="text"
        name="description"
        value={formData.description}
        onChange={handleInputChange}
        placeholder="Enter description"
      />
      <label htmlFor="productPrice">Product Price</label>
      <input
        type="number"
        name="price"
        value={formData.price}
        onChange={handleInputChange}
        placeholder="Enter price"
      />
      <label htmlFor="productCategory">Product Category</label>
      <input
        type="text"
        name="category"
        value={formData.category}
        onChange={handleInputChange}
        placeholder="Enter category"
      />
      <button type="submit">Add Product</button>
    </form>
  );
}

export default AddProductForm;
