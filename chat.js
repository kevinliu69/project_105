// Your web app's Firebase configuration
//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
    apiKey: "AIzaSyC0YnTmE2rSUN6mzUlNW4UoXgt4aW5b918",
    authDomain: "let-chat-project-d3ea4.firebaseapp.com",
    databaseURL: "https://let-chat-project-d3ea4-default-rtdb.firebaseio.com",
    projectId: "let-chat-project-d3ea4",
    storageBucket: "let-chat-project-d3ea4.appspot.com",
    messagingSenderId: "747733662409",
    appId: "1:747733662409:web:e4bea865ac8dba8800ab18"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

function addUser()
{
    user_name = document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({
        purpose : "adding user"
    });
    
    localStorage.setItem("user_name", user_name);

    window.location = "chat_room.html";
    
}



