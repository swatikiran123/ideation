'use strict';

angular.module('cvm.main')
    .controller('visitControllerMain', ['$scope', '$cookieStore', visitControllerMain]);

function visitControllerMain($scope, $cookieStore) {

    console.log("visit controller invoked");
}