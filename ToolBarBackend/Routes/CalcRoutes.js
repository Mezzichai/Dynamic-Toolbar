const express = require('express')
const router = express.Router()
const {getCalcs} = require('../Controllers/CalcController')


router.get('/', getCalcs)