const Brand = require("../models/Brand");

exports.createBrandService = async (data) =>{
    const result = await Brand.create(data);
    return result;
}


exports.getBrandsService = async () =>{
    const result = await Brand.find({});
    return result;
}

exports.getBrandByIdService = async (id) => {
    const brand = await Brand.findOne({ _id: id });
    return brand;
  }


  exports.updateBrandByIdService = async (id, data) => {
    const result = await Brand.updateOne({ _id: id }, data, {
        runValidators: true
    });
    return result;
  }
  