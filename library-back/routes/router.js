const Router = require('express')
const router = new Router()
const filterController = require('../controller/filterController')
const sortController = require('../controller/sortController')
const getController = require('../controller/getController')

router.get('/get', getController.get)

router.post('/filterByArtist', filterController.filterByArtist)
router.post('/filterByGenre', filterController.filterByGenre)
router.post('/filterByYear', filterController.filterByYear)

router.post('/sort', sortController.sort)

module.exports = router