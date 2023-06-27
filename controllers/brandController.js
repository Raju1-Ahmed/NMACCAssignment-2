const { createBrandService, getBrandsService } = require("../services/brand.services");

exports.createBrand = async (req, res, next) =>{
    try {
        const result = await createBrandService(req.body);
        res.status(200).json({
            status: "success",
            message: "successfully created the Brand",
            data: result
        })
    } catch (error) {
        res.status(400).json({
            status: "fail",
            error: "Could't create the brand"
        })
    }
}


exports.getBrands = async (req, res, next) =>{
    try {
        const result = await getBrandsService(req.body);
        res.status(200).json({
            status: "success",
            message: "successfully created the Brand",
            data: result
        })
    } catch (error) {
        res.status(400).json({
            status: "fail",
            error: "Could't create the brand"
        })
    }
}
