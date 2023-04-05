
const usuarios = [
   {
    username: "facu",
    password: "facu",
    nombre: "Facundo Miguez",
    documento: "no lo se",
    foto: "https://via.placeholder.com/150",
    socio: "0001",
    tsocio: "sc001f"
  },
  {
    username: "fede",
    password: "fede",
    nombre: "Federico Chocho",
    documento: "no lo se",
    foto: "https://via.placeholder.com/150",
    socio: "0002",
    tsocio: "sc002f"
  },
  {
    username: "nacho",
    password: "nacho",
    nombre: "Nacho Chocho",
    documento: "47661458",
    foto: "https://via.placeholder.com/150",
    socio: "0003",
    tsocio: "sc003n"
  }
];

function imprimirCredencial() {
  // Llamada a la función de impresión del navegador
  window.print();
} 
function capturarDatos() {
  // Obtén los valores de los elementos HTML usando sus IDs
  var nombre = document.getElementById('nombre').innerText;
  var documento = document.getElementById('documento').innerText;
  var imagen = document.getElementById('foto').src;
  var socio = document.getElementById('socio').innerText;
  var tsocio = document.getElementById('tsocio').innerText;

  // Haz algo con los datos, por ejemplo, mostrarlos en la consola
  console.log('Nombre:', nombre);
  console.log('Documento:', documento);
  console.log('Número de Socio:', socio);
  console.log('Token de Socio:', tsocio);
  console.log('Imagen:', foto);


  // Llama a la función para exportar la imagen con los datos capturados
  exportarImagen(nombre, documento, socio, tsocio, foto);
}
function exportarImagen(nombre, documento, socio, tsocio, foto) {
  // Crea un elemento canvas
  var canvas = document.createElement('canvas');
  canvas.width = 500; // Ancho de la imagen
  canvas.height = 300; // Alto de la imagen
  var ctx = canvas.getContext('2d');

  // Dibuja el contenido HTML en el canvas
  ctx.fillStyle = '#0a790a'; // Color de fondo
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  ctx.font = '30px Arial'; // Fuente del texto
  ctx.fillStyle = '#fff'; // Color del texto
  ctx.fillText('Socio Sacachispas Club', 95, 40); // Datos a mostrar en la imagen
  ctx.fillText('Nombre: ' + nombre, 95, 90);
  ctx.fillText('Documento: ' + documento, 95, 120);
  ctx.fillText('N° de Socio: ' + socio, 95, 150);
  ctx.fillText('Token de Socio: ' + tsocio, 95, 180);
  ctx.fillText('Credencial generada a traves de nuestra web', 95, 240);
  ctx.fillText('sacachispasclub.com.ar', 95, 260);
  var img = new Image();
  img.src = foto;
  ctx.drawImage(img, 10, 90, 100, 100); // Agrega la imagen

  // Crea un enlace de descarga para la imagen
  var link = document.createElement('a');
  link.href = canvas.toDataURL('image/png'); // Convierte el canvas a una imagen PNG
  link.download = 'CredencialSC.png';
  link.click(); // Simula un clic en el enlace para descargar la imagen
}
// Obtener el usuario actual
const usuarioActual = JSON.parse(sessionStorage.getItem("usuarioActual"));

// Mostrar los datos del usuario en la página
document.getElementById("nombre").innerHTML = usuarioActual.nombre;
document.getElementById("documento").innerHTML = usuarioActual.documento;
document.getElementById("foto").src = usuarioActual.foto;
document.getElementById("socio").innerHTML = usuarioActual.socio;
document.getElementById("tsocio").innerHTML = usuarioActual.tsocio;


// Verificar si el usuario ha iniciado sesión
if (!sessionStorage.getItem("loggedIn")) {
    // Si no ha iniciado sesión, redirigir a la página de inicio de sesión
    window.location.replace("login.html");
  }
function login() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
  
    const usuarioEncontrado = usuarios.find(u => u.username === username && u.password === password);
  if (usuarioEncontrado) {
    // Iniciar sesión exitosamente
    sessionStorage.setItem("loggedIn", true);
    sessionStorage.setItem("usuarioActual", JSON.stringify(usuarioEncontrado));
      window.location.replace("index.html");
    } else {
      document.getElementById("message").innerHTML = "Nombre de usuario o contraseña incorrectos";
    }
    
 
  }

