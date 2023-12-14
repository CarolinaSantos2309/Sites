let minutosdisplay = document.getElementById("minutos");
let segundosdisplay = document.getElementById("segundos");
let iniciardisplay = document.getElementById("Iniciar");
let parardisplay = document.getElementById("Parar");
let zerardisplay = document.getElementById("Zerar");

let Minutos = 0;
let segundos = 0;
let cronometroAtivo = false;

function atualizarDispaly() {
    minutosdisplay.textContent = Minutos.toString().padStart(2,"0");
    segundosdisplay.textContent = segundos.toString().padStart(2,"0");
}
function iniciarCronometro() {
    if (!cronometroAtivo) {
        cronometroAtivo = true;
        timer = setInterval(function(){
            segundos++;
            if ( segundos === 60) {
                segundos = 0;
                Minutos++;
                
            }
            atualizarDispaly();
        },1000);
    }
    
}
function pararCronometro() {
    cronometroAtivo = false;
    clearInterval(timer);
    
}
function ZerarCronometro() {
    Minutos = 0;
    segundos = 0;
    atualizarDispaly();
    pararCronometro();
}
iniciardisplay.addEventListener("click", iniciarCronometro);
parardisplay.addEventListener("click", pararCronometro);
zerardisplay.addEventListener("click", ZerarCronometro);