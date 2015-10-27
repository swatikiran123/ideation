'use strict';

angular.module('campaignModule')
  .factory('campaignBinder', ['$resource', function($resource){
    return $resource('/campaignApi/:id', null, {
      'update': { method:'PUT' }
    });
  }]);