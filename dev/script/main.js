$(document).ready(function() {

    $('form').validate({
        rules: {
            subject: {
                required: true
            },
            email: {
                required: true,
                email: true
            },
            message: {
                required: true
            }
        },

        submitHandler: function(form) {
            console.log(form)
        },
        invalidHandler: function(evento, validador) {
            let camposIncorretos = validador.numberOfInvalids();
            if (camposIncorretos) {
                alert(`Existem ${camposIncorretos} campos incorretos`)
            }
        }
    })
});

document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('contact-form');

    form.addEventListener('submit', async function (event) {
        event.preventDefault(); // Impede o envio padrão do formulário

        const formData = new FormData(form);

        try {
            const response = await fetch(form.action, {
                method: 'POST',
                body: formData,
                headers: {
                    'Accept': 'application/json'
                }
            });

            if (response.ok) {
                console.log('Mensagem enviada com sucesso!');
                // Você pode fazer algo aqui após o envio bem-sucedido, como exibir uma mensagem de confirmação
            } else {
                console.error('Erro ao enviar mensagem:', response.statusText);
                // Você pode fazer algo aqui em caso de erro, como exibir uma mensagem de erro ao usuário
            }
        } catch (error) {
            console.error('Erro ao enviar mensagem:', error);
            // Você pode fazer algo aqui em caso de erro, como exibir uma mensagem de erro ao usuário
        }
    });
});

