import React from "react";
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
    const handleClick = () => {
      let savedAddress = JSON.parse(localStorage.getItem("address"));

      if (savedAddress == null) {
        addressBlock();
      } else {
        window.location.href = "payment.html";
      }
  }

  function addressBlock() {
    let userD = JSON.parse(localStorage.getItem("accDetails"));
    let forM = document.getElementById("addressForm");
    forM.style.display = "block";
    let cartDiv = document.getElementById("cartDiv");
    cartDiv.style.opacity = 0.4;
    document.getElementById("fullN").value =
      userD.firstName + " " + userD.lastName;
    document.getElementById("PhOnE").value = userD.mob;
  }

  document.getElementById("addressSave").addEventListener("click", function () {
    addressSave();
  });

  function addressSave() {
    let add1 = document.getElementById("addln1").value;
    let add2 = document.getElementById("addln2").value;
    let pin = document.getElementById("pin").value;
    let country = document.getElementById("country").value;
    let state = document.getElementById("state").value;
    let city = document.getElementById("city").value;

    let addrData = { add1, add2, pin, city, state, country };

    localStorage.setItem("address", JSON.stringify(addrData));
    window.location.reload();
  }
    let savedAddress = JSON.parse(localStorage.getItem("address"));
    console.log("savedAddress:", savedAddress);

    let userD = JSON.parse(localStorage.getItem("accDetails"));
    if (userD) {
      document.getElementById("recName").innerText =
        userD.firstName + " " + userD.lastName;
      document.getElementById("recmob").innerText = userD.mob;
    }
    if (savedAddress) {
      document.getElementById(
        "recln1"
      ).innerText = `${savedAddress.add1},${savedAddress.add2}`;
      document.getElementById(
        "recln2"
      ).innerText = `${savedAddress.city},${savedAddress.state},${savedAddress.pin},${savedAddress.country},`;
    }


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
              <p id="subtotal"></p>
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
                <p>Amount Payable:</p>
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
              <p id="recName"></p>
              <p id="recmob"></p>
              <p id="recln1"></p>
              <p id="recln2"></p>
            </div>

            <DelInfo>
              <Link to="/cart">Offers and Pricing</Link>
              <Link to="/delivery">
                <DelInfoBTN1 onClick={handleClick}>Delivery Information</DelInfoBTN1>
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
          <input type="text" id="addln1" placeholder="Address Line 1" />
          <br />
          <input type="text" id="addln2" placeholder="Address Line 2" />
          <br />
          <input type="text" id="pin" placeholder="Zipcode/Pincode" />
          <br />
          <input type="text" id="country" placeholder="Country" />
          <br />
          <input type="text" id="state" placeholder="State/Province" />
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
