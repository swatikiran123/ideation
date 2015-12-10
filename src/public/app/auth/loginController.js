'use strict';

angular.module('ideation.auth')
	.controller('loginController', function($scope, loginService){

		$scope.login=function(user){
			console.log("login activated");
			loginService.login(user, $scope);
		}

		$scope.logout=function(){
			console.log('logout initiated');
			loginService.logout();
		}
	});