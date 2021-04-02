import hamburgerMenu from "./script.js";
import {digitalClock, alarm} from "./reloj.js"
import {shortCuts} from "./eventosTeclado.js"
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
})
  
d.addEventListener("keydown", e =>{
    shortCuts(e);
});