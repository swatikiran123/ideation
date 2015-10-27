'use strict';

angular.module('ideaModule')
  .controller('ideaControllerMain', ['$scope', 'ideaBinder', function ($scope, ideaBinder) {
    $scope.ideaCollection = ideaBinder.query();

    $scope.save = function(){
      var idea = new ideaBinder({ 
        title: $scope.idea.title, 
        desc: $scope.idea.desc, 
        submittedBy: $scope.idea.submittedBy,
        postedOn: $scope.idea.postOn, 
        status: $scope.idea.status
      });

      console.log("adding new idea with title::")
      console.log($scope.idea.title)
      idea.$save(function(){
        $scope.ideaCollection.push($scope.idea);
        $scope.idea = ""; // clear textbox
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

    $scope.deselect = function(){
      $scope.idea = "";
    }

    $scope.remove = function(index){
      console.log("deleting::"+index);
      //var idea = $scope.ideaCollection[index];
      ideaBinder.remove({id: index}, function(){
        $scope.ideaCollection.splice(index, 1);
      });
    };
  }]);
