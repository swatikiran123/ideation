'use strict';

angular.module('loginModule', []).config(['$routeProvider', '$locationProvider',
  function($routeProvider,$locationProvider) {
    $routeProvider
    .when('/login', {
        templateUrl: 'login.html',
        controller: 'loginController'
    })
    .when('/register', {
        templateUrl: 'register.html',
        controller: 'registerController'
      })
    .when('/forgotPassword', {
        templateUrl: 'forgotpassword.html',
        controller: 'forgotController'
      })
   .when('/home', {
       templateUrl: 'home.html',
       controller: 'homeController'
    })
    .otherwise({
       redirectTo: '/login'
    });
//    $locationProvider.html5Mode(true); //Remove the '#' from URL.
}]);