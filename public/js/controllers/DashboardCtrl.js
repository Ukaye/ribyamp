BAAMP.controller('DashboardCtrl', ['EndPoint', '$scope', '$http', function(EndPoint, $scope, $http) {

    $scope.sort = function(keyname){
        $scope.sortKey = keyname;   //set the sortKey to the param passed
        $scope.reverse = !$scope.reverse; //if true make it false and vice versa
    };
    $scope.pageSize = 10;

    $scope.generatefromtable = function() {
        var data = [], height = 0, doc;
        doc = new jsPDF('p', 'pt', 'a4', true);
        doc.setFont("times", "normal");
        doc.setFontSize(20);
        doc.text(20, 40, "List of Groups");
        doc.setFontSize(12);
        data = [];
        data = doc.tableToJson('editable');
        height = doc.drawTable(data, {
            xstart : 10,
            ystart : 10,
            tablestart : 60,
            marginleft : 10,
            xOffset : 10,
            yOffset : 15
        });
        doc.save("List of Groups.pdf");
    }
    
}]);
