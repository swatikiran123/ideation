'use strict';

angular.module('campaignModule')
  .controller('campaignControllerDetail', ['$scope', '$routeParams', 'campaignBinder', '$location', function ($scope, $routeParams, campaignBinder, $location) {
    $scope.campaign = campaignBinder.get({id: $routeParams.id });

    $scope.update = function(){
      campaignBinder.update({id: $scope.campaign._id}, $scope.campaign, function(){
        $location.url('/');
      });
    };

    $scope.remove = function(){
      campaignBinder.remove({id: $scope.campaign._id}, function(){
        $location.url('/');
      });
    };
  }]);
