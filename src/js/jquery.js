$(document).ready(function() {
    // Mascara no telefone
    $('#telefone').mask('(00) 00000-0000');

    // Validação de email simples
    $('#email').on('input', function() {
      const emailVal = $(this).val();
      if (!emailVal.includes('@')) {
        $(this).css('border-color', 'red');
      } else {
        $(this).css('border-color', '#7C3AED');
      }
    });

    // Placeholder interativo
    $('input, textarea').focus(function() {
      $(this).attr('data-placeholder', $(this).attr('placeholder'));
      $(this).attr('placeholder', '');
    }).blur(function() {
      $(this).attr('placeholder', $(this).attr('data-placeholder'));
    });

    // Feedback visual no envio
    $('#formulario').on('submit', function() {
      $('button[type="submit"]').text('Enviando...').prop('disabled', true);
      $('#mensagem-enviada').fadeIn().delay(3000).fadeOut();
    });
  });