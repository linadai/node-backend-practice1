const express = require('express')
const router = new express.Router()
const weatherController = require('../../controllers/weather')
const cityController = require('../../controllers/city')
router.get('/forecasts/:id', weatherController.index);
router.get('/weathers/:id', weatherController.show);
router.put('/weathers/:id', weatherController.update);
router.post('/weathers', weatherController.store);
router.delete('/weathers/:id', weatherController.delete);
router.get('/cities', cityController.get)

module.exports = router