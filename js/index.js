// Handle's Menu Toggling
const menuBar = document.getElementById("menubar");
let navLinks = document.querySelector(".nav-links");

const showNavContents = () => {
  navLinks.classList.toggle("show");
  navLinks.classList.toggle("rushnav");
};

menuBar.addEventListener("click", showNavContents);

// Code for showing of more pages on mobile and switching the caret-up and caret-down icons
const showMorePages = document.querySelector(".dropsInfo");
let dropsMenu = document.querySelector(".drops2");
let arrowDropsOther = document.getElementById("arrow-2");
let arrowMain = document.getElementById("drop-down-arrow");

showMorePages.addEventListener("click", () => {
    dropsMenu.classList.toggle("showDrops");
    if (dropsMenu.classList.contains("showDrops")) {
        arrowDropsOther.style.display = "block";
        arrowMain.style.display = "none";
    } else {
        arrowDropsOther.style.display = "none";
        arrowMain.style.display = "block";
    }
});

// For Desktop - This code ensures that the caret-up icons shows when users hover on the 
// pages text (on Desktop) and hides showing the default on mouse out (When the user removes the mouse)
    let caret_Up = document.getElementById("caret_up");
    let caret_Down = document.getElementById("caret-down");
    let pagesDrop = document.querySelector(".pages_drops");
    pagesDrop.addEventListener("mouseover", () => {
        if (caret_Down) {
            caret_Down.style.contentVisibility = "hidden"
            caret_Up.style.contentVisibility = "visible"
        }
    });

    pagesDrop.addEventListener("mouseout", () => {
         caret_Down.style.contentVisibility = "visible"
         caret_Up.style.contentVisibility = "hidden";
    })

// document.addEventListener("click", (e) => {
//     if (e.target !== menuBar) {
//         navLinks.classList.remove("show")
//     }
// })

// Prevent Image dragging
document.querySelectorAll("img").forEach((img) => {
  img.addEventListener("mousedown", function (event) {
    event.preventDefault();
  });
  img.addEventListener("contextmenu", function (event) {
    event.preventDefault();
  });
});

// Navigate to my Github Account
const devNav = document.getElementById("Dev_Insight");
const goToMyPage = () => {
    window.location.href = "https://github.com/MiracleChibuike"
}
devNav.addEventListener("click", goToMyPage)
