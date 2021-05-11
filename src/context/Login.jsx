import React, { useContext } from "react";
import UserContext from "./userContext";

function Login() {
  const { onLoggedIn } = useContext(UserContext);
  return (
    <div>
      <button onClick={onLoggedIn}>Login</button>
    </div>
  );
}

export default Login;
