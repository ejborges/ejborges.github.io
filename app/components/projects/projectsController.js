/**
 * Created by Emilio on 10/14/2014.
 */

var module = angular.module('projects.controller', []);

module.controller(
    'projectsCtrl',
    [
        '$scope',
        '$location',
        '$interval',
        function($scope, $location, $interval){

            var frames = ["< ('o'<)", "( '-’ )", "(>‘o’)>", "v( ‘.’ )v", "< (' .' )>", "< ('.'<)", "( '.’ )", "(>‘.’)>", "v( ‘.’ )v", "< (' .' )>"], // 10 frames
                framesCount = frames.length,
                frameIndex = 0;

            $interval(function() {
                frameIndex = (frameIndex + 1) % framesCount;
                $scope.emoteFrame = frames[frameIndex];
            }, 250);

            $scope.$on('$destroy', function() {
                $interval.cancel();
            });

            $scope.gotoHome = function() {
                $interval.cancel();
                $location.path('/home').replace();
            };

        }
    ]
);