    angular.module('myApp.home2', ['ngRoute','firebase'])

        .controller('home2Ctrl', ['$scope', function ($scope, $routeProvider) {
            //      //Create References for accessing the root node of our DB
            //       var rootRef = firebase.database().ref();
            //    //Sync Object changes
            //    rootRef.on('value',snap => console.log(snap.val()));
            console.log("In Home Part 2 Controller");
            logOut.addEventListener('click', e => {
                firebase.auth().signOut();
            });

            //Realtime Listener
            firebase.auth().onAuthStateChanged(firebaseUser => {
                if (firebaseUser) {
                    console.log(firebaseUser);
                    //            btnLogOut.classList.remove('hide');
                } else {
                    console.log('Not Logged In');
                    //            btnLogOut.classList.add('hide');
                }
            });   
}]);
