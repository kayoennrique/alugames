function changeStatus(id) {
    let gameClick = document.getElementById(`game-${id}`);
    let image = gameClick.querySelector('.dashboard__item__img');
    let button = gameClick.querySelector('.dashboard__item__button');
    let gameName = gameClick.querySelector('.dashboard__item__name');

    if (image.classList.contains('dashboard__item__img--rented')) {
        image.classList.remove('dashboard__item__img--rented'); 
        button.classList.remove('dashboard__item__button--return')
        button.textContent = 'Rent';       
    } else {
        image.classList.add('dashboard__item__img--rented');  
        button.textContent = 'Return';
        button.classList.add('dashboard__item__button--return');
    }
}