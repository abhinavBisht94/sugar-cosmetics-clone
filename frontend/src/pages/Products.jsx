import React from "react";
import "../CSS/products.css";

export const Products = ({ data }) => {
  console.log("data:", data.prodEyes);

  return (
    <div>
      {/* Banner Image */}
      <img
        width="100%"
        height="250rem"
        src={data.prodEyes[0].prodEyesBanner}
        alt={data.prodEyes[0].prodEyesHeading}
      />

      {/* div to show path of the page */}
      {/* needs to be edited not final */}
      <div id="prodDataPath" >
        <div>
          <img
            src="https://in.sugarcosmetics.com/desc-images/breadcrumb_home.svg"
            alt="Home icon"
          />
          <p>/ Makeup</p>
          <p>/ {data.prodEyes[0].prodEyesHeading}</p>
        </div>

        <p>
          {data.prodEyes[0].prodEyesHeading} - {data.prodEyes.length} items
        </p>
      </div>

      {/* div to display all the products */}
      <div id="prodData">
        {data.prodEyes.map((elem) => {
          return (
            //
            // div to display individual product
            <div key={elem.id}>
              <img id="prodDataImage" src={elem.ImageUrl} alt={elem.Title} />

              <p>{elem.Title}</p>
              <p>
                {elem.currency} {elem.Price}
              </p>

              <p>
                <img
                  id="prodDataStar"
                  src="https://img.freepik.com/free-vector/golden-star-3d_1053-79.jpg?w=740&t=st=1655214227~exp=1655214827~hmac=02adf4c8e90961a6603d966c85d2c548b79d9f0c1f8593787d3a3f478999dd1f"
                  alt="Star"
                />
                {elem.Rating} ({Math.floor(Math.random() * 100)})
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};
