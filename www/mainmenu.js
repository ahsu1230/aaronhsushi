'use strict';

var app = angular.module('myPortfolio');

app.controller('MainMenuCtrl', ['$scope', '$location', '$window', '$document', '$rootScope',
  function ($scope, $location, $window, $document, $rootScope) {

    $scope.currentPage = '';

    $scope.$watch(function() {
      return $location.path();
    }, function(currentPath) {
      switch(currentPath) {
        case '/biography':
          $scope.currentPage = 'biography';
          break;
        case '/exhibit':
          $scope.currentPage = 'exhibit';
          break;
        case '/blog':
          $scope.currentPage = 'blog';
          break;
        case '/contact':
          $scope.currentPage = 'contact';
          break;
        default: // home page
          $scope.currentPage = 'exhibit';
          break;
      }
    });

    $scope.redirectToPage = function(location) {
      $scope.showSmallMenu = false;
      switch (location) {
        case 'biography':
          $location.url('/biography');
          break;
        case 'exhibit':
          $location.url('/exhibit');
          break;
        case 'blog':
          $location.url('/blog');
          break;
        case 'contact':
          $location.url('/contact');
          break;
        default:
          break;
      }
    };

    $scope.showSmallMenu = false;
    $scope.openSmallMenu = function() {
      $scope.showSmallMenu = true;
    };
    $scope.closeSmallMenu = function() {
      $scope.showSmallMenu = false;
    };
    $scope.toggleSmallMenu = function() {
      if ($scope.showSmallMenu) {
        $scope.closeSmallMenu();
      } else {
        $scope.openSmallMenu();
      }
    };

    var maxWindowWidthForBurger = 680;

    // on window resize
    if ($window.innerWidth < maxWindowWidthForBurger) {
      $scope.enableSmallMenu = true;
    } else {
      $scope.enableSmallMenu = false;
    }

    var lastWindowWidth, lastWindowHeight;
    angular.element($window).bind('resize', _.debounce(function() {
      if ($window.innerWidth !== lastWindowWidth) {
        $scope.$apply(function() {
          if ($window.innerWidth < maxWindowWidthForBurger) {
            $scope.enableSmallMenu = true;
          } else {
            $scope.enableSmallMenu = false;
          }
        });
      }
      lastWindowWidth = $window.innerWidth;
      lastWindowHeight = $window.innerHeight;
    }, 200));

    function onClickHandler(event) {
      $scope.$apply(function () {
        var onBurger = event.target.classList.contains('main-menu-burger');
        var onSmallMenu = event.target.classList.contains('small-main-menu');
        var onSmallMenuOption = event.target.classList.contains('small-main-menu-option');
        if (onBurger) {
          $scope.toggleSmallMenu();
        }
        else if (onSmallMenuOption) {
          $scope.closeSmallMenu();
        }
        else if (!onSmallMenu) {
          $scope.closeSmallMenu();
        }
      });
    }

    $document.on('click', function(e) {
      onClickHandler(e);
    });


    // kifi tool
    $scope.hideTooltip = false;
    $scope.closeTooltip = function() {
      $scope.hideTooltip = true;
    };

    $scope.notOnExhibit = $location.url() != '/exhibit';
    $rootScope.$on('$locationChangeSuccess', function(event){;
        $scope.notOnExhibit = $location.url() != '/exhibit';
    });

    // Cleaner upper
    $scope.$on('$destroy', function() {
      $document.off('click', onClickHandler);
    });


  }
]);

