/* ====================================================================
   script.js — JavaScript personalizado del portafolio
==================================================================== */

// Espera a que el DOM esté completamente cargado
document.addEventListener("DOMContentLoaded", function () {

    // ---------- 1) Año dinámico en el pie de página ----------
    const anio = document.getElementById("anio");
    if (anio) {
        anio.textContent = new Date().getFullYear();
    }

    // ---------- 2) Cerrar el menú móvil al hacer clic en un enlace ----------
    const menuLinks = document.querySelectorAll(".navbar-nav .nav-link");
    const menuCollapse = document.getElementById("menuPrincipal");

    menuLinks.forEach(function (link) {
        link.addEventListener("click", function () {
            // Si el menú está abierto (visible en móvil), lo cerramos
            if (menuCollapse.classList.contains("show")) {
                const bootstrap = window.bootstrap;
                if (bootstrap && bootstrap.Collapse) {
                    const collapseInstance = bootstrap.Collapse.getInstance(menuCollapse);
                    if (collapseInstance) {
                        collapseInstance.hide();
                    }
                }
            }
        });
    });

    // ---------- 3) Animación de las barras de progreso al hacer scroll ----------
    // Las barras empiezan en 0 y se animan hasta su valor real cuando
    // la sección de habilidades entra en pantalla.
    const barras = document.querySelectorAll(".progress-bar");

    // Guardamos el ancho final de cada barra en un atributo y lo ponemos en 0
    barras.forEach(function (barra) {
        const anchoFinal = barra.style.width;   // ej. "90%"
        barra.dataset.ancho = anchoFinal;
        barra.style.width = "0%";
    });

    // IntersectionObserver: detecta cuándo la sección es visible
    const seccionHabilidades = document.getElementById("habilidades");

    if (seccionHabilidades && "IntersectionObserver" in window) {
        const observer = new IntersectionObserver(function (entries) {
            entries.forEach(function (entry) {
                if (entry.isIntersecting) {
                    barras.forEach(function (barra) {
                        barra.style.width = barra.dataset.ancho;
                    });
                    // Dejamos de observar una vez animado
                    observer.unobserve(seccionHabilidades);
                }
            });
        }, { threshold: 0.3 });

        observer.observe(seccionHabilidades);
    } else if (barras.length) {
        // Fallback si el navegador no soporta IntersectionObserver
        barras.forEach(function (barra) {
            barra.style.width = barra.dataset.ancho;
        });
    }

    // ---------- 4) Botón "volver arriba" opcional ----------
    // (Se puede activar agregando el botón en el HTML)
    const btnArriba = document.getElementById("btn-arriba");
    if (btnArriba) {
        window.addEventListener("scroll", function () {
            if (window.scrollY > 300) {
                btnArriba.style.display = "block";
            } else {
                btnArriba.style.display = "none";
            }
        });

        btnArriba.addEventListener("click", function () {
            window.scrollTo({ top: 0, behavior: "smooth" });
        });
    }
});
