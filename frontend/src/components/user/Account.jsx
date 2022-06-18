import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../context/UserContext";

const Account = () => {
  const { setIsLoggedIn } = useContext(UserContext);
  const navigate = useNavigate();

  return (
    <div>
      <button
        onClick={() => {
          setIsLoggedIn(false);
          navigate("/");
        }}
      >
        Logout
      </button>
    </div>
  );
};

export default Account;
