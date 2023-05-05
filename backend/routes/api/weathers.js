const express = require('express')
const router = express.Router();
const asyncHandler = require('express-async-handler');
// const { check } = require('express-validator');
// const { handleValidationErrors } = require('../../utils/validation');
const { HourlyWeather, DailyWeather } = require("../../db/models");

router.get('/hourly/:cityId', asyncHandler(async (req, res)=>{
    const id = parseInt(req.params.cityId, 10);
    const weathers = await HourlyWeather.findByPk(id)
    return res.json(weathers)
}))

router.get('/daily/:cityId', asyncHandler(async (req, res)=>{
    const id = parseInt(req.params.cityId, 10);
    const weathers = await DailyWeather.findByPk(id)
    return res.json(weathers)
}))
