var BAAMP = angular.module('BAAMP', ["ngRoute","angularMoment"]);



BAAMP.config(['$routeProvider',  function ($routeProvider) {

    $routeProvider.
    when('/', {
        templateUrl: '../views/lead_aggregator/dashboard.html',
        controller: 'dashboardCtrl'
    }).
    when('/agent', {
        templateUrl: '../views/lead_aggregator/agent.html',
        controller: 'agentCtrl'
    }).
    when('/lead_aggregator', {
        templateUrl: '../views/lead_aggregator/lead_aggregator.html',
        controller: 'lead_aggregatorCtrl'
    }).
    when('/association', {
        templateUrl: '../views/lead_aggregator/association.html',
        controller: 'associationCtrl'
    }).
    when('/member', {
        templateUrl: '../views/lead_aggregator/member.html',
        controller: 'memberCtrl'
    }).
    when('/settings', {
        templateUrl: '../views/lead_aggregator/settings.html',
        controller: 'settingsCtrl'
    }).
    when('/transaction', {
        templateUrl: '../views/lead_aggregator/transaction.html',
        controller: 'transactionCtrl'
    }).
    otherwise({
        redirectTo: '/'
    });
}]);


BAAMP.value('EndPoint','http://localhost:80');
