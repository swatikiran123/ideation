'use strict';

angular.module('cvm.main')
    .controller('visitControllerMain', ['$scope', '$cookieStore','$http', visitControllerMain]);

function visitControllerMain($scope, $cookieStore,$http) {

    console.log("visit controller invoked");

    var refresh = function() {
    $http.get('/visitApi').success(function(response) {
      console.log("I got the data I requested");
      $scope.visitList = response;
      $scope.visit = "";
      console.log('add mode ready')
      });
  };
refresh();

$scope.schedules=[];
$scope.schedule='';
$scope.result1 = '';
$scope.content = 'llll';
$scope.hideSchedule=true;
$scope.hideVisitor=true;
$scope.hideFilter=true;

//visit
$scope.addvisit = function(){
    var inData       = $scope.visit;
    inData.schedules = $scope.schedules;

    console.log(inData);

    $http.post('/visitApi',inData).success(function(response) {
        console.log(response);
        refresh();
    });
};

$scope.remove = function(id) {
  console.log(id);
  $http.delete('/visitApi/' + id).success(function(response) {
    refresh();
  });
};
$scope.edit = function(id) {
  console.log(id);
  $http.get('/visitApi/' + id).success(function(response) {
    $scope.visit = response;
  });
}; 
   

$scope.update = function() {
  console.log($scope.visit._id);
  $http.put('/visitApi/' + $scope.visit._id, $scope.visit).success(function(response) {
    refresh();
  })
};


$scope.clear = function() {
    $scope.visit = "";
  }

//schedule

$scope.addSchedule=function(schedule){
  
  console.log(schedule.dateStart);
  console.log(schedule.locationHere)

 $scope.schedules.push({
                      dateStart: schedule.dateStart,
                      locationHere: schedule.locationHere
                    });

schedule.dateStart='';
schedule.locationHere='';
    };

$scope.removeSchedule = function(index){
    $scope.schedules.splice(index, 1);
   }; 

$scope.scheduleOk=function(){
  
  console.log($scope.schedules);
};

}