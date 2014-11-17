/**
 * Main AngularJS Web Application
 */

 var app = angular.module('mySushiPortfolio', ['ngRoute']);

/**
  * Configure the Routes
*/
app.config(['$routeProvider', function ($routeProvider) {
  $routeProvider.when("/", {
    templateUrl: "mainDisplay/biography.tpl.html"
  }).when("/biography", {
    templateUrl: "mainDisplay/biography.tpl.html"
  }).when("/exhibit", {
    templateUrl: "mainDisplay/exhibit.tpl.html"
  }).when("/blog", {
    templateUrl: "mainDisplay/blog.tpl.html"
  }).when("/contact", {
    templateUrl: "mainDisplay/contact.tpl.html"
  });

  $routeProvider.otherwise({
    redirectTo: '/'
  });
}]);