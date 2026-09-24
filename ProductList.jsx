import React from "react";
import { useDispatch } from "react-redux";
import { addItem } from "./CartSlice";

function ProductList() {
  const dispatch = useDispatch();

  const categories = [
    {
      name: "Indoor Plants",
      plants: [
        // at least 6 plants
      ]
    },
    {
      name: "Outdoor Plants",
      plants: [
        // at least 6 plants
      ]
    },
    {
      name: "Succulents",
      plants: [
        // at least 6 plants
      ]
    }
  ];

  return (
    <div className="product-list">
      {categories.map((category) => (
        <section key={category.name}>
          <h2>{category.name}</h2>

          <div className="products">
            {category.plants.map((plant) => (
              <div className="product-card" key={plant.id}>
                <img src={plant.image} alt={plant.name} />
                <h3>{plant.name}</h3>
                <p>{plant.description}</p>
                <p>₹{plant.price}</p>

                <button onClick={() => dispatch(addItem(plant))}>
                  Add to Cart
                </button>
              </div>
            ))}
          </div>
        </section>
      ))}
    </div>
  );
}

export default ProductList;
