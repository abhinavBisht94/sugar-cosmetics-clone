const express = require('express')

const cors = require('cors')
require('dotenv').config()

const mongoose = require('mongoose')
const authRouter = require('./routes/auth/auth')
const cartRouter = require('./routes/Cart/cart')
const paymentRouter = require('./routes/Payment/payment')
const productRouter = require('./routes/Product/product')

const app = express()
const PORT = process.env.PORT || 8080;
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(cors())

const connection = mongoose.connect(process.env.database)

const productSchema = new mongoose.Schema({
  prodEyesHeading: String,
  prodEyesBanner:String,
  Title: { type: String, required: true },
  ImageUrl: { type: String, required: true },
  Rating: { type: Number, required: true },
  Price: { type: Number, required: true },
  category: { type: String, required: true },
  Currency: { type: String, enum: ['$', '₹'] },

  types: [
    {
      title: String,
      image: String,
      secondary_title: String,
    },
  ],
})

const Product = mongoose.model('product', productSchema)
console.log(Product, 'index product model')



// app.post('/product/new', async (req, res) => {
//   console.log('it is coming')
//   const body = req.body
//   console.log(body)
//   const product = await Product(body)
//   product.save((error, data) => {
//     if (error) console.log(error)
//     res.send(data)
//   })
// })

app.use('/product', productRouter)
app.use('/auth', authRouter)
app.use('/cart', cartRouter)
app.use('/payment', paymentRouter)

app.listen(PORT, async () => {
  try {
    await connection
    console.log('data base connected')
  } catch (error) {
    console.log('error: ', error)
  }
  console.log('Server  Starts at http://localhost:8080/')
})

module.exports = { Product }
