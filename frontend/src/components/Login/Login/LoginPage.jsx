import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import {Redirect} from "react-router-dom"
// import TextField from "@mui/material/TextField";
// import SmartphoneIcon from '@mui/icons-material/Smartphone';
import SmartphoneIcon from '@mui/icons-material/Smartphone';
import PinInput from "../InputPIN/PinInput";
import { Link } from "@mui/material";
import Checkbox from '@mui/material/Checkbox';
import { useState } from "react";

import Reg from "./Reg";




const LoginPage = () =>{
    const [currentPage,setCurrentPage] = useState("Login");

    const handleRequestOTP = () =>{
        alert("OTP: 5974")
    }

    const goToRegiter = () =>{
        setCurrentPage("Register")
    }

    if(currentPage === "Login"){
      return (
        <Box
          sx={{
            fontFamily:"sans-serif",
            float:"right",
            width:"630px",
            height:"710px",
            padding: "20px",
            backgroundImage: `url("https://in.sugarcosmetics.com/Login_bg.svg")`,
          }}
        >
            <p style={{color:"#ffffff", cursor:"pointer",marginLeft:"-600px" }}>X</p>
            <h2 style={{marginTop:"20px", color:"#ffffff"}}>Login/Signup</h2>
            {/* inputs box */}
            <Box sx={{color:"#000000",
                    padding:"10px",
                    margin:"10px 200px 0px 0px",
                    backgroundColor:"#ffffff",
                    boxShadow:"0px 3px 2px gray",
                    width:"96%",
                    display:"flex", 
                    flexDirection:"column"}}>
                <Box sx={{display:"flex", 
                        flexDirection:"row",
                        gap:"5%", 
                        fontSize:"25px",
                        padding:"10px",
                        }}>
                    <SmartphoneIcon sx={{width:"30px", height:"30px"}} />
                    Login/Signup Using Phone
                </Box>
                <Box sx={{
                    display:"flex",
                    flexDirection:"row",
                    
                }}><p style={{
                    fontSize:"25px", 
                    // marginBottom:"-5px",
                    paddingTop:"22px 8px 0px 0px"}}>+91</p>
                    
                    <PinInput noOfBoxes={10} length={1} />
                    <Button onClick={handleRequestOTP} sx={{
                        cursor:"pointer",
                        backgroundColor:"#333333",
                        color:"#ffffff",
                        width:"130px",
                        height:"41px",
                        padding:"10px",
                        margin:"10px 0px 0px 5px",
                        borderRadius:"0px",
                        "&:hover":{
                            backgroundColor:"#333333",
                            color:"#ffffff",
                        }
                    }}>Request OTP</Button>
                </Box>
                <Box sx={{
                        color:"#FC2779",
                        margin:"22px 5px",
                        fontSize:"15px",
                        padding:"4px 0px",

                }}>Enter your phone number to request an OTP</Box>
                <hr/>
                <Box
                        sx={{display:"flex", 
                            flexDirection:"column",
                            // justifyContent:"left",
                            padding:"10px",
                            gap:"20px",
                            
                            }}>
                    <p style={{marginRight:"auto"}}>Enter the 4 digit OTP received on your phone.</p>
                    <Box sx={{width:"30%"}}><PinInput noOfBoxes={4} length={1} /></Box>
                    <Box>
                        <Button onClick={goToRegiter}
                        sx={{
                            backgroundColor:"#FC2779",
                            fontFamily: "IBM Plex Sans, sans-serif",
                            fontSize:"15px",
                            color:"#ffffff",
                            borderRadius:"0px",
                            width:"180px",
        
                            height:"41px",
                            "&:hover":{
                                color:"#ffffff",
                                backgroundColor:"#FDAAC9",
                            }
                            }}>
                        Verify OTP
                        </Button>
                    </Box>
                </Box>

                <Box sx={{
                        display:"flex", 
                        flexDirection:"row",
                        padding:"10px",
                        width:"96%",
                        gap:"2.5%",
                        }}>
                        <Box><Checkbox sx={{
                            padding:"0px",
                            color: "#FC2779",
                            '&.Mui-checked': {
                                color: "#FC2779",
                            },
                            }} defaultChecked /></Box>
                        <Box><p style={{
                                display:"inline-block",
                                margin:"3px 0px",
                                }}>Get Important Updates on Whatsapp.
                        </p></Box>
                        <Box sx={{
                                margin:"4px 0px",
                                cursor:"pointer"
                                }}>
                                
                                <Link sx={{color:"#000000DE", "&:hover":{color:"blue"}}}>Terms and Conditions</Link>
                        </Box>
                </Box>
            </Box>

            <Box sx={{display:"flex", flexDirection:"column"}}>
                <Box sx={{
                        fontWeight:"600",
                        padding:"10px",
                        margin:"15px 0px",
                        textAlign:"center",
                        fontSize:"15px"
                        }}>
                            Registering for this site allows you to access your order status and history. Just fill in the
                            fields below, and we'll get a new account set up for you in no time. We will only ask you
                            for information necessary to make the purchase process faster and easier.
                </Box>
                <Box sx={{
                        margin:"5px 10px",
                        display:"flex", 
                        flexDirection:"row",
                        gap:"2.5%",
                        justifyContent:"center",
                        padding:"10px 0px",
                        fontSize:"12px"
                        }}>
                        <Box><p style={{
                                display:"inline-block",
                                margin:"3px 0px",
                                }}>By Signing up or logging in, you agree to our
                        </p></Box>
                        <Box sx={{
                                margin:"4px 0px",
                                cursor:"pointer"
                                }}>
                                
                                <Link sx={{color:"#000000DE", "&:hover":{color:"blue"}}}>Terms and Conditions</Link>
                        </Box>
                </Box>
            </Box>
          </Box>
      );
    }
    if(currentPage === "Register"){
        return (
            <Reg  />
        )
    }
}

export default LoginPage