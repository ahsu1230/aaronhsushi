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

export const ContentMap = {
	"roll6_tempura_crab": {
		id: "roll6_tempura_crab",
		title: "Some Sushi",
		source: {
			thumbnailUrl: "https://scontent.xx.fbcdn.net/v/t1.0-0/p206x206/11156218_2706329777284_910193609496174608_n.jpg?oh=76fe35438770952c78b0e1f2b91c52dd&oe=597E651B",
			fullUrl: "https://scontent.xx.fbcdn.net/v/t31.0-8/11167681_2706329777284_910193609496174608_o.jpg?oh=7107dadb6820eef866ec2d8abcd5c3a2&oe=59746B51"
		},
		color: colorTobiko,
		details: "asdf asdf"
	},
	"roll6_tuna_avocado": {
		id: "roll6_tuna_avocado",
		title: "Some other Sushi",
		source: {
			thumbnailUrl: "https://scontent.xx.fbcdn.net/v/t1.0-0/p206x206/10352940_2496991263952_1005846077137632990_n.jpg?oh=be408ab3e2c8e5c3c8e19a38cc1b968e&oe=59958A21",
			fullUrl: "https://scontent.xx.fbcdn.net/v/t1.0-9/10352940_2496991263952_1005846077137632990_n.jpg?oh=fd61d6f68fce12c4f826d2214f62cfba&oe=59909B0C"
		},
		color: colorTuna,
		details: "asdf asdf"
	},
	"roll8_salmon_guac": {
		id: "roll8_salmon_guac",
		title: "Guac Roll",
		source: {
			thumbnailUrl: "https://scontent.xx.fbcdn.net/v/t1.0-0/p206x206/14956382_3294509081399_7030668803048428247_n.jpg?oh=8bb2cabd29259b4c4f869a5a1790189e&oe=597478BB",
			fullUrl: "https://scontent.xx.fbcdn.net/v/t1.0-9/14956382_3294509081399_7030668803048428247_n.jpg?oh=1faebf193d57e2685d257da30782e62f&oe=59941A96"
		},
		color: colorSalmon,
		details: "asdf asdf"
	},
	"nigiri10_uni": {
		id: "nigiri10_uni",
		title: "Uni Nigiri",
		source: {
			thumbnailUrl: "https://scontent.fsnc1-1.fna.fbcdn.net/v/t1.0-0/p206x206/13445465_3120300406291_611181044637490496_n.jpg?oh=d3747826196e8d12ec0077959960cfb8&oe=59883B33",
			fullUrl: "https://scontent.fsnc1-1.fna.fbcdn.net/v/t1.0-9/13445465_3120300406291_611181044637490496_n.jpg?oh=b90646e2f0b65e4e5d374b9ba5b162b1&oe=5982B8E3"
		},
		color: colorUni,
		details: "asdf asdf"
	},
	"roll8_salmon_garlic": {
		id: "roll8_salmon_garlic",
		title: "Roasted Garlic Salmon Roll",
		source: {
			thumbnailUrl: "https://scontent.fsnc1-1.fna.fbcdn.net/v/t1.0-0/p206x206/14963128_3294509201402_859956427861884567_n.jpg?oh=2dc900eab6e4607ca2b42a05b633987d&oe=598DA032",
			fullUrl: "https://scontent.fsnc1-1.fna.fbcdn.net/v/t1.0-9/14963128_3294509201402_859956427861884567_n.jpg?oh=18aaee1137a0f4c7a345bd0f14338833&oe=598664E2"
		},
		color: colorSalmon,
		details: "asdf asdf"
	},
	"roll8_vegan_asparagus": {
		id: "roll8_vegan_asparagus",
		title: "Vegan Umami Asparagus Roll",
		source: {
			thumbnailUrl: "https://scontent.fsnc1-1.fna.fbcdn.net/v/t1.0-0/p206x206/11139373_2758214994382_5686092001397705530_n.jpg?oh=9211329b6795b7ec73edb95cd3734338&oe=598C2EB8",
			fullUrl: "https://scontent.fsnc1-1.fna.fbcdn.net/v/t1.0-9/11139373_2758214994382_5686092001397705530_n.jpg?oh=a58606e1f52cde4a3b97bca8b1820235&oe=59873495"
		},
		color: colorGreen,
		details: "asdf asdf"
	},
	"roll8_amberjack_tuna": {
		id: "roll8_amberjack_tuna",
		title: "Deep Sea Amberjack Roll",
		source: {
			thumbnailUrl: "https://scontent.fsnc1-1.fna.fbcdn.net/v/t1.0-0/p206x206/11223503_2799772153285_272937667642782688_n.jpg?oh=2eb3402ca7e54817d7543a78b2e19fae&oe=5993427C",
			fullUrl: "https://scontent.fsnc1-5.fna.fbcdn.net/v/t1.0-9/11223503_2799772153285_272937667642782688_n.jpg?oh=92f5ec193c334a78b91e7a8b23d9ea30&oe=598BFCAC"
		},
		color: colorGreen,
		details: "asdf asdf"
	},
	"roll6_monkfish_bites": {
		id: "roll6_monkfish_bites",
		title: "Monkfish Liver Roll Bites",
		source: {
			thumbnailUrl: "https://scontent.fsnc1-1.fna.fbcdn.net/v/t1.0-0/p206x206/11855810_2820598193923_7528199783678914326_n.jpg?oh=558b68d82c162bd2e44f28a5cdab4bcd&oe=597B0570",
			fullUrl: "https://scontent.fsnc1-1.fna.fbcdn.net/v/t1.0-9/11855810_2820598193923_7528199783678914326_n.jpg?oh=6a1334a2333a80f82f51922738309075&oe=597C105D"
		},
		color: colorGold,
		details: "asdf asdf"
	},
	"roll8_seared_salmon_ikura": {
		id: "roll8_seared_salmon_ikura",
		title: "Seared Salmon Ikura Roll",
		source: {
			thumbnailUrl: "https://scontent.fsnc1-1.fna.fbcdn.net/v/t1.0-0/p206x206/11150503_2706323017115_7342689363651900143_n.jpg?oh=2bb65760640b860602996f378cb1596b&oe=5993D402",
			fullUrl: "https://scontent.fsnc1-5.fna.fbcdn.net/v/t1.0-9/11150503_2706323017115_7342689363651900143_n.jpg?oh=dbb75627ae7f20edcd7cf22d5ea6fca3&oe=59934E2F"
		},
		color: colorTobiko,
		details: "asdf asdf"
	},
	"handroll3_rainbow_matcha": {
		id: "handroll3_rainbow_matcha",
		title: "Rainbow Matcha Martini",
		source: {
			thumbnailUrl: "https://scontent.fsnc1-1.fna.fbcdn.net/v/t1.0-0/p206x206/10376278_2706325177169_3567077577660757834_n.jpg?oh=b3f05e6f3e81c8bce5ab766775b0bca3&oe=5987942D",
			fullUrl: "https://scontent.fsnc1-5.fna.fbcdn.net/v/t1.0-9/10376278_2706325177169_3567077577660757834_n.jpg?oh=066b047a811bc50c73eb09084fd6ef3b&oe=5974DB00"
		},
		color: colorAvocado,
		details: "asdf asdf"
	},
	"roll8_rainbow_white": {
		id: "roll8_rainbow_white",
		title: "Great White Rainbow Roll",
		source: {
			thumbnailUrl: "https://scontent.fsnc1-1.fna.fbcdn.net/v/t1.0-0/p206x206/11800207_2820597913916_1628318891640552685_n.jpg?oh=2d79b24ab6e6b61e81a039a6f38febe7&oe=59775AC4",
			fullUrl: "https://scontent.fsnc1-1.fna.fbcdn.net/v/t1.0-9/11800207_2820597913916_1628318891640552685_n.jpg?oh=27dee8a3edf45ddbce80870e0689f37c&oe=597998E9"
		},
		color: colorWhite,
		details: "asdf asdf"
	},
	"spoon5_scallop": {
		id: "spoon5_scallop",
		title: "Scallop Sashimi Bites",
		source: {
			thumbnailUrl: "https://scontent.fsnc1-1.fna.fbcdn.net/v/t1.0-0/p206x206/13417550_3120300566295_8967881487037068275_n.jpg?oh=dcf24216fa3d8048d66ef8906b5bb1fd&oe=598A397E",
			fullUrl: "https://scontent.fsnc1-1.fna.fbcdn.net/v/t1.0-9/13417550_3120300566295_8967881487037068275_n.jpg?oh=5227a797d3ef3d1253d2accb3d8d5e99&oe=5991FA53"
		},
		color: colorWhite,
		details: "asdf asdf"
	},
	"nigiri6_amaebi": {
		id: "nigiri6_amaebi",
		title: "Amaebi Nigiri",
		source: {
			thumbnailUrl: "https://scontent.fsnc1-1.fna.fbcdn.net/v/t1.0-0/p206x206/13466507_3120300726299_6651628152071245303_n.jpg?oh=99561fc5665ef38160b476a666fe94c4&oe=597BCE48",
			fullUrl: "https://scontent.fsnc1-1.fna.fbcdn.net/v/t1.0-9/13466507_3120300726299_6651628152071245303_n.jpg?oh=4522514253d5e84f796b1313a4a1733a&oe=59856F65"
		},
		color: colorEbi,
		details: "asdf asdf"
	},
	"spoon2_tako": {
		id: "spoon2_tako",
		title: "Tako Spring Bites",
		source: {
			thumbnailUrl: "https://scontent.fsnc1-1.fna.fbcdn.net/v/t1.0-0/p206x206/14955898_3294510201427_7936478923707699045_n.jpg?oh=4c5179770cf3d860982a947bc70f90ab&oe=597BD82E",
			fullUrl: "https://scontent.fsnc1-5.fna.fbcdn.net/v/t1.0-9/14955898_3294510201427_7936478923707699045_n.jpg?oh=f88ae60267c5cd86451f0cea1957c08a&oe=59896403"
		},
		color: colorGreen,
		details: "asdf asdf"
	},
	"roll8_crunchy_salmon": {
		id: "roll8_crunchy_salmon",
		title: "Crunchy Salmon",
		source: {
			thumbnailUrl: "https://scontent.fsnc1-5.fna.fbcdn.net/v/t1.0-0/p206x206/15032298_3294509801417_808085137281408618_n.jpg?oh=54932d5e5aba7adfce73da0ed8a7730d&oe=598A8182",
			fullUrl: "https://scontent.fsnc1-5.fna.fbcdn.net/v/t1.0-9/15032298_3294509801417_808085137281408618_n.jpg?oh=0ebc5fb59fb12fe577b729ca78f90806&oe=59906652"
		},
		color: colorTobiko,
		details: "asdf asdf"
	},
	"roll8_hamachi_lotus": {
		id: "roll8_hamachi_lotus",
		title: "Hamachi Lotus Roll",
		source: {
			thumbnailUrl: "https://scontent.fsnc1-5.fna.fbcdn.net/v/t1.0-0/p206x206/15032901_3294510681439_6437959699024215782_n.jpg?oh=afbccac1be869ddb117a5f7219288bc3&oe=5982372F",
			fullUrl: "https://scontent.fsnc1-5.fna.fbcdn.net/v/t1.0-9/15032901_3294510681439_6437959699024215782_n.jpg?oh=dd7275589213dcc2945da4757142ac85&oe=59842C02"
		},
		color: colorEbi,
		details: "asdf asdf"
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
	details: ""
}
*/