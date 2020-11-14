const db = require("../database/connection.js");

module.exports = {
    add,
    find,
    findById,
    findBy
};

function find() {
    return db('users')
}

function findById(id) {
    return db('users').where({ id }).first()
}

function add(user) {
    return db('users').insert(user, "id")
        .then(idArr => {
            return findById(idArr[0])
        })
}

function findBy(filter) {
    return db("users as u")
        .join("roles as r", "u.role", "r.id")
        .where(filter)
        .select("u.id", "u.username", "u.password", "r.name as role")
        .orderBy("u.id")
}


//