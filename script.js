const text = ["Logo Designs", "Thumbnail Designs", "Post & Banners"];
let i = 0;
let j = 0;
let currentText = "";
let isDeleting = false;

function type() {
    currentText = text[i];
    
    if (isDeleting) {
        document.querySelector(".typing").textContent =
            currentText.substring(0, j--);
    } else {
        document.querySelector(".typing").textContent =
            currentText.substring(0, j++);
    }

    if (!isDeleting && j === currentText.length) {
        isDeleting = true;
        setTimeout(type, 1000);
        return;
    }

    if (isDeleting && j === 0) {
        isDeleting = false;
        i = (i + 1) % text.length;
    }

    setTimeout(type, isDeleting ? 50 : 100);
}

type();

const toggle = document.querySelector(".menu-toggle");
const nav = document.querySelector(".nav-links");

toggle.onclick = () => {
    nav.classList.toggle("active");
};

/* Order Window */
function openOrder(name){
  document.getElementById("projectTitle").innerText = name;
  document.getElementById("orderModal").style.display = "flex";
}

function closeOrder(){
  document.getElementById("orderModal").style.display = "none";
}

function sendOrder(){

  let designs = document.getElementById("designs").value;
  let colors = document.getElementById("colors").value;
  let details = document.getElementById("details").value;

  let message =
`🔥 New Order 🔥

Project: ${document.getElementById("projectTitle").innerText}
Designs: ${designs}
Colors: ${colors}
Details: ${details}`;

  let phone = "94770759088"; // ඔයාගේ number

  window.open("https://wa.me/" + phone + "?text=" + encodeURIComponent(message), "_blank");

  closeOrder();
}
