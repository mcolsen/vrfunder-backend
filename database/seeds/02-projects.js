exports.seed = function (knex) {
	const projects = [
		{
			pname: "Virtual Boy",
			description:
				"A 32-bit tabletop video game console with stereoscopic 3D techology",
			location: "Kyoto, Japan",
			goal: 50000000,
			progress: 15000000,
			image_url: "/project-images/virtual-boy.jpg",
			external_url: "https://nintendo.co.jp",
			fundraiser: "Nintendo R&D1",
		},
		{
			pname: "GoldenEye 007",
			description:
				"First-person shooter based on the hit 1995 film originally developed for Virtual Boy",
			location: "Leicestershire, England",
			goal: 100000,
			progress: 80000,
			image_url: "/project-images/goldeneye.jpg",
			external_url: "https://www.rare.co.uk/",
			fundraiser: "Rare",
		},
	];

	return knex("projects").insert(projects);
};
