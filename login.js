var users = [
  { username: "fede", password: "fede" },
  { username: "facu", password: "facu" },
  { username: "nacho", password: "nacho" }
];
// Verificar si el usuario ha iniciado sesión
if (!sessionStorage.getItem("loggedIn")) {
    // Si no ha iniciado sesión, redirigir a la página de inicio de sesión
    window.location.replace("login.html");
  }
function login() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
  
    for (var i = 0; i < users.length; i++) {
      if (username === users[i].username && password === users[i].password) {
// Si el nombre de usuario y la contraseña coinciden, iniciar sesión
      window.location.replace("index.html");
      sessionStorage.setItem("loggedIn", true);
    } else {
      document.getElementById("message").innerHTML = "Nombre de usuario o contraseña incorrectos";
    }

  }
}
