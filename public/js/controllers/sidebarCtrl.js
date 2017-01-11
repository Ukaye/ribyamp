/**
 * Created by Ukemeabasi on 04/11/2016.
 */
BAAMP.controller('sidebarCtrl', function($scope, $http, $location, EndPoint) {

    var getUser = function(){
        $http.get(EndPoint+'/loggedInUser')
            .success(function(data) {
                if (data.status = 1) {
                    $scope.user = data.data;
                    switch ($scope.user.Role) {
                        case "SUPERADMIN" : {
                            $scope.superadmin = $scope.user;
                            $("#FinanceMemberList").show();
                            $("#FinanceGroupList").show();
                            break;
                        }
                        case "AGENT" : {
                            $scope.agent = $scope.user;
                            break;
                        }
                        case "Admin" : {
                            $scope.admin = $scope.user;
                            break;
                        }
                        case "MEMBER" : {
                            $scope.member = $scope.user;
                            break;
                        }
                        default : {
                            
                            window.location.href = EndPoint+"/logout";

                            break;
                        }
                    }
                    var user = $scope.user;
                    new PNotify({
                        title: "Welcome!",
                        type: "success",
                        text: "Hi, "+user.Name+" "+user.LastName+", You have logged in successfully.",
                        addclass: 'dark',
                        styling: 'bootstrap3',
                        animate_speed: 'fast'
                    });
                }
            })
            .error(function(data) {
                window.location.href = EndPoint+"/logout";
            });

    };
   // getUser();

    $scope.isActive = function (viewLocation) {
        return viewLocation === $location.path();
    };

});