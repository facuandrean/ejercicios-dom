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

// inicio responsive tester

const $formResponsiveTester = d.querySelector(".main-seccion__form-2")

let ventana, ventanaOpen;

// fin responsive tester

// inicio deteccion de conexion del usuario

const $online = d.querySelector('.online'), $offline = d.querySelector('.offline');

// fin deteccion de conexión del usuario

// inicio deteccion de la camara web

const $video = d.querySelector('.main-seccion__webcam')

// fin deteccion de la camara web

// inicio geolocalizacion

const $divGeolocation = d.querySelector('.main-seccion__geolocation');

// fin geolocalizacion


// inicio search filters

// necesitamos el input donde se va a escribir y las tarjetas individuales donde se van a hacer las busquedas textuales.
const $inputSearch = d.querySelector('.card-filter'), $cardsSearchs = d.querySelectorAll('.card');

// fin search filters

// inicio validacion de formulario

const $form_validacion = d.querySelector('.contact-form'), $inputs = d.querySelectorAll('.contact-form [required]');

// fin validacion de formulario

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

    // inicio responsive tester

    if (e.target === $formResponsiveTester.cerrar) {
        if (ventanaOpen == true) {
            ventana.close()
            ventanaOpen = false;
        }
    }

    // fin responsive tester

    // inicio sorteo digital

    if (e.target.matches('#winner-btn')) {
        // reseteamos inserción al html del ganador
        d.querySelector('.ganador').innerHTML = "";

        // obtenemos todos los jugadores
        const $players = d.querySelectorAll('.player');

        // pasamos a un array ese nodeList de todos los jugadores asi accedemos a los métodos de los arrays
        const arrayPlayers = [...$players];

        // inicializamos variable del ganador que va a tener solo la posición
        let ganador = 0;

        // determinamos posicion del ganador
        ganador = Math.floor(Math.random() * arrayPlayers.length)

        // insertamos ganador como ultimo hijo de la sección.
        d.querySelector('.ganador').innerHTML = `<br><br>El ganador del sorteo es: <h4><mark>${arrayPlayers[ganador].outerText}</mark></h4>`
        
    }

    // fin sorteo digital

    // inicio responsive slider

    

    // fin responsive slider
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

    // inicio deteccion de dispositivos 

    const $divUA = d.querySelector(".main-seccion__informacionUA");

    // las siguientes variables nos ayudan a detectar si el usuario nos visita desde un dispositivo x.
    const isMobile = {
        android: () => navigator.userAgent.match(/android/i),
        ios: () => navigator.userAgent.match(/iphone|ipad|ipod/i),
        windows: () => navigator.userAgent.match(/windows phone/i),
        any: function() {
            return this.android() || this.ios() || this.windows();
        }
    };

    const isDesktop = {
        linux: () => navigator.userAgent.match(/linux/i),
        mac: () => navigator.userAgent.match(/mac os/i),
        windows: () => navigator.userAgent.match(/windows nt/i),
        any: function () {
            return this.linux() || this.mac() || this.windows();
        }
    };

    // esta variables nos ayuda a detectar en qué navegador web está el usuario.
    const isBrowser = {
        chrome: () => navigator.userAgent.match(/chrome/i),
        safari: () => navigator.userAgent.match(/safari/i),
        firefox: () => navigator.userAgent.match(/firefox/i),
        opera: () => navigator.userAgent.match(/opera|opera mini/i),
        ie: () => navigator.userAgent.match(/msie|iemobile/i),
        edge: () => navigator.userAgent.match(/edge/i),
        any: function () {
            return (
                this.ie() ||
                this.edge() ||
                this.chrome() ||
                this.safari() ||
                this.firefox() ||
                this.opera()
            );
        }
    };

    // analisis de los objetos:
    // el objeto isMobile tiene 4 propiedades: android, ios, windows, any. Las primeras 3 están declaradas en una arrow function, mientras que la ultima, any, está declarada en una función anónima, y hace referencia a las otras 3 propiedades que tiene el objeto.
    // userAgent.match() recibe una expresión regular que lo que va a hacer es tratar de buscar si en la cadena de texto del userAgent encontró la palabra android, iphone, ipad, ipod o windows phone. La i es una bandera de las expresiones regulares que significa que no se toman mayusculas y minusculas.
    // si lo probamos y ponemos console.log(isMobile.android()) por ejemplo, nos devuelve información, pero si no estamos en un android y activamos este método, entonces nos devuelve null.
    // como vemos, esto nos sirve para crear funcionalidades particulares para cada uno de estos disintos dispositivos.
    // la propiedad any es para que detecte cualquier dispositivo, da igual el que sea, pero que detecte alguno de los definidos anteriormente. Es una funcion anónima por el hecho del this de las arrow function que es el contexto del objeto y no de dentro del objeto, y necesitamos el contexto de dentro del objeto.

    // lo mismo para los otros dos objetos

    $divUA.innerHTML = `
    <ul>
        <li>User Agent: <b>${navigator.userAgent}</b></li>
        <li>Plataforma: <b>${isMobile.any() ? isMobile.any() : isDesktop.any()}</b></li>
        <li>Navegador: <b>${isBrowser.any()}</b></li>
    </ul>
    `

    // <li>Plataforma: <b>${isMobile.any() ? isMobile.any() : isDesktop.any()}</b></li> lo que hace es lo siguiente:
    // pregunta si está en algun dispositivo movil, cualquiera de los 3, si eso es verdad, entonces imprime ese dispositivo, si no lo es, entonces estamos en un escritorio e imprime ese dispositivo.

    // con esto podemos hacer contenido exclusivo:

    if (isBrowser.chrome()) {
        $divUA.innerHTML += `<p><mark>Este contenido solo se ve en Chrome</mark></p>`
    }

    if (isBrowser.firefox()) {
        $divUA.innerHTML += `<p><mark>Este contenido solo se ve en Firefox</mark></p>`
    }

    if (isDesktop.linux()) {
        $divUA.innerHTML += `<p><mark>Descarga nuestro software para Linux</mark></p>`
    }

    if (isDesktop.mac()) {
        $divUA.innerHTML += `<p><mark>Descarga nuestro software para Mac OS</mark></p>`
    }

    if (isDesktop.windows()) {
        $divUA.innerHTML += `<p><mark>Descarga nuestro software para Windows</mark></p>`
    }

    // también podemos hacer redirecciones

    // if (isMobile.android()) {
    //     window.location.href =  "https://jonmircha.com"
    // }

    // fin detección de dispositivos

    // inicio deteccion de la camara web

    if (navigator.mediaDevices.getUserMedia) {
        // si el navegador soporta esta función, entonces valida a true
        navigator.mediaDevices
        .getUserMedia({video: true, audio: false})
        .then((stream) => {
            // si se cumple la promesa, ejecuta lo siguiente:
            $video.srcObject = stream;
            $video.play();
        })
        .catch((err) => {
            $video.insertAdjacentHTML('beforebegin', `<p><mark>${err}</mark></p>`)
            console.log(`Sucedió el siguiente error: ${err}`)
        });

        // como navigator.mediaDevices.getUserMedia({video: true, audio: false}) devuelve una promesa, entonces se ejcuta el then para ver que pasa cuando la promesa se cumple y el catch por si hay algun error y asi capturarlo.
    }

    // fin deteccion de la camara web

    // inicio geolocalizacion

    const options = {
        enableHighAccuracy: true, // le decimos al dispositivo que tome la mejor lectura posible que pueda, es decir, estamos acelerando al hardware para que tome la mejor lectura, pero depende de diferentes factores como el estado de la red, la calidad del gps o tarjeta inalámbrica.
        timeout: 5000, // cuánto tiempo tiene para tomar esa información
        maximunAge: 0 // para que no se guarden en caché las lecturas.
    };

    const success = (position) => {
        // toma la posicion.
        let coords = position.coords;
        $divGeolocation.innerHTML = `<p>Tu posición actual es:</p>
        <ul>
            <li>Latitud: <b>${coords.latitude}</b></li>
            <li>Longitud: <b>${coords.longitude}</b></li>
            <li>Precisión: <b>${coords.accuracy}</b> metros </li>
        </ul>
        <a href="https://www.google.com/maps/@${coords.latitude}, ${coords.longitude}, 10z" target="_black" rel="noopener">Ver en Google Maps</a>
        `
    }

    const error = (err) => {
        // por si ocurre algun error
        $divGeolocation.insertAdjacentHTML('beforebegin', `Error: <p><mark>Codigo de error ${err.code}: ${err.message}</mark></p>`)
    }

    navigator.geolocation.getCurrentPosition(success, error, options);
    
    // fin geolocalizacion

    // inicio validacion de formulario

    $inputs.forEach(input => {
        const $span = d.createElement('span');
        $span.id = input.name;
        $span.textContent = input.title;
        $span.classList.add('contact-form-error', 'none-2');
        input.insertAdjacentElement('afterend', $span);
    });

    // fin de validación de formulario
    
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

d.addEventListener("submit", (e) => {
    if (e.target === $formResponsiveTester) {
        // comparamos si el e.target (objeto o elemento que originó el evento) es igual a la variable de la derecha, es lo mismo que poner e.target.matches('selector de esa variable) para asi poder detectar quien desencadenó el evento
        
        // cancelamos la acción por defecto del formulario, cuya es enviar la información que contenga hacia algun lado. Si no tiene el atributo action con una url, esa información es enviada hacia la misma url donde se ejecuta el envio de los datos y por ende se autorecarga la página con esos datos enviados. Si tiene el atributo action esa información es enviada hacia esa url por ende no se recarga nuestra página. Esto se hace porque estamos controlando ese formulario con javascript, y esto es para que el formulario no autoprocese la página donde se encuentra ya que no tiene un atributo action con una url para que se procese en otra url que no sea nuestra página.
        e.preventDefault();

        ventana = window.open($formResponsiveTester.direccion.value, "ventana", `innerWidth=${$formResponsiveTester.ancho.value}, innerHeight=${$formResponsiveTester.alto.value}`);

        ventanaOpen = true;

    }

    // inicio validacion de formulario

    if (e.target === $form_validacion) {

        const $loader = d.querySelector('.contact-form-loader'), $response = d.querySelector('.contact-form-response');

        $loader.classList.remove('none-2');

        setTimeout(() => {
            $loader.classList.add('none-2');
            $response.classList.remove('none-2');
            $form_validacion.reset();

            setTimeout(() => {
                $response.classList.add('none-2');
            }, 3000);
        }, 3000);
    }

    // fin validacion de formulario
})

// inicio deteccion de conexión del usuario

w.addEventListener('online', (e) => {
    if (navigator.onLine) {
        $online.classList.toggle('none');

        setTimeout(() => {
            $online.style.animationName = 'fadeOut';
        }, 3000);

        $offline.style.animationName = 'fadeIn';

        $offline.classList.add('none');
    }
})

w.addEventListener('offline', (e) => {
    if (!navigator.onLine) {
        $offline.classList.toggle('none');

        setTimeout(() => {
            $offline.style.animationName = 'fadeOut';
        }, 3000);

        $online.style.animationName = 'fadeIn';
        
        $online.classList.add('none');
    }
})

// fin deteccion de conexión del usuario


// inicio search filters

d.addEventListener('keyup', (e) => {
    // necesitamos este evento por el motivo de que cuando el usuario deje de apretar la tecla, se active el evento. Por ejemplo si apreta la tecla r, solamente va a empezar a hacer la búsqueda o va a empezar este evento, cuando el usuario suelte la tecla r.
    if (e.target === $inputSearch) {
        // console.log(e.key) el e,key nos muestra el valor de cada tecla, pero lo que necesitamos es tomar en cuenta la palabra completa por ejemplo.
        // eso lo hacemos de la siguiente manera:
        // console.log(e.target.value)
        // esa palabra es la que debe de buscar en todos los elementos html que le digamos, en este caso son las cards.

        if (e.key === "Escape") {
            e.target.value = "";
        }

        $cardsSearchs.forEach(element => {
            // convertimos los textos de las figures en minusculas y además usamos includes que devuelve un booleano si el texto que tienen entre paréntesis está en el elemento o no.
            element.textContent.toLowerCase().includes(e.target.value) ? element.classList.remove('filter') : element.classList.add('filter');
        });
    }

    // inicio validacion de formulario

    if (e.target.matches('.contact-form [required]')) {
        let $input = e.target, pattern = $input.pattern || $input.dataset.pattern;

        if (pattern && $input.value !== "") {
            let regex = new RegExp(pattern);
            return !regex.exec($input.value) ? d.getElementById($input.name).classList.add('is-active') : d.getElementById($input.name).classList.remove('is-active')
            // si el valor del input no cumple con la expresión regular, se ejecuta ?, pero si cumple, se ejecuta :
        }

        if (!pattern) {
            return $input.value === "" ? d.getElementById($input.name).classList.add('is-active') : d.getElementById($input.name).classList.remove('is-active')
            // si el input value es exactamente igual a nada, muestra el mensaje de error, sino no lo muestres.
        }
    }

    // fin validacion de formulario
});

// fin search filters