'use strict';

angular.module('ideation.campaign')
  .factory('campaignBinder', ['$resource', function($resource){
    return $resource('/campaignApi/:id', null, {
      'update': { method:'PUT' }
    });
  }]);