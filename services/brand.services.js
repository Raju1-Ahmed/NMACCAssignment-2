const Brand = require("../models/Brand");

exports.createBrandService = async (data) =>{
    const result = await Brand.create(data);
    return result;
}


exports.getBrandsService = async () =>{
    const result = await Brand.find({});
    return result;
}