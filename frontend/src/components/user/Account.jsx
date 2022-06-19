import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../context/UserContext";

const Account = () => {
  const { setIsLoggedIn } = useContext(UserContext);
  const navigate = useNavigate();

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        margin: "4rem 0",
      }}
    >
      <button
        style={{
          padding: "0.5rem",
          cursor: "pointer",
          fontSize: "1.2rem",
          fontWeight: "600",
          border: "2px solid",
          borderRadius: "8px",
        }}
        onClick={() => {
          setIsLoggedIn(false);
          localStorage.removeItem("User");
          navigate("/");
        }}
      >
        Logout
      </button>
    </div>
  );
};

export default Account;
