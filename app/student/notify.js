    angular.module('myApp.notify', ['ngRoute','firebase'])

        .controller('notifyCtrl', ['$scope', function ($scope, $routeProvider) {
            console.log("In Notify Controller");
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
            //Retrieval of Data
            var rootRef = firebase.database().ref().child("StudentTable");
            var num = 1;
            rootRef.on("child_added", snap => {
                //Assigning values of Snap to variables
                var subject = snap.child("Subject").val();
                var navrachna = snap.child("Navrachna").val();
                var spandan = snap.child("Spandan").val();
                var date = snap.child("Date").val();
                //Display the data to Screen
                //                $("#sub").append(subject);
                if(subject==""){
                   
                }else{
                $("#sub").append("<tr><td>" +num+ "</td><td>" + subject + "</td><td>" + date + "</td></tr>");
                }
                if(navrachna==""){
                  
                }else{
                $("#navrachna").append("<tr><td>" +num+ "</td><td>" + navrachna + "</td><td>" + date + "</td></tr>");
                }
                if(spandan==""){
                   
                }else{
                $("#spandan").append("<tr><td>" +num+ "</td><td>" + spandan + "</td><td>" + date + "</td></tr>");
                }
                num++;
                
            });
}]);
