document.addEventListener('DOMContentLoaded', function() {
    let navigation = document.getElementById('navigation');
    const current = document.getElementById('current-item');
    const logo = document.getElementById('logo');

    current.addEventListener('click', function() {
        navigation.classList.toggle('exp');
        logo.classList.toggle('logoinvis');
    });
});

// function reveal(show) {
//     let effect = document.getElementById('hovereffect');
//     if (show) {
//         effect.classList.remove('@media screen and (min-width: 900px) place');
//     } else {
//         effect.classList.add('@media screen and (min-width: 900px) place');
//     }
// }

// document.addEventListener('DOMContentLoaded', function() {
//     let hover = document.getElementById('hoverarea');
//     hover.addEventListener('mouseenter', function() {
//         reveal(true);
//     });
//     padlock.addEventListener('mouseleave,', function () {
//         reveal(false);
//     })
// });