var app = angular.module('ejborges.app', ['ngRoute']);

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
                '/',
                {
                    templateUrl: 'app/resume/resumeView.html',
                    controller: 'resumeCtrl'
                }
            ).otherwise({redirectTo: '/'});

            // use the HTML5 History API
            $locationProvider.html5Mode(true);
}]);