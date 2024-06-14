// function toggleCard(clickedElement) {
//     const allCards = document.querySelectorAll('.card__grade');
//     allCards.forEach(card => {
//         card.classList.remove('active');
//     });

//     clickedElement.classList.add('active');
// }

function toggleCard(clickedElement) {
    const allCards = document.querySelectorAll('.card__grade');
    
    allCards.forEach(card => {
        card.classList.remove('active');
    });

    // Adicione um switch para lidar com diferentes ações
    switch (clickedElement.id) {
        case 'card__grade1':
            updateStars('star1', 'fa-solid fa-star active', '#ffd700');
            updateStars('star2', 'fa-regular fa-star', '#7e7e7e');
            updateStars('star3', 'fa-regular fa-star', '#7e7e7e');
            updateStars('star4', 'fa-regular fa-star', '#7e7e7e');
            updateStars('star5', 'fa-regular fa-star', '#7e7e7e');
            break;
        case 'card__grade2':
            updateStars('star1', 'fa-solid fa-star active', '#ffd700');
            updateStars('star2', 'fa-solid fa-star active', '#ffd700');
            updateStars('star3', 'fa-regular fa-star', '#7e7e7e');
            updateStars('star4', 'fa-regular fa-star', '#7e7e7e');
            updateStars('star5', 'fa-regular fa-star', '#7e7e7e');
            break;
        case 'card__grade3':
            updateStars('star1', 'fa-solid fa-star active', '#ffd700');
            updateStars('star2', 'fa-solid fa-star active', '#ffd700');
            updateStars('star3', 'fa-solid fa-star active', '#ffd700');
            updateStars('star4', 'fa-regular fa-star', '#7e7e7e');
            updateStars('star5', 'fa-regular fa-star', '#7e7e7e');
            break;
        case 'card__grade4':
            updateStars('star1', 'fa-solid fa-star active', '#ffd700');
            updateStars('star2', 'fa-solid fa-star active', '#ffd700');
            updateStars('star3', 'fa-solid fa-star active', '#ffd700');
            updateStars('star4', 'fa-solid fa-star active', '#ffd700');
            updateStars('star5', 'fa-regular fa-star', '#7e7e7e');
            break;
        case 'card__grade5':
            updateStars('star1', 'fa-solid fa-star active', '#ffd700');
            updateStars('star2', 'fa-solid fa-star active', '#ffd700');
            updateStars('star3', 'fa-solid fa-star active', '#ffd700');
            updateStars('star4', 'fa-solid fa-star active', '#ffd700');
            updateStars('star5', 'fa-solid fa-star active', '#ffd700');
            break;
        // Adicione mais casos conforme necessário
        default:
            // Ação padrão, se nenhum caso corresponder
            console.log("Nenhum caso correspondente");
    }
}

function updateStars(elementId, className, color) {
    const starElement = document.getElementById(elementId);
    if (starElement) {
        starElement.className = className;
        starElement.style.color = color; // Adiciona a cor amarela
    } else {
        console.error("Elemento não encontrado com ID: " + elementId);
    }
}

// Adicione um evento de clique aos elementos que deseja controlar
const cards = document.querySelectorAll('.card__grade');

cards.forEach(card => {
    card.addEventListener('click', function() {
        toggleCard(this); // "this" se refere ao elemento clicado
    });
});