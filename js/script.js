const header = document.querySelector("header");
window.addEventListener("scroll", function () {
  header.classList.toggle("sticky", window.scrollY > 100);
});

let menu = document.querySelector("#menu-icon");
let navlist = document.querySelector(".navlist");

menu.onclick = () => {
  menu.classList.toggle("bx-x");
  navlist.classList.toggle("open");
};

window.onscroll = () => {
  menu.classList.remove("bx-x");
  navlist.classList.remove("open");
};

//typing animation da debbugare

const typed = new Typed(".typing", {
  strings: ["",'Graphic and Visual Designer'],
  typeSpeed: 80,
  backSpeed: 80,
  loop: true,
});



// button for project
document.getElementById("btnskill").onclick = function () {
  window.location.href = "#services";
};

const sections = document.querySelectorAll("section[id]");

window.addEventListener("scroll", navHighlighter);

function navHighlighter() {
  let scrollY = window.pageYOffset;
  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight;
    const sectionTop = current.offsetTop - 200;
    sectionId = current.getAttribute("id");

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      document
        .querySelector(".navlist a[href*=" + sectionId + "]")
        .classList.add("active");
    } else {
      document
        .querySelector(".navlist a[href*=" + sectionId + "]")
        .classList.remove("active");
    }
  });
}

//fare submit contatti tramite mail





