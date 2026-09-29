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
// ================================
// GALERÍAS DEL PORTFOLIO
// ================================

const portfolioCards = document.querySelectorAll(".portfolio-card[data-gallery]");
const portfolioGalleries = document.querySelectorAll(".portfolio-gallery");

portfolioCards.forEach(card => {

  const openGallery = () => {

    const galleryName = card.dataset.gallery;
    const gallery = document.getElementById(`gallery-${galleryName}`);

    if (!gallery) return;

    // Cerrar cualquier otra galería
    portfolioGalleries.forEach(item => {
      item.hidden = true;
      item.classList.remove("gallery-active");
    });

    // Abrir la seleccionada
    gallery.hidden = false;

    requestAnimationFrame(() => {
      gallery.classList.add("gallery-active");
    });

    // Llevar al usuario hasta la galería
    setTimeout(() => {

      gallery.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });

    }, 50);

  };


  card.addEventListener("click", openGallery);


  // También permite abrir con Enter o espacio
  card.addEventListener("keydown", event => {

    if (event.key === "Enter" || event.key === " ") {

      event.preventDefault();

      openGallery();

    }

  });

});


// ================================
// CERRAR GALERÍAS
// ================================

document.querySelectorAll(".gallery-close").forEach(button => {

  button.addEventListener("click", () => {

    const gallery = button.closest(".portfolio-gallery");

    if (!gallery) return;

    gallery.classList.remove("gallery-active");

    setTimeout(() => {

      gallery.hidden = true;

    }, 250);

  });

});
