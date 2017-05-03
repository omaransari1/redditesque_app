/* global angular */
var app = angular.module('redditesque', ['ui.router','templates']);

app.config([
  '$stateProvider',
  '$urlRouterProvider',
  function($stateProvider, $urlRouterProvider) {

    $stateProvider.state('home', {
      url: '/home',
      templateUrl: 'home/_home.html',
      controller: 'mainCtrl'
    })
      .state('posts', {
        url: '/posts/{id}',
        templateUrl: 'posts/_posts.html',
        controller: 'postsCtrl'
      });

    $urlRouterProvider.otherwise('home');
  }]);


