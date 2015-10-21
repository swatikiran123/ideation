'use strict';

angular.module('userModule')
  .controller('userControllerMain', ['$scope', 'userBinder', function ($scope, userBinder) {
    $scope.editing = [];
    $scope.userCollection = userBinder.query();

    $scope.save = function(){
      if(!$scope.newUser || $scope.newUser.length < 1) return;
      var user = new userBinder({ title: $scope.newUser});

      user.$save(function(){
        $scope.userCollection.push(user);
        $scope.newUser = ''; // clear textbox
      });
    };

    $scope.update = function(index){
      var user = $scope.userCollection[index];
      userBinder.update({id: user._id}, user);
      $scope.editing[index] = false;
    };

    $scope.edit = function(index){
      $scope.editing[index] = angular.copy($scope.userCollection[index]);
    };

    $scope.cancel = function(index){
      $scope.userCollection[index] = angular.copy($scope.editing[index]);
      $scope.editing[index] = false;
    };

    $scope.remove = function(index){
      var user = $scope.userCollection[index];
      userBinder.remove({id: user._id}, function(){
        $scope.userCollection.splice(index, 1);
      });
    };
  }]);
