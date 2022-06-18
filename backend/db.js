const mongoose = require('mongoose')
const dotenv = require('dotenv')

dotenv.config()

const connection = mongoose.connect(process.env.database, {
  useNewUrlParser: true,
})

const productSchema = new mongoose.Schema({
  prodEyesHeading: String,
  prodEyesBanner: String,
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

const Product = mongoose.model('prodeye', productSchema)
console.log(Product, 'index product model')



module.exports = { Product, connection }
