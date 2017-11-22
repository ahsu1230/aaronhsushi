'use strict';

const colorSalmon = "#ff9966";
const colorTobiko = "#ff8247";
const colorTuna = "#961919";
const colorToro = "#ffaeb9";
const colorEbi = "#ffc0cb";
const colorAvocado = "#90ee90";
const colorGreen = "#00cd66";
const colorGold = "#ffec8b";
const colorTako = "#731699";
const colorUni = "#ffc125";
const colorWhite = "#fffaf0";

const AMAEBI = "Sweet shrimp (Amaebi)";
const ANKIMO = "Monkfish liver (Ankimo)";
const HAMACHI = "Yellowtail (Hamachi)";
const HOTATE = "Scallops (Hotate)";
const IKURA = "Salmon roe (Ikura)";
const KANPACHI = "Amberjack (Kanpachi)";
const MAGURO = "Ahi tuna (Maguro)";
const MAGURO_BF = "Bluefin tuna (Maguro)";
const OTORO = "Fatty tuna belly (Oh-toro)"
const SAKE = "Salmon (Sake)";
const SHRIMP_TEMPURA = "Shrimp tempura";
const TAKO = "Octopus (Tako)";
const UNAGI = "Eel (Unagi)";
const UNI_SB = "Uni (from Santa Barbara)";

const AVOCADO = "Avocado";
const CHIVES = "Chives";
const CILANTRO = "Cilantro";
const CUCUMBER = "Cucumber";
const IMITATION_CRAB = "Imitation crab";
const PARSLEY = "Parsley";
const RED_ONIONS = "Sauteed red onions";
const SCALLIONS = "Scallions";
const SEA_SALT = "Sea salt";
const SHISHO = "Shisho leaf";
const TOBIKO = "Flying fish roe (Tobiko)";

const SAUCE_CHILI = "Sweet chili sauce";
const SAUCE_LEMON = "Lemon juice";
const SAUCE_MAYO = "Sweet mayo";
const SAUCE_SOY = "Soy sauce";
const SAUCE_SRIRACHA = "Sriracha sauce";
const SAUCE_SRIRACHA_MAYO = "Sriracha mayo";
const SAUCE_UNAGI = "Unagi soysauce";
const SAUCE_YUZU = "Yuzu juice";

export const ContentMap = {
	"roll6_tempura_crab": {
		id: "roll6_tempura_crab",
		title: "Crab Shrimp Tempura Roll",
		date: "April 2015",
		source: {
			thumbnailUrl: "assets/gallery/roll6_tempura_crab.jpg",
			fullUrl: "assets/gallery/roll6_tempura_crab.jpg"
		},
		color: colorTobiko,
		ingredients: [SHRIMP_TEMPURA, IMITATION_CRAB, CUCUMBER, SAUCE_MAYO, TOBIKO, SCALLIONS]
	},
	"roll6_tuna_avocado": {
		id: "roll6_tuna_avocado",
		title: "Deep Sea Tuna Avocado Roll",
		date: "September 2014",
		source: {
			thumbnailUrl: "assets/gallery/roll6_tuna_avocado.jpg",
			fullUrl: "assets/gallery/roll6_tuna_avocado.jpg"
		},
		color: colorTuna,
		ingredients: [MAGURO_BF, AVOCADO, CUCUMBER, TOBIKO, SAUCE_CHILI]
	},
	"roll8_salmon_guac": {
		id: "roll8_salmon_guac",
		title: "Salmon Guac Roll",
		date: "November 2016",
		source: {
			thumbnailUrl: "assets/gallery/roll8_salmon_guac.jpg",
			fullUrl: "assets/gallery/roll8_salmon_guac.jpg"
		},
		color: colorSalmon,
		ingredients: [SAKE, "Mashed avocado", CUCUMBER, RED_ONIONS, "Lime juice", CILANTRO]
	},
	"nigiri10_uni": {
		id: "nigiri10_uni",
		title: "Uni",
		date: "June 2016",
		source: {
			thumbnailUrl: "assets/gallery/nigiri10_uni.jpg",
			fullUrl: "assets/gallery/nigiri10_uni.jpg"
		},
		color: colorUni,
		details: "Uni bulk ordered from Catalina Offshore.",
		ingredients: [UNI_SB, SEA_SALT, "Sushi rice", "Roasted seaweed"]
	},
	"roll8_salmon_garlic": {
		id: "roll8_salmon_garlic",
		title: "Roasted Garlic Salmon Roll",
		date: "November 2016",
		source: {
			thumbnailUrl: "assets/gallery/roll8_salmon_garlic.jpg",
			fullUrl: "assets/gallery/roll8_salmon_garlic.jpg"
		},
		color: colorSalmon,
		ingredients: [SAKE, "Spicy salmon", "Roasted garlic", CUCUMBER, "Tempura flakes", PARSLEY]
	},
	"roll8_vegan_asparagus": {
		id: "roll8_vegan_asparagus",
		title: "Umami Asparagus Roll",
		date: "May 2015",
		source: {
			thumbnailUrl: "assets/gallery/roll8_vegan_asparagus.jpg",
			fullUrl: "assets/gallery/roll8_vegan_asparagus.jpg"
		},
		color: colorGreen,
		ingredients: ["Shiitake mushrooms", "Asparagus", SAUCE_MAYO, SAUCE_UNAGI]
	},
	"roll6_monkfish_bites": {
		id: "roll6_monkfish_bites",
		title: "Monkfish Liver Roll Bites",
		date: "August 2015",
		source: {
			thumbnailUrl: "assets/gallery/roll6_monkfish_bites.jpg",
			fullUrl: "assets/gallery/roll6_monkfish_bites.jpg"
		},
		color: colorGold,
		ingredients: [ANKIMO, SAKE, MAGURO, CUCUMBER]
	},
	"roll8_seared_salmon_ikura": {
		id: "roll8_seared_salmon_ikura",
		title: "Seared Salmon Ikura Roll",
		date: "April 2015",
		source: {
			thumbnailUrl: "assets/gallery/roll8_seared_salmon_ikura.jpg",
			fullUrl: "assets/gallery/roll8_seared_salmon_ikura.jpg"
		},
		color: colorTobiko,
		ingredients: [SAKE, IMITATION_CRAB, CUCUMBER, IKURA, SCALLIONS]
	},
	"handroll3_rainbow_matcha": {
		id: "handroll3_rainbow_matcha",
		title: "Rainbow Matcha Martini",
		date: "April 2015",
		source: {
			thumbnailUrl: "assets/gallery/handroll3_rainbow_matcha.jpg",
			fullUrl: "assets/gallery/handroll3_rainbow_matcha.jpg"
		},
		color: colorAvocado,
		ingredients: [SAKE, MAGURO, AVOCADO, CUCUMBER, TOBIKO, "Matcha chocolate straws"]
	},
	"roll8_rainbow_white": {
		id: "roll8_rainbow_white",
		title: "Great White Rainbow Roll",
		date: "August 2015",
		source: {
			thumbnailUrl: "assets/gallery/roll8_rainbow_white.jpg",
			fullUrl: "assets/gallery/roll8_rainbow_white.jpg"
		},
		color: colorWhite,
		ingredients: [SAKE, MAGURO, CUCUMBER, TOBIKO, SAUCE_UNAGI]
	},
	"nigiri6_amaebi": {
		id: "nigiri6_amaebi",
		title: "Amaebi Nigiri",
		date: "June 2016",
		source: {
			thumbnailUrl: "assets/gallery/nigiri6_amaebi.jpg",
			fullUrl: "assets/gallery/nigiri6_amaebi.jpg"
		},
		color: colorEbi,
		details: "Amaebi bulk ordered from Catalina Offshore.",
		ingredients: [AMAEBI, "sushi rice", "Lemon slices"]
	},
	"spoon4_tako_paella": {
		id: "spoon4_tako_paella",
		title: "Tako Paella Bites",
		date: "September 2017",
		source: {
			thumbnailUrl: "assets/gallery/spoon4_tako_paella.jpg",
			fullUrl: "assets/gallery/spoon4_tako_paella.jpg"
		},
		color: colorGreen,
		details: "Inspired by Spanish octopus appetizers.",
		ingredients: [TAKO, "Smoked Paprika", SAKE, PARSLEY]
	},
	"roll8_lobster_volcano": {
		id: "roll8_lobster_volcano",
		title: "Lobster Volcano Roll",
		date: "January 2015",
		source: {
			thumbnailUrl: "assets/gallery/roll8_lobster_volcano_XS.jpg",
			fullUrl: "assets/gallery/roll8_lobster_volcano_XL.jpg"
		},
		color: colorTobiko,
		ingredients: ["Fried Lobster", IMITATION_CRAB, SAUCE_SRIRACHA, SAUCE_SRIRACHA_MAYO]
	},
	"nigiri6_kanpachi_gold": {
		id: "nigiri6_kanpachi_gold",
		title: "Kanpachi Nigiri",
		date: "August 2017",
		source: {
			thumbnailUrl: "assets/gallery/nigiri6_kanpachi_gold.jpg",
			fullUrl: "assets/gallery/nigiri6_kanpachi_gold.jpg"
		},
		color: colorWhite,
		details: "Gold flakes inspired by Hinata.",
		ingredients: [KANPACHI, "Black Tobiko", "Gold flakes"]
	},
	"nigiri6_hamachi_ginger": {
		id: "nigiri6_hamachi_ginger",
		title: "Hamachi Nigiri",
		date: "August 2017",
		source: {
			thumbnailUrl: "assets/gallery/nigiri6_hamachi_ginger.jpg",
			fullUrl: "assets/gallery/nigiri6_hamachi_ginger.jpg"
		},
		color: colorToro,
		ingredients: [HAMACHI, "Ginger", "Green Onions"]
	},
	"nigiri4_otoro_double": {
		id: "nigiri4_otoro_double",
		title: "Double layered Otoro Nigiri",
		date: "September 2017",
		source: {
			thumbnailUrl: "assets/gallery/nigiri4_otoro_double.jpg",
			fullUrl: "assets/gallery/nigiri4_otoro_double.jpg"
		},
		color: colorToro,
		details: "Layering nigiri inspired by Ichimura. Otoro bought at Mitsuwa.",
		ingredients: [OTORO, SEA_SALT]
	},
	"nigiri4_geoduck": {
		id: "nigiri4_geoduck",
		title: "Mirugai Nigiri",
		date: "September 2017",
		source: {
			thumbnailUrl: "assets/gallery/nigiri4_geoduck.jpg",
			fullUrl: "assets/gallery/nigiri4_geoduck.jpg"
		},
		color: colorTuna,
		details: "Mirugai bought at Mitsuwa",
		ingredients: ["Geoduck Clam (Mirugai)", SAUCE_SOY]
	},
	"nigiri2_albacore_cucumber": {
		id: "nigiri2_albacore_cucumber",
		title: "Albacore (Tombo) Nigiri",
		date: "November 2017",
		source: {
			thumbnailUrl: "assets/gallery/nigiri2_albacore_cucumber.jpg",
			fullUrl: "assets/gallery/nigiri2_albacore_cucumber.jpg"
		},
		color: colorWhite,
		ingredients: ["Canadian Albacore Tuna (Tombo)", CUCUMBER, SAUCE_SOY]
	},
	"nigiri1_crab_chives": {
		id: "nigiri1_crab_chives",
		title: "Dungeness Crab Nigiri",
		date: "November 2017",
		source: {
			thumbnailUrl: "assets/gallery/nigiri1_crab_chives.jpg",
			fullUrl: "assets/gallery/nigiri1_crab_chives.jpg"
		},
		color: colorEbi,
		ingredients: ["Dungeness Crab", SAUCE_SOY, SAUCE_YUZU, CHIVES, "Togarashi"]
	},
	"spoon2_crab_egg": {
		id: "spoon2_crab_egg",
		title: "Dungeness Crab with poached quail egg",
		date: "November 2017",
		source: {
			thumbnailUrl: "assets/gallery/spoon2_crab_egg.jpg",
			fullUrl: "assets/gallery/spoon2_crab_egg.jpg"
		},
		color: colorSalmon,
		details: "Concept inspired by Kusakabe. Dungeness crab and quail eggs purchased at Tokyo Fish Market.",
		ingredients: ["Dungeness Crab", "Quail eggs", SAUCE_SOY, SAUCE_LEMON, CHIVES, "Togarashi"]
	},
	"nigiri2_seared_salmon_wood": {
		id: "nigiri2_seared_salmon_wood",
		title: "Seared Salmon Nigiri with Ikura",
		date: "November 2017",
		source: {
			thumbnailUrl: "assets/gallery/nigiri2_seared_salmon_wood.jpg",
			fullUrl: "assets/gallery/nigiri2_seared_salmon_wood.jpg"
		},
		color: colorSalmon,
		ingredients: [SAKE, IKURA, SHISHO, SAUCE_SOY, SAUCE_YUZU]
	},
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
