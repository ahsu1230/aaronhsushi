var app = angular.module('mySushiPortfolio')
app.controller('BioCtrl', function ( $scope, /*$location, $http */) {
  console.log("Bio Controller reporting for duty.");
  $scope.greeting = "You are at the Biography page";
});