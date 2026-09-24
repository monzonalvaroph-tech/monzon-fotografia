```javascript
// ================================
// MENÚ MOBILE
// ================================

const menu = document.getElementById("menu");
const nav = document.getElementById("nav");

if (menu && nav) {

  menu.addEventListener("click", () => {

    nav.classList.toggle("open");

    const isOpen = nav.classList.contains("open");

    menu.setAttribute("aria-expanded", isOpen);

    menu.textContent = isOpen ? "✕" : "☰";

  });


  // Cerrar menú al tocar un enlace

  nav.querySelectorAll("a").forEach(link => {

    link.addEventListener("click", () => {

      nav.classList.remove("open");

      menu.setAttribute("aria-expanded", "false");

      menu.textContent = "☰";

    });

  });

}


// ================================
// ANIMACIONES AL HACER SCROLL
// ================================

const elementsToReveal = document.querySelectorAll(
  ".section-head, .portfolio-card, .service, .gallery-cta, .about-photo, .about-copy, .contact"
);

if ("IntersectionObserver" in window) {

  const observer = new IntersectionObserver(
    (entries, observer) => {

      entries.forEach(entry => {

        if (entry.isIntersecting) {

          entry.target.classList.add("visible");

          observer.unobserve(entry.target);

        }

      });

    },
    {
      threshold: 0.12
    }
  );


  elementsToReveal.forEach(element => {

    element.classList.add("reveal");

    observer.observe(element);

  });

}


// ================================
// CERRAR MENÚ SI SE AGRANDA
// LA PANTALLA
// ================================

window.addEventListener("resize", () => {

  if (window.innerWidth > 760 && nav && menu) {

    nav.classList.remove("open");

    menu.setAttribute("aria-expanded", "false");

    menu.textContent = "☰";

  }

});


// ================================
// AÑO AUTOMÁTICO DEL FOOTER
// ================================

const footerYear = document.querySelector("footer");

if (footerYear) {

  footerYear.innerHTML = footerYear.innerHTML.replace(
    "2026",
    new Date().getFullYear()
  );

}
```
// =========================
// GALERÍA 15 AÑOS
// =========================

function openGallery() {
  const gallery = document.getElementById("gallery-quince");

  if (!gallery) return;

  gallery.classList.add("active");
  gallery.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";
}

function closeGallery() {
  const gallery = document.getElementById("gallery-quince");

  if (!gallery) return;

  gallery.classList.remove("active");
  gallery.setAttribute("aria-hidden", "true");
  document.body.style.overflow = "";
}
