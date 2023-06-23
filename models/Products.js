const mongoose = require("mongoose")
const productSchema = mongoose.Schema({
    name: {
      type: String,
      required: [true, "Please provide a name for this product."],
      trim: true,
      unique: [true, "Name must be unique"],
      minLength: [3, "Name must be at least 3 characters."],
      maxLength: [100, "Name is too large"],
    },
    description: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
      min: [0, "Price can't be negative"],
    },
    unit: {
      type: String,
      required: true,
      enum: {
        values: ["kg", "liter", "pcs"],
        message: "Unit value can't be {VALUE}, must be kg/liter/pcs",
      },
    },
    quantity: {
      type: Number,
      required: true,
      min: [0, "Quantity can't be negative"],
      validate: {
        // validator: Number.isInteger,
        validator: (value) => {
          const isInteger = Number.isInteger(value);
          if (isInteger) {
            return true
          } else {
            return false
          }
        }
      },
      message: "Quantity must be an integer",
    },
    status: {
      type: String,
      required: true,
      enum: {
        values: ["in-stock", "out-of-stock", "discontinued"],
        message: "Status can't be {VALUE}",
      },
    },
    // supplier: {
    //   type: mongoose.Schema.Types.ObjectId,
    //   ref: "Supplier"
    // },
    // categories: [{
    //   name: {
    //     type: String,
    //     required: true
    //   }, _id: mongoose.Schema.Types.ObjectId
    // }]
  }, {
    timestamps: true,
  });
  
  // mongoose middleware for saving data: per / post

  productSchema.pre('save', function(next) {

    //this ->
    console.log('Before saving data');
    if(this.quantity === 0){
        this.status = 'out-of-stock'
    }
    next()
  })

  productSchema.methods.logger = function(){
    console.log(`data saved for ${this.name}`);
  }

  const Product = mongoose.model('product', productSchema)

  module.exports = Product;