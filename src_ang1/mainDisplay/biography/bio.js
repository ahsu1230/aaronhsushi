'use strict';

var app = angular.module('myPortfolio');

app.controller('BioCtrl', ['$scope',
  function ($scope) {
    $scope.greeting = 'You are at the Biography page';
  }
]);

