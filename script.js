function encriptar(){
    var input= document.getElementById('entradaE').value;
    let palabra=Array.from(input);
    for (var i=0;i<=palabra.length;i++){
        if(palabra[i]=="a"){
            palabra[i]="ai";
        }else if(palabra[i]=="e"){
			palabra[i]="enter";
		}else if(palabra[i]=="i"){	
        palabra[i]="imes";
		}else if(palabra[i]=="o"){
            palabra[i]="ober";
		}else if(palabra[i]=="u"){
            palabra[i]="ufat";
        }
    }
    let palabraFinal =palabra.join("");
    document.getElementById('mensajeE').innerHTML=palabraFinal;
    console.log(palabra);
    console.log(palabraFinal);
}
function desencriptar(){
    var input= document.getElementById('entradaD').value;
    let palabra=Array.from(input);
    let eliminados=[];
    let longitud=palabra.length;
    console.log(palabra.length);
    for (var i=0;i<=palabra.length;i++){
        if(palabra[i]=="a"){
            if(palabra[i+1]=="i"){
                palabra.splice(i+1,1);
                console.log(palabra.length);
            }             
        }
        if(palabra[i]=="e"){
            if(palabra[i+1]=="n"){
                if(palabra[i+2]=="t"){
                    if(palabra[i+3]=="e"){
                        if(palabra[i+4]=="r"){
                            palabra.splice(i+1,4);
                        }
                    }
                }
            }
		}
        if(palabra[i]=="i"){
            if(palabra[i+1]=="m"){
                if(palabra[i+2]=="e"){
                    if(palabra[i+3]=="s"){
                        palabra.splice(i+1,3);
                    }
                }
            }	
		}
        if(palabra[i]=="o"){
            if(palabra[i+1]=="b"){
                if(palabra[i+2]=="e"){
                    if(palabra[i+3]=="r"){
                        palabra.splice(i+1,3);
                    }
                }
            }
		}
        if(palabra[i]=="u"){
            if(palabra[i+1]=="f"){
                if(palabra[i+2]=="a"){
                    if(palabra[i+3]=="t"){
                        palabra.splice(i+1,3);
                    }
                }
            }
        }
    }
    console.log(palabra);
    let palabraFinal =palabra.join("");
    document.getElementById('mensajeD').innerHTML=palabraFinal;
    console.log(palabra);
    console.log(palabraFinal);

}
function soloLetras(e) {
    var key = e.keyCode || e.which,
      tecla = String.fromCharCode(key).toLowerCase(),
      letras = " abcdefghijklmnñopqrstuvwxyz",
      especiales = [8, 37, 39, 46],
      tecla_especial = false;

    for (var i in especiales) {
      if (key == especiales[i]) {
        tecla_especial = true;
        break;
      }
    }

    if (letras.indexOf(tecla) == -1 && !tecla_especial) {
        alert("Ingresar solo letras")
        return false;
    }
    
  }



		//var input= document.querySelector("input")

