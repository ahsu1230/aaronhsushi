'use strict';

var app = angular.module('myPortfolio');
app.directive('exhibitFilter', [ '$timeout', '$document', '$window',
  function ($timeout, $document, $window) {
    return {
      restrict: 'A',
      templateUrl: 'mainDisplay/exhibit/exhibitFilter.tpl.html',
      link: function (scope, element) {

        function init() {
          createTagMapping();
          checkWindowMode();
          if ($window.innerWidth < 700) {
            scope.numCols = 1;
          } else if ($window.innerWidth < 900) {
            scope.numCols = 2;
          } else {
            scope.numCols = 3;
          }
        }

        //
        // FilterBox
        //

        scope.filterList = [
          { name: 'Salmon', value: 'salmon'},
          { name: 'Tuna', value: 'tuna'},
          { name: 'Shrimp', value: 'shrimp'},
          { name: 'Crab', value: 'crab'},
          { name: 'Tamago (Egg)', value: 'tamago'},
          { name: 'Avocado', value: 'avocado'},
          { name: 'Umami Bomb', value: 'umami'},
          { name: 'Spicy', value: 'spicy'},
          { name: 'Sweet', value: 'sweet'}
        ];
        scope.selectedFilters = [];
        scope.showFilterMenu = false;

        function toggleFilterMenuOn() {
          scope.showFilterMenu = true;
        }

        function toggleFilterMenuOff() {
          scope.showFilterMenu = false;
        }

        scope.clearFilter = function() {
          scope.selectedFilters = [];
        };

        scope.toggleSelection = function (tag) {
          var idx = _.indexOf(scope.selectedFilters, tag);
          if (idx > -1) {
            scope.selectedFilters.splice(idx, 1);
          }
          else {
            scope.selectedFilters.push(tag);
          }
        };

        scope.isSelectedTag = function (tag) {
          return (_.indexOf(scope.selectedFilters, tag) > -1);
        }


        // Exhibit Tiles

        scope.allCards = [
          { title: 'Baked Salmon Roll',
            imgSrc: '../img/baked_salmon.jpg',
            description: 'Baked Salmon Roll with a Spicy Mayo sauce',
            tags: ['baked', 'salmon']},
          { title: 'Tuna Avocado Roll',
            imgSrc: '../img/bluetuna_avocado.jpg',
            description: 'Bluefin Tuna (Maguro) with Avocado and a sweet chili sauce',
            tags: ['bluefin', 'tuna', 'avocado', 'sweet']},
          { title: 'Spicy Tuna Hamachi Roll',
            imgSrc: '../img/spicy_tuna_hamachi.jpg',
            description: 'Tuna, Hamachi, and Sriracha Mayo',
            tags: ['tuna', 'hamachi', 'spicy']},
          { title: 'Salmon Snowcrab Petals',
            imgSrc: '../img/crab_salmon_flower.jpg',
            description: 'Baked Salmon Roll with Sriracha Mayo sauce',
            tags: ['salmon', 'crab', 'spicy']},
          { title: 'Snowcrab Inclines',
            imgSrc: '../img/incline_snowcrab_roll.jpg',
            description: 'Snowcrab covered in a sweet mayo sauce',
            tags: ['crab', 'sweet']},
          { title: 'Seasoned Tuna Sliders',
            imgSrc: '../img/seasoned_tuna_sliders.jpg',
            description: 'Spicy Crabmeat with Masago and topped with Seasoned Tuna flakes',
            tags: ['crab', 'spicy', 'savory']},
          { title: 'Sweet Shrimp Sliders',
            imgSrc: '../img/sweet_shrimp_sliders.jpg',
            description: 'Seasoned pressed shrimp topped with Sweet Chili sauce',
            tags: ['shrimp', 'sweet']},
          { title: 'Masago Crabmeat Sliders',
            imgSrc: '../img/masago_sliders.jpg',
            description: 'Crabmeat sliders topped with Masago fish eggs',
            tags: ['masago', 'sweet', 'spicy', 'crab']},
          { title: 'Simple Salmon Sliders',
            imgSrc: '../img/salmon_sliders.jpg',
            description: 'Just the basics. Salmon sliders.',
            tags: ['salmon']},
          { title: 'Tamago Boat Sliders',
            imgSrc: '../img/tamago_boat.jpg',
            description: 'Sweet egg topped with Katsuo Rice Seasoning',
            tags: ['tamago', 'sweet']}
        ];

        var tagMapping = {};
        function createTagMapping () {
          var i = 0, j = 0;
          for (i = 0; i < scope.allCards.length; i++) {
            var card = scope.allCards[i];
            var tagList = card.tags;
            for (j = 0; j < tagList.length; j++) {
              var tagName = tagList[j];
              if (tagMapping[tagName]) {
                tagMapping[tagName].push(card);
              } else {
                tagMapping[tagName] = [card];
              }
            }
          }
        }

        scope.cardsToShow = [];
        scope.rowIndices = [];

        function filterCardsByTags() {
          if (scope.selectedFilters.length == 0) {
            return scope.allCards;
          }
          var cards = scope.allCards;
          for (var i = 0; i < scope.selectedFilters.length; i++) {
            var tag = scope.selectedFilters[i];
            var cardsWithTag = tagMapping[tag.value];
            cards = _.intersection(cards, cardsWithTag);
          }
          return cards;
        }

        function organizeToTable(list, numRows, numCols) {
          var table = [];
          var c = 0;
          for (var i = 0; i < numRows; i++) {
            table[i] = [];
            for (var j = 0; j < numCols; j++) {
              if (c < list.length) {
                table[i].push(list[c]);
                c++;
              }
            }
          }
          return table;
        }

        function checkNumColumns(windowWidth) {
          var oldNumCols = scope.numCols;
          if (windowWidth < 700) {
            scope.numCols = 1;
          } else if (windowWidth < 900) {
            scope.numCols = 2;
          } else {
            scope.numCols = 3;
          }
          if (oldNumCols != scope.numCols) {
            scope.showCards();
          }
        }

        scope.showCards = function() {
          var filteredList = filterCardsByTags(); // filter scope
          var numRows = Math.ceil(filteredList.length / scope.numCols);
          scope.rowIndices = _.range(numRows);
          scope.cardsToShow = organizeToTable(filteredList, numRows, scope.numCols); // organize list into 2D list
        };

        scope.$watchCollection('selectedFilters', function (newFilters) {
          scope.showCards();
        });


        // Large Modal Card

        scope.modalCard = {};

        scope.showFullCardModal = function (card) {
          scope.modalCard = card;
        };
        scope.closeCardModal = function () {
          scope.modalCard = {};
        };


        // Other

        scope.containsTag = function(tagList, tag) {
          if (tagList) {
            return tagList.indexOf(tag) > -1;
          }
          return false;
        }

        // window resizing
        var lastWindowWidth, lastWindowHeight;

        function checkWindowMode(windowWidth) {
          var oldMode = scope.smallWindowMode;
          if (windowWidth < 700) {
            scope.smallWindowMode = true;
          } else {
            scope.smallWindowMode = false;
          }
        };

        init();

        angular.element($window).bind('resize', _.debounce(function() {
          if ($window.innerWidth !== lastWindowWidth || $window.innerHeight !== lastWindowHeight) {
            scope.$apply(function() {
              checkWindowMode($window.innerWidth);
              checkNumColumns($window.innerWidth);
            });

          }
          lastWindowWidth = $window.innerWidth;
          lastWindowHeight = $window.innerHeight;
        }, 200));

        function onClickHandler(event) {
          scope.$apply(function () {

            // for FilterBox
            var onDisplay = event.target.classList.contains('exhibit-filter-display');
            var onPlaceholder = event.target.classList.contains('exhibit-filter-placeholder');
            var onWrapper = event.target.classList.contains('exhibit-filter-option-wrapper');
            var onInput = event.target.classList.contains('exhibit-filter-option-input');
            var onTag = event.target.classList.contains('exhibit-filter-tag');
            var onClear = event.target.classList.contains('exhibit-filter-clear');
            if ( onDisplay || onPlaceholder) {
              toggleFilterMenuOn();
            } else if (scope.showFilterMenu && (onInput || onTag || onWrapper || onClear)) {
              toggleFilterMenuOn();
            } else {
              toggleFilterMenuOff();
            }

            // for LargeModal
            var onTranslucent = event.target.classList.contains('translucent-background');
            if (!_.isEmpty(scope.modalCard) && onTranslucent) {
              scope.closeCardModal();
            }
          });
        }

        $document.on('click', function(e) {
          onClickHandler(e);
        });

        // Cleaner upper
        scope.$on('$destroy', function() {
          $document.off('click', onClickHandler);
        });

      }
    }
  }
]);
