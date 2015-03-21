'use strict';

/**
 * @ngdoc function
 * @name punchTaskApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the punchTaskApp
 */
angular.module('punchTaskApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
