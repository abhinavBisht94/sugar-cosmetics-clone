import { useState } from "react";

import "../../CSS/productsDetail/productsDetailThree.css";

export const ProductsDetailThree = () => {
  const [display, setDisplay] = useState("Description");

  return (
    <div id="ProductsDetailThree">
      <div id="pd3Buttons">
        <button
          style={
            display === "Description" ? { backgroundColor: "Lightgray" } : {}
          }
          onClick={() => {
            setDisplay("Description");
          }}
        >
          Description
        </button>

        <button
          style={display === "apply" ? { backgroundColor: "Lightgray" } : {}}
          onClick={() => {
            setDisplay("apply");
          }}
        >
          How to apply
        </button>

        <button
          style={display === "Benefits" ? { backgroundColor: "Lightgray" } : {}}
          onClick={() => {
            setDisplay("Benefits");
          }}
        >
          Benefits
        </button>

        <button
          style={
            display === "questions" ? { backgroundColor: "Lightgray" } : {}
          }
          onClick={() => {
            setDisplay("questions");
          }}
        >
          Commonly asked questions
        </button>

        <button
          style={display === "Reviews" ? { backgroundColor: "Lightgray" } : {}}
          onClick={() => {
            setDisplay("Reviews");
          }}
        >
          Reviews
        </button>
      </div>

      {display === "Description" ? (
        <div id="ProductsDetailThree">
          <p>
            Ready to elevate your eye game to many notches above the ordinary?
            Step up to the world of extreme-wear, waterproof kajals with the
            SUGAR Kohl Of Honour Intense Kajal. Smudge and transfer-resistant,
            this breakthrough formula glides on smoothly for flawless, precise
            application and stays put for 12 straight hours. Ergonomically
            designed in an easy-to-use twist-up form, this wonder product
            delivers pigment-rich, high-impact colour that will fill your eyes
            with all the definition and drama you’ve ever known!
          </p>

          <p>
            <b>01 Black Out (Black)</b> – Every look intensified!
          </p>

          <p>
            {" "}
            <b>Additional Details:</b> This product does not require an
            additional sharpener.{" "}
          </p>

          <p>
            {" "}
            <b>Net Weight:</b> 0.25 gm.
          </p>

          <p>
            <b>SUGAR Kohl Of Honour Intense Kajal Ingredients:</b>
            Cyclopentasiloxane, Hydrogenated Microcrystalline Wax, Iron Oxides,
            Polybutene, Synthetic Bees Wax, Trimethylsiloxysilicate, Black 2,
            Paraffin, Talc, Carnauba Wax, Triethoxycaprylylsilane, Tocopherol,
            Sunflower Seed Oil & BHT.
          </p>

          <p>
            <b>Maximum Retail Price:</b>Rs. 249 (incl. all taxes)
          </p>

          <p>
            <b>Country of Origin:</b>India
          </p>

          <p>
            <b>Company Name:</b>Viva Cosmetics
          </p>

          <p>
            <b>Company Address:</b>
            A/19 G4 Happy Valley, Nr Tikujiniwadi, Manpada, Thane W - 400610
          </p>
        </div>
      ) : display === "apply" ? (
        <div id="ProductsDetailThree">
          <p>
            Swivel up and glide on SUGAR Kohl Of Honour Intense Kajal, using
            short strokes. Build the desired shape on your lash line for a more
            controlled and smoother application. This best kajal can be applied
            to your upper/lower lash line and also on the waterline - you can
            even blend over the entire eyelid for a smokey eye makeup effect.
            Re-cap securely after use. This formula is designed to be used alone
            or over eyeshadow.
          </p>

          <p>Best paired with:</p>

          <div>
            <p>
              Best paired with: <b>eyeshadow palette</b> and create a simple,
              smokey look. Add loads of<b>lengthening mascara </b>for long
              lashes. Finish with a<b>pop of highlighter,</b>pink blush to the
              cheeks, and a <b>nude lipstick.</b>
            </p>
          </div>
        </div>
      ) : display === "Benefits" ? (
        <div id="ProductsDetailThree">
          <p>SUGAR Kohl of Honour Intense Kajal is powered by:</p>
          <p>- Ultra-creamy texture (Glides on smoothly)</p>
          <p>- 100% opacity (Super rich colour pay off)</p>
          <p>- 12-hour stay power (No touch ups needed)</p>
        </div>
      ) : display === "questions" ? (
        <div id="ProductsDetailThree">
          <p>Q. How long will it last on my eyes?</p>
          <p>A. Up to 12 hours.</p>

          <br />
          <p>Q. Is it waterproof?</p>
          <p>
            A. SUGAR Kohl Of Honour Intense Kajal is waterproof, smudgeproof,
            and even crackproof.
          </p>

          <br />
          <p>Q. Is the product paraben free?</p>
          <p>A. Yes.</p>

          <br />
          <p>Q. How many shades does it come in?</p>
          <p>A. In 6 fabulous shades.</p>

          <br />
          <p>Q. Does it come with a sharpener?</p>
          <p>
            A. The product doesn't need a sharpener. It comes in a twist-up
            packaging.
          </p>
        </div>
      ) : display === "Reviews" ? (
        <div id="ProductsDetailThree">
          <img src="https://i.ibb.co/0tZWtMR/download.png" alt="Reviews" />
        </div>
      ) : (
        ""
      )}
    </div>
  );
};
