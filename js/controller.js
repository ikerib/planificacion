var ProduccionApp = angular.module('ProduccionApp', ['ui.bootstrap']);

ProduccionApp.controller('ProduccionController', function ($scope) {
    $scope.datepickers = {
        dt: false,
        dtSecond: false
    }
    $scope.astea = ['0']
  $scope.datuak = [
      {
        linea: '1',
        egunak:[{
          fetxa: '2014/05/23',
            turnoak: [
            { 
              turno: "1", 
              ordenes: [
                { of: 'OF000012'},
                { of: 'OF000013'}
              ]  
            },
            { 
              turno: "2", 
              ordenes: [
                { of:'OF00w0011'},
                { of:'112233'},
                { of:'889977'}
              ]
            },
            {
              turno: "3",
              ordenes: [
                { of:'889922'}
              ]
            }
            ]},
          {fetxa: '2014/05/24'},
          {fetxa: '2014/05/25',
            turnoak: [
            { 
              turno: "1", 
              ordenes: [
                { of: 'OF200012'},
                { of: 'OF200013'}
              ]  
            },
            { 
              turno: "2", 
              ordenes: [
                { of:'OF222211'},
                { of:'OF232233'},
                { of:'OF289977'}
              ]
            },
            {
              turno: "3",
              ordenes: [
                { of:'OF200000'},
                { of:'OF200000'},
                { of:'OF200000'},
                { of:'OF200000'},
                { of:'OF200000'}
              ]
            }
          ]},
          {fetxa: '2014/05/26'},
          {fetxa: '2014/05/27'},
          {fetxa: '2014/05/28'},
          {fetxa: '2014/05/29'}
        ]
      },
      {
        linea: '2',
        egunak:[
          { fetxa: '2014/05/23'},
          {
          fetxa: '2014/05/24',
            turnoak: [
            { 
              turno: "1", 
              ordenes: [
                { of: '2OF000012'},
                { of: '2OF000013'}
              ]  
            },
            { 
              turno: "2", 
              ordenes: [
                { of:'2OF00w0011'},
                { of:'2OF2233'},
                { of:'2OF889977'}
              ]
            },
            {
              turno: "3",
              ordenes: [
                { of:'2OF889922'}
              ]
            }
          ]},
          {fetxa: '2014/05/25'},
          {
          fetxa: '2014/05/26',
            turnoak: [
            { 
              turno: "1", 
              ordenes: [
                { of: '2OF200012'},
                { of: '2OF200013'}
              ]  
            },
            { 
              turno: "2", 
              ordenes: [
                { of:'2OF222211'},
                { of:'2OF232233'},
                { of:'2OF289977'}
              ]
            },
            {
              turno: "3",
              ordenes: [
                { of:'2OF200000'},
                { of:'2OF200000'},
                { of:'2OF200000'},
                { of:'2OF200000'},
                { of:'2OF200000'}
              ]
            }
          ]},
          {fetxa: '2014/05/27'},
          {fetxa: '2014/05/28'},
          {fetxa: '2014/05/29'}
        ]
      }
    ];

    
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

    $scope.checkStatus = function(fec, nireindex) {
      switch (nireindex) {
        case 0:
          if ( $scope.eguna1 == fec) {
            return true;
          } else {
            return false;
          }
        case 1:
          if ( $scope.eguna2 == fec) {
            return true;
          } else {
            return false;
          }
        case 2:
          if ( $scope.eguna3 == fec) {
            return true;
          } else {
            return false;
          }
        case 3:
          if ( $scope.eguna4 == fec) {
            return true;
          } else {
            return false;
          }
        case 4:
          if ( $scope.eguna5 == fec) {
            return true;
          } else {
            return false;
          }
        case 5:
          if ( $scope.eguna6 == fec) {
            return true;
          } else {
            return false;
          }
        case 6:
          if ( $scope.eguna7 == fec) {
            return true;
          } else {
            return false;
          }
      }
      var nirefec = "eguna"+nireindex;
      var esanfec = $scope.nirefec;
      console.log(esanfec);
    };
    
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