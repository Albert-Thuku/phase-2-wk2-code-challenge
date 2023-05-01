import React, { useState } from "react";

function Item({product}){

    const [purchaseCount, setPurchaseCount] = useState(product.purchases_count);
 
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

    function handleAddToCart(){

    }

    function handleDeleteItem(){
        fetch(`http://localhost:3000/products/${product.id}`, {method: "DELETE"})
        .then(resp=>resp.json()).then(alert(`${product.name} has been deleted`))
        .catch(err=>alert(err))
    }

    return (
        <div id="productCard">
            <section className="productImage">
                <img src={product.image} alt=""/>
            </section>
            <section className="productDetails">
                <h3>{product.name}</h3>
                <p>
                Description: {product.description}
                Price: ${product.price}
                Purchase count: {purchaseCount}
                </p>
                <button onClick={handleBuy}>Buy Item</button>
                <button onClick={handleAddToCart}>Add To Cart</button>
                <button onClick={handleDeleteItem}>Delete Item</button>
            </section>
        </div>
    );
}

export default Item;