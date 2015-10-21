'use strict';

angular.module('ideaModule')
  .controller('ideaControllerDetail', ['$scope', '$routeParams', 'ideaBinder', '$location', function ($scope, $routeParams, ideaBinder, $location) {
    $scope.idea = ideaBinder.get({id: $routeParams.id });

    $scope.update = function(){
      ideaBinder.update({id: $scope.idea._id}, $scope.idea, function(){
        $location.url('/');
      });
    };

    $scope.remove = function(){
      ideaBinder.remove({id: $scope.idea._id}, function(){
        $location.url('/');
      });
    };
  }]);
