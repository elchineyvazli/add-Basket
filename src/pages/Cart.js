import { useContext } from "react";
import { CartContext } from "../CartContext";
import Card from "../components/Card";
import "./Cart.scss";

const Cart = () => {
  const { cart, removeFromCart, totalPrice } = useContext(CartContext);

  if (cart.length === 0) {
    return (
      <div className="cartPartForEmpty">
        <h2>Your cart is empty</h2>
      </div>
    );
  }

  return (
    <div className="mainPart">
      <div className="cartPart">
        {cart.map((card) => (
          <Card
            key={card.id}
            isShow={false}
            cardId={card.id}
            cardName={card.name}
            removeFunction={() => removeFromCart(card.id)}
            price={card.price}
            cardCount={card.quantity}
          />
        ))}
      </div>
      <div className="calc">
        <p>
          Total cost : <span>{totalPrice}</span>
        </p>
      </div>
    </div>
  );
};

export default Cart;
