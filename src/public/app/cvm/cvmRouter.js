'use strict';

/**
 * Route configuration for the RDash module.
 */
angular.module('cvm.main').config(['$stateProvider', '$urlRouterProvider',
    function($stateProvider, $urlRouterProvider) {

        // For unmatched routes
        $urlRouterProvider.otherwise('/');

        // Application routes
        $stateProvider
            .state('index', {
                url: '/',
                templateUrl: '/app/cvm/templates/cvmHome.html'
            })
            .state('visitList', {
                url: '/visit/list',
                templateUrl: '/app/cvm/templates/visitList.html',
                controller: 'visitControllerMain'
            })
            .state('visitForm', {
                url: '/visit/add',
                templateUrl: '/app/cvm/templates/visitAdd.html',
                controller: 'visitControllerMain'
            });
    }
]);