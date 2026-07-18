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

/* ===========================
AI DESIGN
=========================== */

const btn=document.getElementById("generateBtn");

if(btn){

btn.addEventListener("click",()=>{

const input=document.getElementById("dreamHome");

const value=input.value.trim();

if(value===""){

alert("Please describe your dream home.");

return;

}

const chat=document.querySelector(".chat-window");

chat.innerHTML+=`

<div class="message user" style="margin-top:25px;
margin-left:auto;
background:#C9A227;
color:#111;
display:block;">

${value}

</div>

<div class="message ai" style="margin-top:25px;display:block;">

✨ Excellent choice!

Our architects will review your request and prepare a premium architectural concept based on your description.

</div>

`;

input.value="";

chat.scrollTop=chat.scrollHeight;

});

}
