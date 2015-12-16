'use strict';

angular.module('ideation.dashboard')
  .controller('campaignPanelController', ['$scope', '$http', function ($scope, $http) {

    var refresh = function() {
      $http.get('/campaignApi').success(function(response) {
        console.log("Campaign data retrieved");
        $scope.campaigns = response;
        console.log($scope.campaigns);
      });
    };

    refresh();

  }]);
