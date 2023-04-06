
const usuarios = [
   {
    username: "facu",
    password: "facu",
    nombre: "Facundo Miguez",
    documento: "no lo se",
    foto: "https://cdn.icon-icons.com/icons2/2506/PNG/512/user_icon_150670.png",
    socio: "0001",
    tsocio: "sc001f"
  },
  {
    username: "fede",
    password: "fede",
    nombre: "Federico Chocho",
    documento: "no lo se",
    foto: "https://cdn.icon-icons.com/icons2/2506/PNG/512/user_icon_150670.png",
    socio: "0002",
    tsocio: "sc002f"
  },
  {
    username: "nacho",
    password: "nacho",
    nombre: "Nacho Chocho",
    documento: "47661458",
    foto: "https://cdn.icon-icons.com/icons2/2506/PNG/512/user_icon_150670.png",
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
      window.location.replace("https://sacachispasclub.github.io/index.html");
    } else {
      document.getElementById("message").innerHTML = "Nombre de usuario o contraseña incorrectos";
    }
    

 
  }

