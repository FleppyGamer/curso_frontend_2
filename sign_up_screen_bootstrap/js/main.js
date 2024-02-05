$(document).ready(function(){
    $('#phone').mask('(00) 00000-0000');
    
    $('#success-button').click(function(){
        $('form').validate({
            rules:{
                name:{
                    required: true,
                },
                email:{
                    required: true,
                },
                phone:{
                    required: true,
                },
                legalInfoConfirm:{
                    required: true,
                },
            },
            messages:{
                name: 'Coloque o seu nome completo.',
                email: 'Coloque o seu e-mail.',
                phone: 'Coloque o seu número de telefone',
                legalInfoConfirm: 'Você deve concordar com os termos para prosseguir.',
            },
        });
    })
})