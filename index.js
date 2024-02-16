const navBar = document.querySelector(".navBar");
const navBarShades = document.querySelector(".navBarShades");

const title = document.querySelector(".title");
const hamburgerBtn = document.querySelectorAll(".navButton");
const hideLinksBtn = document.querySelector(".hideLinks");
const showlinksBtn = document.querySelector(".showLinks");
const themeBtn = document.querySelector(".themeBtn-2");

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

        showlinksBtn.style.transform = "translateX(-150%)";

        navBar.style.transform = "translateY(0)";
        navBarShades.style.visibility = "hidden";
        
        shade_1.style.transform = "translateY(-100%)";

        shade_2.style.transform = "translateX(-100%)"

    }
    
}

async function toggleTheme(currentTheme) {

    if (currentTheme === "light") {

        document.documentElement.style.setProperty("--text", "#f3f6f7");
        document.documentElement.style.setProperty("--background", "#1a1a1a");
        document.documentElement.style.setProperty("--primary", "#4b8fa0");
        document.documentElement.style.setProperty("--secondary", "#25545f");
        document.documentElement.style.setProperty("--accent", "#2b778c");
        themeBtn.dataset.theme = "dark";

    }
    else if (currentTheme === "dark") {

        document.documentElement.style.setProperty("--text", "#080b0c");
        document.documentElement.style.setProperty("--background", "#f5f8f9");
        document.documentElement.style.setProperty("--primary", "#5fa2b3");
        document.documentElement.style.setProperty("--secondary", "#a0ceda");
        document.documentElement.style.setProperty("--accent", "#74c0d4");
        themeBtn.dataset.theme = "light";

    }
}

async function changeThemeIcon (currentTheme) {
    if (currentTheme === "light") {
        themeBtn.innerHTML = '<i class="fa-solid fa-moon"></i>';
    } else if (currentTheme === "dark") {
        themeBtn.innerHTML = '<i class="fa-solid fa-sun"></i>';
    }
}

// ####################
// Event Listeners
// ####################

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

themeBtn.addEventListener("click", async () => {
    await toggleTheme(themeBtn.dataset.theme);
    await changeThemeIcon(themeBtn.dataset.theme);
})