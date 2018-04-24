var app = angular.module('ajaxApp', ['ngRoute']);

app.config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider){
    $routeProvider
    .when('/', {
        //när man kommer till första sidan använd home.html och controllerjs
        templateUrl: 'templates/home.html',
        controller: 'FirstController'
    })
    //route = URL för angular som också kallas single page application
    //root = / = första sidan 

    .when('/results', {
        templateUrl: 'templates/results.html',
        controller: 'ResultsController'
    });

}]);