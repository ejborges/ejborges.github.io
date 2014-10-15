/**
 * Created by Emilio on 10/14/2014.
 */

var module = angular.module('home.controller', []);

module.controller(
    'homeCtrl',
    [
        '$scope',
        '$location',
        '$interval',
        function($scope, $location, $interval){

            var frames = ['┗ (･o･ ) ┓', '┏(･o･)┛', '┗ ( ･o･) ┓', '┏(･o･)┛' ], // 4 frames
                framesCount = frames.length,
                frameIndex = 0;

            $interval(function() {
                frameIndex = (frameIndex + 1) % framesCount;
                $scope.emoteFrame = frames[frameIndex];
            }, 250);

            $scope.$on('$destroy', function() {
                $interval.cancel();
            });

            $scope.gotoProjects = function() {
                $interval.cancel();
                $location.path('/projects').replace();
            };

        }
    ]
);