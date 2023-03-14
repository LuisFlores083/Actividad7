//-------------------------------------------------------------------------------------------------
    // Cambiar fondo de Header y Body
    let cabecera = document.getElementsByTagName('header');
    let cuerpo = document.body;

    function dark(){
        cabecera[0].style.backgroundColor = '#204956';
        cabecera[0].classList.remove('ligero');
        cuerpo[0].style.background('#204956');
    }

    document.getElementById('capa2').addEventListener('click', light);

    function light(){
        cabecera[0].style.backgroundColor = '#fff';
        cabecera[0].classList.add('ligero');
        document.body.style.backgroundColor = '#fff';
    }

    document.getElementById('capa3').addEventListener('click', function(){life()});
    let life = function(){
        cabecera[0].style.backgroundColor = 'lightsteelblue';
        cabecera[0].classList.remove('ligero');
    }


    let dimension = function(){
        let fuente = document.getElementById('tamanio').value;
        document.getElementById('texto').className = 'texto';
        document.getElementById('texto').classList.add(fuente); 
    }


function verMensaje(){
    document.getElementById('mensaje').classList.add('mostrarMensaje');
}

function ocultarMensaje(){
    document.getElementById('mensaje').className = 'mensaje';
}


let cambiarPersonaje = function (personaje, frase){
    document.getElementById('foto').src='image/' + personaje + '.png';
    document.getElementById('mensaje').innerText = frase;

}

let botones = document.getElementsByTagName('button');
console.debug(botones);
let valorLetf = parseInt(document.getElementById('texto').style.left);
botones[0].addEventListener('click', IncrementX);
botones[1].addEventListener('click',DecrementX);

function IncrementX(){
    valorLetf += 20;
    document.getElementById('texto').style.left = valorLetf + 'px';
}
function DecrementX(){
    valorLetf -= 20;
    document.getElementById('texto').style.left = valorLetf  + 'px';
}
