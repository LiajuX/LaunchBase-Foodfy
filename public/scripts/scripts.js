const recipes = document.querySelectorAll('.recipe-card');
const modalOverlay = document.querySelector('.modal-overlay');

for (let recipe of recipes) {
    recipe.addEventListener('click', function() {
        const recipeId = recipe.getAttribute('id');

        modalOverlay.querySelector('img').src = `../../public/assets/${recipeId}.png`;

        modalOverlay.classList.add('active');
    });
}

modalOverlay.querySelector('.close-modal').addEventListener('click', function() {
    modalOverlay.classList.remove('active');
});

