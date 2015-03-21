'use strict';

/**
 * @ngdoc function
 * @name punchTaskApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the punchTaskApp
 */
angular.module('punchTaskApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
