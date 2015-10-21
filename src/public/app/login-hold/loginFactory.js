'use strict'

angular.module('loginModule').factory("page", function($rootScope){
    var page={};
    var user={};
    page.setPage=function(title,bodyClass){
        $rootScope.pageTitle = title;
        $rootScope.bodylayout=bodyClass;
    };
    page.setUser=function(user){
        $rootScope.user=user;
    }
    return page;
});