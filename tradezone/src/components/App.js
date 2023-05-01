import React, { useEffect, useState } from "react";
import CategoryList from "./CategoryList";
import ProductItems from "./ProductItems";
import AddProductForm from "./AddProductForm";

function App() {

  const [products, setProducts] = useState([])
  const [selectedCategory, setSelectedCategory] = useState(null);

  function handleCategorySelect(category) {
    setSelectedCategory(category);
  }

  const filteredProducts = selectedCategory? products.filter((product) => product.category === selectedCategory) : products;

  useEffect(()=>{fetch('http://localhost:3000/products').then(res=>res.json()).then(data=>setProducts(data)).catch(err=>console.log(err))},[])

  return (
    <div id="MainDiv">
    <header id="MainHeader">
      <h1>TradeZone : Shopping Made Convinient For All</h1>
    </header>
    <CategoryList products={products} onCategorySelect={handleCategorySelect}/>
    <ProductItems products={filteredProducts}/>
    <AddProductForm products={products}/>
    </div>
  );
  
}

export default App;
