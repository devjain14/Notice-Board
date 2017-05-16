  
// Initialize Firebase
  var config = {
    apiKey: "AIzaSyB6w1bj_GUJJi7DN8uVACfgI4Ok77u8FyM",
    authDomain: "noticeboard-b7d46.firebaseapp.com",
    databaseURL: "https://noticeboard-b7d46.firebaseio.com",
    projectId: "noticeboard-b7d46",
    storageBucket: "noticeboard-b7d46.appspot.com",
    messagingSenderId: "236752881096"
  };
  firebase.initializeApp(config);    
   
angular.module('myApp.admin', ['ngRoute','firebase'])

.config(  ['$routeProvider', function($routeProvider) {
  $routeProvider.when('/admin', {
    templateUrl: 'admin/admin.html',
    controller: 'adminCtrl'
  });
//  .when('/homea',{
//     templateUrl: 'home1/homea.html',
//     contoller: 'homeaCtrl' 
//  });
}])

.controller('adminCtrl', ['$scope','$location',function($scope,$location) {
    console.log("In Admin Controller");
    //Get elements
    const txtEmail = document.getElementById('txtEmail');
    const txtPass = document.getElementById('txtPass');
    const btnLogIn = document.getElementById('btnLogIn');
    
    //Add Login Event
    btnLogIn.addEventListener('click', e => {
    //Get Email and Pass
    const email = txtEmail.value;
    const pass = txtPass.value;
    const auth = firebase.auth();
        
    //Log In
    const promise = auth.signInWithEmailAndPassword(email,pass);  //TO DO::: actual id's should be taken;
    promise.catch(e => console.log(e.message));
    
//    $scope.logIn = function(){
//    $location.url = ("/homea");
//        }
   });
//    //Add SignUp Event
//    btnSignUp.addEventListener('click', e => {
//    //Get Email and Pass
//    const email = adminDev@gmail.com;
//    const pass = adminDev;
//    const auth = firebase.auth();
//    //Log In
//    const promise = auth.createUserWithEmailAndPassword(email,pass);
//    promise.catch(e => console.log(e.message));     
//    });
//    Realtime Listener
    firebase.auth().onAuthStateChanged(firebaseUser => {
        if(firebaseUser){
            console.log(firebaseUser);
            $location.url("/sender");
        } else{
            console.log('Not Logged In');
        }
    }); 
   
}]);