import React, { useContext } from "react";
import UserContext from "./userContext";
import CartContext from "./cartContext";

function MovieRow(props) {
  const { currentUser } = useContext(UserContext);
  const { cart } = useContext(CartContext);
  console.log("currentUser", currentUser);
  console.log("cart", cart);

  return <div>Movie Row {currentUser && currentUser.name}</div>;
}

export default MovieRow;
