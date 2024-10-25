const express = require("express");
const {handleInsuranceDetails,handleGetInsuranceDetails} = require("../adminControllers/insurance.controller");
const upload = require("../middlewares/multer.middleware")
const router = express.Router();

router.get("/",handleGetInsuranceDetails);

router.post("/",upload.array('insuranceDocument',5),handleInsuranceDetails);

module.exports = router;