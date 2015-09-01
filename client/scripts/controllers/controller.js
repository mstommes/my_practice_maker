myApp.controller('SomeController', ['$scope', '$http', function($scope, $http){
    $scope.responses = [];
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

myApp.controller("BeginnerController", ['$scope', '$http', '$location', function($scope, $http){

    console.log("BeginnerController");
    $scope.responses = [];
    $scope.submit = function() {
         $http.get('data/beginner.json').then(function(response) {
             if (response.status !== 200) {
                 throw new Error("Failed to pull data from the API");
             }

                console.log(response);

             for(var i=0; i<response.data.length; i++){
                 var lesson = {
                     title : response.data[i].title,
                     description : response.data[i].description,
                     imgurl : response.data[i].imgurl
                 };

                 $scope.responses.push(lesson);

                 console.log(response.data[i].title + "this is the for loop response");
                 console.log(response.data[i].description + "this is the for loop response");
                 console.log(response.data[i].imgurl + "this is the for loop response");
                 }
         });
    };

    $scope.submit();


//*************************************PUT THIS IN A FACTORY--CAROUSEL FUNCTIONALITY*****************************************

    $scope.currentLesson = 0;


    $scope.setCurrentLesson = function(index){
            $scope.currentLesson = index;
        }
    $scope.isCurrentLesson= function(index){
        return $scope.currentLesson === index;
    }


    $scope.previousLesson = function () {
        $scope.currentLesson = ($scope.currentLesson < $scope.responses.length - 1) ? ++$scope.currentLesson : 0;
    };

    $scope.nextLesson = function () {
        $scope.currentLesson = ($scope.currentLesson > 0) ? --$scope.currentLesson : $scope.responses.length - 1;
    };


}]);


//**************************************END OF CAROUSEL FUNCTIONALITY*****************************************************

myApp.controller("IntermediateController", ['$scope', '$http', '$location', function($scope, $http){
    $scope.responses = [];
    console.log("IntermediateController");
    $scope.submit = function() {
        $http.get('data/intermediate.json').then(function(response){
            if(response.status !==200){
                throw new Error("Failed to pull data from the API");
            }
            $scope.responses = response.data;
            console.log($scope.responses + "this is the first response");
            console.log($scope.responses + "this is the second response");
        });
    };

    $scope.submit();

}]);


myApp.controller("AdvancedController", ['$scope', '$http', '$location', function($scope, $http){
    console.log("AdvancedController");
    $scope.responses = [];
    $scope.submit = function() {
        $http.get('data/advanced.json').then(function(response){
            if(response.status !==200){
                throw new Error("Failed to pull data from the API");
            }
            $scope.responses = response;
            console.log(response);
        })
    };

    $scope.submit();

}]);

//the Practice Controller changes the route of the view; once on the view page the view and controllers are called

myApp.controller("PracticeController", ['$scope', '$http', '$location', function($scope, $http, $location){

    $scope.changeRoute = function(level){
        $location.path(level);
    };

}]);


//This is the controller for a the timer on the practice page
myApp.controller("TimerController",['$scope', '$timeout', '$interval', function($scope, $timeout, $interval) {
    $scope.formattedTime=0;



    $scope.counter = 600;
    $scope.startCountdown = function() {
        stopped = $timeout(function() {
    $scope.counter--;
    $scope.formattedTime = convertTime($scope.counter);
    $scope.addMinute = addOneMinute(60);
    $scope.addFiveMin = addFiveMinutes(420);
    $scope.startCountdown();
        }, 1000);

    };

        $scope.stop = function(){
d        }
}]);



function convertTime(seconds){
    var sec =seconds;
    var minute = Math.floor(seconds/60);
    sec -=(minute * 60);
    return minute + " minutes: " + sec + " seconds";

}
//
//function addOneMinute(seconds){
//    var oneMin = Math.floor(seconds/60);
//    return oneMin + formattedTime;
//}
//function addFiveMinutes(seconds){
//    var fiveMin = Math.floor(seconds/60);
//    return fiveMin + formattedTime;
//}