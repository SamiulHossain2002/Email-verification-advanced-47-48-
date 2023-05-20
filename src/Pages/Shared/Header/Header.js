import React, { useContext } from "react";
import { Link } from "react-router-dom";
import UserContext, { AuthContext } from "../../../Context/UserContext";

const Header = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleSignOut = () => {
    logOut();
  };

  return (
    <div>
      <div className="navbar bg-primary text-primary-content">
        <Link to="/" className="btn btn-ghost normal-case text-xl">
          {" "}
          Auth Context
        </Link>
        <Link to="/home" className="btn btn-ghost normal-case text-xl">
          {" "}
          Home
        </Link>
        <Link to="/login" className="btn btn-ghost normal-case text-xl">
          {" "}
          Login
        </Link>
        <Link to="/registration" className="btn btn-ghost normal-case text-xl">
          {" "}
          Registration
        </Link>
        {user?.email && <h5 className="btn btn-ghost text-xl">{user.email}</h5>}

        {user?.email ? (
          <button className="btn btn-sm" onClick={handleSignOut}>
            Log out
          </button>
        ) : (
          <button className="btn btn-sm">
            {" "}
            <Link to="/login">Login</Link>{" "}
          </button>
        )}
      </div>
    </div>
  );
};

export default Header;
