const { Router } = require('express')
const { MongoClient } = require('mongodb')

const productRouter = Router()
const { Product } = require('../../db')

productRouter.get('/', async (req, res) => {
  const data =  await Product.find()
  // console.log(data)
  res.send(data)

  // res.send('working')
})

productRouter.post('/new', async (req, res) => {
  // console.log('it is coming')
  // const body = req.body
  // console.log(body)
  // console.log(Product, 'model')
  const product = await Product(req.body)

  product
    .save()
    .then((data) => res.send(data))
    .catch((e) => res.send(e))
})

module.exports = productRouter
