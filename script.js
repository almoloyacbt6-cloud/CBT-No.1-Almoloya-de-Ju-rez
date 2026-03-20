/* =========================================
   1. CONTROL DEL LOADER (UNIFICADO Y CORREGIDO)
   ========================================= */
const controlarLoader = () => {
    // Buscamos el loader por cualquiera de los IDs que has usado
    const loaderContainer = document.getElementById('preloader') || 
                            document.getElementById('contenedor-loader') || 
                            document.querySelector('.loader-wrapper');

    if (loaderContainer) {
        // Forzamos 2 segundos (2000ms) para que el director siempre vea el logo
        setTimeout(() => {
            loaderContainer.classList.add('hidden');
            
            // Lo quitamos del flujo de la página después de que la opacidad llegue a 0
            setTimeout(() => {
                loaderContainer.style.display = 'none';
            }, 500);
        }, 2000); 
    }
};

// Se ejecuta cuando todo carga (imágenes y estilos)
window.addEventListener('load', controlarLoader);

// Respaldo de seguridad: si algo falla, se quita sí o sí a los 8 segundos
setTimeout(controlarLoader, 8000);


/* =========================================
   2. MENÚ MOBILE
   ========================================= */
const menuBtn = document.getElementById('mobile-menu');
const navLinks = document.getElementById('navLinks');

if (menuBtn && navLinks) {
    menuBtn.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        menuBtn.classList.toggle('is-active');
    });
}


/* =========================================
   3. ANIMACIONES DE SCROLL (PARA TODOS LOS APARTADOS)
   ========================================= */
const observerOptions = { threshold: 0.1 };

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Aplicamos el efecto a las tarjetas de todas las páginas
document.querySelectorAll('.feature-box, .step-item, .info-card, .form-card').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'all 0.6s ease-out';
    observer.observe(el);
});























/**
 * Lógica para manejar el perfil de usuario de Google
 * CBT No. 1 Almoloya de Juárez
 */

document.addEventListener("DOMContentLoaded", () => {
    // 1. Intentar obtener datos de la memoria (localStorage)
    const nombre = localStorage.getItem('user_name');
    const foto = localStorage.getItem('user_photo');

    // 2. Si el usuario ya inició sesión, mostramos su foto
    if (nombre && foto) {
        const loginItem = document.getElementById('login-item');
        const profileDiv = document.getElementById('user-profile');
        const nameSpan = document.getElementById('display-name');
        const photoImg = document.getElementById('display-photo');

        if (loginItem) loginItem.style.display = 'none';
        if (profileDiv) {
            profileDiv.style.display = 'flex';
            nameSpan.innerText = nombre;
            photoImg.src = foto;
        }
    }
});

// 3. Función para Cerrar Sesión con SweetAlert2
function cerrarSesion() {
    Swal.fire({
        title: '¿Cerrar sesión?',
        text: "Se borrarán tus datos de acceso de este equipo.",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#064e3b',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Sí, salir',
        cancelButtonText: 'Cancelar'
    }).then((result) => {
        if (result.isConfirmed) {
            localStorage.clear(); // Limpia nombre y foto
            window.location.reload(); // Recarga para mostrar el botón de login
        }
    });
}