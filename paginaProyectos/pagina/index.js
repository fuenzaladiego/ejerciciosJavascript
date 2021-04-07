import hamburgerMenu from "./script.js";
import {digitalClock, alarm} from "./reloj.js"
import {moveBall,shortCuts} from "./eventosTeclado.js"
import {countdown} from "./countDown.js"
import scrollTopButton from "./botonScroll.js"
import { darkTheme } from "./darkTheme.js";
const d = document;

/*
    El teclado tiene 3 eventos keyUp (tecla suelta)
    keyPress (Siendo presionada)
    keyDown (cuando se presiona)
*/

d.addEventListener("DOMContentLoaded",e => {
    hamburgerMenu(".panel-btn",".panel", ".menu a");
    digitalClock("#reloj","#activar-reloj","#desactivar-reloj");
    alarm("./alarma.mp3","#activar-alarma","#desactivar-alarma");
    countdown("countdown","Nov 30, 2021 11:30:00","Feliz cumple Diego");
    scrollTopButton(".scroll-top-btn");
    darkTheme(".dark-theme-btn","dark-mode");

})
  
d.addEventListener("keydown", e =>{
    shortCuts(e);
    moveBall(e,".ball",".stage");
});