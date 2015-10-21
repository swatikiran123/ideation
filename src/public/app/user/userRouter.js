'use strict';

angular.module('userModule')
  .config(['$routeProvider', function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: '/app/user/user-view-main.html',
        controller: 'userControllerMain'
      })

      .when('/:id', {
        templateUrl: '/app/user/user-view-detail.html',
        controller: 'userControllerDetail'
     });
  }]);
