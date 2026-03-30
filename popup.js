// Mostrar enlaces desde el archivo enlaces.json
function mostrarEnlaces() {
  fetch("https://raw.githubusercontent.com/gvm2121/cambia-fondo/refs/heads/main/enlaces.json")
    .then((response) => response.json())
    .then((enlaces) => {
      const lista = document.getElementById("listaEnlaces");
      lista.innerHTML = "";
      enlaces.forEach((enlace) => {
        const li = document.createElement("li");
        const a = document.createElement("a");
        a.href = enlace;
        a.textContent = enlace;
        a.target = "_blank";
        li.appendChild(a);
        lista.appendChild(li);
      });

      // Evento para "Abrir todos"
      document.getElementById("abrirTodosBtn").addEventListener("click", () => {
        enlaces.forEach((url) => {
          chrome.tabs.create({ url });
        });
      });
    })
    .catch((err) => {
      console.error("Error al leer enlaces desde la URL externa:", err);
    });
}

// Ejecutar al cargar el popup
mostrarEnlaces();
