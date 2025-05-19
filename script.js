// Botón de cambio de tema
const themeToggle = document.getElementById('theme-toggle');

if (themeToggle) {
  themeToggle.addEventListener('click', function () {
    document.body.classList.toggle('dark-mode');
  });
}

// Manejo del envío del formulario
document.querySelector("#contact form").addEventListener("submit", async function (e) {
  e.preventDefault();

  const name = document.querySelector("#name").value.trim();
  const email = document.querySelector("#email").value.trim();
  const message = document.querySelector("#message").value.trim();
  const button = document.querySelector("#contact form button");

  // Validación rápida (opcional)
  if (!name || !email || !message) {
    alert("Por favor, completa todos los campos.");
    return;
  }

  // Desactivar el botón y cambiar el texto
  button.disabled = true;
  button.textContent = "Enviando...";

  try {
    const response = await fetch("https://contacto-api.onrender.com", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        nombre: name,
        email: email,
        mensaje: message
      })
    });

    if (response.ok) {
      alert("✅ Mensaje enviado correctamente. ¡Gracias por contactarme!");
      document.querySelector("#contact form").reset();
    } else {
      alert("❌ Error al enviar el mensaje. Inténtalo más tarde.");
    }
  } catch (error) {
    console.error("Error:", error);
    alert("❌ Error al enviar el mensaje. Inténtalo más tarde.");
  }

  // Restaurar el botón
  button.disabled = false;
  button.textContent = "Enviar";
});
