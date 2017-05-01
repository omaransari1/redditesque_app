/* global angular */
var app = angular.module('redditesque', []);

app.factory('posts', [function() {
  var o = {
    posts: []
  };
  return o;
}]);

app.controller('mainCtrl', ['$scope', function($scope) {
  $scope.test = "Hello world";
  $scope.posts = [
    {title:'post1', upvotes: 2},
    {title:'post2', upvotes: 8},
    {title:'post3', upvotes: 5},
    {title:'post4', upvotes: 12},
    {title:'post5', upvotes: 9}
  ];

  $scope.addPost = function() {
    if(!$scope.title || $scope.title === '') {
      return;
    }
    $scope.posts.push({title: $scope.title, link: $scope.link, upvotes: 0});
    $scope.title = '';
    $scope.link = '';
  };

  $scope.incrementUpvotes = function(post) {
    post.upvotes += 1;
  };
}]);