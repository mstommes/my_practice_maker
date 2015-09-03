var myApp = angular.module('myApp',['ngRoute', 'appControllers', 'ngAnimate', 'ui.bootstrap', 'ngMaterial']);


var appControllers = angular.module('appControllers',[]);
//routes for single page views or routing

myApp.config(['$routeProvider', function($routeProvider){
    $routeProvider.
        when('/home', {
            templateUrl:"/assets/views/routes/home.html"
        }).
        when('/practice',{
            templateUrl: "/assets/views/routes/practice.html",
            controller: "SomeController"

        }).
        when('/beginner',{
            templateUrl: "/assets/views/routes/practice.html",
            controller: "BeginnerController"

        }).
        when('/intermediate',{
            templateUrl: "/assets/views/routes/practice.html",
            controller: "IntermediateController"

        }).
        when('/advanced',{
            templateUrl: "/assets/views/routes/practice.html",
            controller: "AdvancedController"

        }).
        when('/activitylog', {
            templateUrl: "/assets/views/routes/activitylog.html",



        }).
        when('/setgoalsreminders', {
            templateUrl: "/assets/views/routes/setgoalsreminders.html",

        }).

        otherwise({
            redirectTo:"/home"
        })

}]);



