import React from "react";
import CategoryList from "./CategoryList";
import ProductItems from "./ProductItems";
import AddProductForm from "./AddProductForm";
import EditProductForm from "./EditProductForm";

function App() {

  return (
    <div id="MainDiv">
    <header id="MainHeader">
      <h1>TradeZone : Shopping Made Convinient For All</h1>
    </header>
    <CategoryList />
    <ProductItems />
    <AddProductForm />
    <EditProductForm />

    </div>
  );
  
}

export default App;
