/**
 * Created by Emilio on 10/12/2014.
 */

var app = angular.module('ejborges.app', ['ngRoute', 'home.controller', 'projects.controller']);

app.config(
    [
        '$routeProvider',
        '$httpProvider',
        '$locationProvider',
        function($routeProvider, $httpProvider, $locationProvider) {

            // The following changes are needed to enable CORS (Cross-Origin Resource Sharing) support for this client
            $httpProvider.defaults.useXDomain = true;
            delete $httpProvider.defaults.headers.common['X-Requested-With'];

            $routeProvider.when(
                '/home',
                {
                    templateUrl: 'app/components/home/homeView.html',
                    controller: 'homeCtrl'
                }
            ).when(
                '/projects',
                {
                    templateUrl: 'app/components/projects/projectsView.html',
                    controller: 'projectsCtrl'
                }
            ).otherwise({redirectTo: '/home'});

            // use the HTML5 History API
            $locationProvider.html5Mode(true);
}]);

app.run([
    '$rootScope',
    function($rootScope) {

}]);