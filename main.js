// Verificar si el usuario ha iniciado sesión
if (!sessionStorage.getItem("loggedIn")) {
    // Si no ha iniciado sesión, redirigir a la página de inicio de sesión
    window.location.replace("login/index.html");
  }
  function copiar() {
    var elementos = document.getElementsByTagName("p");
    var contenido = "";
    for (var i = 0; i < elementos.length; i++) {
      contenido += elementos[i].textContent + "\n";
    }
    navigator.clipboard.writeText(contenido).then(function() {
      alert("El contenido ha sido copiado al portapapeles.");
    }, function() {
      alert("Error al copiar el contenido.");
    });
  }

  // Función para crear un token único basado en una cadena de entrada
// Obtenemos el elemento del DOM
var resultadoElement = document.getElementById("texto");

// Definimos el número de dígitos deseado
var numDigitos = 2;

// Generamos un número aleatorio con el número de dígitos deseado
var minimo = Math.pow(10, numDigitos - 1);
var maximo = Math.pow(10, numDigitos) - 1;
var numeroAleatorio = Math.floor(Math.random() * (maximo - minimo + 1) + minimo);
var numeroAleatorio2 = Math.floor(Math.random() * (maximo - minimo + 1) + minimo);
var numeroAleatorio3 = Math.floor(Math.random() * (maximo - minimo + 1) + minimo);


// Actualizamos el contenido del elemento con el número aleatorio
resultadoElement.innerHTML = "" + numeroAleatorio + "s" + numeroAleatorio2 + "c" + numeroAleatorio3; 

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