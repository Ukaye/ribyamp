var BAAMP = angular.module('BAAMP', ["ngRoute" ]);



BAAMP.config(['$routeProvider',  function ($routeProvider) {

    $routeProvider.
    when('/', {
        templateUrl: 'views/Dashboard.html',
        controller: 'DashboardCtrl'
    }).
    otherwise({
        redirectTo: '/'
    });
}]);

BAAMP.controller('SidebarCtrl', ['$scope', '$http', function ($scope,$http) {

}]);

BAAMP.controller('HeaderCtrl', ['$scope', '$http', function ($scope,$http) {

}]);

BAAMP.controller('FooterCtrl', ['$scope', '$http', function ($scope,$http) {

}]);

BAAMP.value('EndPoint','http://localhost');
