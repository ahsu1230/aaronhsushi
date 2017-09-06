'use strict';

const colorSalmon = "#ff9966";
const colorTobiko = "#ff8247";
const colorTuna = "#961919";
const colorToro = "#ffaeb9";
const colorEbi = "#ffc0cb";
const colorAvocado = "#90ee90";
const colorGreen = "#00cd66";
const colorGold = "#ffec8b";
const colorUni = "#ffc125";
const colorWhite = "#fffaf0";

const AMAEBI = "Sweet shrimp (Amaebi)";
const ANKIMO = "Monkfish Liver (Ankimo)";
const HAMACHI = "Yellowtail (Hamachi)";
const HOTATE = "Scallops (Hotate)";
const IKURA = "Salmon Roe (Ikura)";
const KANPACHI = "Amberjack (Kanpachi)";
const MAGURO = "Ahi Tuna (Maguro)";
const MAGURO_BF = "Bluefin Tuna (Maguro)";
const SAKE = "Salmon (Sake)";
const SHRIMP_TEMPURA = "Shrimp Tempura";
const TAKO = "Octopus (Tako)";
const UNAGI = "Eel (Unagi)";
const UNI_SB = "Uni (from Santa Barbara)";

const AVOCADO = "Avocado";
const CILANTRO = "Cilantro";
const CUCUMBER = "Cucumber";
const IMITATION_CRAB = "Imitation crab";
const PARSLEY = "Parsley";
const RED_ONIONS = "Sauteed red onions";
const SCALLIONS = "Scallions";
const SEA_SALT = "Sea salt";
const TOBIKO = "Flying Fish Roe (Tobiko)";

const SAUCE_CHILI = "Sweet chili sauce";
const SAUCE_MAYO = "Sweet mayo";
const SAUCE_SRIRACHA = "Sriracha sauce";
const SAUCE_SRIRACHA_MAYO = "Sriracha mayo";
const SAUCE_UNAGI = "Unagi soysauce";

export const ContentMap = {
	"roll6_tempura_crab": {
		id: "roll6_tempura_crab",
		title: "Crab Shrimp Tempura Roll",
		source: {
			thumbnailUrl: "assets/gallery/roll8_lobster_volcano_XL.jpg",
			fullUrl: "assets/gallery/roll8_lobster_volcano_XL.jpg"
		},
		color: colorTobiko,
		details: "Shrimp Tempura stuff",
		ingredients: [SHRIMP_TEMPURA, IMITATION_CRAB, CUCUMBER, SAUCE_MAYO, TOBIKO, SCALLIONS]
	},
	"roll6_tuna_avocado": {
		id: "roll6_tuna_avocado",
		title: "Deep Sea Tuna Avocado Roll",
		source: {
			thumbnailUrl: "assets/gallery/roll8_lobster_volcano_XL.jpg",
			fullUrl: "assets/gallery/roll8_lobster_volcano_XL.jpg"
		},
		color: colorTuna,
		details: "", 
		ingredients: [MAGURO_BF, AVOCADO, CUCUMBER, TOBIKO, SAUCE_CHILI]
	},
	"roll8_salmon_guac": {
		id: "roll8_salmon_guac",
		title: "Guac Roll",
		source: {
			thumbnailUrl: "assets/gallery/roll8_salmon_guac_XS.jpg",
			fullUrl: "assets/gallery/roll8_salmon_guac_XL.jpg"
		},
		color: colorSalmon,
		details: "", 
		ingredients: [SAKE, "Mashed avocado", CUCUMBER, RED_ONIONS, "Lime juice", CILANTRO]
	},
	"nigiri10_uni": {
		id: "nigiri10_uni",
		title: "Uni Nigiri",
		source: {
			thumbnailUrl: "assets/gallery/roll8_lobster_volcano_XL.jpg",
			fullUrl: "assets/gallery/roll8_lobster_volcano_XL.jpg"
		},
		color: colorUni,
		details: "", 
		ingredients: [UNI_SB, SEA_SALT, "Sushi rice", "Roasted seaweed"]
	},
	"roll8_salmon_garlic": {
		id: "roll8_salmon_garlic",
		title: "Roasted Garlic Salmon Roll",
		source: {
			thumbnailUrl: "assets/gallery/roll8_salmon_garlic_XS.jpg",
			fullUrl: "assets/gallery/roll8_salmon_garlic_XL.jpg"
		},
		color: colorSalmon,
		details: "", 
		ingredients: [SAKE, "Spicy salmon", "Roasted garlic", CUCUMBER, "Tempura flakes", PARSLEY]
	},
	"roll8_vegan_asparagus": {
		id: "roll8_vegan_asparagus",
		title: "Vegan Umami Asparagus Roll",
		source: {
			thumbnailUrl: "assets/gallery/roll8_lobster_volcano_XL.jpg",
			fullUrl: "assets/gallery/roll8_lobster_volcano_XL.jpg"
		},
		color: colorGreen,
		details: "", 
		ingredients: ["Shiitake mushrooms", "Asparagus", SAUCE_MAYO, SAUCE_UNAGI]
	},
	"roll8_amberjack_tuna": {
		id: "roll8_amberjack_tuna",
		title: "Deep Sea Amberjack Roll",
		source: {
			thumbnailUrl: "assets/gallery/roll8_lobster_volcano_XL.jpg",
			fullUrl: "assets/gallery/roll8_lobster_volcano_XL.jpg"
		},
		color: colorGreen,
		details: "", 
		ingredients: [KANPACHI, MAGURO, CUCUMBER, SCALLIONS]
	},
	"roll6_monkfish_bites": {
		id: "roll6_monkfish_bites",
		title: "Monkfish Liver Roll Bites",
		source: {
			thumbnailUrl: "assets/gallery/roll8_lobster_volcano_XL.jpg",
			fullUrl: "assets/gallery/roll8_lobster_volcano_XL.jpg"
		},
		color: colorGold,
		details: "", 
		ingredients: [ANKIMO, SAKE, MAGURO, CUCUMBER]
	},
	"roll8_seared_salmon_ikura": {
		id: "roll8_seared_salmon_ikura",
		title: "Seared Salmon Ikura Roll",
		source: {
			thumbnailUrl: "assets/gallery/roll8_lobster_volcano_XL.jpg",
			fullUrl: "assets/gallery/roll8_lobster_volcano_XL.jpg"
		},
		color: colorTobiko,
		details: "", 
		ingredients: [SAKE, IMITATION_CRAB, CUCUMBER, IKURA, SCALLIONS]
	},
	"handroll3_rainbow_matcha": {
		id: "handroll3_rainbow_matcha",
		title: "Rainbow Matcha Martini",
		source: {
			thumbnailUrl: "assets/gallery/roll8_lobster_volcano_XL.jpg",
			fullUrl: "assets/gallery/roll8_lobster_volcano_XL.jpg"
		},
		color: colorAvocado,
		details: "", 
		ingredients: [SAKE, MAGURO, AVOCADO, CUCUMBER, TOBIKO, "Matcha chocolate straws"]
	},
	"roll8_rainbow_white": {
		id: "roll8_rainbow_white",
		title: "Great White Rainbow Roll",
		source: {
			thumbnailUrl: "assets/gallery/roll8_lobster_volcano_XL.jpg",
			fullUrl: "assets/gallery/roll8_lobster_volcano_XL.jpg"
		},
		color: colorWhite,
		details: "", 
		ingredients: [SAKE, MAGURO, CUCUMBER, TOBIKO, SAUCE_UNAGI]
	},
	"spoon5_scallop": {
		id: "spoon5_scallop",
		title: "Scallop Sashimi Bites",
		source: {
			thumbnailUrl: "assets/gallery/roll8_lobster_volcano_XL.jpg",
			fullUrl: "assets/gallery/roll8_lobster_volcano_XL.jpg"
		},
		color: colorWhite,
		details: "", 
		ingredients: [HOTATE, RED_ONIONS, "Ponzu soy sauce"]
	},
	"nigiri6_amaebi": {
		id: "nigiri6_amaebi",
		title: "Amaebi Nigiri",
		source: {
			thumbnailUrl: "assets/gallery/roll8_lobster_volcano_XL.jpg",
			fullUrl: "assets/gallery/roll8_lobster_volcano_XL.jpg"
		},
		color: colorEbi,
		details: "", 
		ingredients: [AMAEBI, "Sushi rice", "Lemon zest and slices"]
	},
	"spoon2_tako": {
		id: "spoon2_tako",
		title: "Tako Spring Bites",
		source: {
			thumbnailUrl: "assets/gallery/roll8_lobster_volcano_XL.jpg",
			fullUrl: "assets/gallery/roll8_lobster_volcano_XL.jpg"
		},
		color: colorGreen,
		details: "", 
		ingredients: [TAKO, TOBIKO, "Fried Lotus Roots", PARSLEY]
	},
	"roll8_crunchy_salmon": {
		id: "roll8_crunchy_salmon",
		title: "Crunchy Salmon",
		source: {
			thumbnailUrl: "assets/gallery/roll8_lobster_volcano_XL.jpg",
			fullUrl: "assets/gallery/roll8_lobster_volcano_XL.jpg"
		},
		color: colorTobiko,
		details: "", 
		ingredients: [SAKE, AVOCADO, "Tempura flakes", TOBIKO, RED_ONIONS, PARSLEY]
	},
	"roll8_hamachi_lotus": {
		id: "roll8_hamachi_lotus",
		title: "Hamachi Lotus Roll",
		source: {
			thumbnailUrl: "assets/gallery/roll8_lobster_volcano_XL.jpg",
			fullUrl: "assets/gallery/roll8_lobster_volcano_XL.jpg"
		},
		color: colorEbi,
		details: "", 
		ingredients: [HAMACHI, AVOCADO, "Fried Lotus Roots", TOBIKO, CILANTRO]
	},
	"roll8_lobster_volcano": {
		id: "roll8_lobster_volcano",
		title: "",
		source: {
			thumbnailUrl: "assets/gallery/roll8_salmon_garlic_XL.jpg",
			fullUrl: "assets/gallery/roll8_lobster_volcano_XL.jpg"
		},
		color: colorTobiko,
		details: "",
		ingredients: ["Fried Lobster", IMITATION_CRAB, SAUCE_SRIRACHA, SAUCE_SRIRACHA_MAYO]
	}
};

/*
"": {
	title: "",
	source: {
		thumbnailUrl: "",
		fullUrl: ""
	},
	color: color,
	details: "",
	ingredients: []
}
*/