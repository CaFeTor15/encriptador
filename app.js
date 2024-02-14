let textEncriptar=[];
let llavesObj ={
    a:'ai',
    e:'enter',
    i:'imes',
    o:'ober',
    u:'ufat'

};

let llavesDesencrpObj={
    ai:'a',
    enter:'e',
    imes:'i',
    ober:'o',
    ufat:'u'
}

function Encriptar() {
    let texEncriptado;
   //Controla si el usiario ingresa el Texto a desencriptar mostrando una imagen y un mensaje
   if(textEncriptar==""){
        document.getElementById('imagen').style.display ='block';
        document.getElementById('mensajeTexto').style.display='block';
    }
    else{
        document.getElementById('imagen').style.display ='none';
        document.getElementById('mensajeTexto').style.display='none';
    }
    textEncriptar= document.getElementById('TextoEncriptar').value;
    console.log(textEncriptar);
    texEncriptado=textEncriptar.replace(/a|e|i|o|u/g,function(matched) {
        return llavesObj[matched];});
        console.log(texEncriptado);
}

function Desencriptar(){
    let textoDesencriptado;
    textEncriptar= document.getElementById('TextoEncriptar').value;
    textoDesencriptado=textEncriptar.replace(/ai|enter|imes|ober|ufat/g,function(matched) {
        return llavesDesencrpObj[matched];});
        console.log(textoDesencriptado);
}

