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
                    setTimeout(function () {
                        toastr.options = {
                            closeButton: true,
                            debug: false,
                            positionClass: "toast-top-right",
                            onclick: null,
                            showDuration: 1000,
                            hideDuration: 1000,
                            timeOut: 5000,
                            extendedTimeOut: 1000,
                            showEasing: "swing",
                            hideEasing: "linear",
                            showMethod: "fadeIn",
                            hideMethod: "fadeOut"
                        };
                        toastr.success("Logged in Successfully!","Welcome "+$scope.user.firstname+" "+$scope.user.lastname);
                    }, 0);
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