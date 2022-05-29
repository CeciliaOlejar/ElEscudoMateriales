const btnMobile = document.getElementById('btn-mobile');

function toggleMenu(event) {
  if (event.type === 'touchstart') event.preventDefault();
  const nav = document.getElementById('nav');
  nav.classList.toggle('active');
  const active = nav.classList.contains('active');
  event.currentTarget.setAttribute('aria-expanded', active);
  if (active) {
    event.currentTarget.setAttribute('aria-label', 'Fechar Menu');
  } else {
    event.currentTarget.setAttribute('aria-label', 'Abrir Menu');
  }
}

btnMobile.addEventListener('click', toggleMenu);
btnMobile.addEventListener('touchstart', toggleMenu);

const btnEnviar = document.getElementById('btnSend');

const validación = (e) => {
  e.preventDefault();
  const nombreDeUsuario = document.getElementById('names');
  const direcciónEmail = document.getElementById('email');
  const telefono = document.getElementById('phone');
  const mensaje =document.getElementById ('mensaje');

  if (usuario.value === " ") {
    alert("Por favor, escribe tu nombre de usuario.");
    usuario.focus();
    return false;
  }
  if (email.value === " ") {
    alert("Por favor, escribe tu correo electrónico");
    email.focus();
    return false;
  }
  if (phone.value === " ") {
    alert("Por favor, escribe tu numero de contacto");
    email.focus();
    return false;
  }
  if (mensaje.value === " ") {
    alert("Por favor, escribe un mensaje");
    email.focus();
    return false;
  }
  
  return true;
}

submitBtn.addEventListener('click', validate);

