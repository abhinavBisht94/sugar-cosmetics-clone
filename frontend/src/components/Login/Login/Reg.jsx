import React, { useContext, useState } from "react";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import SmartphoneIcon from "@mui/icons-material/Smartphone";
import Link from "@mui/material/Link";
import TextField from "@mui/material/TextField";
import axios from "axios";
import { UserContext } from "../../../context/UserContext";
import { useNavigate } from "react-router-dom";

const Reg = () => {
  const { setIsLoggedIn, setSingleUser } = useContext(UserContext);
  const navigate = useNavigate();
  // const [registeration, setRegisteration] = useState("incomplete");
  const [fName, setFName] = useState("");
  const [lName, setLName] = useState("");
  const [number, setNumber] = useState();
  const [email, setEmail] = useState("");

  const handleRegister = async () => {
    try {
      let res = await axios.post(
        "https://real-gold-chimpanzee-slip.cyclic.app/auth/register",
        {
          fName,
          lName,
          number,
          email,
        }
      );

      let data = await res.data;
      setSingleUser(data.user);
      localStorage.setItem("User", JSON.stringify(data.user));
      if (data) {
        setIsLoggedIn(true);
        navigate(-2);
      }
      console.log("data: ", data);
    } catch (error) {
      if (error) {
        alert(error.response.data.error.message);
      }
    }
    // if (fName === "" || lName === "" || email === "" || number === "") {
    //   alert("Please Fill All Details");
    //   return;
    // }
  };

  return (
    <div>
      <Box
        sx={{
          fontFamily: "sans-serif",
          //   float: "right",
          margin: "auto",
          width: "630px",
          height: "710px",
          padding: "20px",

          backgroundImage: `url("https://in.sugarcosmetics.com/Login_bg.svg")`,
        }}
      >
        <h2 style={{ color: "#ffffff" }}>Login/Signup</h2>
        {/* inputs box */}
        <Box
          sx={{
            color: "#000000",
            padding: "10px",
            margin: "10px 200px 0px 0px",
            backgroundColor: "#ffffff",
            boxShadow: "0px 3px 2px gray",
            width: "96%",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              gap: "5%",
              fontSize: "25px",
              padding: "10px",
            }}
          >
            <SmartphoneIcon sx={{ width: "30px", height: "30px" }} />
            Welcome!
          </Box>

          {/* <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              padding: "10px",
              marginTop: "30px",
            }}
          >
            <p style={{ marginTop: "0px" }}>
              Phone Number Verified - +91 9742224461.
            </p>
            <Link>(Try another number)</Link>
          </Box> */}

          <Box
            sx={{
              padding: "10px",
              display: "flex",
              flexDirection: "row",
              gap: "3%",
            }}
          >
            {/* <FacebookIcon sx={{width:"45px", height:"60px"}} />
                    <p style={{margin:"20px 0px"}}>or</p> */}
            <img
              style={{
                width: "140px",
                height: "40px",
                margin: "10px 0px",
              }}
              src="https://in.sugarcosmetics.com/desc-images/google.png"
              alt="google"
            />
          </Box>

          <hr />

          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "left",
              padding: "5px 10px",
              gap: "20px",
            }}
          >
            <p style={{ marginRight: "auto" }}>Or Enter Account Details</p>

            {/* input feilds First Name, Last Name, Email Address*/}
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: "15px",
                width: "75%",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  gap: "3%",
                }}
              >
                <TextField
                  value={fName}
                  onChange={(e) => setFName(e.target.value)}
                  id="standard-basic"
                  sx={{ backgroundColor: "#F1F1F1" }}
                  placeholder="First Name"
                />
                <TextField
                  value={lName}
                  onChange={(e) => setLName(e.target.value)}
                  id="standard-basic"
                  sx={{ backgroundColor: "#F1F1F1" }}
                  placeholder="Last Name"
                />
              </Box>
              <TextField
                value={number}
                onChange={(e) => setNumber(e.target.value)}
                id="standard-basic"
                sx={{ backgroundColor: "#F1F1F1" }}
                placeholder="Enter mobile number"
              />
              <TextField
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                id="standard-basic"
                sx={{ backgroundColor: "#F1F1F1" }}
                placeholder="Email Address"
              />
            </Box>

            <Box>
              <Button
                onClick={handleRegister}
                sx={{
                  backgroundColor: "#FC2779",
                  fontFamily: "IBM Plex Sans, sans-serif",
                  fontSize: "15px",
                  color: "#ffffff",

                  borderRadius: "0px",
                  width: "75%",
                  height: "41px",
                  "&:hover": {
                    color: "#ffffff",
                    backgroundColor: "#FDAAC9",
                  },
                }}
              >
                Save and Continue
              </Button>
            </Box>
          </Box>
        </Box>

        {/* -------------------------------------------------------------------------------------------------------------------------------- */}

        <Box sx={{ display: "flex", flexDirection: "column" }}>
          <Box
            sx={{
              fontWeight: "600",
              padding: "10px",
              margin: "15px 0px",
              textAlign: "center",
              fontSize: "15px",
            }}
          >
            Registering for this site allows you to access your order status and
            history. Just fill in the fields below, and we'll get a new account
            set up for you in no time. We will only ask you for information
            necessary to make the purchase process faster and easier.
          </Box>
          <Box
            sx={{
              margin: "5px 10px",
              display: "flex",
              flexDirection: "row",
              gap: "2.5%",
              justifyContent: "center",
              padding: "10px 0px",
              fontSize: "12px",
            }}
          >
            <Box>
              <p
                style={{
                  display: "inline-block",
                  margin: "3px 0px",
                }}
              >
                By Signing up or logging in, you agree to our
              </p>
            </Box>
            <Box
              sx={{
                margin: "4px 0px",
                cursor: "pointer",
              }}
            >
              <Link sx={{ color: "#000000DE", "&:hover": { color: "blue" } }}>
                Terms and Conditions
              </Link>
            </Box>
          </Box>
        </Box>
      </Box>
    </div>
  );
};

export default Reg;
