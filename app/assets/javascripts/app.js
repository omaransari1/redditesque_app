/* global angular */
angular.module('redditesque', []).controller('mainCtrl', ['$scope', function($scope) {
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
    $scope.posts.push({title: $scope.title, upvotes: 0});
    $scope.title = '';
  };

  $scope.incrementUpvotes = function(post) {
    post.upvotes += 1;
  };
}]);