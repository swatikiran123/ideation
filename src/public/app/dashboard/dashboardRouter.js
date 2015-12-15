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
                url: '/',
                templateUrl: '/app/dashboard/templates/dashboard.html'
            })
            .state('campaign', {
                url: '/campaign/:id/show',
                templateUrl: '/app/campaign/campaign-view3-show.html',
                controller: 'campaignControllerMain'
            })
            .state('tables', {
                url: '/tables',
                templateUrl: '/app/dashboard/templates/tables.html'
            });
    }
]);