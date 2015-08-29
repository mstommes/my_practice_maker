myApp.controller('SomeController', ['$scope', '$http', function($scope, $http){
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

myApp.controller("BeginnerController", ['$scope', '$http', '$location', function($scope, $http, $location){

    console.log("BeginnerController");
    $scope.responses = {};

    $scope.submit = function() {
         $http.get('data/beginner.json').then(function(response){
            if(response.status !==200){
                throw new Error("Failed to pull data from the API");
            }
             $scope.responses = response;
            console.log(response);

        });
        $scope.changeRoute = function(){
            $location.path('beginner');
        };

    };
    $scope.submit();

}]);

myApp.controller("IntermediateController", ['$scope', '$http', '$location', function($scope, $http, $location){
    $scope.responses = {};
    console.log("IntermediateController");
    $scope.submit = function() {
        $http.get('data/intermediate.json').then(function(response){
            if(response.status !==200){
                throw new Error("Failed to pull data from the API");
            }
            $scope.responses = response;
            console.log(response);
        })
    };

    $scope.changeRoute = function(){
        $location.path('intermediate');
    };

    $scope.submit();

}]);


myApp.controller("AdvancedController", ['$scope', '$http', '$location', function($scope, $http, $location){
    console.log("AdvancedController");
    $scope.responses = {};
    $scope.submit = function() {
        $http.get('data/advanced.json').then(function(response){
            if(response.status !==200){
                throw new Error("Failed to pull data from the API");
            }
            $scope.responses = response;
            console.log(response);
        })
    };

    $scope.changeRoute = function(){
        $location.path('advanced');
    };

    $scope.submit();

}]);

myApp.controller("PracticeController", ['$scope', '$http', '$location', function($scope, $http, $location){

    $scope.changeRoute = function(level){
        $location.path(level);
    };

}]);




//This is the controller for a the timer on the practice page
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

