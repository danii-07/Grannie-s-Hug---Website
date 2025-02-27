function switchPages (key) {

    switch (key) {
    case "home":
        fetch("homepage.html") // Replace with the actual page you want to load
        .then(response => response.text())
        .then(html => {
            document.getElementById("main-content").innerHTML = html;
        })
        .catch(error => console.error("Error loading the page:", error));
        
        break;

    case "recipes":

         break;

    case "newsletter":

        break;
    
    case "contact":

        break;

    default:
        fetch("homepage.html") // Replace with the actual page you want to load
        .then(response => response.text())
        .then(html => {
            document.getElementById("main-content").innerHTML = html;
        })
        .catch(error => console.error("Error loading the page:", error));

        break;
    }
}

    const header = document.getElementById('header');

    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('bg-transparent');
            header.classList.remove('bg-[#d3c1a9]');
        } else {
            header.classList.add('bg-[#d3c1a9]');
            header.classList.remove('bg-transparent');
        }
    });

        window.addEventListener("scroll", function() {
            const header = document.querySelector("header");
            if (window.scrollY > 50) {
                header.classList.add("bg-white", "shadow-lg");
                header.classList.remove("bg-[#d3c1a9]]");
            } else {
                header.classList.add("bg-[#d3c1a9]");
                header.classList.remove("bg-white", "shadow-lg");
            }
        });
 
    document.addEventListener("DOMContentLoaded", function () {
        const menuButton = document.querySelector("#mobile-menu-button");
        const menu = document.querySelector("#mobile-menu");

        menuButton.addEventListener("click", function () {
            menu.classList.toggle("hidden");
        });
    });

