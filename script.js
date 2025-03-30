document.addEventListener("DOMContentLoaded", () => {
  const menuBtn = document.querySelector(".menu-btn");
  const menu = document.querySelector(".menu");
  const menuIcon = menuBtn.querySelector("i");

  // Alterna la visibilidad del menú
  menuBtn.addEventListener("click", (e) => {
    e.stopPropagation(); // Evita que se dispare el evento de clic en el documento
    menu.classList.toggle("active");
    menuIcon.classList.toggle("fa-bars");
    menuIcon.classList.toggle("fa-times"); // Cambia el ícono a "X"
  });

  // Navegación suave al hacer clic en los enlaces del menú
  document.querySelectorAll(".menu ul li a").forEach((link) => {
    link.addEventListener("click", (e) => {
      const targetId = e.target.getAttribute("data-target");
      if (targetId) {
        e.preventDefault();
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
          targetElement.scrollIntoView({ behavior: "smooth" });
        }
        menu.classList.remove("active");
        menuIcon.classList.add("fa-bars");
        menuIcon.classList.remove("fa-times");
      }
    });
  });

  // Cierra el menú al hacer clic fuera de él
  document.addEventListener("click", (e) => {
    if (!menu.contains(e.target) && !menuBtn.contains(e.target)) {
      menu.classList.remove("active");
      menuIcon.classList.add("fa-bars");
      menuIcon.classList.remove("fa-times");
    }
  });

  // Agrega efecto de scroll al enlace del footer
  document
    .querySelector("footer a[href='#inicio']")
    .addEventListener("click", (e) => {
      e.preventDefault();
      document.getElementById("inicio").scrollIntoView({ behavior: "smooth" });
    });
});
