/**
 * Created by Emilio on 10/14/2014.
 */

var module = angular.module('home.controller', []);

module.controller(
    'homeCtrl',
    [
        '$scope',
        '$location',
        function($scope, $location){

            $scope.gotoProjects = function() {
                $location.path('/projects').replace();
            };

        }
    ]
);