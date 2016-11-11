var myapp = angular.module('myapp',['ngRoute','ngAnimate', 'ngMessages', "ngMaterial", 'angularUtils.directives.dirPagination']);

myapp.config(function($routeProvider) {
  $routeProvider

  .when('/table', {
    templateUrl : 'views/table.html',
    controller  : 'mainCTRL'
  }) 
  .otherwise({redirectTo: '/table'});
});