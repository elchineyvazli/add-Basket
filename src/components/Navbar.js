import { Link } from "react-router-dom";
import { useContext } from "react";
import "./Navbar.css";
import { CartContext } from "../CartContext";
import { IoBasketOutline } from "react-icons/io5";
import { AiOutlineHome } from "react-icons/ai";

const Navbar = () => {
  const { cart } = useContext(CartContext);
  const total = cart.reduce((acc, curr) => curr.quantity + acc, 0);
  return (
    <nav>
      <div className="left">
        <Link to="/">
          <AiOutlineHome size={38} color="black" />
        </Link>
      </div>
      <div className="right">
        <Link to="/cart" className="basket">
          <IoBasketOutline size={38} color="black" />
          {total}
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
