function encriptaTexto() {
    const texto = document.getElementById("encripta").value;
    if (mayusOacentos(texto)) {
        alert("Por favor, ingrese solo letras minúsculas y sin acentos.");
        return;
    }

    const listo = encripta(texto);
    document.getElementById("result").textContent = listo;
}

function desencriptaTexto() {
    const texto = document.getElementById("encripta").value;
    if (mayusOacentos(texto)) {
        alert("Por favor, ingrese solo letras minúsculas y sin acentos.");
        return;
    }

    const listo = desencripta(texto);
    document.getElementById("result").textContent = listo;
}

function mayusOacentos(text) {
    return /[A-ZÁÉÍÓÚÜ-àáéíóúü[^\W_]]/.test(text);
}

function encripta(text) {
    return text.replace(/[aeiou]/g, (letra) => {
      const diccionario = {
        "e": "enter",
        "i": "imes",
        "a": "ai",
        "o": "ober",
        "u": "ufat",
      };
      return diccionario[letra];
    });
  }
  
  function desencripta(text) {
    return text.replace(/enter|imes|ai|ober|ufat/g, (letra) => {
      const diccionario = {
        "enter": "e",
        "imes": "i",
        "ai": "a",
        "ober": "o",
        "ufat": "u",
      };
      return letra === diccionario[letra] ? letra : diccionario[letra];
    });
  }

/*BORRAR IMAGEN DE INICIO*/
function borrarLibro() {
    document.getElementById("libro").style.display = "none";
}

/*COPIAR TEXTO ENCRIPTADO O DESENCRIPTADO*/
function copiarTexto() {
    const text = document.getElementById("result");
  
    if (text) { // Checa si existe
      navigator.clipboard.writeText(text.innerText)
        .then(() => {
          alert("¡Texto copiado!");
        })
        .catch((err) => {
          console.error("Error copiando el texto:", err); 
          alert("No se pudo copiar"); 
        });
    } else {
      console.error("Te has equivocado de ID");
      alert("No se encontró el texto");
    }
  }
