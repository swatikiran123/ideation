'use strict';

angular.module('userModule')
  .controller('userControllerDetail', ['$scope', '$routeParams', 'userBinder', '$location', function ($scope, $routeParams, userBinder, $location) {
    $scope.user = userBinder.get({id: $routeParams.id });

    $scope.update = function(){
      userBinder.update({id: $scope.user._id}, $scope.user, function(){
        $location.url('/');
      });
    };

    $scope.remove = function(){
      userBinder.remove({id: $scope.user._id}, function(){
        $location.url('/');
      });
    };
  }]);
