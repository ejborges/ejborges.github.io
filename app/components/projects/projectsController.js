/**
 * Created by Emilio on 10/14/2014.
 */

var module = angular.module('projects.controller', []);

module.controller(
    'projectsCtrl',
    [
        '$scope',
        '$location',
        function($scope, $location){

            $scope.gotoHome = function() {
                $location.path('/home').replace();
            };

        }
    ]
);