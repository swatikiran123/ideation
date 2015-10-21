'use strict';

angular.module('ideaModule')
  .config(['$routeProvider', function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: '/app/idea/idea-view-main.html',
        controller: 'ideaControllerMain'
      })

      .when('/:id', {
        templateUrl: '/app/idea/idea-view-detail.html',
        controller: 'ideaControllerDetail'
     });
  }]);
