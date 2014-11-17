/**
 * Main AngularJS Web Application
 */

 var app = angular.module('mySushiPortfolio', ['ngRoute']);

/**
  * Configure the Routes
*/
app.config(['$routeProvider', function ($routeProvider) {
  $routeProvider.when("/", {
    templateUrl: "mainDisplay/biography.html"
  }).when("/biography", {
    templateUrl: "mainDisplay/biography.html"
  }).when("/exhibit", {
    templateUrl: "mainDisplay/exhibit.html"
  }).when("/blog", {
    templateUrl: "mainDisplay/blog.html"
  }).when("/contact", {
    templateUrl: "mainDisplay/contact.html"
  });

  $routeProvider.otherwise({
    redirectTo: '/'
  });
}]);