import React from "react";
import {
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
  Payable,
  PayMethods,
  PayMethods1,
  Pm1,
  PriceDis,
} from "../../CSS/Styles";


export const Payment = () => {
  return (
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

        <div id="orderSummary">
          <div class="orderSummary">
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
          <div class="priceDetails">
            <img
              src="https://in.sugarcosmetics.com/desc-images/Offers_price_details.svg"
              alt=""
            />
            <p>Payment Method</p>
          </div>
        </div>
        <p>Select a Payment Method</p>
        <PayMethods>
          <PayMethods1>
            <Pm1>
              <img
                src="https://in.sugarcosmetics.com/paymentIcons/upi.svg"
                alt=""
              />
              <p>Instant Pay Using Other UPIs(Gpay, PhonePe, BHIM etc.)</p>
            </Pm1>
            <img
              src="https://in.sugarcosmetics.com/desc-images/Check.svg"
              alt=""
            />
          </PayMethods1>
          <PayMethods1>
            <Pm1>
              <img
                src="https://in.sugarcosmetics.com/paymentIcons/wallets.svg"
                alt=""
              />
              <p>Mobile Wallets (PhonePe, Freecharge etc.)</p>
            </Pm1>
            <img
              src="https://in.sugarcosmetics.com/desc-images/Check.svg"
              alt=""
            />
          </PayMethods1>
          <PayMethods1>
            <Pm1>
              <img
                src="https://in.sugarcosmetics.com/paymentIcons/creditDebit.svg"
                alt=""
              />
              <p>Credit/Debit Cards (Visa, Master, Rupay, Amex etc.)</p>
            </Pm1>
            <img
              src="https://in.sugarcosmetics.com/desc-images/Check.svg"
              alt=""
            />
          </PayMethods1>
          <PayMethods1>
            <Pm1>
              <img
                src="https://in.sugarcosmetics.com/paymentIcons/cred.svg"
                alt=""
              />
              <p>CRED Pay</p>
            </Pm1>
            <img
              src="https://in.sugarcosmetics.com/desc-images/Check.svg"
              alt=""
            />
          </PayMethods1>
          <PayMethods1>
            <Pm1>
              <img
                src="https://in.sugarcosmetics.com/paymentIcons/netBanking.svg"
                alt=""
              />
              <p>Net Banking (ICICI, HDFC, SBI etc.)</p>
            </Pm1>
            <img
              src="https://in.sugarcosmetics.com/desc-images/Check.svg"
              alt=""
            />
          </PayMethods1>
          <PayMethods1>
            <Pm1>
              <img
                src="https://in.sugarcosmetics.com/paymentIcons/wallets.svg"
                alt=""
              />
              <p>Pay Later (LazyPay, Simpl, etc.)</p>
            </Pm1>
            <img
              src="https://in.sugarcosmetics.com/desc-images/Check.svg"
              alt=""
            />
          </PayMethods1>
          <PayMethods1>
            <Pm1>
              <img
                src="https://in.sugarcosmetics.com/paymentIcons/wallets.svg"
                alt=""
              />
              <p>Cardless EMI (ZestMoney, EarlySalary, etc.)</p>
            </Pm1>
            <img
              src="https://in.sugarcosmetics.com/desc-images/Check.svg"
              alt=""
            />
          </PayMethods1>
          <PayMethods1>
            <Pm1>
              <img
                src="https://in.sugarcosmetics.com/paymentIcons/cod.svg"
                alt=""
              />
              <p>Cash on Delivery</p>
            </Pm1>
            <img
              src="https://in.sugarcosmetics.com/desc-images/Check.svg"
              alt=""
            />
          </PayMethods1>
        </PayMethods>

        <div id="contactInfoDiv">
          <DelInfo>
            <a href="delivery.html">Delivery Info</a>
            <a href="delivery.html">
              <DelInfoBTN>Delivery Information</DelInfoBTN>
            </a>
          </DelInfo>
        </div>
      </CartDiv2>
    </CartDiv>
  );
};
