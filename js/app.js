$(document).ready(function(){ //cuando el doc esté listo

    $('#card').hide();
    let i=0;
    if(i==0){
        $('#label').hide();
    }
    $('#boton').click(function(){
        $('#label').show();
    });

    $('#search').keyup(function(){
        let search = $('#search').val();
        console.log(search);
        if(search){
            $.ajax({
                url:'controladores/consultas.php',
                type: 'POST',
                data: {search},
                success: function(respuesta){
                    console.log(respuesta);
                    console.log(typeof(respuesta)); 
                    let tarea=JSON.parse(respuesta);
                    let template="";
                    tarea.forEach(aux => {
                        template+=`<li>
                        ${aux.name}
                        </li>`;
                    });
                    $('#lista').html(template);
                    $('#card').show();
    
                }
            });
        }
    });

    $('#formulario').submit(function(e){
        
        const postData={
            name: $('#name').val(),
            description: $('#description').val()
        };
        
        $.post('controladores/agregar.php',postData,function(respuesta){
            console.log(respuesta);
            $('#formulario').trigger('reset');
        });

        e.preventDefault();



    });

    $.ajax({
        url: 'controladores/tabla.php',
        type: 'GET',
        success:function(respuesta){
            console.log(respuesta);
            let tarea= JSON.parse(respuesta);
            let template="";
            tarea.forEach(t =>{
                template+=`
                <tr>
                    <td>${t.id}</td>
                    <td>${t.name}</td>
                    <td>${t.description}</td>
                </tr>
                `;
            });
            $('#bodytabla').html(template);
        }
    
    });

});