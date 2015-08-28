myApp.controller('SomeController', ['$scope', '$http', function($scope, $http){
    $scope.thing ="Some controller";
    $scope.responses = {};
    console.log("Some Controller");

    $scope.submit = function() {
        $http.get('data/practice.json').then(function(response){
            if(response.status !==200){
                throw new Error("Failed to pull data from the API");
            }
            $scope.responses = response;
            console.log(response);
        })
    };

    $scope.submit();
}]);

myApp.controller('AnotherController', ['$scope', function($scope){
    $scope.thing = "Here is another thing";
    console.log("Another Controller");

}]);

myApp.controller("PracticeController", ['$scope', '$http', '$location', function($scope, $http, $location){

    $scope.submit = function(level) {
         $http.get('data/practice.json').then(function(response){
            if(response.status !==200){
                throw new Error("Failed to pull data from the API");
            }
            console.log(response);
        })
    };


    $scope.changeRoute = function(){
        $location.path('practice');
    };

}]);


myApp.controller("TimerController",['$scope', '$timeout', function($scope,$timeout){
    var mytimeout = $timeout($scope.onTimeout,1000);
        $scope.counter = 100;
    var stopped;
    $scope.countdown = function() {
        stopped = $timeout(function() {
            console.log($scope.counter);
            $scope.counter--;
            $scope.countdown();
        }, 1000);
    };


    $scope.stop = function(){
        $timeout.cancel(stopped);

    }
}]);

            //CREATE THE FUNCTION TO CALCULATE THE COUNTDOWN TIMER

//    }
//
//}]);
