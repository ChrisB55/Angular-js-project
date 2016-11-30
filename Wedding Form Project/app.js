var myApp = angular.module('myApp', []);

myApp.controller('mainController', ['$scope', '$filter', function($scope, $filter) {

    $scope.guest = '';

    $scope.lowercaseguest = function() {
        return $filter('lowercase')($scope.guest);
    };
    $scope.number = '';

    $scope.lowercasenumber = function() {
        return $filter('lowercase')($scope.number);
    };
}]);
