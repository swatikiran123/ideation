'use strict';

var app=angular.module('loginModule');

app.config(['$routeProvider', function ($routeProvider) {
    $routeProvider
      .when('/login', {
		templateUrl: '/app/login/login.html',
		controller: 'loginController'
      })

	.when('/home', {
		templateUrl: '/app/login/home.html',
		controller: 'homeController'
      })

      .otherwise({redirectTo: '/login'});

  }]);

app.run(function($rootScope, $location, loginService){
    var restrictedRoutes = ['/home']; // list of routes need access
    console.log('app run');

    $rootScope.$on('$routeChangeStart', function(){
      console.log('root change start event');
      if(restrictedRoutes.indexOf($location.path()) !=-1 && !loginService.isLogged() ){
        console.log('access denied!!!');
        $location.path('/login');
      }
    });
  });