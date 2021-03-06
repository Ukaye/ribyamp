BAAMP.controller('dashboardCtrl', ['EndPoint', '$scope', '$http', 'moment', function(EndPoint, $scope, $http, moment) {

    $(document).ready(function() {

        var cb = function (start, end, label) {
            console.log(start.toISOString(), end.toISOString(), label);
            $('#reportrange span').html(start.format('MMMM D, YYYY') + ' - ' + end.format('MMMM D, YYYY'));
        };

        var optionSet1 = {
            startDate: moment().subtract(29, 'days'),
            endDate: moment(),
            minDate: '01/01/2012',
            maxDate: '12/31/2015',
            dateLimit: {
                days: 60
            },
            showDropdowns: true,
            showWeekNumbers: true,
            timePicker: false,
            timePickerIncrement: 1,
            timePicker12Hour: true,
            ranges: {
                'Today': [moment(), moment()],
                'Yesterday': [moment().subtract(1, 'days'), moment().subtract(1, 'days')],
                'Last 7 Days': [moment().subtract(6, 'days'), moment()],
                'Last 30 Days': [moment().subtract(29, 'days'), moment()],
                'This Month': [moment().startOf('month'), moment().endOf('month')],
                'Last Month': [moment().subtract(1, 'month').startOf('month'), moment().subtract(1, 'month').endOf('month')]
            },
            opens: 'left',
            buttonClasses: ['btn btn-default'],
            applyClass: 'btn-small btn-primary',
            cancelClass: 'btn-small',
            format: 'MM/DD/YYYY',
            separator: ' to ',
            locale: {
                applyLabel: 'Submit',
                cancelLabel: 'Clear',
                fromLabel: 'From',
                toLabel: 'To',
                customRangeLabel: 'Custom',
                daysOfWeek: ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'],
                monthNames: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
                firstDay: 1
            }
        };
        $('#reportrange span').html(moment().subtract(29, 'days').format('MMMM D, YYYY') + ' - ' + moment().format('MMMM D, YYYY'));
        $('#reportrange').daterangepicker(optionSet1, cb);
        $('#reportrange').on('show.daterangepicker', function () {
            console.log("show event fired");
        });
        $('#reportrange').on('hide.daterangepicker', function () {
            console.log("hide event fired");
        });
        $('#reportrange').on('apply.daterangepicker', function (ev, picker) {
            console.log("apply event fired, start/end dates are " + picker.startDate.format('MMMM D, YYYY') + " to " + picker.endDate.format('MMMM D, YYYY'));
        });
        $('#reportrange').on('cancel.daterangepicker', function (ev, picker) {
            console.log("cancel event fired");
        });
        $('#options1').click(function () {
            $('#reportrange').data('daterangepicker').setOptions(optionSet1, cb);
        });
        $('#options2').click(function () {
            $('#reportrange').data('daterangepicker').setOptions(optionSet2, cb);
        });
        $('#destroy').click(function () {
            $('#reportrange').data('daterangepicker').remove();
        });

    });

    $(document).ready(function() {
        var data1 = [
            [gd(2012, 1, 1), 17],
            [gd(2012, 1, 2), 74],
            [gd(2012, 1, 3), 6],
            [gd(2012, 1, 4), 39],
            [gd(2012, 1, 5), 20],
            [gd(2012, 1, 6), 85],
            [gd(2012, 1, 7), 7]
        ];

        var data2 = [
            [gd(2012, 1, 1), 82],
            [gd(2012, 1, 2), 23],
            [gd(2012, 1, 3), 66],
            [gd(2012, 1, 4), 9],
            [gd(2012, 1, 5), 119],
            [gd(2012, 1, 6), 6],
            [gd(2012, 1, 7), 9]
        ];
        $("#canvas_dahs").length && $.plot($("#canvas_dahs"), [
            data1, data2
        ], {
            series: {
                lines: {
                    show: false,
                    fill: true
                },
                splines: {
                    show: true,
                    tension: 0.4,
                    lineWidth: 1,
                    fill: 0.4
                },
                points: {
                    radius: 0,
                    show: true
                },
                shadowSize: 2
            },
            grid: {
                verticalLines: true,
                hoverable: true,
                clickable: true,
                tickColor: "#d5d5d5",
                borderWidth: 1,
                color: '#fff'
            },
            colors: ["rgba(38, 185, 154, 0.38)", "rgba(3, 88, 106, 0.38)"],
            xaxis: {
                tickColor: "rgba(51, 51, 51, 0.06)",
                mode: "time",
                tickSize: [1, "day"],
                //tickLength: 10,
                axisLabel: "Date",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 10
            },
            yaxis: {
                ticks: 8,
                tickColor: "rgba(51, 51, 51, 0.06)",
            },
            tooltip: false
        });

        function gd(year, month, day) {
            return new Date(year, month - 1, day).getTime();
        }
    });

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


BAAMP.controller('agentCtrl', ['EndPoint', '$scope', '$http', function(EndPoint, $scope, $http) {
    $scope.sort = function(keyname){
        $scope.sortKey = keyname;   //set the sortKey to the param passed
        $scope.reverse = !$scope.reverse; //if true make it false and vice versa
    }
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
        doc.save("List of Agents.pdf");
    }
}]);


BAAMP.controller('aggregatorCtrl', ['EndPoint', '$scope', '$http', function(EndPoint, $scope, $http) {
    $scope.sort = function(keyname){
        $scope.sortKey = keyname;   //set the sortKey to the param passed
        $scope.reverse = !$scope.reverse; //if true make it false and vice versa
    }
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
        doc.save("List of Aggregator.pdf");
    }
}]);


BAAMP.controller('associationCtrl', ['EndPoint', '$scope', '$http', function(EndPoint, $scope, $http) {
    $scope.sort = function(keyname){
        $scope.sortKey = keyname;   //set the sortKey to the param passed
        $scope.reverse = !$scope.reverse; //if true make it false and vice versa
    }
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
        doc.save("List of Associations.pdf");
    }
}]);


BAAMP.controller('memberCtrl', ['EndPoint', '$scope', '$http', function(EndPoint, $scope, $http) {
    $scope.sort = function(keyname){
        $scope.sortKey = keyname;   //set the sortKey to the param passed
        $scope.reverse = !$scope.reverse; //if true make it false and vice versa
    }
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
        doc.save("List of Members.pdf");
    }
}]);


BAAMP.controller('settingsCtrl', ['EndPoint', '$scope', '$http', function(EndPoint, $scope, $http) {

}]);


BAAMP.controller('transactionCtrl', ['EndPoint', '$scope', '$http', function(EndPoint, $scope, $http) {
    $scope.sort = function(keyname){
        $scope.sortKey = keyname;   //set the sortKey to the param passed
        $scope.reverse = !$scope.reverse; //if true make it false and vice versa
    }
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
        doc.save("List of Transactions.pdf");
    }
}]);