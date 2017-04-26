'use strict';

const colorOrange = "#ffbb00";
const colorRed = "#ff0000";
const colorGreen = "#00ffbb";
const colorYellow = "#ffe600";
const cololBlue = "#6599ff";
const colorPurple = "#bb00ff";
const colorBrown = "#b38300";

const contentList = ["roll6_tempura_crab", "roll6_tuna_avocado", "roll8_salmon_guac"];

const contentMap = {
	"roll6_tempura_crab": {
		title: "Some Sushi",
		source: {
			thumbnailUrl: "https://scontent.xx.fbcdn.net/v/t1.0-0/p206x206/11156218_2706329777284_910193609496174608_n.jpg?oh=76fe35438770952c78b0e1f2b91c52dd&oe=597E651B",
			fullUrl: "https://scontent.xx.fbcdn.net/v/t31.0-8/11167681_2706329777284_910193609496174608_o.jpg?oh=7107dadb6820eef866ec2d8abcd5c3a2&oe=59746B51"
		},
		color: colorOrange
	},
	"roll6_tuna_avocado": {
		title: "Some other Sushi",
		source: {
			thumbnailUrl: "https://scontent.xx.fbcdn.net/v/t1.0-0/p206x206/10352940_2496991263952_1005846077137632990_n.jpg?oh=be408ab3e2c8e5c3c8e19a38cc1b968e&oe=59958A21",
			fullUrl: "https://scontent.xx.fbcdn.net/v/t1.0-9/10352940_2496991263952_1005846077137632990_n.jpg?oh=fd61d6f68fce12c4f826d2214f62cfba&oe=59909B0C"
		},
		color: colorRed
	},
	"roll8_salmon_guac": {
		title: "Guac Roll",
		source: {
			thumbnailUrl: "https://scontent.xx.fbcdn.net/v/t1.0-0/p206x206/14956382_3294509081399_7030668803048428247_n.jpg?oh=8bb2cabd29259b4c4f869a5a1790189e&oe=597478BB",
			fullUrl: "https://scontent.xx.fbcdn.net/v/t1.0-9/14956382_3294509081399_7030668803048428247_n.jpg?oh=1faebf193d57e2685d257da30782e62f&oe=59941A96"
		},
		color: colorGreen
	}
};