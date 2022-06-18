import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { Suspense } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";

import "../CSS/products.css";
import { ProductsDetail } from "./ProductsDetail";

export const Products = () =>
  // { data }
  {
    // console.log('data:', data)
    // console.log("data:", data.dataCategory);
    const { main, category } = useParams();

    const [display, setDisplay] = useState(false);
    const [send, setSend] = useState({});
    const [data, setData] = useState([]);

    const itemClicked = (id) => {
      console.log("clicked item id: ", id);
      data.dataCategory.map((elem) => {
        if (elem._id.$oid === id) {
          setSend(elem);
          console.log("send:", send);

          setDisplay(!display);
        }
      });
    };

    // if (display) {
    //   return <ProductsDetail allData={data.dataCategory} data={send} />;
    // }

    const getData = async () => {
      try {
        const res = await axios.get(
          `http://localhost:8080/product/${main}/${category}`
        );
        const data = await res.data;
        setData(data);
        console.log("data: ", data);
      } catch (error) {
        console.log("error: ", error);
      }
    };

    const getMainData = async () => {
      try {
        const res = await axios.get(`http://localhost:8080/product/${main}`);
        const data = await res.data;
        setData(data);
        console.log("data: ", data);
      } catch (error) {
        console.log("error: ", error);
      }
    };

    useEffect(() => {
      getData();
    }, [main, category]);

    useEffect(() => {
      getMainData();
    }, [main]);

    return (
      <div>
        Banner Image
        {/* {data.dataCategory[0].prodEyesBanner ? (
        <img
          id="productsBanner"
          src={data.dataCategory[0].prodEyesBanner}
          alt={data.dataCategory[0].prodEyesHeading}
        />
      ) : (
        ""
      )}

      div to show path of the page
      needs to be edited not final
      <div id="prodDataPath">
        <div>
          <img
            src="https://in.sugarcosmetics.com/desc-images/breadcrumb_home.svg"
            alt="Home icon"
          />
          <p>/ Makeup</p>
          <p>/ {data.dataCategory[0].prodEyesHeading}</p>
        </div>

        <p>
          {data.dataCategory[0].prodEyesHeading} - {data.dataCategory.length}{" "}
          items
        </p>
      </div> */}
        {/* div to display all the products */}
        <Suspense fallback={<div>loading...</div>}>
          <div id="prodData">
            {data &&
              data.map((elem) => {
                return (
                  // div to display individual product
                  <div id="prodDataElem" key={elem._id.$oid}>
                    <img
                      id="prodDataImage"
                      src={elem.ImageUrl}
                      alt={elem.Title}
                      onClick={() => {
                        itemClicked(elem._id.$oid);
                      }}
                    />

                    <p
                      onClick={() => {
                        itemClicked(elem._id.$oid);
                      }}
                    >
                      {elem.Title}
                    </p>

                    <p>{elem.Price}</p>

                    <p>
                      <img
                        id="prodDataStar"
                        src="https://img.freepik.com/free-vector/golden-star-3d_1053-79.jpg?w=740&t=st=1655214227~exp=1655214827~hmac=02adf4c8e90961a6603d966c85d2c548b79d9f0c1f8593787d3a3f478999dd1f"
                        alt="Star"
                      />
                      {elem.Rating} {elem.RatingTotal}
                    </p>

                    <div id="prodDataHover">
                      <div>
                        <img
                          src="https://i.ibb.co/QpM4sbW/1077035.png"
                          alt="Wishlist"
                        />
                      </div>
                      <button>ADD TO CART</button>
                    </div>
                  </div>
                );
              })}
          </div>
        </Suspense>
      </div>
    );
  };
