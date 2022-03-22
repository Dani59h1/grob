// __________BURGER_____________

//De tre streger i burger
const hamburger = document.querySelector(".hamburger");
//Menuen primært når den åbner
const navMenu = document.querySelector(".menu");

//Når man trykker på stregerne fører de til mobileMenu
hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
    
    //de tre streger bliver til et kryds
    hamburger.classList.toggle("active");
    //Menuen flytter sig til en position hvor vi kan se den ( left: 0; ). Se .menu.active i css
    navMenu.classList.toggle("active");
}

// _________sticky_______


window.addEventListener('scroll', function () {
    let navbar = document.getElementById("navbar");
    let header = document.querySelector('header');
    navbar.classList.toggle('sticky', window.scrollY > 0);
})

document.querySelector("button").addEventListener("click", visDetaljer);


    function visDetaljer() {
      console.log("omg");
      modal.querySelector("img").src = "billeder/brev.png";
      modal.style.display = "block";

      document.querySelector("#omgg").classList.add("spinn")
    }
    modal.addEventListener("click", () => (modal.style.display = "none"))
