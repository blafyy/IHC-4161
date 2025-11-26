// Mostrar/ocultar contraseña
function togglePassword() {
  const input = document.getElementById("password");
  const icon = document.querySelector(".toggle-password");

  if (input.type === "password") {
    input.type = "text";
    icon.classList.replace("fa-eye", "fa-eye-slash");
  } else {
    input.type = "password";
    icon.classList.replace("fa-eye-slash", "fa-eye");
  }
}

// Login funcionando
function validarLogin(event) {
  event.preventDefault();

  const claveCorrecta = "ok";
  const pass = document.getElementById("password").value;

  if (pass.toLowerCase() === claveCorrecta) {
    alert("✅ Bienvenido");

    //  Guardar sesión
    localStorage.setItem("usuario", "activo");

    window.location.href = "LP.html";
  } else {
    alert("❌ Contraseña incorrecta");
    document.getElementById("password").value = "";
  }
}

//  Mostrar registro
function mostrarRegistro() {
  document.getElementById("loginForm").style.display = "none";
  document.getElementById("registerForm").style.display = "block";
}

// Volver al login
function mostrarLogin() {
  document.getElementById("registerForm").style.display = "none";
  document.getElementById("loginForm").style.display = "block";
}

// Registrar usuario
function registrarUsuario(event) {
  event.preventDefault();

  const pass = document.getElementById("regPass").value;
  const confirm = document.getElementById("regConfirm").value;

  if (pass !== confirm) {
    alert("⚠️ Las contraseñas no coinciden");
    return;
  }

  alert("✅ Registro exitoso!");

  // Guardar sesión también al registrar
  localStorage.setItem("usuario", "activo");

  window.location.href = "LP.html";
}
