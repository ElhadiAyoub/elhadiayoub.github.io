var selectedIndex = 0;

//Database elements
const links = [["RANDOM PASSWORD GENERATOR", "images/rpwg.png", "Random Password Generator is a simple (Mobile-Friendly) web page to create secure passwords in a lazy way :) ", "https://github.com/ElhadiAyoub/Random-Password-Generator", "projects/Random-Password-Generator/index.html"],
["COUNTDOWN TIMER", "images/cdt.png", "A simple Mobile-Friendly Countdown timer. ", "https://github.com/ElhadiAyoub/CountDown-Timer", "projects/CountDown-Timer/index.html"],
["COOL LOGIN FORM ANIMATED CHARACTER", "images/calfc.png", "A cool signup login form with an animated character that interacts with inputs of the user. ", "https://github.com/ElhadiAyoub/Cool-Login-Form-Animated-Character", "projects/Cool-Login-Form-Animated-Character/index.html"],
["BOOKMARKS MANAGER", "images/bm.png", "A cool bookmark manager that lets you easily add bookmarks and manage them.", "https://github.com/ElhadiAyoub/Bookmarks-Manager", "projects/Bookmarks-Manager/index.html"],
["EXPLORER", "images/explorer.png", "It's a static GitHub Page used as Portfolio to Showcase projects. ", "https://github.com/ElhadiAyoub/elhadiayoub.github.io", "#"]
];

//Load grid elements in DOM
function gridLoad() {
    const grid = document.getElementById("grid");
    for (let i = 0; i < links.length; i++) {
        var group = document.createElement("DIV");
        group.classList.add("group");
        group.style.animationDelay = 1 + i / 3 + "s";

        var name = document.createElement("P");
        name.innerHTML = links[i][0];

        var element = document.createElement("DIV");
        element.classList.add("item");
        element.style.backgroundImage = "url(" + links[i][1] + ")";

        var selectionId = document.createAttribute("selectionId");
        selectionId.value = i;

        group.appendChild(element);
        group.appendChild(name);
        group.setAttributeNode(selectionId);
        group.addEventListener("click", showContent);
        grid.appendChild(group);
    }
}
gridLoad();


//Show player content function
function showContent() {
    selectedIndex = this.getAttribute("selectionId");
    playerLoad(selectedIndex);
}

//Fill player elements
function playerLoad(index) {
    const title = document.getElementById("player-title");
    const image = document.getElementById("player-image");
    const text = document.getElementById("player-text");
    const link1 = document.getElementById("player-link1");
    const link2 = document.getElementById("player-link2");

    title.innerHTML = links[index][0];
    text.innerHTML = links[index][2];
    image.src = links[index][1];
    link1.href = links[index][3];
    link2.href = links[index][4];

    player.style.display = "block";
}


const close = document.getElementById("player-close");
const player = document.getElementById("player");

close.addEventListener("click", function () {
    player.style.display = "none";
});


const splashScreen = document.getElementById("splash-screen");

setTimeout(function () { splashScreen.style.display = "none"; }, 1000);