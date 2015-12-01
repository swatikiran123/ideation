'use restrict';

var userApp = angular.module('ideation.auth');

userApp.controller('userController', ['$scope', '$http', '$routeParams', function($scope, $http, $routeParams) {
    console.log("userController:: invoked");

$scope.create = function() {
  console.log("create a user");
  console.log($scope.user);
  $http.post('/userApi', $scope.user).success(function(response) {
    console.log(response);
  });
};

}]);﻿
