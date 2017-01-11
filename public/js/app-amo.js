var BAAMP = angular.module('BAAMP', ["ngRoute","angularMoment"]);



BAAMP.config(['$routeProvider',  function ($routeProvider) {

    $routeProvider.
    when('/', {
        templateUrl: '../views/amo/dashboard.html',
        controller: 'dashboardCtrl'
    }).
    when('/agent', {
        templateUrl: '../views/amo/agent.html',
        controller: 'agentCtrl'
    }).
    when('/aggregator', {
        templateUrl: '../views/amo/aggregator.html',
        controller: 'aggregatorCtrl'
    }).
    when('/association', {
        templateUrl: '../views/amo/association.html',
        controller: 'associationCtrl'
    }).
    when('/member', {
        templateUrl: '../views/amo/member.html',
        controller: 'memberCtrl'
    }).
    when('/settings', {
        templateUrl: '../views/amo/settings.html',
        controller: 'settingsCtrl'
    }).
    when('/transaction', {
        templateUrl: '../views/amo/transaction.html',
        controller: 'transactionCtrl'
    }).
    otherwise({
        redirectTo: '/'
    });
}]);

BAAMP.controller('HeaderCtrl', ['$scope', '$http', function ($scope,$http) {

}]);

BAAMP.controller('FooterCtrl', ['$scope', '$http', function ($scope,$http) {

}]);

BAAMP.value('EndPoint','http://localhost:80');
