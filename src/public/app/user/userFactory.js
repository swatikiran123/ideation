'use strict';

angular.module('userModule')
  .factory('userBinder', ['$resource', function($resource){
    return $resource('/userApi/:id', null, {
      'update': { method:'PUT' }
    });
  }]);
