const router = require("express").Router()
const Users = require("../users/users-model")
const restricted = require("../auth/restricted-middleware.js")
const { checkRole } = require('../users/users-service')

router.get('/', (req, res) => {
    Users.find()
        .then(users => {
            res.status(200).json(users)
        })
        .catch(err => {
            res.status(500).json({ msg: err.message })
        })
})

module.exports = router