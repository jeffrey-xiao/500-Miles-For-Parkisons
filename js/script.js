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
    }).when('/temporarydonationspage', {
        templateUrl: 'pages/temporarydonationspage.html'
    }).when('/ross', {
        templateUrl: 'pages/ross.html'
    }).otherwise({
        redirectTo: '/'
    });
    $locationProvider.html5Mode(true);
});

var adjustContainers = function() {
    if($(window).width() >= 750) {
        $(".hamburger-button").removeClass("open");
        $("nav").removeClass("open-nav");
        $("nav ul li ul").removeClass("expanded");
    } 
}

$(window).resize(adjustContainers).load(function () {
    $(window).trigger('resize');
});

$(document).ready(function() {
    
    $(".hamburger-button").click(function() {
        $(this).toggleClass("open");
        $("nav").toggleClass("open-nav");
    });
    $('nav ul li a').click(function () {
        if ($("nav").hasClass('open-nav')) {
            $(this).siblings().toggleClass("expanded"); 
        }
    });
    $('nav ul li a').click(function () {
        if (!$(this).hasClass('dropdown')) {
            $(".hamburger-button").removeClass("open");
            $("nav").removeClass("open-nav");
            $('nav ul li ul').removeClass('expanded');
        }
    });
});