var app = angular.module('ajaxApp');

app.controller('FirstController', ['$scope', '$http', function ($scope, $http) {
    //här är logiken som körs när man kommer till root page av din sida.
    $scope.name = 'Ikhlaq';
    $scope.names = ['Max', 'Ikhlaq', 'Calle'];

    //console.log function
    $scope.show = function () {
        console.log('hello');

    };
    $scope.showData = function () {
        var url = 'http://jsonplaceholder.typicode.com/posts';
        $http.get(url)
        .then(function (data) {
            $scope.data = data;
          
            
        })

    };
    $scope.showBilder = function () {
        var url = 'http://jsonplaceholder.typicode.com/photos';
        $http.get(url)
        .then(function (bilder) {
            //eftersom vad vi får tillbacka är i data array måste bi skriva så här.....
            $scope.bilder = bilder.data;
        })
    }

}]);

app.controller('ResultsController',['$scope', function ($scope) {
    $scope.results = [
        {name: 'Max', score: 4 },
        {name: 'calle', score: 8 },
        {name: 'Ikhlaq', score: 3 },
    ];
    

}]);