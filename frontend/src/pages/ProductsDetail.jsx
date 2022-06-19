import axios from 'axios'
import { useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { ProductsDetailFour } from '../components/ProductsDetail/ProductsDetailFour'
import { ProductsDetailOne } from '../components/ProductsDetail/ProductsDetailOne'
import { ProductsDetailThree } from '../components/ProductsDetail/ProductsDetailThree'
import { ProductsDetailTwo } from '../components/ProductsDetail/ProductsDetailTwo'
import '../CSS/productsDetail/productsDetail.css'
import { useState } from 'react'
import { useContext } from 'react'
import { UserContext } from '../context/UserContext'

export const ProductsDetail = ({ allData, data }) => {
  const { singleUser, setCartCount, cartCount } = useContext(UserContext)
  console.log('singleUser: ', singleUser)
  // console.log('allData:', allData)
  const { main, category, id } = useParams()
  const navigate = useNavigate()
  // console.log("data:", data);
  const [prod, setProd] = useState([])
  const [alldata, setAlldata] = useState([])
  const [userAndProduct, setUserAndProduct] = useState({
    user_id: '',
    product_id: '',
  })

  const getData = async () => {
    axios
      .get(
        `https://sugarcosmeticsclone.herokuapp.com/product/${main}/${category}/${id}`,
      )
      .then(function (response) {
        // console.log("response.data[0]:", response.data[0]);
        setProd(response.data[0])
      })
      .catch(function (error) {
        console.log('error:', error)
      })

    axios
      .get(`https://sugarcosmeticsclone.herokuapp.com/product`)
      .then(function (response) {
        // console.log("response.data:", response.data);
        setAlldata(response.data)
        // console.log("alldata:", alldata);
      })
      .catch(function (error) {
        console.log('error:', error)
      })
  }
  const user = JSON.parse(localStorage.getItem('User'))
  const toCart = () => {
    setUserAndProduct({
      user_id: singleUser._id,
      product_id: prod.product_id,
    })
    setCartCount(cartCount + 1)
    console.log(userAndProduct)
  }

  const addToCart = async () => {
    try {
      const res = await axios.post(
        `https://sugarcosmeticsclone.herokuapp.com/cart/${user._id}`,
        prod,
      )
      const data = await res.data
      console.log('cart-data: ', data)
    } catch (error) {
      console.log('error: ', error)
    }
  }

  const cartData = () => {
    toCart()
    addToCart()
  }

  useEffect(() => {
    getData()
  }, [])

  return (
    <>
      <div id="prodDetailPath">
        <img
          src="https://in.sugarcosmetics.com/desc-images/breadcrumb_home.svg"
          alt="Home icon"
        />
        <p>/ Makeup</p>
        <p
          style={{ cursor: 'pointer' }}
          onClick={() => {
            navigate(-2)
          }}
        >
          / {prod.category}
        </p>
        <p
          style={{ cursor: 'pointer' }}
          onClick={() => {
            navigate(-1)
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
  )
}
