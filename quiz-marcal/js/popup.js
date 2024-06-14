function popup() {
    document.getElementById("popupContainer").style.display = "flex";
    document.getElementById("popup").style.display = "block";
    document.getElementById("baixar").style.display = "none";
}

function popupBaixar() {
    document.getElementById("popup").style.display = "none";
    document.getElementById("baixar").style.display = "block";
}