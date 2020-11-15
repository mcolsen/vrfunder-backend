exports.seed = function (knex) {
    const projects = [
        {
            pname: "VR fundraiser", // id: 1
            description: "helping minorities build virtual reality experiences to tell their story, building empathy and understanding."
        },
        {
            pname: "Laptops for homeless", // id: 2
            description: "helping homeless rebuild their lives by providing them with laptops and a free coding education scholarship."
        },
    ];

    return knex("projects").insert(projects);
};