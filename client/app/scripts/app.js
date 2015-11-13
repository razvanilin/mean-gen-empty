'use strict';

/**
 * @ngdoc overview
 * @name clientApp
 * @description
 * # clientApp
 *
 * Main module of the application.
 */
angular
  .module('clientApp', [
    'ngResource',
    'ngRoute',
    'restangular'
  ])
  .config(function ($routeProvider, RestangularProvider) {

    RestangularProvider.setBaseUrl("http://localhost:3000");

    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .when('/test', {
        templateUrl: 'views/test.html',
        controller: 'TestCtrl',
        controllerAs: 'test'
      })
      .otherwise({
        redirectTo: '/'
      });
  })
  /*
   * Restangular factories
   */
  .factory('TestRestangular', function(Restangular) {
      return Restangular.withConfig(function(RestangularConfigurer) {
          RestangularConfigurer.setRestangularFields({
              id: '_id'
          });
      });
  })
  .factory('Test', function(TestRestangular) {
      return TestRestangular.service('test');
  });
