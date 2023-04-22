import { useState, createContext } from "react";
export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [products] = useState([
    {
      id: 1,
      name: "Smart Tv",
      price: 32,
    },
    {
      id: 2,
      name: "Freezer",
      price: 45,
    },
    {
      id: 3,
      name: "Radio",
      price: 19,
    },
    {
      id: 4,
      name: "Microphone",
      price: 21,
    },
  ]);

  const [cart, setCart] = useState([]);

  function addToCart(id, name, price) {
    const checkExisting = cart.find((card) => card.id === id);

    if (checkExisting) {
      const getNoneExisting = cart.filter(
        (card) => card.id !== checkExisting?.id
      );

      setCart(() => [
        ...getNoneExisting,
        {
          ...checkExisting,
          quantity: checkExisting.quantity + 1,
        },
      ]);
    } else {
      setCart((prev) => [...prev, { id, name, price, quantity: 1 }]);
    }
  }
  cart.sort((a, b) => a.id - b.id);

  function removeFromCart(id) {
    const filtered = cart.filter((card) => card.id !== id);

    const checkExisting = cart.find((card) => card.id === id);

    const getNoneExisting = cart.filter(
      (card) => card.id !== checkExisting?.id
    );

    if (checkExisting.quantity > 1) {
      setCart(() =>
        [
          ...getNoneExisting,
          {
            ...checkExisting,
            quantity: checkExisting.quantity - 1,
          },
        ].sort((a, b) => a.id - b.id)
      );
    } else {
      setCart(filtered);
    }
  }

  const totalPrice = cart.reduce(
    (acc, curr) => acc + curr.price * curr.quantity,
    0
  );

  return (
    <CartContext.Provider
      value={{ products, addToCart, cart, removeFromCart, totalPrice }}
    >
      {children}
    </CartContext.Provider>
  );
};
