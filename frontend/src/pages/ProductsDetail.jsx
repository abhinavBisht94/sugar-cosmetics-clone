import { ProductsDetailFour } from "../components/ProductsDetail/ProductsDetailFour";
import { ProductsDetailOne } from "../components/ProductsDetail/ProductsDetailOne";
import { ProductsDetailThree } from "../components/ProductsDetail/ProductsDetailThree";
import { ProductsDetailTwo } from "../components/ProductsDetail/ProductsDetailTwo";
import "../CSS/productsDetail/productsDetail.css";

export const ProductsDetail = ({ allData, data }) => {
  // console.log("data:", data);

  return (
    <>
      <div id="prodDetailPath">
        <img
          src="https://in.sugarcosmetics.com/desc-images/breadcrumb_home.svg"
          alt="Home icon"
        />
        <p>/ Makeup</p>
        <p>/ {data.category}</p>
        <p>/ {data.prodEyesHeading}</p>
        <p>/ {data.Title}</p>
      </div>

      <div id="prodDetail">
        <ProductsDetailOne data={data} />

        <ProductsDetailTwo />

        <ProductsDetailThree />

        <ProductsDetailFour data={allData} />
      </div>
    </>
  );
};
