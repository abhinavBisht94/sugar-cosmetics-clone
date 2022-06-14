const express = require('express')

const cors = require('cors')
require('dotenv').config()

const authRouter = require('./routes/auth/auth')
const cartRouter = require('./routes/Cart/cart')
const paymentRouter = require('./routes/Payment/payment')
const productRouter = require('./routes/Product/product')

const { connection, Product } = require('./db')

const app = express()
const PORT = process.env.PORT || 8080
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(cors())

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

