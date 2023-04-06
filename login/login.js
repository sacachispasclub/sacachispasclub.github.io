
const usuarios = [
   {
    username: "facu",
    password: "facu",
    nombre: "Facundo Miguez",
    documento: "no lo se",
    foto: "https://media.discordapp.net/attachments/1072529065057198220/1093651567917412442/6b05c904-ec50-47d2-8a7b-8258a3c9375a.jpg",
    socio: "0001",
    tsocio: "sc001f"
  },
  {
    username: "fede",
    password: "fede",
    nombre: "Federico Chocho",
    documento: "no lo se",
    foto: "https://media.discordapp.net/attachments/1072529065057198220/1093644991789801593/3d47aba6-d384-4d79-9a7d-3d1bd216f9b6.jpg",
    socio: "0002",
    tsocio: "sc002f"
  },
  {
    username: "nacho",
    password: "nacho",
    nombre: "Nacho Chocho",
    documento: "47661458",
    foto: "https://media.discordapp.net/attachments/1072529065057198220/1093644991789801593/3d47aba6-d384-4d79-9a7d-3d1bd216f9b6.jpg",
    socio: "0003",
    tsocio: ('sc003n')
  }
];

function login() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
  
    const usuarioEncontrado = usuarios.find(u => u.username === username && u.password === password);
  if (usuarioEncontrado) {
    // Iniciar sesión exitosamente
    sessionStorage.setItem("loggedIn", true);
    sessionStorage.setItem("usuarioActual", JSON.stringify(usuarioEncontrado));
      //window.location.replace("https://sacachispasclub.github.io/index.html");
      window.location.replace("C:/Users/Romi/Desktop/sacachispasclub.github.io/index.html");
    } else {
      document.getElementById("message").innerHTML = "Nombre de usuario o contraseña incorrectos";
    }
    

 
  }

