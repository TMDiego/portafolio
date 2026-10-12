# Portafolio Profesional

Trabajo práctico: **Portafolio Profesional y Despliegue en la Nube**.

Página web responsiva construida con la filosofía **Mobile First**, **Bootstrap 5**,
utilidades de **Flexbox**, **HTML**, **CSS** y **JavaScript**.

**Autor:** Diego M. Jiménez · Desarrollador de Software Junior
**Contacto:** dmjch03@gmail.com · [LinkedIn](https://www.linkedin.com/in/diego-jimenez-906514364) · [GitHub](https://github.com/TMDiego)

## Estructura del proyecto

```
portafolio/
├── index.html              # Página principal (todas las secciones)
├── css/
│   └── styles.css          # Estilos personalizados (Mobile First)
├── js/
│   └── script.js           # Interactividad (año, menú, animación de barras)
├── assets/
│   ├── img/
│   │   └── foto-perfil.jpg # Foto profesional (600x600 px, cuadrada)
│   └── cv/
│       └── CV.pdf          # Currículum en PDF
└── README.md
```

## Secciones implementadas

1. **Hero Section (Presentación)** — bloque centrado con `d-flex` y `align-items-center`,
   foto circular (`rounded-circle`), nombre, perfil y botones de llamado a la acción.
2. **Portafolio de Proyectos** — grillas (`row`) y tarjetas (`card`) de Bootstrap.
   En celular: 1 tarjeta por fila (`col-12`); en escritorio: 3 por fila (`col-md-4`).
3. **Habilidades Técnicas** — barras de progreso (`progress`) para HTML, CSS,
   JavaScript, PHP, MySQL y Bootstrap.
4. **Descarga de CV** — botón destacado que abre/descarga el PDF (`assets/cv/CV.pdf`).
5. **Contacto y Redes** — pie de página con enlaces a LinkedIn, GitHub y correo.

## Tareas pendientes

- [ ] **Pegar las URLs de los 3 repositorios** en `index.html`. Están marcados con
      `<!-- ⚠️ REEMPLAZAR: ... -->` sobre cada botón "Ver código" (líneas ~104, ~130, ~156).
      Cada `href="#"` es un enlace roto hasta que se rellene.
- [ ] **Subir a GitHub y activar GitHub Pages** (ver la sección de despliegue).

## Personalización

- **Proyectos:** edita títulos, descripciones, tecnologías y enlaces en la
  sección `#proyectos` de `index.html`.
- **Habilidades:** ajusta los porcentajes (`style="width: X%"`) en `#habilidades`.
- **Imágenes de proyectos:** los placeholders con icono están en
  `assets/img/`. Si agregas capturas, reemplaza los `<div class="proyecto-portada">`
  por `<img src="assets/img/proyecto-X.jpg" class="card-img-top proyecto-portada">`.

## Cómo probar localmente

Solo abre `index.html` con doble clic en tu navegador. No necesita servidor.

## Despliegue en GitHub Pages

1. Crea un repositorio **público** en GitHub (ej. `portafolio`).
2. Sube todos los archivos (la carpeta `portafolio` completa):
   ```bash
   git init
   git add .
   git commit -m "Portafolio profesional: HTML, CSS, JS y Bootstrap 5"
   git branch -M main
   git remote add origin https://github.com/TMDiego/portafolio.git
   git push -u origin main
   ```
3. En GitHub, ve a **Settings → Pages**.
4. En *Source* selecciona la rama `main` y la carpeta `/ (root)`, y guarda.
5. Espera unos segundos y tu página estará disponible en:
   ```
   https://tmdiego.github.io/portafolio/
   ```

> **Importante:** usa **rutas relativas** (como `assets/img/foto-perfil.jpg`,
> sin `/` al inicio) para que las imágenes y el PDF carguen correctamente en
> GitHub Pages. Este proyecto ya usa rutas relativas.

## Tecnologías utilizadas

- HTML5
- CSS3 (Mobile First)
- JavaScript (ES6)
- Bootstrap 5.3 (CDN)
- Bootstrap Icons (CDN)
