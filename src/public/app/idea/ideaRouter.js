'use strict';

angular.module('ideaModule')
  .config(['$routeProvider', function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: '/app/idea/idea-view-main.html',
        controller: 'ideaControllerMain'
      })

      .when('/:id/view', {
        templateUrl: '/app/idea/idea-view-show.html',
        controller: 'ideaControllerDetail'
      })

      .when('/:id', {
        templateUrl: '/app/idea/idea-view-edit.html',
        controller: 'ideaControllerDetail'
     });
  }]);
