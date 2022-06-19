import React from "react";
import "./Cart.css";
import { MdDelete } from "react-icons/md";
import {
    Body,
    CartDiv,
    CartDiv1,
    CartDiv2,
    DelInfo,
    DelInfoBTN,
    Dis1,
    Dis11,
    Dis2,
    Dis21,
    Dis3,
    Dis31,
    Dis4,
    Dis41,
    Makeup,
    MakeupL,
    OrderSummary,
    Payable,
    PriceDis,
} from "../../CSS/Styles";
import { Link } from "react-router-dom";
import { LineAxisOutlined } from "@mui/icons-material";
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { useContext } from "react";
import { UserContext } from "../../context/UserContext";

export const Cart = () => {
    const { singleData } = useContext(UserContext);
    const [cartData, setCartData] = useState([]);
    console.log("cartData: ", cartData);
    // const user = JSON.parse(localStorage.getItem("User"));

    const showCartData = async () => {
        try {
            const res = await axios.get("http://localhost:8080/cart");
            const data = await res.data;
            // console.log("data: ", data);
            // let  = [];
            // for (let i = 0; i < data.cart.length; i++) {
            //   if (user._id === data.cart.user_id) {
            //     cart.push(data.cart[i]);
            //   }
            // }
            // console.log("cart: ", cart);
            setCartData(data.cart);
        } catch (error) {
            console.log("error: ", error);
        }
    };

    cartData.map((item) => {
        console.log("item: ", item.product_id);
    });

    useEffect(() => {
        showCartData();
    }, []);

    return (
        <Body>
            <Makeup>
                <MakeupL>
                    <i className="fa-solid fa-house"></i>
                    <div>/</div>
                    <span>Cart</span>
                </MakeupL>
            </Makeup>

            <CartDiv>
                <CartDiv1>
                    <OrderSummary>
                        <div className="orderSummary">
                            <img
                                src="https://in.sugarcosmetics.com/desc-images/shopping_cart.svg"
                                alt=""
                            />
                            <p>Order Summary</p>
                        </div>
                        <div>
                            <p id="cartTotal"></p>
                        </div>
                    </OrderSummary>
                    <div id="cartBox">
                        {/* {cartData &&
                            cartData.map((item) => {
                                return (
                                    <div className="cart__singleProduct">
                                        <img
                                            src="https://cdn.shopify.com/s/files/1/0906/2558/products/01_720.jpg?v=1650557159"
                                            width={"80px"}
                                            alt=""
                                        />
                                        <p className="cart__prod-title">
                                            
                                            Lorem ipsum dolor sit amet
                                            consectetur.
                                        </p>
                                        <div className="cart__qty">
                                            <MdDelete className="cart__delete-icon" />
                                            <span>-</span>
                                            <span>{item.nos}</span>
                                            <span>+</span>
                                            <span>{`1 * =499`}</span>
                                        </div>
                                    </div>
                                );
                            })} */}
                    </div>
                </CartDiv1>
                <CartDiv2>
                    <div id="priceDetails">
                        <div className="priceDetails">
                            <img
                                src="https://in.sugarcosmetics.com/desc-images/Offers_price_details.svg"
                                alt=""
                            />
                            <p>Offers and Price Details</p>
                        </div>
                        <div id="offers">
                            <img
                                src="https://in.sugarcosmetics.com/desc-images/Offers_icon.svg"
                                alt=""
                            />
                            <h3 id="promo">GJ699</h3>
                        </div>
                        <div className="pricedetails">
                            <img
                                src="https://in.sugarcosmetics.com/desc-images/PriceDetails.svg"
                                alt=""
                            />
                            <p>Price Details</p>
                        </div>

                        <PriceDis>
                            <Dis1>
                                <Dis11>
                                    <img
                                        src="https://in.sugarcosmetics.com/desc-images/CartSubtotal.svg"
                                        alt=""
                                    />
                                    <p>Cart Sub Total:</p>
                                </Dis11>
                                <p id="subtotal">665</p>
                            </Dis1>
                            <Dis2>
                                <Dis21>
                                    <img
                                        src="https://in.sugarcosmetics.com/desc-images/Shipping_Cost.svg"
                                        alt=""
                                    />
                                    <p>Shipping Cost:</p>
                                </Dis21>
                                <p id="Shipping">665</p>
                            </Dis2>
                            <Dis3>
                                <Dis31>
                                    <img
                                        src="https://in.sugarcosmetics.com/desc-images/Discount.svg"
                                        alt=""
                                    />
                                    <p>Discount Applied:</p>
                                </Dis31>
                                <p id="discount">₹ 0.00</p>
                            </Dis3>
                            <Dis4>
                                <Dis41>
                                    <img
                                        src="https://in.sugarcosmetics.com/desc-images/AmountPayable.svg"
                                        alt=""
                                    />
                                    <p>Amount Payable:</p>
                                </Dis41>
                                <Payable>665</Payable>
                            </Dis4>
                        </PriceDis>
                    </div>

                    <DelInfo>
                        <Link className="link" to="/">
                            Continue Shopping
                        </Link>
                        <Link className="link" to="/payment">
                            <DelInfoBTN>Delivery Information</DelInfoBTN>
                        </Link>
                    </DelInfo>
                </CartDiv2>
            </CartDiv>
        </Body>
    );
};
