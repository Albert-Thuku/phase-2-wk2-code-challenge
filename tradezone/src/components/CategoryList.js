import React, { useState } from "react";

function CategoryList({products, onCategorySelect}){

    const [selectedCategory, setSelectedCategory] = useState(null);
    const [categoryNames, setCategoryName] = useState([])

    products.forEach((product)=>{
        if(!categoryNames.includes(product.category)){
            setCategoryName([...categoryNames, product.category])
        }
    })

    function categorySelect(category){
        if(category){
            setSelectedCategory(category);
            onCategorySelect(category);
        } else {
            setSelectedCategory(null);
            onCategorySelect(null);
        }
    }

    return(
        <section id="categoryList">
            <button onClick={() => categorySelect(null)}>All</button>
            {categoryNames.map((category)=>{
                return (
                    <button 
                        onClick={() => categorySelect(category)} 
                        key={category}
                        className={selectedCategory === category ? 'active' : ''}
                    >
                        {category}
                    </button>
                );
            })}
        </section>
    );
}

export default CategoryList;
