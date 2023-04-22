import "./Home.css";
import { useContext } from "react";
import { CartContext } from "../CartContext";
import Card from "./../components/Card";

const Home = () => {
  const { products, addToCart } = useContext(CartContext);

  return (
    <div className="textPart1">
      {products.map((card) => (
        <Card
          key={card.id}
          isShow={true}
          cardId={card.id}
          cardName={card.name}
          addFunction={() =>
            addToCart(card.id, card.name, card.price, card.quantity)
          }
          price={card.price}
        />
      ))}
    </div>
  );
};

export default Home;
