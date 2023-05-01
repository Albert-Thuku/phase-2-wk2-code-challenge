import React, { useState } from "react";

function EditProductForm({product}){

    const [formData, setFormData] = useState({
        name: product.name,
        image: product.image,
        description: product.description,
        price: product.price,
        category: product.category
    });

    function handleChange(event){
        setFormData({
            ...formData,
            [event.target.name]: event.target.value
        });
    }

    function handleSubmit(){

        fetch(`http://localhost:3000/products/${product.id}`,{
            method:'PATCH',
            headers:{"Content-Type" : "application/json"},
            body:JSON.stringify(formData)
        })
        .then(resp=>resp.json())
        .then(updatedProduct=>{
            alert(`${updatedProduct.name} has been updated`);
        })
        .catch(err=>alert(err));
    }


    return(
        <form onSubmit={handleSubmit} className="editProductForm">
            <h3>Edit Product Form</h3>
            <br />
            <label htmlFor="productName">Product Name</label>
            <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
            />
            <label htmlFor="productImage">Product Image</label>
            <input
                type="text"
                name="image"
                value={formData.image}
                onChange={handleChange}
            />
            <label htmlFor="productDescription">Product Description</label>
            <input
                type="text"
                name="description"
                value={formData.description}
                onChange={handleChange}
            />
            <label htmlFor="productPrice">Product Price</label>
            <input
                type="number"
                name="price"
                value={formData.price}
                onChange={handleChange}
            />
            <label htmlFor="productCategory">Product Category</label>
            <input
                type="text"
                name="category"
                value={formData.category}
                onChange={handleChange}
            />
            <button type="submit">Update Product</button>
        </form>
    );
}

export default EditProductForm;
