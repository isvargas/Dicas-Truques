function cadastrar() {
        var dados = $("#frmCadastro").serialize();
        
        $.ajax({
            url: 'exemplo.php',
            dataType: 'html',
            type: 'POST',
            data: dados,
            beforeSend: function() {
                $('#alerta').html('Aguarde...'); 
            },
            complete: function() {
                //$('#alerta').html('Concluído');  
            },
            success: function(data, textStatus) {
               alert(data);
               //retornar dados aqui
            },
            error: function(xhr,er) {
                $('#alerta').html('<p class="destaque">Error ' + xhr.status + ' - ' + xhr.statusText + '<br />Tipo de erro: ' + er + '</p>')
            }
        }); 
    }
