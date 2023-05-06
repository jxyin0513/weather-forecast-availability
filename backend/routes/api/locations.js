const express = require('express')
const router = express.Router();
const asyncHandler = require('express-async-handler');
// const { check } = require('express-validator');
// const { handleValidationErrors } = require('../../utils/validation');
const { City, Country } = require("../../db/models");

router.get('/cities/all', asyncHandler(async (req, res)=>{
    const city = await City.findAll()
    return res.json(city)
}))

router.get('/cities/:cityId', asyncHandler(async (req, res)=>{
    const id = parseInt(req.params.cityId, 10);
    const city = await City.findByPk(id)
    return res.json(city)
}))

router.get('/countries/all', asyncHandler(async (req, res)=>{
    const countries = await Country.findAll()
    return res.json(countries)
}))

router.get('/countries/:countryId', asyncHandler(async (req, res)=>{
    const id = parseInt(req.params.countryId, 10);
    const country = await Country.findByPk(id)
    console.log(country)
    return res.json(country)
}))

module.exports = router;
