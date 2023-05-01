import React from "react";
import Item from "./Item";

function ProductItems({products}){

    return (
        <div id="productList">
        {products.map((product)=>{
            return <Item product={product} key={product.id}/>
        })}
        </div>
    );
}

export default ProductItems;