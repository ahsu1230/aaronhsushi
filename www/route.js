/**
 * Main AngularJS Web Application
 */
'use strict';
var app = angular.module('myPortfolio', [
  'ngRoute'
]);

/**
  * Configure the Routes
*/
app.config(['$routeProvider', function ($routeProvider) {
  $routeProvider.when("/", {
    templateUrl: "mainDisplay/exhibit2/exhibit2.tpl.html"
  });

  $routeProvider.when("/biography", {
    templateUrl: "mainDisplay/biography/biography.tpl.html"
  });
  $routeProvider.when("/exhibit", {
    templateUrl: "mainDisplay/exhibit2/exhibit2.tpl.html"
  });
  $routeProvider.when("/exhibit-old", {
    templateUrl: "mainDisplay/exhibit/exhibit.tpl.html"
  });
  $routeProvider.when("/blog", {
    templateUrl: "mainDisplay/blog/blog.tpl.html"
  });
  $routeProvider.when("/contact", {
    templateUrl: "mainDisplay/contact/contact.tpl.html"
  });

  $routeProvider.otherwise({
    redirectTo: '/'
  });
}]);
