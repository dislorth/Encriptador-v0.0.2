document.getElementById("procesar-btn").addEventListener("click", function() {
  var textoInput = document.getElementById("texto-input").value;
  var textoResultado = "";
  var mensajeError = "";

  // Verificar si se utilizan mayúsculas, acentos o caracteres especiales
  var regex = /[A-ZáéíóúÁÉÍÓÚ!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/;
  if (regex.test(textoInput)) {
    mensajeError = "Se encontraron mayúsculas, acentos o caracteres especiales. Por favor, ingresa solo letras minúsculas sin acentos ni caracteres especiales.";
  } else {
    var accion = document.querySelector('input[name="accion"]:checked').value;
    if (accion === "encriptar") {
      textoResultado = encriptarTexto(textoInput);
    } else if (accion === "desencriptar") {
      textoResultado = desencriptarTexto(textoInput);
    }
  }

  document.getElementById("resultado-texto").value = textoResultado;
  document.getElementById("mensaje-error").textContent = mensajeError;
});

function encriptarTexto(texto) {
  var textoEncriptado = texto.replace(/e/g, "enter")
                          .replace(/i/g, "imes")
                          .replace(/a/g, "ai")
                          .replace(/o/g, "ober")
                          .replace(/u/g, "ufat");
  return textoEncriptado;
}

function desencriptarTexto(texto) {
  var textoDesencriptado = texto.replace(/enter/g, "e")
                          .replace(/imes/g, "i")
                          .replace(/ai/g, "a")
                          .replace(/ober/g, "o")
                          .replace(/ufat/g, "u");
  return textoDesencriptado;
}
