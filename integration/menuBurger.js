const menuBurger = document.querySelector(".menu-burger");

menuBurger.addEventListener("click", function(event){
    event.preventDefault();
    const navLink = document.querySelectorAll(".nav-link"); 
    navLink.forEach(link => {
        link.classList.toggle("nav-link-responsive");
        link.classList.toggle("nav-link");
    })
})