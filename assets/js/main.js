/* ==========================
   M1 DESIGN
   main.js
========================== */

document.addEventListener("DOMContentLoaded", () => {

    /* ==========================
       HEADER SCROLL
    ========================== */

    const header = document.querySelector(".header");

    window.addEventListener("scroll", () => {

        if (window.scrollY > 80) {

            header.style.background = "rgba(10,10,10,.96)";
            header.style.padding = "18px 0";
            header.style.boxShadow = "0 10px 30px rgba(0,0,0,.35)";

        } else {

            header.style.background = "rgba(0,0,0,.25)";
            header.style.padding = "25px 0";
            header.style.boxShadow = "none";

        }

    });

    /* ==========================
       HERO FADE IN
    ========================== */

    const heroContent = document.querySelector(".hero-content");

    if (heroContent) {

        heroContent.style.opacity = "0";
        heroContent.style.transform = "translateY(40px)";
        heroContent.style.transition = "all 1s ease";

        setTimeout(() => {

            heroContent.style.opacity = "1";
            heroContent.style.transform = "translateY(0)";

        }, 250);

    }

    /* ==========================
       SMOOTH SCROLL
    ========================== */

    document.querySelectorAll('a[href^="#"]').forEach(link => {

        link.addEventListener("click", function (e) {

            const target = document.querySelector(this.getAttribute("href"));

            if (!target) return;

            e.preventDefault();

            target.scrollIntoView({

                behavior: "smooth"

            });

        });

    });

    /* ==========================
       ACTIVE NAVIGATION
    ========================== */

    const navLinks = document.querySelectorAll(".navigation a");

    navLinks.forEach(link => {

        link.addEventListener("click", () => {

            navLinks.forEach(item => item.classList.remove("active"));

            link.classList.add("active");

        });

    });

});
