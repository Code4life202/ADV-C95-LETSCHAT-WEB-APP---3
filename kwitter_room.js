var firebaseConfig = {
    apiKey: "AIzaSyCL7po1jlCW5tegLTxrPLaxaq4fEOK14a4",
    authDomain: "letschatapp-fe0a5.firebaseapp.com",
    databaseURL: "https://letschatapp-fe0a5-default-rtdb.firebaseio.com",
    projectId: "letschatapp-fe0a5",
    storageBucket: "letschatapp-fe0a5.appspot.com",
    messagingSenderId: "604936130406",
    appId: "1:604936130406:web:c1205fe277d84984acc2a7",
    measurementId: "G-1JTS0HMG73"
  };
  firebase.initializeApp(firebaseConfig);

function addRoom()
{
    room_name = document.getElementById("room_name").value;
     
    firebase.database().ref("/").child(room_name).update({
          purpose : " debug disha- Add room name"
    });

    localStorage.setItem("room_name", room_name);
    

    window.location = "kwitter_room.html";
}

//ADD YOUR FIREBASE LINKS HERE

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
     Room_names = childKey;
    //Start code
console.log(" Room Name - " + Room_names);
row = "<div class=' room_name' id =" + Room_names+" onclick='redriectToRoomName(this.id)'>#" + Room_names + "</div><hr>";
document.getElementById("output").innerHTML+= row;
    //End code
    });});}
getData();
function redirectToRoomName(name)
{
    console.log(name);
    localStorage.setItem("room_name", name);
    window.location ="kwitter_room.html";
}
function logout()
{
    console.log("User Name 3 - " + user_name);
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name");
    window.location = "index.html";
}

//console.log("User Name 1 - " + user_name);
user_name = localStorage.getItem("user_name");
console.log("User Name 2 - " + user_name);
document.getElementById("user_name").innerHTML = "Welcome "+ user_name +"!";