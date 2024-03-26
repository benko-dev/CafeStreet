'use strict'

window.onload = function () {
    const parallax = document.querySelector('.wrapper');

    if(parallax) {
        // Элементы декора
        const decor = document.querySelector('.enjoy__decor');
        const productBox = document.querySelector('.enjoy__image-box');
        const coffee = document.querySelector('.enjoy__coffee-img');
        const decor2 = document.querySelector('.popular__decor')

        // Значения
        const forCoffee = -10;
        const forBox = 30;
        const forDecor = -40;
        const forDecor2 = 35;

        // Скорость
        const speed = 0.05;

        // Обьявления переменных
        let positionX = 0, positionY = 0;
        let coordXprocent = 0, coordYprocent = 0;

        function setMouseParallaxStyle() {
            const distX = coordXprocent - positionX;
            const distY = coordYprocent - positionY;

            positionX = positionX + (distX * speed);
            positionY = positionY + (distY * speed);

            // Передаём стили
            decor.style.cssText = `transform: translate(${positionX / forDecor}%, ${positionY / forDecor}%);`;
            decor2.style.cssText = `transform: translate(${positionX / forDecor2}%, ${positionY / forDecor2}%);`;
            productBox.style.cssText = `transform: translate(${positionX / forBox}%, ${positionY / forBox}%);`;
            coffee.style.cssText = `transform: translate(${positionX / forCoffee}%, ${positionY / forCoffee}%);`;

            requestAnimationFrame(setMouseParallaxStyle);
        }
        setMouseParallaxStyle();

        parallax.addEventListener("mousemove", function (e) {
            // Получение ширины и висоты блока
            const parallaxWidth = parallax.offsetWidth;
            const parallaxHeight = parallax.offsetHeight;

            // Нули
            const coordX = e.pageX - parallaxWidth / 2;
            const coordY = e.pageY - parallaxHeight / 2;

            coordXprocent = coordX / parallaxWidth * 100;
            coordYprocent = coordY / parallaxHeight * 100;
        });
    }
}