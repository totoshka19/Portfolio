/* Открытие секции VIEW MORE PROJECTS */

function openbox() {
    let display = document.getElementById('box').style.display;
    if(display === 'none') {
        document.getElementById('box').style.display = 'grid';
    } else  {
        document.getElementById('box').style.display = 'none';
    }
}

// function openbox() {
//     let display = document.getElementById('.portfolio__gallery-more').style.display;
//     if(display === 'none') {
//         document.getElementById('.portfolio__gallery-more').style.display = 'grid';
//     } else  {
//         document.getElementById('.portfolio__gallery-more').style.display = 'none';
//     }
// }

/* Запуск и пауза видео */

let videoBtn = document.querySelector('.js-video-btn');
let video = document.querySelector('.js-video');

videoBtn.onclick = function () {
    video.play();
    this.classList.add('hide');
}

video.onclick = function () {
    if (this.paused) {
        this.play();
    } else {
        this.pause();
    }
}

video.addEventListener('ended', videoHandler, false);
video.addEventListener('pause', videoHandler, false);

function videoHandler() {
    videoBtn.classList.remove('hide');
}








