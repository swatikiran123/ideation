'use strict';

// Declare app level module which depends on views, and components
angular.module('ideation', [
  'ngRoute'
  //'ideation.home',
  //'ideation.secure',
  //'ideation.version'
])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider
	  .when('/about', {
	    templateUrl: '/app/main/about.html'
	  })

	  .when('/contact',{
	  	templateUrl: '/app/main/contact.html'
	  })

	  .when('/faqs',{
	  	templateUrl: '/app/main/faqs.html'
	  })

	  .otherwise({
	  	redirectTo: '/'
	  });
}]);

