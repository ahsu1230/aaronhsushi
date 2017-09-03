'use strict';

var app = angular.module('myPortfolio');
app.controller('KifiCtrl', ['$scope', '$location', '$window', '$timeout',
  function ($scope, $location, $window, $timeout) {

    var maxWindowForKifi = 770;

    $scope.onLoadDelayFinished = false;
    $scope.showSpinner = true; // supposed initial
    $scope.showKifi = true; // supposed initial

    $scope.hideTooltip = false;
    $scope.closeTooltip = function() {
      $scope.hideTooltip = true;
    };

    // show kifi
    function canShowKifi() {
      var onContactPage = $('.contact-wrapper').length > 0;
      $scope.showKifi = !onContactPage;
    }

    // show spinner only if not exhibit and big enough
    function canShowSpinner() {
      var onExhibitPage = $('.exhibit-wrapper').length > 0;
      var largeEnoughWindow = $window.innerWidth > maxWindowForKifi;
      $scope.showSpinner = !onExhibitPage && largeEnoughWindow;
    }

    $scope.$on('$routeChangeSuccess', function () {
      canShowSpinner();
      canShowKifi();
    });

    $scope.$watch(function() {
      return $window.innerWidth;
    }, function() {
      canShowSpinner();
    });

    $timeout(function() {
      $scope.onLoadDelayFinished = true;
      $('.kifi-footer').css({'margin-top':'40px'});
    }, 1500);
  }
]);
