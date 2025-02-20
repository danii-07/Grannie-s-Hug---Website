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