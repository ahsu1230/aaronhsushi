'use strict';

var app = angular.module('myPortfolio');
app.factory('exhibitFactory', [
  function () {

    var tagList = [
          { name: 'Salmon', value: 'salmon'},
          { name: 'Tuna', value: 'tuna'},
          { name: 'Shrimp', value: 'shrimp'},
          { name: 'Crab', value: 'crab'},
          { name: 'Unagi (Eel)', value: 'unagi'},
          { name: 'Avocado', value: 'avocado'},
          { name: 'Lobster', value: 'lobster'},
          { name: 'Spicy', value: 'spicy'},
          { name: 'Sweet', value: 'sweet'},
          { name: 'Vegetarian', value: 'vegetarian'},
          { name: 'Mango', value: 'mango'}
        ];

    var exhibitList = [
          { id: 'bluefin-tuna-avocado-roll',
            title: 'Tuna Avocado Roll',
            imgSrc: '../img/exhibitImg/bluefin_tuna_avocado_XS.jpg',
            bigImgSrc: '../img/exhibitImg/bluefin_tuna_avocado_XL.jpg',
            description: 'A colorful roll that combines the deep taste of Bluefin Tuna (Maguro) and the creamy texture of avocado. While packed with tuna and avocado both on the inside and outside, it still remains balanced through the hint of sweetness from a chili sauce and a slice of refreshing cucumber. Out of all of his specialty rolls, this one is Aaron\'s favorite!',
            ingredients: ['1 cup sushi rice', '1 half sheet of nori (roasted seaweed)','1/4 pound of maguro tuna', 'sliced cucumbers', '1 avocado', 'masago capelin fish eggs', 'sweet chili sauce'],
            tags: ['tuna', 'avocado', 'sweet'],
            layout: 'portrait',
            recommended: ['unagi-avocado-roll']
          },
          { id: 'salmon-snowcrab-petals',
            title: 'Salmon Snowcrab Petals',
            imgSrc: '../img/exhibitImg/crab_salmon_flower_XS.jpg',
            bigImgSrc: '../img/exhibitImg/crab_salmon_flower_XL.jpg',
            description: 'Combine snow-crab with lemon to get a juicy, flavorful burst, and add salmon on top to give a smooth, pleasant texture. A tasty roll that\'s also fun to make and welcoming to eat!',
            ingredients: ['1 cup sushi rice', '1 half sheet of nori (roasted seaweed)','1/2 cup of snow crab meat', '1/4 pound of salmon', '1 lemon', 'sriracha'],
            tags: ['salmon', 'crab', 'spicy'],
            layout: 'square',
            recommended: ['snowcrab-incline-roll']
          },
          { id: 'snowcrab-incline-roll',
            title: 'Snowcrab Inclines',
            imgSrc: '../img/exhibitImg/incline_snowcrab_XS.jpg',
            bigImgSrc: '../img/exhibitImg/incline_snowcrab_XL.jpg',
            description: 'For the crab lovers, enjoy this shellfish delight of snow crab, imitation crab, cucumbers, all covered in a sweet mayo sauce and even more snow crab! Cut in inclined sushi shapes, this roll gives sushi eaters something different and adventurous!',
            ingredients: ['1 cup sushi rice', '1 half sheet of nori (roasted seaweed)','1/2 cup of snow crab meat', '1 stick of imitation crab meat', 'cucumber slices', 'sweet mayonnaise'],
            tags: ['crab', 'sweet'],
            layout: 'portrait',
            recommended: ['salmon-snowcrab-petals']
          },

          { id: 'hand-roll-gala',
            title: 'Assorted Handroll Gala',
            imgSrc: '../img/exhibitImg/handroll_gala_XS.jpg',
            description: 'A classy appetizer for the table. Enjoy salmon or tuna stuffed hand rolls and finish off with a Green-tea flavored Pocky!',
            ingredients: ['1 cup sushi rice', '1 half sheet of nori (roasted seaweed)', '4 slices of tuna', '2 slices of salmon', 'cucumber slices', 'avocado slices', 'masago fish eggs'],
            tags: ['salmon', 'tuna', 'avocado'],
            recommended: ['rainbow-roll', 'sweet-shrimp-slider']
          },
          { id: 'shiitake-umami-roll',
            title: 'Shiitake Umami Roll',
            imgSrc: '../img/exhibitImg/shiitake_asparagus_XS.jpg',
            description: 'Vegetarians need some love too! For anybody who wants a savory taste (fish-eaters or not), enjoy this delicate, but flavorful combination of cooked shiitake mushrooms and steamed asparagus topped with mayo and unagi sauce. Mmm much umami!',
            ingredients: ['1 cup sushi rice', '1 half sheet of nori (roasted seaweed)', '3 shiitake mushrooms', '1 stick of asparagus', 'garlic cloves', '1/8 cup of soy sauce', '1/4 cup of sweetened ponzu sauce', 'mayo', 'unagi sauce'],
            tags: ['vegetarian'],
            layout: 'landscape',
            recommended: ['hand-roll-gala']
          },
          { id: 'fried-lobster-volcano-roll',
            title: 'Fried Lobster Volcano Roll',
            imgSrc: '../img/exhibitImg/fried_lobster_volcano3_XS.jpg',
            bigImgSrc: '../img/exhibitImg/fried_lobster_volcano3_XL.jpg',
            description: 'Feel daring? Take a bite out of this volcano lobster roll - fried and spiced up to hit you with an explosive, bold flavor! Another specialty for the shellfish lovers, this roll will be quite the adventure!',
            ingredients: ['1 cup sushi rice', '1 half sheet of nori (roasted seaweed)','1 lobster (tail and claws)', '1 cup of tempura mix', '1 egg', '2 sticks of imitation crab meat', 'sriracha', 'sriracha mayo'],
            tags: ['lobster', 'spicy', 'crab'],
            layout: 'landscape',
            recommended: ['lobster-medley-roll', 'maryland-lover-lobster-roll']
          },


          { id: 'unagi-avocado-roll',
            title: 'Unagi & Avocado Roll',
            imgSrc: '../img/exhibitImg/unagi_avocado_XS.jpg',
            bigImgSrc: '../img/exhibitImg/unagi_avocado_XL.jpg',
            description: 'Unagi (freshwater eel) fans would love this roll. Unagi is both inside and outside roll, with creamy avocado and refreshing cucumber to balance out the strong, but delicious unagi and sweet unagi sauce flavors. If your friends have never tried unagi, this roll is definitely one to try!',
            ingredients: ['1 cup sushi rice','1 half sheet of nori (roasted seaweed)', '1 unagi (freshwater eel)', '1 avocado', 'cucumber slices', 'unagi sauce'],
            tags: ['unagi','avocado', 'sweet'],
            layout: 'square',
            recommended: ['bluefin-tuna-avocado-roll']
          },
          { id: 'flaming-rock-n-roe',
            title: 'Flaming Rock N\; Roe',
            imgSrc: '../img/exhibitImg/flaming_rock_n_roe_XS.jpg',
            description: 'Flame On! Taste the energy in this salmon heavy roll and explore the blend of many electrifying flavors from spicy salmon, sweet unagi sauce, and salmon roe. Wowwwza!',
            ingredients: ['1 cup sushi rice', '1 half sheet of nori (roasted seaweed)', 'salmon roe fish eggs', '1/4 pound salmon', '1/2 cup salmon roe', '1 stick of imitation crab meat', 'cucumber slices', 'unagi sauce'],
            tags: ['spicy', 'salmon'],
            layout: 'portrait',
            recommended: ['beef-tataki-spicy-salmon-roll']
          },
          { id: 'lobster-medley-roll',
            title: 'Lobster Medley',
            imgSrc: '../img/exhibitImg/lobster_medley_XS.jpg',
            bigImgSrc: '../img/exhibitImg/lobster_medley_XL.jpg',
            description: 'A lemon, butter infused lobster acts as a scrumptious foundation for a delightful blend of imitation crab, masago fish eggs, and a hint of spicy sriracha mayo. Luxuriate yourself to this appetizing roll!',
            ingredients: ['1 cup sushi rice', '1 half sheet of nori (roasted seaweed)','1 lobster tail', '1/4 stick of butter', '1 lemon', '1 stick of imitation crab meat, shredded', 'masago fish eggs', 'sriracha mayo', 'unagi sauce'],
            tags: ['lobster', 'spicy', 'crab'],
            layout: 'portrait',
            recommended: ['fried-lobster-volcano-roll', 'maryland-lover-lobster-roll']
          },

          { id: 'seasoned-tuna-slider',
            title: 'Seasoned Tuna Sliders',
            imgSrc: '../img/exhibitImg/seasoned_tuna_sliders_XS.jpg',
            bigImgSrc: '../img/exhibitImg/seasoned_tuna_sliders_XL.jpg',
            description: 'Sushi molds were one of the first ways to make sushi in Japan, even before the Edo period. Seaweed is not even used to hold the shape of the "roll". With tuna based rice seasonings, masago fish eggs and imitation crab meat, enjoy a modern twist to how sushi used to be eaten in the old days.',
            ingredients: ['1 cup sushi rice', 'tuna based rice seasoning (katsuo fumi furikake)', '1 stick of imitation crab, shredded', 'masago fish eggs'],
            tags: ['crab', 'spicy', 'savory'],
            layout: 'square',
            recommended: ['sweet-shrimp-slider', 'masago-crabmeat-slider']
          },
          { id: 'sunset-delight-roll',
            title: 'Sunset Delight',
            imgSrc: '../img/exhibitImg/sunset_delight_XS.jpg',
            bigImgSrc: '../img/exhibitImg/sunset_delight_XL.jpg',
            description: 'A perfect roll for any casual setting. Whether it\'s a summer afternoon or a laid-back evening, this Vietnamese inspired medley of salmon and tuna is a sweet sushi rendition of Sex on the Beach!',
            ingredients: ['1 cup sushi rice', '1 half sheet of nori (roasted seaweed)','1/4 pound of salmon', '1/4 pound of tuna', 'cucumber', '1 stick of imitation crab meat', 'masago fish eggs', 'Vietnamese sweet & sour sauce'],
            tags: ['salmon', 'tuna', 'sweet', 'sour'],
            layout: 'portrait',
            recommended: ['rainbow-roll', 'spicy-tuna-hamachi-roll']
          },
          { id: 'maryland-lover-lobster-roll',
            title: 'Maryland Lover Lobster Roll',
            imgSrc: '../img/exhibitImg/maryland_lover_XS.jpg',
            bigImgSrc: '../img/exhibitImg/maryland_lover_XL.jpg',
            description: 'Born and raised in Maryland, Aaron felt like he needed to represent his hometown and give one of its native seasonings some love. Commonly used with Maryland Blue Crabs, Old Bay Seasoning is lightly sprinkled over this roll with broiled lobster marinated in a tangy, lemon-garlic dressing.',
            ingredients: ['1 cup sushi rice', '1 half sheet of nori (roasted seaweed)','1 lobster tail', '1 lemon', '1 garlic','1/4 stick of butter', 'Old Bay Seasoning'],
            tags: ['lobster'],
            layout: 'square',
            recommended: ['fried-lobster-volcano-roll', 'lobster-medley-roll']
          },

          { id: 'spicy-tuna-hamachi-roll',
            title: 'Spicy Tuna Hamachi Roll',
            imgSrc: '../img/exhibitImg/spicy_tuna_hamachi_XS.jpg',
            bigImgSrc: '../img/exhibitImg/spicy_tuna_hamachi_XL.jpg',
            description: 'A basic but delightful roll. Tuna and Hamachi (Japanese yellowtail) are two tasty fishes with cucumber to add some texture. With sriracha mayo and masago fish eggs, this roll is great for fish lovers.',
            ingredients: ['1 cup sushi rice','1 half sheet of nori (roasted seaweed)', '1/4 pound of tuna', '1/4 pound of hamachi', 'masago fish eggs','cucumber slices', 'sriracha mayo'],
            tags: ['tuna', 'hamachi', 'spicy'],
            layout: 'landscape',
            recommended: ['sunset-delight-roll']
          },
          { id: 'rainbow-roll',
            title: 'Rainbow Roll',
            imgSrc: '../img/exhibitImg/rainbow_roll_XS.jpg',
            description: 'The classic roll everybody has come to love. Enjoy the colorful assortment of different fish & refreshing tastes from cucumber and avocado.',
            ingredients: ['1 cup sushi rice', '1 half sheet of nori (roasted seaweed)', '2 slices of tuna', '2 slices of salmon', 'cucumber slices', '4 avocado slices', '1 stick of crabmeat', 'masago fish eggs'],
            tags: ['salmon', 'tuna', 'crab', 'avocado'],
            recommended: ['sunset-delight-roll']
          },
          { id: 'masago-crabmeat-slider',
            title: 'Masago Crabmeat Sliders',
            imgSrc: '../img/exhibitImg/masago_sliders_XS.jpg',
            bigImgSrc: '../img/exhibitImg/masago_sliders_XL.jpg',
            description: 'Another sushi mold press slider, with imitation crab meat and sweet sauce topped with masago fish eggs for an interesting texture.',
            ingredients: ['1 cup sushi rice', '1 half sheet of nori (roasted seaweed), cut in squares', 'masago fish eggs', '2 sticks of imitation crab meat, shredded'],
            tags: ['sweet', 'spicy', 'crab'],
            layout: 'portrait',
            recommended: ['seasoned-tuna-slider', 'sweet-shrimp-slider']
          },
          { id: 'beef-tataki-spicy-salmon-roll',
            title: 'Beef Tataki Roll',
            imgSrc: '../img/exhibitImg/spicy_beef_tataki_XS.jpg',
            description: 'Yasss. Need a change-up? Lets venture a bit out for a minute to enjoy a torched beef and spicy salmon combo. Let the salmon\'s creamy texture contrast with a juicy steak-like feel to get one hell of an adventure!',
            ingredients: ['1 cup sushi rice', '1 half sheet of nori (roasted seaweed)', '6 thin slices of rib-eye beef', '1/8 salmon', '1 stick of imitation crab meat', 'cucumber slices', 'sriracha & sriracha mayo'],
            tags: ['beef', 'spicy', 'salmon'],
            layout: 'landscape',
            recommended: ['flaming-rock-n-roe']
          },
          { id: 'sweet-shrimp-slider',
            title: 'Sweet Shrimp Sliders',
            imgSrc: '../img/exhibitImg/sweet_shrimp_sliders_XS.jpg',
            bigImgSrc: '../img/exhibitImg/sweet_shrimp_sliders_XL.jpg',
            description: 'Sushi pieces are meant to be eaten in one bite. With sushi molds, we can keep our sushi pieces compact to bite-size, but still full of flavor and interesting textures. These sliders use juicy shrimps and sweet chili sauce to give you a yummy delight!',
            ingredients: ['1 cup sushi rice', '1 half sheet of nori (roasted seaweed), cut in squares','4-5 shrimps', 'masago fish eggs', 'sweet chili sauce'],
            tags: ['shrimp', 'sweet'],
            layout: 'square',
            recommended: ['seasoned-tuna-slider', 'masago-crabmeat-slider']
          },
          { id: 'tropical-salmon-blossom',
            title: 'Tropical Salmon Blossom',
            imgSrc: '../img/exhibitImg/tropical_salmon_blossom_XS.jpg',
            description: 'A gorgeous roll formed into a blossom for good luck. Taste and share this unique blend of salmon, mango, avocado and honey!',
            ingredients: ['1 cup sushi rice', '1 half sheet of nori (roasted seaweed)','1/4 pound salmon', '4 mango thin slices', 'cucumber slices', 'honey', 'sweet chili sauce'],
            tags: ['salmon', 'sweet', 'mango'],
            layout: 'square',
            recommended: ['sunset-delight-roll', 'mango-tango-roll']
          },
          { id: 'mango-tango-roll',
            title: 'Mango Tango',
            imgSrc: '../img/exhibitImg/mango_tango_XS.jpg',
            description: 'Introducing summer 2015. Enjoy a mango topped roll with a sweet strawberry sauce drizzle to get a savory dessert-like taste that reminds you of succulent mango ice cream!',
            ingredients: ['1 cup sushi rice', '1 half sheet of nori (roasted seaweed)','1/4 pound of tuna', '4 mango wide slices', '1 crabmeat stick', '2 slices of avocado', 'strawberry perservatives'],
            tags: ['salmon', 'mango', 'sweet'],
            layout: 'landscape',
            recommended: ['tropical-salmon-blossom', 'sunset-delight-roll']
          }


        ];

    var api = {
      tagList: tagList,
      exhibitList: exhibitList
    };

    return api;
  }
]);