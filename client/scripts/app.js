var myApp = angular.module('myApp',['ngRoute', 'appControllers']);


var appControllers = angular.module('appControllers',[]);
//routes for single page views or routing

myApp.config(['$routeProvider', function($routeProvider){
    $routeProvider.
        when('/home', {
            templateUrl:"/assets/views/routes/home.html",
            controller: "SomeController"
        }).
        when('/practice',{
            templateUrl: "/assets/views/routes/practice.html",
            controller: "SomeController"

        }).
        when('/activitylog', {
            templateUrl: "/assets/views/routes/activitylog.html",
            controller: "SomeController"


        }).
        when('/setgoalsreminders', {
            templateUrl: "/assets/views/routes/setgoalsreminders.html",
            controller: "SomeController"
        }).

        otherwise({
            redirectTo:"/home"
        })

}]);



