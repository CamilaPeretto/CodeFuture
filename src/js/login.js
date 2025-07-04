$(document).ready(function () {
  // CADASTRO
  $('#cadastroForm').on('submit', function (e) {
    e.preventDefault();

    const nome = $('#cadastroNome').val().trim();
    const email = $('#cadastroEmail').val().trim();
    const senha = $('#cadastroSenha').val();
    const confirmar = $('#cadastroConfirmar').val();

    if (!nome || !email || !senha || !confirmar) {
      $('#cadastroMsg').text('Preencha todos os campos.').css('color', 'red');
      return;
    }

    if (senha !== confirmar) {
      $('#cadastroMsg').text('As senhas não coincidem.').css('color', 'red');
      return;
    }

    let usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];

    if (usuarios.find(u => u.email === email)) {
      $('#cadastroMsg').text('Este e-mail já está cadastrado.').css('color', 'red');
      return;
    }

    usuarios.push({ nome, email, senha });
    localStorage.setItem('usuarios', JSON.stringify(usuarios));

    $('#cadastroMsg').text('Cadastro realizado com sucesso! Faça login.').css('color', '#7C3AED');
    $('#cadastroForm')[0].reset(); // limpa o form
  });

  // LOGIN
  $('#loginForm').on('submit', function (e) {
    e.preventDefault();

    const email = $('#loginEmail').val().trim();
    const senha = $('#loginSenha').val();

    const usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];

    const usuario = usuarios.find(u => u.email === email && u.senha === senha);

    if (usuario) {
      localStorage.setItem('usuarioLogado', JSON.stringify(usuario));
      window.location.href = 'area-restrita.html';
    } else {
      $('#loginMsg').text('Email ou senha inválidos.').css('color', 'red');
    }
  });

  // Alternar entre Login e Cadastro
  $('.trocar-para-cadastro').on('click', function () {
    $('#cardLogin').addClass('hidden');
    $('#cardCadastro').removeClass('hidden');
    $('#loginMsg').text('');
  });

  $('.trocar-para-login').on('click', function () {
    $('#cardCadastro').addClass('hidden');
    $('#cardLogin').removeClass('hidden');
    $('#cadastroMsg').text('');
  });
});