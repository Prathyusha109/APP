
    // Create module
    var myApp = angular.module('myApp', []);

    // Controller which counts changes to its "name" member
    myApp.controller('TestController', ['$scope', function ($scope) {
        $scope.greet = 'Hello World';
    }]);
