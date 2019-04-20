var list = [];
var selectedIndex = -1;

//Load from the local storage
function loadLocalStorage() {
    if (localStorage.getItem('tdl') != "" && localStorage.getItem('tdl')) {
        var bookmarks = localStorage.getItem('tdl');
        list = JSON.parse(bookmarks);
    }
}
loadLocalStorage();

//Load to DOM
function gridLoad() {
    const grid = document.getElementById("player-list");
    for (let i = 0; i < list.length; i++) {
        var item = document.createElement("DIV");
        var controls = document.createElement("DIV");
        item.classList.add("item");
        if (list[i][1])
            item.classList.add("marked");
        item.style.animationDelay = 1 + i / 3 + "s";

        var name = document.createElement("P");
        name.innerHTML = list[i][0];
        item.appendChild(name);

        var remove = document.createElement("A");
        remove.innerHTML = "✕";
        remove.addEventListener("click", erase);
        var removeId = document.createAttribute("removeId");
        removeId.value = i;
        remove.setAttributeNode(removeId);

        var done = document.createElement("A");
        var doneId = document.createAttribute("doneId");
        doneId.value = i;
        done.addEventListener("click", mark);
        done.setAttributeNode(doneId);

        done.innerHTML = "✓";
        controls.appendChild(remove);
        controls.appendChild(done);
        item.appendChild(controls);
        grid.appendChild(item);
    }
}
gridLoad();

//Add event listners
var addButton = document.getElementById("player-add-button");
var addInput = document.getElementById("player-add-input");

addButton.addEventListener("click", function () {
    if (addInput.value) {
        if (addInput.value.length <= 15) {
            var value = [addInput.value.replace(/</g, "&lt;").replace(/>/g, "&gt;"), 0];
            list.push(value);
            localStorage.setItem('tdl', JSON.stringify(list));
            location.reload();
        }
        else{
            showMessage("It's too long :)");
        }
    }
    else {
        showMessage("Empty input !");
    }
});

//Erase function
function erase() {
    selectedIndex = this.getAttribute("removeId");
    list.splice(selectedIndex, 1);
    localStorage.setItem('tdl', JSON.stringify(list));
    location.reload();
}

//Mark function
function mark() {
    selectedIndex = this.getAttribute("doneId");
    if (list[selectedIndex][1])
        list[selectedIndex][1] = 0;
    else
        list[selectedIndex][1] = 1;
    localStorage.setItem('tdl', JSON.stringify(list));
    location.reload();
}

//Toast
var toast = document.getElementById("toast");

function showMessage(message) {
    toast.innerHTML = message;
    toast.style.display = "block";
    toast.style.webkitAnimation = 'none';
    setTimeout(function () {
        toast.style.webkitAnimation = '';
    }, 10);
    setTimeout(function () {
        toast.style.display = "none";
    }, 2000);
}