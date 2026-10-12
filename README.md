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
│   │   ├── foto-perfil.jpg  # Foto profesional (600x600 px, cuadrada)
│   │   ├── logo-gestora.svg      # Logotipo de Gestora
│   │   └── logo-grupoverum.svg   # Logotipo de Grupo Verum (Record)
│   └── cv/
│       ├── cv.html          # Fuente del CV (edítalo y regenera el PDF)
│       └── CV.pdf           # Currículum generado
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

## Proyectos incluidos

| Proyecto | Tipo | Enlaces |
|---|---|---|
| Asistente y Control de Mantenimiento Vehicular | Proyecto universitario | [Código](https://github.com/Soy-teeven/autoAsistente_FW3P) · [Demo](https://auto-asistente-fw-3-p-five.vercel.app) |
| Record · Sorteos y Rifas | Colaboración · código privado | [grupoverum.ec](https://grupoverum.ec/) |
| Gestora · Facturación y Ventas | Colaboración · código privado | [gestora.athiscore.com](https://gestora.athiscore.com/) |

Los dos últimos son productos de **Athis Core** en los que participé como
ayudante; su código fuente es privado, por eso enlazo al sitio en producción
en lugar de a un repositorio.

Los logotipos se guardan localmente en `assets/img/` para que las tarjetas no
dependan de que los servidores externos sigan disponibles.

## Currículum Vitae

El CV se genera desde código para que sea fácil de mantener y para que el PDF tenga
**texto real seleccionable** (no una imagen, como ocurre si se sube un PDF generado
por un procesador de textosscan de otra forma).

- **Fuente:** `assets/cv/cv.html`
- **PDF generado:** `assets/cv/CV.pdf`

Para editar el CV, modifica `cv.html` y vuelve a generar el PDF:

```powershell
.\generar-cv.ps1
```

El script usa Microsoft Edge en modo headless para convertir el HTML a PDF. Si
quieres agregar tu año de estudio, diplomas o certificaciones, edita la sección
`<h2>Educación</h2>` en `cv.html` antes de ejecutarlo.

## Tareas pendientes

- [ ] **Autenticarse en GitHub CLI:** `gh auth login`
- [ ] **Crear el repositorio y publicar:**
      `gh repo create portafolio --public --source=. --remote=origin --push`
- [ ] **Activar GitHub Pages:**
      `gh api --method POST repos/TMDiego/portafolio/pages -f "source[branch]=main" -f "source[path]=/"`
- [ ] **Reemplazar los assets de ejemplo por los reales:**
      - `assets/img/foto-perfil.jpg` → tu foto. Ahora hay un avatar genérico con
        iniciales "TN" generado con Pillow.
- [ ] *(Opcional)* Añadir tu año de estudio en `assets/cv/cv.html` y regenerar el PDF.

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
