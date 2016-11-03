var myApp = angular.module('myApp', []);

myApp.controller('MyController', function MyController($scope) {
  $scope.author = {
    'name' : 'John Doe',
    'title' : 'Person in charge',
    'company' : 'Big company'
  }
});

