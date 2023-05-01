import React, { useState } from "react";
import EditProductForm from "./EditProductForm";

function Item({product}){

    const [purchaseCount, setPurchaseCount] = useState(product.purchases_count);
    const [showForm, setShowForm] = useState(false);
 
    function handleBuy(){
        product.purchases_count+=1
        fetch(`http://localhost:3000/products/${product.id}`,{
            method:'PATCH',
            headers:{"Content-Type" : "application/json"},
            body:JSON.stringify({purchases_count:product.purchases_count})
        })
        .then(resp=>resp.json())
        .then(()=>{
            alert(`${product.name} has been purchased`)
            setPurchaseCount(product.purchases_count)})
        .catch(err=>alert(err))
    }


    function handleEdit(){
        setShowForm(true);
    }

    function handleDeleteItem(){
        fetch(`http://localhost:3000/products/${product.id}`, {method: "DELETE"})
        .then(resp=>resp.json()).then(alert(`${product.name} has been deleted`))
        .catch(err=>alert(err))
    }

    return (
        <div id="productCard" key={product.id}>
            <section className="productImage">
                <img src={product.image} alt=""/>
            </section>
            <section className="productDetails">
                <h3>{product.name}</h3>
                <p>
                Description: {product.description} <br />
                Price: ${product.price} <br />
                Purchase count: {purchaseCount}
                </p>
                <button onClick={handleBuy}>Buy Item</button>
                <button onClick={handleEdit}>Edit Item</button>
                <button onClick={handleDeleteItem}>Delete Item</button>
            </section>
            {showForm && <EditProductForm product={product} />}
        </div>
    );
}

export default Item;
