const navBar = document.querySelector(".navBar");
const navBarShades = document.querySelector(".navBarShades");

const title = document.querySelector(".title");
const hamburgerBtn = document.querySelectorAll(".navButton");
const hideLinksBtn = document.querySelector(".hideLinks");
const showlinksBtn = document.querySelector(".showLinks");

var linksHidden;
var shade_1 = navBarShades.children[0];
var shade_2 = navBarShades.children[1];

function toggleNav(status) {

    if (status === "inactive") {

        showlinksBtn.style.transform = "translateX(0)";

        if (linksHidden === true) {
            shade_2.style.visibility = "visible";
        }

        navBar.style.transform = "translateY(-100%)";
        navBarShades.style.visibility = "visible";
        
        shade_1.style.transform = "translateY(0)";

        shade_2.style.transform = "translateX(0)"

    } else if (status === "active") {

        showlinksBtn.style.transform = "translateX(-100%)";

        navBar.style.transform = "translateY(0)";
        navBarShades.style.visibility = "hidden";
        
        shade_1.style.transform = "translateY(-100%)";

        shade_2.style.transform = "translateX(-100%)"

    }
    
}

hamburgerBtn.forEach((btn) => {
    btn.addEventListener("click", () => {
        toggleNav(btn.dataset.status);
    })
})

hideLinksBtn.addEventListener("click", () => {
    
    shade_2.style.transform = "translateX(-100%)"
    shade_2.style.visibility = "hidden";

    linksHidden = true;

})

showlinksBtn.addEventListener("click", () => {
    
    shade_2.style.transform = "translateX(0)"
    shade_2.style.visibility = "visible";

    linksHidden = false;

})