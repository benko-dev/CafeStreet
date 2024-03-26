window.addEventListener('click', (event) => {

    if(event.target.dataset.action === 'hot'){
        const radioFather = event.target.closest(".popular-offer__radio");
        const hot = radioFather.querySelector('.hot');
        const cold = radioFather.querySelector('.cold');
        hot.classList.remove('radio-active');
        cold.classList.remove('radio-active');

        hot.classList.add('radio-active');
    }

    if(event.target.dataset.action === 'cold'){
        const radioFather = event.target.closest(".popular-offer__radio");
        const hot = radioFather.querySelector('.hot');
        const cold = radioFather.querySelector('.cold');
        hot.classList.remove('radio-active');
        cold.classList.remove('radio-active');

        cold.classList.add('radio-active');
    }
    
});