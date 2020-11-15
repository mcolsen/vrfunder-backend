const router = require("express").Router()
const Projects = require("../projects/projects-model")
const restricted = require("../auth/restricted-middleware.js")
const { checkRole } = require('../users/users-service')


router.get('/', restricted, (req, res) => {
    Projects.find()
        .then(projects => {
            res.status(200).json(projects)
        })
        .catch(err => {
            res.status(500).json({ msg: err })
        })
})

router.get('/:id', restricted, (req, res) => {
    Projects.findById(req.params.id)
        .then(project => {
            res.status(200).json(project)
        })
        .catch(err => {
            res.status(500).json({ msg: err })
        })
})


router.post('/', restricted, checkRole('fundraiser'), (req, res) => {
    Projects.add(req.body)
        .then(project => {
            res.status(200).json(project)
        })
        .catch(err => {
            res.status(500).json({ msg: err.message })
        })
})

router.delete('/:id', restricted, checkRole('fundraiser'), (req, res) => {
    Projects.remove(req.params.id)
        .then(count => {
            if (count > 0)
                res.status(200).json({ msg: "successfully removed" })
            else
                res.status(400).json({ msg: "error" })
        })
        .catch(err => {
            res.status(500).json({ msg: err.message })
        })
})

router.put('/:id', restricted, checkRole('fundraiser'), (req, res) => {
    Projects.modify(req.params.id, req.body)
        .then(count => {
            if (count > 0)
                res.status(200).json({ msg: "successfully changed" })
            else
                res.status(400).json({ msg: "error" })
        })
        .catch(err => {
            res.status(500).json({ msg: err.message })
        })

})
module.exports = router
