const { AsyncRouter } = require("express-async-router");
const { check, validationResult } = require("express-validator");

const User = require("../models/User");
const Sticker = require("../models/Sticker");

const handleValidationErrors = require("../helpers/handleValidationErrors");
const jwtMiddleware = require("../helpers/jwtMiddleware");

const router = AsyncRouter();


module.exports = router;