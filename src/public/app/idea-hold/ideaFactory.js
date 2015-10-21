'use strict';

angular.module('ideaModule')
  .factory('ideaBinder', ['$resource', function($resource){
    return $resource('/ideaApi/:id', null, {
      'update': { method:'PUT' }
    });
  }]);
