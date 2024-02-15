const navBar = document.querySelector(".navBar");
const navBarShades = document.querySelector(".navBarShades");

const title = document.querySelector(".title");
const hamburgerBtn = document.querySelectorAll(".navButton");

function toggleNav(status) {

    let shade_1 = navBarShades.children[0];
    let shade_2 = navBarShades.children[1];

    if (status === "inactive") {



        navBar.style.transform = "translateY(-100%)";
        navBarShades.style.visibility = "visible";
        
        shade_1.style.transform = "translateY(0)";

        shade_2.style.transform = "translateX(0)"

    } else if (status === "active") {

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