var app = angular.module('blogPortfolio', ['ngRoute']);

app.config(['$routeProvider',
function ($routeProvider) {
    $routeProvider.
    when('/home', {
        templateUrl: 'views/home.html',
        // controller: 'homeController'
    }).
    when('/about', {
        templateUrl: 'views/about.html',
        // controller: 'aboutController'
    }).
    when('/blog', {
        templateUrl: 'views/blog.html',
        // controller: 'blogController'
    }).
    when('/blog/:blogType', {
        templateUrl: 'views/blog.html',
        // controller: 'blogController'
    }).
    when('/events', {
        templateUrl: 'views/events.html',
        // controller: 'eventsController'
    }).
    when('/resume', {
        templateUrl: 'views/resume.html',
        // controller: 'resumeController'
    }).
    when('/portfolio', {
        templateUrl: 'views/portfolio.html',
        // controller: 'portfolioController'
    }).
    when('/portfolio/:portfolioType', {
        templateUrl: 'views/portfolio.html',
        // controller: 'portfolioController'
    }).
    when('/portfolio/:portfolioType/:subtype', {
        templateUrl: 'views/portfolio.html',
        // controller: 'portfolioController'
    }).
    when('/register', {
        templateUrl: 'views/register.html',
        // controller: 'registrationController'
    }).
    when('/login', {
        templateUrl: 'views/login.html',
        // controller: 'registrationController'
    }).
    when('/success', {
        templateUrl: 'views/success.html',
        // controller: 'successController'
    }).
    when('/contact', {
        templateUrl: 'views/contact.html',
        // controller: 'contactController'
    }).
    otherwise({
        redirectTo: '/home'
    });
}]);