var firebaseConfig = {
      apiKey: "AIzaSyBL0zwrzF_e9So8p9QDAT6fD2MKG69_Qo4",
      authDomain: "kwitter-52950.firebaseapp.com",
      databaseURL: "https://kwitter-52950-default-rtdb.firebaseio.com",
      projectId: "kwitter-52950",
      storageBucket: "kwitter-52950.appspot.com",
      messagingSenderId: "789732847107",
      appId: "1:789732847107:web:cb1d4a5952d4a6c19e6836",
      measurementId: "G-SVSJZ8C1K7"
    };
    firebase.initializeApp(firebaseConfig);
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("Room Name - " + Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#" + Room_names +"</div></hr>";
      document.getElementById("output").innerHTML += row;
      //End code
      });});}
getData();
function addRoom()
{
      room_name = document.getElementById("room_name").value;

      firebase.database().ref("/").child(room_name).update({
            purpose : "adding room name"
      });

      localStorage.setItem("room_name", room_name);

      window.location = "kwitter_page.html";
}
function redirectToRoomName(name)
{
      console.log(name);
      localStorage.setItem("room_name", name);
        window.location = "kwitter_page.html";
}
function logout() 
{
localStorage.removeItem("user_name");
localStorage.removeItem("room_name");
    window.location = "index.html";
}
