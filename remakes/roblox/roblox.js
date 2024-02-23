const returnBtn = document.querySelector(".return-btn");
const iframeDiv = document.querySelector(".showcase-indexes");
const iframe = document.getElementById("showcase-index");

const allItems = document.querySelectorAll(".swiper-slide");

const showcaseItems = document.querySelectorAll(".showcase-items");
const showcaseShades = document.querySelector(".showcase-shades");
const shades = document.querySelectorAll(".shade");

const backgrounds = document.querySelectorAll(".bg");

function showShades() {

    showcaseShades.style.zIndex = "2";

    shades.forEach((shade) => {
        shade.style.transform = "scaleX(1)";
    })

}

function hideShades() {

    shades.forEach((shade) => {
        shade.style.transform = "scaleX(0)";
    })

    setTimeout(() => {
        showcaseShades.style.zIndex = "-1";
    }, 1000);

}

function hideShowcaseItems() {

    showcaseItems.forEach((showcase) => {
        showcase.style.display = "none";
    })

}

function showShowcaseItems() {

    showcaseItems.forEach((showcase) => {
        showcase.style.display = "block";
    })

}

function setIFrame(id) {

    iframeDiv.style.display = "block";

    switch (id) {

        case "game-1":
            iframe.src = "./indexes-games/rblx-game-1.html";
            break;
        case "game-2":
            iframe.src = "./indexes-games/rblx-game-2.html";
            break;
        case "game-3":
            iframe.src = "./indexes-games/rblx-game-3.html";
            break;
        case "game-4":
            iframe.src = "./indexes-games/rblx-game-4.html";
            break;
        case "game-5":
            iframe.src = "./indexes-games/rblx-game-5.html";
            break;
        case "game-6":
            iframe.src = "./indexes-games/rblx-game-6.html";
            break;
        case "game-7":
            iframe.src = "./indexes-games/rblx-game-7.html";
            break;
        case "game-8":
            iframe.src = "./indexes-games/rblx-game-8.html";
            break;
        case "game-9":
            iframe.src = "./indexes-games/rblx-game-9.html";
            break;

    }

    switch (id) {

        case "store-1":
            iframe.src = "./indexes-store/rblx-store-1.html";
            break;
        case "store-2":
            iframe.src = "./indexes-store/rblx-store-2.html";
            break;
        case "store-3":
            iframe.src = "./indexes-store/rblx-store-3.html";
            break;
        case "store-4":
            iframe.src = "./indexes-store/rblx-store-4.html";
            break;
        case "store-5":
            iframe.src = "./indexes-store/rblx-store-5.html";
            break;
        case "store-6":
            iframe.src = "./indexes-store/rblx-store-6.html";
            break;
        case "store-7":
            iframe.src = "./indexes-store/rblx-store-7.html";
            break;
        case "store-8":
            iframe.src = "./indexes-store/rblx-store-8.html";
            break;
        case "store-9":
            iframe.src = "./indexes-store/rblx-store-9.html";
            break;

    }

}

function closeIFrame() {

    iframeDiv.style.display = "none";
    iframe.src = "";

}

// -----------------
// CLICK EVENTS
// -----------------

allItems.forEach((item) => {
    item.addEventListener("click", async () => {

        showShades();

        setTimeout(() => {
            hideShades();
        }, 2000);

        setTimeout(() => {
            hideShowcaseItems();
            setIFrame(item.id);
        }, 1000);

    })
})

returnBtn.addEventListener("click", () => {

    showShades();

    setTimeout(() => {
        hideShades();
    }, 2000)

    setTimeout(() => {
        showShowcaseItems();
        closeIFrame();
    }, 1000);


})

const swiper = new Swiper(".swiper", {

    crossFade: true,

    direction: 'horizontal',

    slidesPerView: 5,
    spaceBetween: 7,

    loop: true,

    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },

    allowTouchMove: true,
    grabCursor: true,

    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },

})