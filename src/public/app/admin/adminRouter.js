'use strict';

angular.module('ideation.admin')
  .config(['$routeProvider', function ($routeProvider) {
    $routeProvider
      .when('/admin/users', {
        templateUrl: '/app/admin/user-view-main.html',
        controller: 'userControllerMain'
      })

      .when('/admin/groups', {
        templateUrl: '/app/admin/group-view-main.html',
        controller: 'groupControllerMain'
      })

      .when('admin/group/:id/edit', {
        templateUrl: '/app/admin/group-view-edit.html',
        controller: 'groupControllerMain'
     });

  }]);
