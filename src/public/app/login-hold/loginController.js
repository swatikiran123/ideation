'use strict';

angular.module('loginModule').controller('loginController', function($scope, $location, $window,page) {
    page.setPage("Login","login-layout");
    $scope.user = {};
    $scope.loginUser=function()
    {
        var username=$scope.user.name;
        var password=$scope.user.password;
        if(username=="admin" && password=="admin123")
        {
            page.setUser($scope.user);
            $location.path( "/home" );
        }
        else
        {
            $scope.message="Error";
            $scope.messagecolor="alert alert-danger";
        }
    }
});