/**
 * Main AngularJS Web Application
 */

 var app = angular.module('mySushiPortfolio', [ 'ngRoute' ]);

/**
  * Configure the Routes
*/
app.config(['$routeProvider', function ($routeProvider) {
  $routeProvider.when("/", {
    templateUrl: "index.html",
    controller: "MainCtrl"
  }).when("/biography", {
    templateUrl: "mainDisplay/biography.html",
    controller: "BioCtrl"
  }).when("/exhibit", {
    templateUrl: "mainDisplay/exhibit.html",
    controller: "ExhibitCtrl"
  }).when("/blog", {
    templateUrl: "mainDisplay/blog.html",
    controller: "BlogCtrl"
  }).when("/contact", {
    templateUrl: "mainDisplay/contact.html",
    controller: "ContactCtrl"
  });

  $routeProvider.otherwise({
    redirectTo: '/'
  });
}]);