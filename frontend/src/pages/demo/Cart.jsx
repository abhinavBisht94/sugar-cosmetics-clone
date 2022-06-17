import React from "react";
import "./Cart.css";
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

export const Cart = () => {
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
          <div id="cartBox"></div>
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
            <a href="makeup.html">Continue Shopping</a>
            <a href="delivery.html">
              <DelInfoBTN>Delivery Information</DelInfoBTN>
            </a>
          </DelInfo>
        </CartDiv2>
      </CartDiv>
    </Body>
  );
};
