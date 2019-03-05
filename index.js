const menuButton = document.querySelector('.menu-button');
menuButton.onclick = function (event) {
    console.log(event);
    document.querySelector.classList.toggle('.header--navigation-visible');
};