var app = angular.module('app', ['ngRoute', 'ngAnimate']);

app.config(function($routeProvider, $locationProvider) {
    $routeProvider
    .when('/', {
        templateUrl: 'pages/home.html'
    }).when('/walk', {
        templateUrl: 'pages/walk.html'
    }).when('/school', {
        templateUrl: 'pages/school.html'
    }).when('/map', {
        templateUrl: 'pages/map.html'
    }).when('/newyork', {
        templateUrl: 'pages/newyork.html'
    }).when('/toronto', {
        templateUrl: 'pages/toronto.html'
    }).when('/sponsor', {
        templateUrl: 'pages/sponsor.html'
    }).when('/donate', {
        templateUrl: 'pages/donate.html'
    }).when('/parkinsons', {
        templateUrl: 'pages/parkinsons.html'
    }).when('/harry', {
        templateUrl: 'pages/harry.html'
    }).when('/sue', {
        templateUrl: 'pages/sue.html'
    }).when('/volunteer', {
        templateUrl: 'pages/volunteer.html'
    }).when('/contactus', {
        templateUrl: 'pages/contactus.html'
    }).otherwise({
        redirectTo: '/'
    });
    $locationProvider.html5Mode(true);
});