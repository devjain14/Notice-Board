//  
//// Initialize Firebase
//  var config = {
//    apiKey: "AIzaSyB6w1bj_GUJJi7DN8uVACfgI4Ok77u8FyM",
//    authDomain: "noticeboard-b7d46.firebaseapp.com",
//    databaseURL: "https://noticeboard-b7d46.firebaseio.com",
//    projectId: "noticeboard-b7d46",
//    storageBucket: "noticeboard-b7d46.appspot.com",
//    messagingSenderId: "236752881096"
//  };
//  firebase.initializeApp(config);    

angular.module('myApp.home', ['ngRoute', 'firebase'])

    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/home', {
            templateUrl: 'student/home.html',
            controller: 'homeCtrl'
        });
}])

    .controller('homeCtrl', ['$scope', '$location', function ($scope, $location) {

        console.log("In Home Controller");
        //Get elements
        const txtName = document.getElementById('txtName');
        const txtYear = document.getElementById('txtYear');
        const txtEmail = document.getElementById('txtEmail');
        const txtPass = document.getElementById('txtPass');
        const btnLogIn = document.getElementById('btnLogIn');

        //Pushing Data to Firebase 
        $scope.signUp = function () {
            var firebaseRef = firebase.database().ref();
            //      firebaseRef.push().set({
            //          Name: txtName.value,
            //          YearOfStudy: txtYear.value,
            //          Email: txtEmail.value,
            //      });    
        }

        //Add Login Event
        btnLogIn.addEventListener('click', e => {
            //Get Email and Pass
            //    const name = txtName.value;
            //    const year = txtYear.value;
            const email = txtEmail.value;
            const pass = txtPass.value;
            const auth = firebase.auth();
            //Log In
            const promise = auth.signInWithEmailAndPassword(email, pass); //TO DO::: actual id's should be taken;
            promise.catch(e => console.log(e.message));
        });

        //Add SignUp Event
        btnSignUp.addEventListener('click', e => {
            //Get Email and Pass
            //    const name = txtName.value;
            //    const year = txtYear.value;
            const email = txtEmail.value;
            const pass = txtPass.value;
            const auth = firebase.auth();
            //Log In
            const promise = auth.createUserWithEmailAndPassword(email, pass);
            promise.catch(e => console.log(e.message));
        });
        btnLogOut.addEventListener('click', e => {
            firebase.auth().signOut();
        });
        //Realtime Listener
        firebase.auth().onAuthStateChanged(firebaseUser => {
            if (firebaseUser) {
                console.log(firebaseUser);
                alert("You are logged in now!");
                $location.url("/home2");
                //            btnLogOut.classList.remove('hide');
            } else {
                console.log('Not Logged In');
                //            btnLogOut.classList.add('hide');
            }
        });
}]);
