
var users = [
  { username: "prueba", password: "prueba" },
  { username: "Nacho", password: "458" },
  { username: "igna", password: "3" }
];
// Verificar si el usuario ha iniciado sesión
if (!sessionStorage.getItem("loggedIn")) {
    // Si no ha iniciado sesión, redirigir a la página de inicio de sesión
    window.location.replace("login.html");
  }
function login() {
  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;

  // Iterar a través de la lista de usuarios
  for (var i = 0; i < users.length; i++) {
    if (username === users[i].username && password === users[i].password) {
      window.location.replace("index.html");
      sessionStorage.setItem("loggedIn", true);
    } else {
    }

  } 
}
