$(document).ready(function(){ //cuando el doc esté listo
    tabla();

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
            tabla();
        });

        e.preventDefault();

    });

    function tabla(){
        $.ajax({
            url: 'controladores/tabla.php',
            type: 'GET',
            success:function(respuesta){
                console.log(respuesta);
                let tarea= JSON.parse(respuesta);
                let template="";
                tarea.forEach(t =>{
                    template+=`
                    <tr taskid=${t.id}>
                        <td >${t.id}</td>
                        <td>${t.name}</td>
                        <td>${t.description}</td>
                        <td>
                            <button class="eliminar btn btn-danger">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16"><path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/><path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/></svg>
                            </button>
                        </td>
                    </tr>
                    `;
                });
                $('#bodytabla').html(template);
            }
        });
    }


    $(document).on('click','.eliminar',function(){
        let elemento=$(this)[0].parentElement.parentElement;
        let id=$(elemento).attr('taskid');
        console.log(id);
        /*
        $.ajax({
            url: 'controladores/eliminar.php',
            type:'POST',
            data: id,
            success: function(respuesta){
                console.log(respuesta);
                tabla();
            }
        });*/
        $.post('controladores/eliminar.php',{id},function(respuesta){
            console.log(respuesta);
            tabla();
        });
    });
    

});