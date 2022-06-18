import axios from "axios";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { ProductsDetailFour } from "../components/ProductsDetail/ProductsDetailFour";
import { ProductsDetailOne } from "../components/ProductsDetail/ProductsDetailOne";
import { ProductsDetailThree } from "../components/ProductsDetail/ProductsDetailThree";
import { ProductsDetailTwo } from "../components/ProductsDetail/ProductsDetailTwo";
import "../CSS/productsDetail/productsDetail.css";
import { useState } from "react";

export const ProductsDetail = ({ allData, data }) => {
  // console.log('allData:', allData)
  const { main, category, id } = useParams();
  // console.log("data:", data);
  const [prod, setProd] = useState([]);
  const [alldata, setAlldata] = useState([]);

  const getData = async () => {
    axios
      .get(`http://localhost:8080/product/${main}/${category}/${id}`)
      .then(function (response) {
        // console.log("response.data[0]:", response.data[0]);
        setProd(response.data[0]);
      })
      .catch(function (error) {
        console.log("error:", error);
      });

    axios
      .get(`http://localhost:8080/product`)
      .then(function (response) {
        // console.log("response.data:", response.data);
        setAlldata(response.data);
        // console.log("alldata:", alldata);
      })
      .catch(function (error) {
        console.log("error:", error);
      });
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <div id="prodDetailPath">
        <img
          src="https://in.sugarcosmetics.com/desc-images/breadcrumb_home.svg"
          alt="Home icon"
        />
        <p>/ Makeup</p>
        <p>/ {prod.category}</p>
        <p>/ {prod.prodEyesHeading}</p>
        <p>/ {prod.Title}</p>
      </div>

      <div id="prodDetail">
        <ProductsDetailOne data={prod} />

        <ProductsDetailTwo />

        <ProductsDetailThree />

        <ProductsDetailFour data={alldata} />
      </div>
    </>
  );
};
