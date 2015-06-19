'use strict';

var app = angular.module('myPortfolio');
app.directive('exhibitFilterTest', [ '$timeout', '$document', '$window', 'exhibitFactory',
  function ($timeout, $document, $window, exhibitFactory) {
    return {
      restrict: 'A',
      templateUrl: 'mainDisplay/exhibit2/exhibitFilter2.tpl.html',
      link: function (scope, element) {

        function init() {
          createTagMapping();
          checkWindowMode();
          checkNumColumns($window.innerWidth);
        }

        //
        // FilterBox
        //

        scope.filterList = exhibitFactory.tagList;
        scope.selectedFilters = [];
        scope.showFilterMenu = false;

        function toggleFilterMenuOn() {
          scope.showFilterMenu = true;
        }

        function toggleFilterMenuOff() {
          scope.showFilterMenu = false;
        }

        function toggleFilterMenu() {
          if (scope.showFilterMenu) {
            toggleFilterMenuOff();
          } else {
            toggleFilterMenuOn();
          }
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
        };

        scope.selectOneTag = function (tagValue) {
          scope.selectedFilters = [];
          var i = 0;
          var idx = -1;

          while (i < scope.filterList.length) {
            if (scope.filterList[i].value === tagValue) {
              idx = i;
              break;
            }
            i++;
          }

          if (idx > -1) {
            scope.selectedFilters = [scope.filterList[idx]];
          }
          scope.modalCard = {};
          scope.showLargeModal = false;
        }


        // Exhibit Tiles

        scope.allCards = exhibitFactory.exhibitList;
        function initAllCards() {
          for (var i=0; i < scope.allCards.length; i++) {
            var targetCard = scope.allCards[i];

            // replace recommended array with array of objects (id & imgSrc)
            var recoObj = [];
            for (var j=0; targetCard.recommended && j < targetCard.recommended.length; j++) {
              var targetId = targetCard.recommended[j];
              var singleReco = _.pluck(_.where(scope.allCards, {id: targetId}));
              recoObj.push(singleReco[0]);
            }
            scope.allCards[i].recommended = recoObj;
          }
        }
        initAllCards();

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
        scope.colIndices = [];

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

        // organize by column
        function organizeToTable(list, numRows, numCols) {
          var table = [];
          for (var j = 0; j < numCols; j++){
            table[j] = [];
          }
          var c = 0;
          while (c < list.length) {
            var colIndex = c % numCols;
            table[colIndex].push(list[c]);
            c++;
          }
          return table;
        }

        function checkNumColumns(windowWidth, changeCards) {
          var oldNumCols = scope.numCols;
          if (windowWidth < 550) {
            scope.numCols = 1;
          } else if (windowWidth < 800) {
            scope.numCols = 2;
          } else {
            scope.numCols = 3;
          }
          if (changeCards && oldNumCols != scope.numCols) {
            scope.showCards();
          }
        }

        function setImageScrollToMiddle() {
          if (!_.isEmpty(scope.modalCard)) {
            var largeImage = $('.exhibit2-tile-large-image');
            var largeWrapper = $('.exhibit2-tile-large-image-wrapper');
            var imageHeight = largeImage.outerHeight();
            var wrapperHeight = largeWrapper.outerHeight();

            if (imageHeight > wrapperHeight) {
              largeWrapper.scrollTop((imageHeight - wrapperHeight)/2);
            }
          }
        }

        scope.showCards = function() {
          var filteredList = filterCardsByTags(); // filter scope
          var numRows = Math.ceil(filteredList.length / scope.numCols);
          scope.rowIndices = _.range(numRows);
          scope.colIndices = _.range(scope.numCols);
          scope.cardsToShow = organizeToTable(filteredList, numRows, scope.numCols); // organize list into 2D list
        };

        scope.$watchCollection('selectedFilters', function (newFilters) {
          scope.showCards();
        });


        // Large Modal Card

        scope.modalCard = {};
        scope.showLargeModal = true;

        scope.showFullCardModal = function (card) {
          $timeout(function() {
            if (scope.showLargeModal) {
              scope.modalCard = card;

            } else {
              scope.showLargeModal = true;
            }
          });

          $timeout(function() {
            setImageScrollToMiddle();
            scope.showLoading = true;
            trackLargeImageLoad();
          });
        };

        scope.changeCardModal = function(newId) {
          var idx = _.findIndex(scope.allCards, {id: newId})
          if (idx > -1) {
            $timeout(function() {
              scope.modalCard = scope.allCards[idx];
            });
          }
        }

        scope.closeCardModal = function () {
          scope.modalCard = {};
        };

        function trackLargeImageLoad() {
          var loadingImage = $('.exhibit2-offscreen-image-load img');
          loadingImage.load(function() {
            $('.exhibit2-tile-large-image').attr('src', scope.modalCard.bigImgSrc);
            scope.$apply(function() {
              scope.showLoading = false;
            });
          });
        }



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
              checkNumColumns($window.innerWidth, true);
            });

          }
          lastWindowWidth = $window.innerWidth;
          lastWindowHeight = $window.innerHeight;
        }, 200));

        function onClickHandler(event) {
          scope.$apply(function () {

            // for FilterBox
            var onDisplay = event.target.classList.contains('exhibit2-filter-display');
            var onPlaceholder = event.target.classList.contains('exhibit2-filter-placeholder');
            var onWrapper = event.target.classList.contains('exhibit2-filter-option-wrapper');
            var onInput = event.target.classList.contains('exhibit2-filter-option-input');
            var onArrow = event.target.classList.contains('exhibit2-filter-arrow');
            var onArrowImg = event.target.classList.contains('arrow-img');
            var onTag = event.target.classList.contains('exhibit2-filter-tag');
            var onTagName = event.target.classList.contains('exhibit2-filter-display-name');
            var onTagClear = event.target.classList.contains('exhibit2-filter-display-x');
            var onClear = event.target.classList.contains('exhibit2-filter-clear');

            if (onArrow || onArrowImg) {
              toggleFilterMenu();
            } else if ( onDisplay || onPlaceholder) {
              toggleFilterMenuOn();
            } else if (scope.showFilterMenu && (onInput || onTag || onTagName || onTagClear || onWrapper || onClear)) {
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

        /*
        // loads cards only once images load
        // failed because card is set invisible at first by css
        // but then when you filter or resize, cards disappear
        $timeout(function() {
          var cardIdx = 0;
          var allSmallTiles = $('.exhibit2-small-tile');
          for (cardIdx = 0; cardIdx < scope.allCards.length; cardIdx++) {
            var targetCard = allSmallTiles.eq(cardIdx);
            var targetImg = targetCard.find('img');
            targetImg.load(function(e) {
              e.target.parentNode.parentNode.classList.add('loaded');
            });
          }
        });
        */

      }
    }
  }
]);
