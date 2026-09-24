import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeItem, updateQuantity } from "./CartSlice";

function CartItem() {
  const dispatch = useDispatch();

  const cartItems = useSelector((state) => state.cart.items);

  const calculateTotalAmount = () => {
    return cartItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
  };

  return (
    <div className="cart-page">
      <h1>Shopping Cart</h1>

      {cartItems.map((item) => (
        <div className="cart-item" key={item.id}>

          <img
            src={item.image}
            alt={item.name}
          />

          <h3>{item.name}</h3>

          <p>Price: ₹{item.price}</p>

          <div>
            <button
              onClick={() =>
                dispatch(
                  updateQuantity({
                    id: item.id,
                    quantity: item.quantity - 1
                  })
                )
              }
            >
              -
            </button>

            <span>{item.quantity}</span>

            <button
              onClick={() =>
                dispatch(
                  updateQuantity({
                    id: item.id,
                    quantity: item.quantity + 1
                  })
                )
              }
            >
              +
            </button>
          </div>

          <p>
            Item Total: ₹{item.price * item.quantity}
          </p>

          <button
            onClick={() => dispatch(removeItem(item.id))}
          >
            Remove
          </button>
        </div>
      ))}

      <h2>
        Total Cart Amount: ₹{calculateTotalAmount()}
      </h2>

      <button>Continue Shopping</button>
      <button>Checkout</button>
    </div>
  );
}

export default CartItem;
