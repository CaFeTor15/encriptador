let textEncriptar="";

function Encriptar() {
    
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
    
    
}


