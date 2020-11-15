exports.seed = function (knex) {
    const roles = [
        {
            name: "fundraiser", // id: 1
        },
        {
            name: "funder", // id: 2
        },
    ];

    return knex("roles").insert(roles);
};