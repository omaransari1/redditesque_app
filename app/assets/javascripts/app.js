/* global angular */
angular.module('redditesque', []).controller('mainCtrl', ['$scope', function($scope) {
  $scope.test = "Hello world";
  $scope.posts = [
    'post1',
    'post2',
    'post3',
    'post4',
    'post5'
  ];
}]);