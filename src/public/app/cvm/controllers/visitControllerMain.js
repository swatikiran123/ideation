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

$scope.schedules=[];
$scope.schedule='';
$scope.result1 = '';
$scope.content = 'llll';
$scope.hideSchedule=true;
$scope.hideVisitor=true;
$scope.hideFilter=true;

//cvm
/*

var inData={'cvm': $scope.cvm,'schedules': $scope.schedules};
$scope.addCvm=function(){
console.log($scope.cvm);
console.log($scope.schedules);
$http.post('/cvmApi',inData).success(function(response) {
      console.log(response);
      refresh();
    });
   };
*/
$scope.addCvm = function(){
    var inData       = $scope.cvm;
    inData.schedules = $scope.schedules;

    console.log(inData);

    $http.post('/cvmApi',inData).success(function(response) {
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