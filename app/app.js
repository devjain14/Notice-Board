
// Declare app level module which depends on views, and components
angular.module('myApp', [
  'ngRoute',
  'firebase',  
  'myApp.admin',
  'myApp.home',
  'myApp.sender',
  'myApp.home2',
  'myApp.version'
]).
config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
    $routeProvider.otherwise({redirectTo: '/home'}); //TO DO::::add some files if possible otherwise show 404;
}]);
//.controller('rootCtrl',function($scope,$location){
//    console.log("in Root COntroller");
//    
//    this.redirect = function(path){
//        console.log("redirecting to" + path);
//        $location.path(path);
//    }
//});