'use strict';

angular.module('loginModule')
	.controller('loginController', function($scope, loginService){

		$scope.login=function(user){
			console.log("login activated");
			loginService.login(user, $scope);
		}

	});