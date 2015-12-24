'use strict';

angular.module('cvm.main')
    .controller('visitControllerMain', ['$scope', '$cookieStore','$http', visitControllerMain]);

function visitControllerMain($scope, $cookieStore,$http) {

    console.log("visit controller invoked");

    var refresh = function() {
    $http.get('/cvmApi').success(function(response) {
      console.log("I got the data I requested");
      $scope.cvmList = response;
      $scope.cvm = "";
      console.log('add mode ready')
      });
  };
refresh();

$scope.result1 = '';
$scope.content = 'llll';
$scope.hideSchedule=true;
$scope.hideVisitor=true;
$scope.hideFilter=true;

$scope.addCvm=function(){
console.log($scope.cvm);
$http.post('/cvmApi', $scope.cvm).success(function(response) {
      console.log(response);
      refresh();
    });
   };

$scope.addSchedule=function(){
console.log("im in add Schedule schema")
console.log($scope.schedule);
$http.post('/cvmApi', $scope.schedule).success(function(response) {
      console.log(response);
      refresh();
    });
   };   

$scope.remove = function(id) {
  console.log(id);
  $http.delete('/cvmApi/' + id).success(function(response) {
    refresh();
  });
};
$scope.removeSchedule = function(id) {
  console.log(id);
  $http.delete('/cvmApi/' + id).success(function(response) {
    refresh();
  });
};

$scope.edit = function(id) {
  console.log(id);
  $http.get('/cvmApi/' + id).success(function(response) {
    $scope.cvm = response;
  });
}; 
   

$scope.update = function() {
  console.log($scope.cvm._id);
  $http.put('/cvmApi/' + $scope.cvm._id, $scope.cvm).success(function(response) {
    refresh();
  })
};


$scope.clear = function() {
    $scope.cvm = "";
  }
}