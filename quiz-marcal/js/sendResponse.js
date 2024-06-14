function removeDiv(divID) {
    let divRemover = document.getElementById(divID);
    if (divRemover) {
        // Obtém o pai da DIV com o ID "nubank"
        let parentDiv = divRemover.parentNode;

        // Remove a DIV com o ID "nubank" do seu pai
        parentDiv.removeChild(divRemover);
    }
}

function scrollToTop() {
    // Rola a página para o topo
    window.scrollTo({
        top: 0,
        behavior: 'smooth' // Adiciona um efeito de rolagem suave (opcional)
    });
}

function playAudio(audioPath) {
    var audio = new Audio(audioPath);
    audio.play();
}

function nubank() {
    removeDiv('nubank');
    document.getElementById("bradesco").style.display = "block";

    document.getElementById('saldo').innerHTML = 'R$142,50';
    scrollToTop();


}

function bradesco() {
    removeDiv('bradesco');
    document.getElementById("mcdonalds").style.display = "block";

    document.getElementById('saldo').innerHTML = 'R$205,00';
    scrollToTop();


}

// function americanas() {
//     removeDiv('americanas');
//     document.getElementById("mcdonalds").style.display = "block";

//     document.getElementById('saldo').innerHTML = 'R$81,25';
//     scrollToTop();
// }

function mcdonalds() {
    removeDiv('mcdonalds');
    document.getElementById("finalizacao").style.display = "block";

    document.getElementById('saldo').innerHTML = 'R$230,00';
    scrollToTop();


}


function showPopupB0() {
    document.getElementById('B0').disabled = true;
    document.getElementById('popupB0').style.display = 'block';
}

function closePopupB0() {
    document.getElementById('popupB0').style.display = 'none';
    document.getElementById('B0').disabled = true;
}   

function showLoadingB0() {
  closePopupB0();
}


