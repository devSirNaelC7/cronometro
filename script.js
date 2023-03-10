let cronometro = document.getElementById("display")
let iniciar = document.getElementById("btnIniciar")
let pausar = document.getElementById("btnPausar")
let reiniciar = document.getElementById("btnReiniciar")


let tempoInicial = 0;
let tempoDecorrido = 0;
let tempoAtual = 0;
let pausado = true;

let intervaloId;

let hrs = 0;
let mins = 0;
let segs = 0;

iniciar.addEventListener("click", () => {
    if(pausado){
        pausado = false;
        tempoInicial = Date.now() - tempoDecorrido;
        intervaloId = setInterval(updateTime, 75);
    }
});
pausar.addEventListener("click", () => {
    if(!pausado){
        pausado = true;
        tempoDecorrido = Date.now() - tempoInicial;
        clearInterval(intervaloId);
    }
});
reiniciar.addEventListener("click", () => {
     pausado = true;
     clearInterval(intervaloId);
     tempoInicial = 0;
     tempoAtual = 0;
     tempoDecorrido = 0;
     hrs = 0;
     mins = 0;
     segs = 0;
     cronometro.textContent = "00:00:00";
});


function updateTime(){
    tempoDecorrido = Date.now() - tempoInicial;
    segs = Math.floor((tempoDecorrido / 1000) % 60 );
    mins = Math.floor((tempoDecorrido / (1000*60)) % 60 );
    hrs = Math.floor((tempoDecorrido / (1000 * 60 * 60)) % 60 );

    segs = preenchimento(segs);
    mins = preenchimento(mins);
    hrs = preenchimento(hrs);

    cronometro.textContent = `${hrs}:${mins}:${segs}`;

    function preenchimento(unidade){
        return (("0") + unidade).length > 2 ? unidade : "0" + unidade;
    }

}

// iniciar.addEventListener("click", ()=>{
//     console.log("Iniciando...")
// })

// pausar.addEventListener("click", ()=>{
//     console.log("Pausando...")
// })

// reiniciar.addEventListener("click", ()=>{
//     console.log("Reiniciando...")
// })


