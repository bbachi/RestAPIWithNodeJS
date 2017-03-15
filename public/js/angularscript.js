// script.js

    // create the module and name it webAgentApp
        // also include ngRoute for all our routing needs
    var contactUsApp = angular.module('projectifyApp', ['ui.router','ngMessages', 'ngResource']);

    // configure our routes
    contactUsApp.config(function($stateProvider, $urlRouterProvider, $locationProvider,$resourceProvider) {
        //$locationProvider.hashPrefix('');
        // Don't strip trailing slashes from calculated URLs
        //$resourceProvider.defaults.stripTrailingSlashes = false;
        
        $urlRouterProvider.otherwise('/');
        
        $stateProvider
        
        .state('home', {
            url: '/',
            templateUrl: 'templates/contactus.html',
            controller  : 'contactusCntrl'
        })
        
        $locationProvider.html5Mode(true);
        
    });

   