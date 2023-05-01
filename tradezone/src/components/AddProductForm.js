import React from "react";

function AddProductForm(){


    return (
        <form >
            <h3>Add Product Form</h3><br />
            <label htmlFor="productName">Product Name</label>
            <input type="text" name='productName' value={productName} placeholder="Enter name"/>
            <label htmlFor="productImage">Product Image</label>
            <input type="text" name='productImage' value={productImage} placeholder="Enter image"/>
            <label htmlFor="productDescription">Product Description</label>
            <input type="text" name="productDescription" value={productDescription} placeholder="Enter description"/>
            <label htmlFor="productImage">Product Image</label>
            <input type="text" name="productImage" value={productImage} placeholder="Enter image URL"/>
            <label htmlFor="productPrice"> Product Price</label>
            <input type="text" name="productPrice" value={productPrice} placeholder="Enter price" />
            <label htmlFor="productCategory"> Product Category</label>
            <input type="text" name="productCategory" value={productCategory} placeholder="Enter category" />
        </form>
    );
}

export default AddProductForm;