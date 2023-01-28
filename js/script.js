// Usamos la delegación de eventos.

const d = document;
const w = window;

// inicio del menu de hamburguesa

const $btnHamburguer = d.querySelector(".hamburger"), 
        $ul = d.querySelector('.header-nav__ul');

// fin del menu de hamburguesa

// inicio del reloj digital

let clock;

const $form = d.querySelector('.main-seccion__form'), $reloj = d.querySelector('.main-seccion__reloj'), $btnShow = d.getElementById('show');

// fin del reloj digital

// inicio de alarma

const $audio = d.querySelector("#audio"), $btnOn = d.querySelector("#alarmOn");

// fin de alarma

// seccion 2: mover la bolita
const $bolita = d.querySelector('.m-s-container-bolita');
const $containerBolita = d.querySelector('.main-seccion__container');
let x = 0, y = 0;

// btn para scroll top
const $scrollBtn = d.querySelector(".btn-scroll__top");

// inicio tema dark-light con localStorage

const $btnMoon = d.querySelector("#moon"), 
$btnSun = d.querySelector("#sun"), 
$selectors = d.querySelectorAll("[data-dark]"),
$selectors2 = d.querySelectorAll("[data-dark-2]");;

const lightMode = () => {
    $btnMoon.removeAttribute("style");
    $btnSun.setAttribute("style", 'display: none');

    $selectors.forEach(el => {
        el.classList.remove("dark-mode");
        el.classList.add("light-mode");
    });

    $selectors2.forEach(el => {
        el.classList.remove("dark-mode-2");
        el.classList.add("light-mode-2");
    });
};

const darkMode = () => {
    $btnMoon.setAttribute("style", 'display: none');
    $btnSun.removeAttribute("style");

    $selectors.forEach(el => {
        el.classList.add("dark-mode");
        el.classList.remove("light-mode");
    });

    $selectors2.forEach(el => {
        el.classList.add("dark-mode-2");
        el.classList.remove("light-mode-2");
    });
};

// fin tema dark-light con localStorage


// inicio del responsible responsive design

const $maps = d.getElementById('maps');

const contenidoMobile = ($elemento, texto) => {
    $elemento.innerHTML = texto;
}

const contenidoDesktop = ($elemento, texto) => {
    $elemento.innerHTML = texto;
}

// fin del responsible responsive design


d.addEventListener('click', (e) => {

    // inicio del menu de hamburguesa

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

    // inicio scrolltop boton

    if (e.target.matches(".btn-scroll__top")) {
        window.scrollTo({
            behavior: "smooth",
            top: 0
        })
    }
    
    // fin scrolltop boton

    // inicio boton tema dark-light con localStorage

    if (e.target.matches("#moon")) {
        darkMode();
        localStorage.setItem("tema","dark");
    } else if (e.target.matches("#sun")) {
        lightMode();
        localStorage.setItem("tema","light");
    }

    // fin bototn tema dark-light con localStorage
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

    const DATE_TARGET = new Date('Feb 07, 2023 00:00:00');

    const $countdown = d.querySelector('.main-seccion__countdown');
    const SPAN_DAYS = document.querySelector('span#days');
    const SPAN_HOURS = document.querySelector('span#hours');
    const SPAN_MINUTES = document.querySelector('span#minutes');
    const SPAN_SECONDS = document.querySelector('span#seconds');
    
    let REMAINING_DAYS = 0, REMAINING_HOURS = 0, REMAINING_MINUTES = 0, REMAINING_SECONDS = 0;
    
    // miliseguns para los cálculos
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

        if (DURATION <= 0) {
            clearInterval(countdown)
            $countdown.textContent = '¡Feliz Cumpleaños!';
        }

    }, MILLISECONDS_OF_A_SECOND);

    // fin de countdown

    // inicio tema dark-light con localStorage

    if (localStorage.getItem("tema") === null) {
        // si no existe una variable del localstorage, la creo con un valor por defecto
        localStorage.setItem("tema", "light");
    }

    if (localStorage.getItem("tema") === "light") {
        lightMode();
    } else if (localStorage.getItem("tema") === "dark") {
        darkMode();
    }

    // fin tema dark-light con localStorage

        // inicio responsible responsive design
    
        if (window.matchMedia("(min-width: 1024px)").matches) {
            /* La pantalla tiene al menos 1024 píxeles de ancho */

            contenidoDesktop($maps, `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d20358508.3485435!2d-120.58833439443815!3d60.37122453692365!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4b0d03d337cc6ad9%3A0x9968b72aa2438fa5!2zQ2FuYWTDoQ!5e0!3m2!1ses!2sar!4v1674861102205!5m2!1ses!2sar" width="650" height="300" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`)
            
        } else {
            /* La pantalla tiene menos de 1024 píxeles de ancho */
            contenidoMobile($maps, `<a href="https://goo.gl/maps/7Ad1bxKcYUwWgFm27" target="_blank"> Ver Mapa </a>`);
            
        }
        
        // fin responsible responsive design

})


d.addEventListener('scroll', (e) => {

    // inicio boton scroll top

    if (window.scrollY >= 650) {
        $scrollBtn.style.opacity = '1';
        $scrollBtn.classList.remove("hidden");
    } else {
        $scrollBtn.style.opacity = '0';
        $scrollBtn.classList.add("hidden");
    }

    // fin boton scroll top

});

w.addEventListener('resize' , (e) => {

    // inicio responsible responsive design
    
    if (window.matchMedia("(min-width: 1024px)").matches) {
        /* La pantalla tiene al menos 1024 píxeles de ancho */
        contenidoDesktop($maps, `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d20358508.3485435!2d-120.58833439443815!3d60.37122453692365!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4b0d03d337cc6ad9%3A0x9968b72aa2438fa5!2zQ2FuYWTDoQ!5e0!3m2!1ses!2sar!4v1674861102205!5m2!1ses!2sar" width="auto" height="auto" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`)
    } else {
        /* La pantalla tiene menos de 1024 píxeles de ancho */
        contenidoMobile($maps, `<a href="https://goo.gl/maps/7Ad1bxKcYUwWgFm27" target="_blank"> Ver Mapa </a>`);
    }
    
    // fin responsible responsive design

});
