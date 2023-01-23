// Usamos la delegación de eventos.

const d = document;

// seccion 1: reloj
let clock;

// seccion 2: mover la bolita
const $bolita = d.querySelector('.m-s-container-bolita');
const $containerBolita = d.querySelector('.main-seccion__container');
let x = 0, y = 0;

d.addEventListener('click', (e) => {

    // inicio del menu de hamburguesa

    const $btnHamburguer = d.querySelector(".hamburger"), 
          $ul = d.querySelector('.header-nav__ul');

    if ((e.target.matches('.hamburger')) || (e.target.matches('.hamburger span'))) {
        
        if ($btnHamburguer.classList.contains('is-active')) {
            $btnHamburguer.classList.toggle('is-active');
            $ul.classList.toggle('none');
            $ul.style.transform = 'translate(-150%, 0%)';
        } else {
            $btnHamburguer.classList.toggle('is-active');
            $ul.classList.toggle('none');
            $ul.style.transform = 'translate(0%, 0%)';
        }
        
    }
    
    if ((e.target.matches('.header-nav__ul')) || (e.target.matches('.header-nav__ul a'))) {
        
        $btnHamburguer.classList.toggle('is-active');
        
        if ($ul.classList.contains('none')) {
            $ul.style.transform = 'translate(-150%, 0%)';
        } else {
            $ul.style.transform = 'translate(-150%, 0%)';
        }

    }

    // fin del menu de hamburguesa

    // inicio reloj digital

    const $form = d.querySelector('.main-seccion__form'), $reloj = d.querySelector('.main-seccion__reloj'), $btnShow = d.getElementById('show');
    
    if (e.target.matches('.main-seccion__form #show')) {

        clock = setInterval(() => {
            let time = new Date().toLocaleTimeString();
            $reloj.innerHTML = `<h3>${time}</h3>`;
        }, 1000);

        $btnShow.setAttribute('disabled', 'true');
        $btnShow.style.cursor = 'not-allowed';


        $form.style.transform = 'translateY(20%)';
        setTimeout(() => {
            $reloj.style.transform = 'translate(0%, 0%)';
        }, 1000);
        
    } 
    
    if (e.target.matches('.main-seccion__form #occult')){
        clearInterval(clock);
        $reloj.innerHTML = null;
        if ($btnShow.hasAttribute('disabled')) {
            $btnShow.removeAttribute('disabled');
            $btnShow.style.cursor = 'pointer';
        }
        
        $form.style.transform = 'translateY(0%)';
        $reloj.style.transform = 'translate(-150%, 0%)';

    }

    // fin del reloj digital

    // inicio de alarma

    const $audio = d.querySelector("#audio"), $btnOn = d.querySelector("#alarmOn");

    if (e.target.matches('#alarmOn')) {

        $audio.play();
        $audio.setAttribute('loop', 'loop');

        $btnOn.disabled = true;
        $btnOn.style.cursor = 'not-allowed';

    } 
    
    if (e.target.matches('#alarmOff')){

        $audio.pause();
        $audio.currentTime = 0;
        $btnOn.disabled = false;
        $btnOn.style.cursor = 'pointer';

    }

    // fin de alarma

    // inicio de mover la bolita

    if (e.target.matches('.m-s-buttons-left')) {
        if ($bolita.getBoundingClientRect().left > $containerBolita.getBoundingClientRect().left) x--;
    }
    if (e.target.matches('.m-s-buttons-top')) {
        if ($bolita.getBoundingClientRect().top > $containerBolita.getBoundingClientRect().top) y--;
    }
    if (e.target.matches('.m-s-buttons-bottom')) {
        if ($bolita.getBoundingClientRect().bottom < $containerBolita.getBoundingClientRect().bottom) y++;
    }
    if (e.target.matches('.m-s-buttons-right')) {
        if ($bolita.getBoundingClientRect().right < $containerBolita.getBoundingClientRect().right) x++;
    }

    $bolita.style.transform = `translate(${x*10}px, ${y*10}px)`;

    // fin de mover la bolita
    
})

d.addEventListener('keydown', (e) => {
    
    // inicio mueve la bolita

    switch (e.keyCode) {
        case 37:
            e.preventDefault();
            if ($bolita.getBoundingClientRect().left > $containerBolita.getBoundingClientRect().left) x--;
            break;
        case 38:
            e.preventDefault();
            if ($bolita.getBoundingClientRect().top > $containerBolita.getBoundingClientRect().top) y--;
            break;                
        case 39:
            e.preventDefault();
            if ($bolita.getBoundingClientRect().right < $containerBolita.getBoundingClientRect().right) x++;
            break;
        case 40:
            e.preventDefault();
            if ($bolita.getBoundingClientRect().bottom < $containerBolita.getBoundingClientRect().bottom) y++;
            break;
                        
        default:
            break;
    }
    
    $bolita.style.transform = `translate(${x*10}px, ${y*10}px)`;

    // fin mueve la bolita
    
});

d.addEventListener('DOMContentLoaded', (e) => {

        // inicio de countdown

    // variables

    const DATE_TARGET = new Date('Jan 23, 2023 15:00:00');

    const $countdown = d.querySelector('.main-seccion__countdown');
    const SPAN_DAYS = document.querySelector('span#days');
    const SPAN_HOURS = document.querySelector('span#hours');
    const SPAN_MINUTES = document.querySelector('span#minutes');
    const SPAN_SECONDS = document.querySelector('span#seconds');
    
    let REMAINING_DAYS = 0, REMAINING_HOURS = 0, REMAINING_MINUTES = 0, REMAINING_SECONDS = 0;
    
    // Milliseconds for the calculations
    const MILLISECONDS_OF_A_SECOND = 1000;
    const MILLISECONDS_OF_A_MINUTE = MILLISECONDS_OF_A_SECOND * 60;
    const MILLISECONDS_OF_A_HOUR = MILLISECONDS_OF_A_MINUTE * 60;
    const MILLISECONDS_OF_A_DAY = MILLISECONDS_OF_A_HOUR * 24;

    let countdown = setInterval(() => {
        // fecha de hoy
        const NOW = new Date()

        // calculamos los milisegundos que faltan para que la fecha de hoy sea la fecha limite (date_target)
        const DURATION = DATE_TARGET - NOW;

        // calculamos los dias restantes
        REMAINING_DAYS = Math.floor(DURATION / MILLISECONDS_OF_A_DAY);

        // calculamos las horas restantes
        REMAINING_HOURS = Math.floor((DURATION % MILLISECONDS_OF_A_DAY) / MILLISECONDS_OF_A_HOUR);

        // calculamos los minutos restantes
        REMAINING_MINUTES = Math.floor((DURATION % MILLISECONDS_OF_A_HOUR) / MILLISECONDS_OF_A_MINUTE);
        
        // calculamos los segundos restantes
        REMAINING_SECONDS = Math.floor((DURATION % MILLISECONDS_OF_A_MINUTE) / MILLISECONDS_OF_A_SECOND);

        // los agregamos todos al HTML
        SPAN_DAYS.textContent = REMAINING_DAYS;
        SPAN_HOURS.textContent = REMAINING_HOURS;
        SPAN_MINUTES.textContent = REMAINING_MINUTES;
        SPAN_SECONDS.textContent = REMAINING_SECONDS;

        if ((REMAINING_DAYS <= 0) && (REMAINING_HOURS <= 0) && (REMAINING_MINUTES <= 0) && (REMAINING_SECONDS <= 0)) {
            clearInterval(countdown)
            $countdown.textContent = '¡Feliz Cumpleaños!';
        }

    }, MILLISECONDS_OF_A_SECOND);

    // fin de countdown

})