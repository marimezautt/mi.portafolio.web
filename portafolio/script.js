function showSection(sectionId) {
  // Ocultar todas las secciones
  var sections = document.getElementsByTagName("section");
  for (var i = 0; i < sections.length; i++) {
    sections[i].style.display = "none";
  }
  
  // Mostrar la sección seleccionada
  var section = document.getElementById(sectionId);
  section.style.display = "block";
}

function imagenCV() {
  var imagenCV = document.getElementById('C:/xampp/htdocs/portafolio').src; // Obtener la URL de la imagen del CV
  var enlaceDescarga = document.createElement('a'); // Crear un elemento de enlace
  enlaceDescarga.href = imagenCV; // Establecer la URL de descarga
  enlaceDescarga.download = 'estudiante.jpg'; // Nombrar el archivo de descarga
  enlaceDescarga.click(); // Simular el clic en el enlace de descarga
}
