import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../../CSS/delivery.css";
import {
    CartDiv,
    CartDiv1,
    CartDiv2,
    DelInfo,
    DelInfoBTN1,
    Dis1,
    Dis11,
    Dis2,
    Dis21,
    Dis3,
    Dis31,
    PriceDis,
} from "../../CSS/Styles";

export const Delivery = () => {
    const [cart, setCart] = useState([]);
    console.log("cart: ", cart);

    const [total, setTotal] = useState(0);
    console.log("total: ", total);

    const user = JSON.parse(localStorage.getItem("User"));

    let sum = 0;
    useEffect(() => {
        getCartData();
        for (let i = 0; i < cart.length; i++) {
            sum += cart[i].Price;
            setTotal(sum);
        }
    }, []);

    const getCartData = async () => {
        try {
            let res = await fetch(`https://real-gold-chimpanzee-slip.cyclic.app/cart/${user._id}`);
            let data = await res.json();
            setCart(data[0].cart);
        } catch (error) {
            console.log("error: ", error.message);
        }
    };

    return (
        <div>
            <CartDiv>
                <CartDiv1>
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
                            <p id="subtotal">999</p>
                        </Dis1>
                        <Dis2>
                            <Dis21>
                                <img
                                    src="https://in.sugarcosmetics.com/desc-images/Shipping_Cost.svg"
                                    alt=""
                                />
                                <p>Shipping Cost:</p>
                            </Dis21>
                            <p id="Shipping"></p>
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
                        <div id="Dis4">
                            <div id="Dis41">
                                <img
                                    src="https://in.sugarcosmetics.com/desc-images/AmountPayable.svg"
                                    alt=""
                                />
                                <p>Amount Payable: 999</p>
                            </div>
                            <p id="payable"></p>
                        </div>
                    </PriceDis>

                    <div id="orderSummary">
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
                    </div>
                    <div id="cartBox"></div>
                </CartDiv1>

                <CartDiv2>
                    <div id="priceDetails">
                        <div className="priceDetails">
                            <img
                                src="https://in.sugarcosmetics.com/desc-images/CustomerInformation.svg"
                                alt=""
                            />
                            <p>Contact Information</p>
                        </div>
                    </div>

                    <div id="contactInfoDiv">
                        <div id="fullNameNnum">
                            <p id="fullName"></p>
                            <p id="phoneNumber"></p>
                        </div>

                        <div id="userEmail"></div>

                        <div id="addNewAddress">
                            <p id="txtDelAdd">Delivery Address</p>
                            <button>+ Add New Address</button>
                        </div>

                        <div id="displayAddress">
                            <p id="recName">Chiranjit Behera</p>
                            <p id="recmob">+91 9090475233</p>
                            <p id="recln1">Bhadrak</p>
                            <p id="recln2">Odisha</p>
                        </div>

                        <DelInfo>
                            <Link className="link" to="/cart">
                                Offers and Pricing
                            </Link>
                            <Link className="link" to="/payment">
                                <DelInfoBTN1>Delivery Information</DelInfoBTN1>
                            </Link>
                        </DelInfo>
                    </div>
                </CartDiv2>
            </CartDiv>

            <div id="addressForm">
                <div id="addrHead">
                    <img
                        src="https://in.sugarcosmetics.com/desc-images/Add_Address.svg"
                        alt=""
                    />
                    <p>Add new delivery address</p>
                </div>

                <div id="addform1">
                    <div>
                        <p> Full Name</p>
                        <input type="text" id="fullN" />
                    </div>
                    <div>
                        <p> Phone Number</p>
                        <input type="number" id="PhOnE" />
                    </div>
                </div>

                <h5>Address</h5>

                <div id="addform2">
                    <input
                        type="text"
                        id="addln1"
                        placeholder="Address Line 1"
                    />
                    <br />
                    <input
                        type="text"
                        id="addln2"
                        placeholder="Address Line 2"
                    />
                    <br />
                    <input type="text" id="pin" placeholder="Zipcode/Pincode" />
                    <br />
                    <input type="text" id="country" placeholder="Country" />
                    <br />
                    <input
                        type="text"
                        id="state"
                        placeholder="State/Province"
                    />
                    <br />
                    <input type="text" id="city" placeholder="City" />
                    <br />
                </div>

                <div id="addform3">
                    <button id="addressSave">Save and use this Address</button>
                    <button id="cancelAddress">Cancel</button>
                </div>
            </div>
        </div>
    );
};
