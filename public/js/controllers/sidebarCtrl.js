/**
 * Created by Ukemeabasi on 04/11/2016.
 */
BAAMP.controller('sidebarCtrl', function($scope, $http, $location, EndPoint) {

    var getUser = function(){
        $http.get(EndPoint+'/loggedInUser')
            .success(function(data) {
                if (data.status = 1) {
                    $scope.user = data.data;
                    switch (parseInt($scope.user.access)) {
                        case 1 : {
                            $scope.boi = $scope.user;
                            break;
                        }
                        case 2 : {
                            $scope.pmo = $scope.user;
                            break;
                        }
                        case 3 : {
                            $scope.amo = $scope.user;
                            break;
                        }
                        case 4 : {
                            $scope.lead_aggregator = $scope.user;
                            break;
                        }
                        case 5 : {
                            $scope.aggregator = $scope.user;
                            break;
                        }
                        case 6 : {
                            $scope.agent = $scope.user;
                            break;
                        }
                        default : {
                            
                            window.location.href = EndPoint+"/logout";

                            break;
                        }
                    }
                }
            })
            .error(function(data) {
                window.location.href = EndPoint+"/logout";
            });

    };
   getUser();

    $scope.isActive = function (viewLocation) {
        return viewLocation === $location.path();
    };

});