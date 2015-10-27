'use strict';

angular.module('ideaModule')
  .controller('ideaControllerMain', ['$scope', 'ideaBinder', function ($scope, ideaBinder) {
    $scope.editing = [];
    $scope.ideaCollection = ideaBinder.query();
    console.log("ideaControllerMain invoked");
    console.log(ideaCollection);

    $scope.save = function(){
      if(!$scope.newIdea || $scope.newIdea.length < 1) return;
      var idea = new ideaBinder({ title: $scope.newIdea});

      idea.$save(function(){
        $scope.ideaCollection.push(idea);
        $scope.newIdea = ''; // clear textbox
      });
    };

    $scope.update = function(index){
      var idea = $scope.ideaCollection[index];
      ideaBinder.update({id: idea._id}, idea);
      $scope.editing[index] = false;
    };

    $scope.edit = function(index){
      $scope.editing[index] = angular.copy($scope.ideaCollection[index]);
    };

    $scope.cancel = function(index){
      $scope.ideaCollection[index] = angular.copy($scope.editing[index]);
      $scope.editing[index] = false;
    };

    $scope.remove = function(index){
      var idea = $scope.ideaCollection[index];
      ideaBinder.remove({id: idea._id}, function(){
        $scope.ideaCollection.splice(index, 1);
      });
    };
  }]);
