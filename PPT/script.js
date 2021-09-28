//var opc = ["piedra", "papel", "tijera"];
var opc = [0, 1, 2];
var maquina;

function aleatorio(minimo, maximo){
    var numero = Math.floor(Math.random() * (maximo - minimo +1) + minimo);
    return numero;
}

function usuario(usuario){
    usuario = parseInt(usuario);
    maquina = aleatorio(0,2);

    if(usuario == 0){
        if(opc[maquina] == 1){ 
            document.getElementById('efecto').innerHTML ='<h1>¡Perdiste!</h1> <h3>La maquina eligio papel y tu piedra.</h3>';
        }else{
            if(opc[maquina] == 2){
                document.getElementById('efecto').innerHTML ='<h1>¡Ganaste!</h1> <h3>La maquina eligio tijera y tu piedra.</h3>';
            }else{
                if(opc[maquina] == 0){
                    document.getElementById('efecto').innerHTML ='<h1>¡Empate!</h1> <h3>Ambos eligieron piedra.</h3>';
                }
            }
        } 
    }

    if(usuario == 1){
        if(opc[maquina] == 2){
            document.getElementById('efecto').innerHTML ='<h1>¡Perdiste!</h1> <h3>La maquina eligio tijera y tu papel.</h3>';
        }else{
            if(opc[maquina] == 0){
                document.getElementById('efecto').innerHTML ='<h1>¡Ganaste!</h1> <h3>La maquina eligio piedra y tu papel.</h3>';
                
            }else{
                if(opc[maquina] == 1){
                    document.getElementById('efecto').innerHTML ='<h1>¡Empate!</h1> <h3>Ambos eligieron papel.</h3>'; 
                }
            }
        }
    }

    if(usuario == 2) { 
        if(opc[maquina] == 1){
            document.getElementById('efecto').innerHTML ='<h1>¡Ganaste!</h1> <h3>La maquina eligio papel y tu tijera.</h3>';
        
        }else{
            if(opc[maquina] == 0){
                document.getElementById('efecto').innerHTML ='<h1>¡Perdiste!</h1> <h3>La maquina eligio piedra y tu tijera.</h3>'; 
            }else{
                if(opc[maquina] == 2) {
                    document.getElementById('efecto').innerHTML ='<h1>¡Empate!</h1> <h3>Ambos eligieron tijera.</h3>';
                }
            }
        }
    }

    document.getElementById('efecto').style.display = "";
}



function quitarEfecto() {
    document.getElementById('efecto').style.display = "none";
}