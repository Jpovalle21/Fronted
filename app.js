const mensajes = [
    "¡Hola! Gracias por visitar mi página 😊",
    "¡Bienvenido! Aquí conocerás un poco sobre mí ⚽️💻",
    "¡Hey! Espero que disfrutes esta web ✨",
    "¡Qué bueno verte por aquí! 🚀"
  ];
  
  // Elegir un mensaje al azar
  const saludo = mensajes[Math.floor(Math.random() * mensajes.length)];
  
  // Mostrar el mensaje como alerta
  window.onload = function () {
    alert(saludo);
  };
  