const db = require("../database/connection.js");

module.exports = {
    add,
    find,
    findById,
    remove,
    modify
};

function find() {
    return db('projects')
}

function findById(id) {
    return db('projects').where({ id }).first()
}

function add(project) {
    return db('projects').insert(project, "id")
        .then(idArr => {
            return findById(idArr[0])
        })
}

function remove(id) {
    return db('projects').delete().where({ id })
}

function modify(id, changes) {
    return db('projects').where({ id }).update(changes, "*")
}