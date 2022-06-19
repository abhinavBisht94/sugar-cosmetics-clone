import axios from "axios";
import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ProductsDetailFour } from "../components/ProductsDetail/ProductsDetailFour";
import { ProductsDetailOne } from "../components/ProductsDetail/ProductsDetailOne";
import { ProductsDetailThree } from "../components/ProductsDetail/ProductsDetailThree";
import { ProductsDetailTwo } from "../components/ProductsDetail/ProductsDetailTwo";
import "../CSS/productsDetail/productsDetail.css";
import { useState } from "react";
import { useContext } from "react";
import { UserContext } from "../context/UserContext";

export const ProductsDetail = ({ allData, data }) => {
    const { singleUser, setCartCount, cartCount } = useContext(UserContext);
    console.log("singleUser: ", singleUser);
    // console.log('allData:', allData)
    const { main, category, id } = useParams();
    const navigate = useNavigate();
    // console.log("data:", data);
    const [prod, setProd] = useState([]);
    const [alldata, setAlldata] = useState([]);
    const [userAndProduct, setUserAndProduct] = useState({
        user_id: "",
        product_id: "",
    });

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

    const toCart = () => {
        if (!singleUser._id) {
            navigate("/login");
        } else {
            setUserAndProduct({
                user_id: singleUser._id,
                product_id: prod.product_id,
            });
            setCartCount(cartCount + 1);
            console.log(userAndProduct);
        }
    };

    const cartData = () => {
        toCart();
        addToCart();
    };

    const addToCart = async () => {
        try {
            const res = await axios.post(
                "http://localhost:8080/cart",
                userAndProduct
            );
            const data = await res.data;
            console.log("cart-data: ", data);
        } catch (error) {
            console.log("error: ", error);
        }
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
                <p
                    style={{ cursor: "pointer" }}
                    onClick={() => {
                        navigate(-2);
                    }}
                >
                    / {prod.category}
                </p>
                <p
                    style={{ cursor: "pointer" }}
                    onClick={() => {
                        navigate(-1);
                    }}
                >
                    / {prod.prodEyesHeading}
                </p>
                <p>/ {prod.Title}</p>
            </div>

            <div id="prodDetail">
                <ProductsDetailOne data={prod} cartData={cartData} />

                <ProductsDetailTwo />

                <ProductsDetailThree />

                <ProductsDetailFour data={alldata} />
            </div>
        </>
    );
};
