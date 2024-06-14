document.addEventListener('DOMContentLoaded', function () {
    let cardGradeButtons = document.querySelectorAll('.card__grade');
    let resposta1Buttons = document.querySelectorAll('.resposta1');
    let resposta2Buttons = document.querySelectorAll('.resposta2');

    cardGradeButtons.forEach(function (button) {
        button.addEventListener('click', function () {
            toggleButton(this, cardGradeButtons);
            checkConditions();
        });
    });

    resposta1Buttons.forEach(function (button) {
        button.addEventListener('click', function () {
            toggleButton(this, resposta1Buttons);
            checkConditions();
        });
    });

    resposta2Buttons.forEach(function (button) {
        button.addEventListener('click', function () {
            toggleButton(this, resposta2Buttons);
            checkConditions();
        });
    });

    function toggleButton(clickedButton, buttons) {
        buttons.forEach(function (btn) {
            btn.classList.remove('active');
        });

        clickedButton.classList.add('active');
    }

    function checkConditions() {
        const enviarRespostaButton = document.getElementById('enviarResposta');

        const cardGradeActive = document.querySelector('.card__grade.active');
        const resposta1Active = document.querySelector('.resposta1.active');
        const resposta2Active = document.querySelector('.resposta2.active');

        if (enviarRespostaButton && cardGradeActive && resposta1Active && resposta2Active) {
            // Ativa o botão se todas as condições são atendidas
            enviarRespostaButton.removeAttribute('disabled');
            enviarRespostaButton.classList.add('active');
        } else {
            // Desativa o botão se alguma condição não for atendida
            enviarRespostaButton.setAttribute('disabled', 'true');
        }
    }
});
