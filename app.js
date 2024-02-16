let textEncriptar=[];

function Encriptar() {
    let texEncriptado;
    //Capturamos el texto en la variable
    textEncriptar= document.getElementById('TextoEncriptar').value;

   //Controla si el usiario ingresa el Texto a desencriptar mostrando una imagen y un mensaje
   if(textEncriptar==""){
        //document.getElementById('imagen').style.display ='block';
        //document.getElementById('mensajeTexto').style.display='block';
        document.getElementById('TextFinal').value = "<= Por favor ingrese el Texto ";
        document.getElementById('TextFinal').style.backgroundImage='url(imagenes/Muñeco.jpg)' ;
        
        
    }
    else{
    // ocultamos la imagen y el mensaje por que ya ahi un mensaje a encriptar
    document.getElementById('TextFinal').style.backgroundImage='none';

    // Creamos Variable LLavesObj como un objeto
        let llavesObj ={
            a:'ai',
            e:'enter',
            i:'imes',
            o:'ober',
            u:'ufat'
        
        };

    // Se realiza la operacion de encriptacion
        texEncriptado=textEncriptar.replace(/a|e|i|o|u/g,function(matched) {
        return llavesObj[matched];});

    // se muestra el resultado de la modificacion 
        document.getElementById('TextFinal').value = texEncriptado;
        document.getElementById('TextoEncriptar').value='';
    }
   
}
// funcion para desencriptar
function Desencriptar(){
        // Variable que guarda el texto desencriptado
        let textoDesencriptado;
        //captura de valor a encriptar
        textEncriptar= document.getElementById('TextoEncriptar').value;
         
        if(textEncriptar==""){
            document.getElementById('TextFinal').value = "<= Por favor ingrese el Texto ";
        document.getElementById('TextFinal').style.backgroundImage='url(imagenes/Muñeco.jpg)' ;
                    
        }
        else{
             // ocultamos la imagen y el mensaje por que ya ahi un mensaje a encriptar
             document.getElementById('TextFinal').style.backgroundImage='none' ;
            
    // Variable de tipo OBJ que contiene la llave para desencriptar
            let llavesDesencrpObj={
                ai:'a',
                enter:'e',
                imes:'i',
                ober:'o',
                ufat:'u'
            }
                //Con la funcion replace  utilizo la variable objeto para que me remplaze todo el string 
                textoDesencriptado=textEncriptar.replace(/ai|enter|imes|ober|ufat/g,function(matched) {
                return llavesDesencrpObj[matched];});
            //Muestro el resultado 
            document.getElementById('TextFinal').value =textoDesencriptado;
            document.getElementById('TextoEncriptar').value='';
            console.log(textoDesencriptado);
                    // Se crea un control en caso de que el texto no tenga encriptación
            if(textEncriptar=textoDesencriptado){
                alert('el mensaje no tiene ninguna encriptacion');
                document.getElementById('TextFinal').value = "<= Por favor ingrese un Texto  que este encriptado ";
                document.getElementById('TextFinal').style.backgroundImage='url(imagenes/Muñeco.jpg)' ;
            }
         }
}

