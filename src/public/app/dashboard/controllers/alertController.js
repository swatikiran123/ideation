/**
 * Alerts Controller
 */

angular
    .module('ideation.dashboard')
    .controller('alertsController', ['$scope', alertsController]);

function alertsController($scope) {
    $scope.alerts = [{
        type: 'success',
        msg: 'Today is the last day to submit ideas for campaign "ix 32"'
    }, {
        type: 'danger',
        msg: 'Ideas "bigdata controller" is not submitted'
    }];

    $scope.addAlert = function() {
        $scope.alerts.push({
            msg: 'Another alert!'
        });
    };

    $scope.closeAlert = function(index) {
        $scope.alerts.splice(index, 1);
    };
}