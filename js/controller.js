var ProduccionApp = angular.module('ProduccionApp', ['ui.bootstrap']);

ProduccionApp.controller('ProduccionController', function ($scope) {
    $scope.datepickers = {
        dt: false,
        dtSecond: false
    }

    var fetxa = moment().format("YYYY/MM/DD");;
    $scope.dt = fetxa;
    $scope.eratufetxak = function (fetxa) {
        console.log("Barruan :" + fetxa);
        $scope.eguna1 = moment(fetxa,'YYYY/MM/DD').format("YYYY/MM/DD");
        console.log("Eguna11 :" + $scope.eguna1);
        $scope.eguna2 = moment(fetxa).add('days', 1).format("YYYY/MM/DD");
        $scope.eguna3 = moment(fetxa).add('days', 2).format("YYYY/MM/DD");
        $scope.eguna4 = moment(fetxa).add('days', 3).format("YYYY/MM/DD");
        $scope.eguna5 = moment(fetxa).add('days', 4).format("YYYY/MM/DD");
        $scope.eguna6 = moment(fetxa).add('days', 5).format("YYYY/MM/DD");
        $scope.eguna7 = moment(fetxa).add('days', 6).format("YYYY/MM/DD");
        $scope.dt = $scope.eguna1;
        $scope.dtSecond = $scope.eguna7;
    };
    $scope.eratufetxak(fetxa);

    $scope.aldatuastea = function (z) {
        console.log(z);
        if (z < 0) {
            z = z * -1;
            var mifec = moment($scope.dt).format('YYYY/MM/DD');
            if ( moment(mifec).isValid() == false ) {
                mifec = moment($scope.dt,'YYYY/MM/DD').format('YYYY/MM/DD');
            }
            var fetxaberria = moment(mifec).subtract('days', z).format("YYYY/MM/DD");
        } else {
            var mifec = moment($scope.dt).format('YYYY/MM/DD');
            if ( moment(mifec).isValid() == false ) {
                mifec = moment($scope.dt,'YYYY/MM/DD');
            }
            var fetxaberria = moment(mifec, 'YYYY/MM/DD').add('days',z).format("YYYY/MM/DD");
        }
        $scope.eratufetxak(fetxaberria);
    }

    $scope.today = function () {
        $scope.dt = new Date();
        $scope.dtSecond = new Date();
    };
    $scope.today();

    $scope.showWeeks = true;
    $scope.toggleWeeks = function () {
        $scope.showWeeks = !$scope.showWeeks;
    };

    $scope.clear = function () {
        $scope.dt = null;
    };

    // Disable weekend selection
    $scope.disabled = function (date, mode) {
        return ( mode === 'day' && ( date.getDay() === 0 || date.getDay() === 6 ) );
    };

    $scope.toggleMin = function () {
        $scope.minDate = ( $scope.minDate ) ? null : new Date();
    };
    $scope.toggleMin();

    $scope.open = function ($event, which) {
        $event.preventDefault();
        $event.stopPropagation();

        $scope.datepickers[which] = true;
    };

    $scope.dateOptions = {
        'year-format': "'yy'",
        'starting-day': 1
    };

    $scope.formats = ['dd-MMMM-yyyy', 'yyyy/MM/dd', 'shortDate'];
    $scope.format = $scope.formats[0];


});