function cadastrar() {
        var dados = new FormData( $("#frmCadastro") );
        //obs: o form deve estar com enctype="multipart/form-data"
        
        $.ajax({
            url: 'exemplo.php',
            //dataType: 'html',
            type: 'POST',
            data: dados,
            processData: false,
            contentType: false,
            beforeSend: function() {
                $('#alerta').html('Aguarde...'); 
            },
            complete: function() {
                //$('#alerta').html('Concluído');  
            },
            success: function(data, textStatus) {
                var obj = JSON.parse(data); //ou data = (typeof data === 'string') ? JSON.parse(data) : data;
                obj.forEach(function(v, index) {
                    console.log(v.propriedade);
                });
            },
            error: function(xhr,er) {
                $('#alerta').html('<p class="destaque">Error ' + xhr.status + ' - ' + xhr.statusText + '<br />Tipo de erro: ' + er + '</p>')
            }
        }); 
    }
