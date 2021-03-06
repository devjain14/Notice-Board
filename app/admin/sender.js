angular.module('myApp.sender', ['ngRoute'])

    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/sender', {
            templateUrl: 'admin/sender.html',
            controller: 'senderCtrl'
        });
}])

    .controller('senderCtrl', ['$scope', function ($scope, $routeProvider) {
        console.log("In Sender Controller");
        btnLogOut.addEventListener('click', e => {
            firebase.auth().signOut();
        });

        //Get Elements
        const txtSubject = document.getElementById("txtSubject");
        const txtNavrachna = document.getElementById("txtNavrachna");
        const txtSpandan = document.getElementById("txtSpandan");

        //Pushing Data to Firebase 
        $scope.submitDetails = function () {
            //    var firebaseRef = firebase.database().ref().child("StudentTable");
            var firebaseRef = firebase.database().ref().child("StudentTable");
            firebaseRef.push().set({
                Subject: txtSubject.value,
                Navrachna: txtNavrachna.value,
                Spandan: txtSpandan.value,
                Date: new Date().toDateString()
            });
            alert("Details Submitted!");
        }
        //    firebaseRef.push().child("Subject").set(txtSubject.value);
        //    firebaseRef.push().child("Navrachna").set(txtNavrachna.value);    
        //    firebaseRef.push().child("Spandan").set(txtSpandan.value);
}]);
