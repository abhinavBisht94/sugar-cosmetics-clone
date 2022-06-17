import "../../CSS/productsDetail/productsDetailTwo.css";

export const ProductsDetailTwo = () => {
  return (
    <div id="prodDetailDivTwo">
      <img
        src="https://in.sugarcosmetics.com/productbanner.svg"
        alt="product banner"
      />

      <br />
      <p id="pd2Input">
        Check Estimated Delivery Date For your Location :
        <input type="text" placeholder="Input Pincode" />
        <button>Check Now</button>
      </p>

      <div id="pd2Offers">
        <p>Available Offers!!</p>

        <p>
          –Get a Matte Attack <span>Know More</span>
        </p>

        <p>Transferproof Lipstick FREE on a spend of Rs. 799</p>
        <p>
          – Get a Aquaholic Instant Pore Cleansing Mask, Contour De Force Mini
          Blush and a Pouch on a spend of Rs. 998
          <span>Know More</span>
        </p>

        <p>
          – Grab a complimentary product worth Rs.499 on a spend of Rs.699{" "}
          <span>Know More</span>
        </p>
      </div>
    </div>
  );
};
