'use strict';

var campaignApp = angular.module('ideation.campaign');

campaignApp.controller('campaignControllerMain', ['$scope', '$http', '$routeParams', function($scope, $http, $routeParams) {

  var id = $routeParams.id;
  $scope.mode=(id==null? 'add': 'edit');
  $scope.hideFilter = true;
  console.log("Id:" + id + ":" + $scope.mode);

  var refresh = function() {
    $http.get('/campaignApi').success(function(response) {
      console.log("I got the data I requested");
      $scope.campaignList = response;
      $scope.campaign = "";

      switch($scope.mode)    {
        case "add":
          $scope.campaign = "";
          console.log('add mode ready')
          break;

        case "edit":
          $scope.campaign = $http.get('campaignApi/' + id).success(function(response){
          $scope.campaign = response;

        // reformat date fields to avoid type compability issues with <input type=date on ng-model
        $scope.campaign.startDate = new Date($scope.campaign.startDate);
        $scope.campaign.endDate = new Date($scope.campaign.endDate);
      });
      console.log('edit mode to be implemented');

      }
    });
  };

  refresh();

  $scope.create = function() {
    console.log($scope.campaign);
    $http.post('/campaignApi', $scope.campaign).success(function(response) {
      console.log(response);
      refresh();
    });
  };

  $scope.delete = function(id) {
    console.log(sub("Delete[Campaign::#{id}]"));
    $http.delete('/campaignApi/' + id).success(function(response) {
      refresh();
    });
  };

  $scope.update = function(id) {
    console.log(sub("Update[Campaign::#{id}]"));
    $http.get('/campaignApi/' + id).success(function(response) {
      $scope.campaign = response;
    });
  };  

  $scope.update = function() {
    console.log(("Delete[Campaign::#{id}]"));
    console.log($scope.campaign._id);
    $http.put('/campaignApi/' + $scope.campaign._id, $scope.campaign).success(function(response) {
      refresh();
    })
  };

  $scope.deselect = function() {
    $scope.campaign = "";
  }

}]);﻿
