$(document).ready(function(){ //cuando el doc esté listo
    $('#label').text("Hola mundo");
    let i=0;
    if(i==0){
        $('#label').hide();
    }
    $('#boton').click(function(){
        $('#label').show();
    });
});