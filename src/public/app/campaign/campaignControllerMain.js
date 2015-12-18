'use strict';

var campaignApp = angular.module('ideation.campaign');

campaignApp.controller('campaignControllerMain', ['$scope', '$http', '$routeParams', '$location', 'growl', 
  function($scope, $http, $routeParams, $location, growl) {

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
      growl.info(parse("Campaign with Title: %s added successfully", $scope.campaign.title));
    });
  };

  $scope.delete = function(campaign) {
    //console.log(sub("Delete[Campaign::#{id}]"));
    var title = campaign.title;
    $http.delete('/campaignApi/' + campaign._id).success(function(response) {
      refresh();
      growl.info(parse("Campaign with Title: %s added successfully", title));
    });
  };

/*  $scope.update = function(id) {
    console.log(sub("Update[Campaign::#{id}]"));
    $http.get('/campaignApi/' + id).success(function(response) {
      $scope.campaign = response;
    });
  };  */

  $scope.update = function() {
    console.log(("Delete[Campaign::#{id}]"));
    console.log($scope.campaign._id);
    $http.put('/campaignApi/' + $scope.campaign._id, $scope.campaign).success(function(response) {
      refresh();
      growl.info(parse("Campaign with Title: %s edited successfully", $scope.campaign.title));
    })
  };

  $scope.save = function(){
  switch($scope.mode)    {
    case "add":
      $scope.create();
      console.log("create campaign");
      break;

    case "edit":
      $scope.update();
      console.log("update campaign");
      break;
    }

    $location.path("/campaign/list");
  }

  $scope.deselect = function() {
    $scope.campaign = "";
  }

}]);﻿

campaignApp.directive('uiDate', function() {
    return {
      require: '?ngModel',
      link: function($scope, element, attrs, controller) {
        var originalRender, updateModel, usersOnSelectHandler;
        if ($scope.uiDate == null) $scope.uiDate = {};
        if (controller != null) {
          updateModel = function(value, picker) {
            return $scope.$apply(function() {
              return controller.$setViewValue(element.datepicker("getDate"));
            });
          };
          if ($scope.uiDate.onSelect != null) {
            usersOnSelectHandler = $scope.uiDate.onSelect;
            $scope.uiDate.onSelect = function(value, picker) {
              updateModel(value);
              return usersOnSelectHandler(value, picker);
            };
          } else {
            $scope.uiDate.onSelect = updateModel;
          }
          originalRender = controller.$render;
          controller.$render = function() {
            originalRender();
            return element.datepicker("setDate", controller.$viewValue);
          };
        }
        return element.datepicker($scope.uiDate);
      }
    };
  });
