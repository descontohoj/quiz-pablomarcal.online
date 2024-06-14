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



function removeDiv(divID) {
    let divRemover = document.getElementById(divID);
    if (divRemover) {
        // Obtém o pai da DIV com o ID "nubank"
        let parentDiv = divRemover.parentNode;

        // Remove a DIV com o ID "nubank" do seu pai
        parentDiv.removeChild(divRemover);
    }
}

function trocarDiv(esconderId, mostrarId) {
    document.getElementById(esconderId).style.display = 'none';
    document.getElementById(mostrarId).style.display = 'block';
  }



// Carregando B2


function showPopupB2() {
    document.getElementById('popupB2').style.display = 'block';
    document.getElementById('enviarResposta').disabled = true;
}

function closePopupB2() {
    document.getElementById('popupB2').style.display = 'none';
    document.getElementById('enviarResposta').disabled = true;
}   

    function showLoadingB2() {
        var button = document.getElementById("enviarResposta");
        document.getElementById("progress1").style.display = "none";
        document.getElementById("progress2").style.display = "block";
            // Simulando um atraso de 3 segundos para o showPopup2()
            setTimeout(function () {
                nubank();
                
            }, 300); // 3 segundos
        }

// Carregando B3


function showPopupB3() {
    document.getElementById('popupB3').style.display = 'block';
    document.getElementById('enviarResposta').disabled = true;
}

function closePopupB3() {
    document.getElementById('popupB3').style.display = 'none';
    document.getElementById('enviarResposta').disabled = true;
}   

    function showLoadingB3() {
        var button = document.getElementById("enviarResposta");
        document.getElementById("progress2").style.display = "none";
        document.getElementById("progress3").style.display = "block";
            // Simulando um atraso de 3 segundos para o showPopup2()
            setTimeout(function () {
                bradesco();
            }, 300); // 3 segundos
        }

// Carregando B4


function showPopupB4() {
    document.getElementById('popupB4').style.display = 'block';
    document.getElementById('enviarResposta').disabled = true;
}

function closePopupB4() {
    document.getElementById('popupB4').style.display = 'none';
    document.getElementById('enviarResposta').disabled = true;
}   

    function showLoadingB4() {
        var button = document.getElementById("enviarResposta");
        document.getElementById("progress3").style.display = "none";
            // Simulando um atraso de 3 segundos para o showPopup2()
            setTimeout(function () {
                mcdonalds();
            }, 300); // 3 segundos
        }

