let textEncriptar="";

function Encriptar() {
    let letras;
    let letraA;
    textEncriptar= document.getElementById('TextoEncriptar').value;
    console.log(textEncriptar);
    
    //Controla si el usiario ingresa el Texto a desencriptar mostrando una imagen y un mensaje
    if(textEncriptar==""){
        document.getElementById('imagen').style.display ='block';
        document.getElementById('mensajeTexto').style.display='block';
    }
    else{
        document.getElementById('imagen').style.display ='none';
        document.getElementById('mensajeTexto').style.display='none';
    }

    letras = textEncriptar.split('');
    //Con esta sentencia busca en el arreglo si hay una letra i, devuelve un tru si cumple la condicion o un false si no
    //letraA = letras.includes('i');
    
    letraA = letras.filter(elemento=> elemento =='i')
    console.log(letras);
    console.log(letraA);




    
}


