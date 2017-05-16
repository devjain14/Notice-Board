    angular.module('myApp.home2', ['ngRoute'])

        .config(['$routeProvider', function ($routeProvider) {
            $routeProvider.when('/home2', {
                templateUrl: 'student/home2.html',
                controller: 'home2Ctrl'
            });
}])

        .controller('home2Ctrl', ['$scope', function ($scope, $routeProvider) {
            //      //Create References for accessing the root node of our DB
            //       var rootRef = firebase.database().ref();
            //    //Sync Object changes
            //    rootRef.on('value',snap => console.log(snap.val()));
            console.log("In Home Part 2 Controller");
            btnLogOut.addEventListener('click', e => {
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
            //    
            //    //Get Elements
            //    const txtSubject = document.getElementById("txtSubject");
            //    const txtDetails = document.getElementById("txtDetails");
            //    
            //Retrieval of Data
            var rootRef = firebase.database().ref();
            rootRef.on("child_added", snap => {
                //Assigning values of Snap to variables
                var subject = snap.child("Subject").val();
                var navrachna = snap.child("Navrachna").val();
                var spandan = snap.child("Spandan").val();
                //Display the data to Screen
                //                $("#sub").append(subject);
                $("#sub").html(subject);
                $("#navrachna").html(navrachna);
                $("#spandan").html(spandan);
            });
}]);
