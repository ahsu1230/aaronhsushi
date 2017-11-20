'use strict';
import React from 'react';

export const TYPE_BANNER = "banner";
export const TYPE_TEXT = "text";
export const SectionList = [
	{
		type: TYPE_BANNER,
		imgSrc: "./assets/covers/bluefin1.jpg"
	},
	{
		type: TYPE_TEXT,
		title: "Software Engineer by day, sushi fanatic always",
		texts: [
						"The chefs at Yuraku Japanese Restaurant in Germantown, Maryland, first introduced me to sushi at the age of 10. " +
						"Born and raised in Potomac, my siblings and I loved going there, so our family is there all the time. " +
						"We are there for casual lunch buffets, our birthdays, special celebrations, and even now as a tradition whenever my siblings and I visit from different cities. " +
						"A special shout-out to Chef Sunny for feeding our family sushi for more than 12 years! "
						,
						"After college at Carnegie Mellon University in Pennsylvania, I moved out to California for my first software engineer job in the Bay Area. " +
						"Of course, I still loved sushi and I was excited to begin my quest to explore what the Bay had to offer."
		]
	},
	{
		type: TYPE_BANNER,
		imgSrc: "./assets/covers/bluefin2.jpg"
	},
	{
		type: TYPE_TEXT,
		title: "How did you start making sushi?",
		texts: [
			"Thankfully, the Bay Area has plenty of large Asian markets that sell sashimi-grade fish. " +
			"I thought it would be fun and casually bought a few sushi-making tools, but I thought to myself, 'How am I going to learn to do this stuff?'"
			,
			"Of course, Youtube! You can learn basically anything on Youtube! " +
			"So I started with basic maki rolls, and then attempted my restaurant favorites like Yuraku's specialties, Rainbow Rolls and the Mango-Tango! "
			,
			"After that, I started to experiment with how to make more unique rolls. " +
			"I like to infuse different ingredients and tastes from different cuisines to create new concepts. " +
			"Some were awesome, and some were horrendous abominations! But nevertheless, from there, my adventure just took off."
		]
	},
	{
		type: TYPE_BANNER,
		imgSrc: "./assets/covers/bluefin3.jpg"
	},
	{
		type: TYPE_TEXT,
		title: "So now you think you're cool or something?",
		texts: [
			"You can't really call yourself an expert when you've only been to a small handful of restaurants and watched a few Youtube videos. "  +
			"But I have a passion for it, and love watching sushi chefs use different techniques with different fish. " +
			"I love catering to friends and providing them the opportunity to try sushi they normally wouldn't try or couldn't afford to try. " +
			"And I love dedicating myself to something that's exceptionally difficult and being inspired to keep evolving. " +
			"Of course, eating the home-made sushi is always the cherry on top!"
			,
			"This website is meant to be a portfolio so I can show people what I've achieved and learned throughout my journey. " +
			"And with this portfolio, I hope to land my first apprenticeship at a sushi restaurant where I can continue to hone my skills and discover new possibilities for myself. " +
			"My hope is to learn to what it takes to make high quality sushi and to continue my adventure with new quests."
		]
	},
];
