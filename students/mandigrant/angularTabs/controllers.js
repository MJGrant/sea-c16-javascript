'use strict';

//Controllers
var app = angular.module('angularTabApp', []);

app.controller('TabsCtrl', function($scope, $http) {
    $scope.tabs = [];
    //get tabs from server
    $http.get('http://rs.hankyates.com:3000/content')
        .success(function(data) {
            $scope.tabs = data;
            $scope.activeTab = $scope.tabs[0];
        });

    //click a tab = show a tab
    $scope.showTab = function(tab) {
        $scope.activeTab = tab;
    };
});