/*=============== toggle icon navbar ========= */
let menuIcon = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");
menuIcon.onclick = () => {
  menuIcon.classList.toggle("bx-x");
  navbar.classList.toggle("active");
};

/*=============== scroll section avtive link ========= */
let section = document.querySelectorAll("section");
let navlinks = document.querySelectorAll("header nav a ");

window.onscroll = () => {
  section.forEach((sec) => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.attributeStyleMap("id");
    if (top >= offset && top < offset + height) {
      navlinks.forEach((links) => {
        links.classList.remove("active");
        document
          .querySelectorAll("header nav a[href*=" + id + "]")
          .classlist.add("active");
      });
    }
  });
  /*=================== sticky navbar =============*/
  let header = document.querySelectorAll("header");
  header.classList.toggle("sticky", window.scrolly > 100);
  /*==================== remove toggle icon and navabar when click navbar link(scroll)=====*/
  menuIcon.classList.remove("bx-x");
  navbar.classList.remove("active");
};
/*============= sticky navbar==============*/
ScrollReveal({
  reset: true,
  distance: "80px",
  duration: 2000,
  delay: 200,
});
ScrollReveal().reveal(".home-content ,.heading", { orginal: "top" });
ScrollReveal().reveal(
  ".home-img ,.services-container , .portfolio-box, .contact form",
  { orginal: "bottom" }
);
