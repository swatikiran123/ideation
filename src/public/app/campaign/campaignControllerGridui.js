'use strict';

/*angular.module('campaignModule')
  .controller('campaignControllerui', ['$scope', 'campaignBinder', function ($scope, campaignBinder) {
    $scope.editing = [];
    $scope.campaignCollection = campaignBinder.query();

    $scope.save = function(){
      if(!$scope.newCampaign || $scope.newCampaign.length < 1) return;
      var campaign = new campaignBinder({ title: $scope.newCampaign, $scope});

      campaign.$save(function(){
        $scope.campaignCollection.push(campaign);
        $scope.newCampaign = ''; // clear textbox
      });
    };

    $scope.update = function(index){
      var campaign = $scope.campaignCollection[index];
      campaignBinder.update({id: campaign._id}, campaign);
      $scope.editing[index] = false;
    };

    $scope.edit = function(index){
      $scope.editing[index] = angular.copy($scope.campaignCollection[index]);
    };

    $scope.cancel = function(index){
      $scope.campaignCollection[index] = angular.copy($scope.editing[index]);
      $scope.editing[index] = false;
    };

    $scope.remove = function(index){
      var campaign = $scope.campaignCollection[index];
      campaignBinder.remove({id: campaign._id}, function(){
        $scope.campaignCollection.splice(index, 1);
      });
    }; 
  }]);*/
var campaignApp = angular.module('ideation.campaign', ['ngTouch', 'ui.grid', 'ui.grid.pagination', 'ui.grid.expandable', 'ui.grid.selection', 'ui.grid.pinning']);

campaignApp.controller('campaignControllerGridui', ['$scope', '$http', '$routeParams', 'uiGridConstants', '$log',
  function($scope, $http, $routeParams, uiGridConstants, $log) {


    console.log("campaignControllerGridui:: invoked");

 

    

//second grid tried for ...
function subGridApiRegister(gridApi){
        // register the child API in the parent - can't tell why it's not in the core...
        var parentRow = gridApi.grid.appScope.row;
        parentRow.subGridApi = gridApi;

        // TODO::run over the subGrid's rows and match them to the parentRow.isSelected property by name to toggle the row's selection

        // subGrid selection method
        gridApi.selection.on.rowSelectionChanged(gridApi.grid.appScope, function(row){
          if (angular.isUndefined(parentRow.isSelected)){
            parentRow.isSelected = {}; 
          }

          parentRow.isSelected[row.entity.name] = row.isSelected;

          // now would probably be a good time to unselect the parent row, because not all of its children are selected...

        });
      }
     

     $scope.gridOptions = {
        paginationPageSizes: [10, 25, 50],
    paginationPageSize: 25,
    enablePaginationControls:true,
    showGridFooter:true,
    //headerTemplate:"headertemplate.html",
    footerTemplate:"footertemplate.html",
    enableFiltering: true,
    expandableRowTemplate: 'expandableRowTemplate.html',
        expandableRowHeight: 150,
    onRegisterApi: function(gridApi){
      $scope.gridApi = gridApi;

            gridApi.selection.on.rowSelectionChanged($scope, function(row){
              var selectedState = row.isSelected;

              // if row is expanded, toggle its children as selected
              if (row.isExpanded){
                // choose the right callback according to row status
                var selectCallBack = selectedState?"selectAllRows":"clearSelectedRows";
                // do the selection/unselection of children
                row.subGridApi.selection[selectCallBack]();
              }
              //mark children as selected if needed
              angular.forEach(row.entity.subGridOptions.data, function(value){
                // create the "isSelected" property if not exists
                if (angular.isUndefined(row.isSelected)){
                  row.isSelected = {}; 
                }

                // keep the selected rows values in the parent row - idealy would be a unique ID coming from the server
                row.isSelected[value.name] = selectedState;
              });
            });

            gridApi.expandable.on.rowExpandedStateChanged($scope, function (row) {
                if (row.isExpanded) {
                  row.entity.subGridOptions = {
                    columnDefs: [
                    { field: 'objective', headerCellClass: $scope.highlightFilteredHeader }
       ]};

                  $http.get('/campaignApi')
                    .success(function(response) {
                      row.entity.subGridOptions.data = response;
                      row.entity.subGridOptions.onRegisterApi = subGridApiRegister;
                    });
                }
            });
            gridApi.selection.on.rowSelectionChanged($scope, function(row){
              $log.log(row);
            }); 
    },
    columnDefs: [
      // default
      { field: 'title', headerCellClass: $scope.highlightFilteredHeader },

      { field: 'startDate', headerCellClass: $scope.highlightFilteredHeader },
      { field: 'endDate', headerCellClass: $scope.highlightFilteredHeader },
      { field: 'sponsor', headerCellClass: $scope.highlightFilteredHeader },
      { field: 'businessUnit', headerCellClass: $scope.highlightFilteredHeader }
      // pre-populated search field
    ]
  };

var id = $routeParams.id;
$scope.mode=(id==null? 'add': 'edit');
console.log("Id:" + id + ":" + $scope.mode);

var refresh = function() {
  $http.get('/campaignApi').success(function(response) {
    console.log("Campaign refresh");
    $scope.campaignList = response;
    $scope.gridOptions.data = response;

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
}

$scope.create = function() {
  console.log("create a campaign");
  console.log($scope.campaign);
  $http.post('/campaignApi', $scope.campaign).success(function(response) {
    console.log(response);
    refresh();
  });
};

$scope.delete = function(id) {
  console.log("Delete[Campaign::${id}]");
  $http.delete('/campaignApi/' + id).success(function(response) {
    refresh();
  });
};

$scope.update = function(id) {
  console.log("Update[Campaign::${id}]");
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

