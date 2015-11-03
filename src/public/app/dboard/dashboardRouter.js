'use strict';

/**
 * Route configuration for the RDash module.
 */
angular.module('ideation.dashboard').config(['$stateProvider', '$urlRouterProvider',
    function($stateProvider, $urlRouterProvider) {

        // For unmatched routes
        $urlRouterProvider.otherwise('/');

        // Application routes
        $stateProvider
            .state('index', {
                url: '/dashboard',
                templateUrl: '/app/dashboard/templates/dashboard.html'
            })
            .state('tables', {
                url: '/tables',
                templateUrl: '/app/dashboard/templates/tables.html'
            });
    }
]);