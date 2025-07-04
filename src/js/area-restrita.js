$(document).ready(function () {
    // Recuperar usuário logado
    const usuario = JSON.parse(localStorage.getItem('usuarioLogado'));
  
    if (!usuario) {
      window.location.href = 'login.html';
      return;
    }
  
    // Exibir nome do usuário
    $('#nomeUsuario').text(usuario.nome);
  
    // Logout
    $('#logoutBtn').on('click', function () {
      localStorage.removeItem('usuarioLogado');
      window.location.href = 'index.html';
    });
  
    // Gerar QR Code
    $('#gerarQrBtn').on('click', function () {
      $('#qrcode').empty(); // limpa se já tiver um código
      const texto = `Ingresso: ${usuario.nome} - ${usuario.email}`;
      new QRCode(document.getElementById('qrcode'), {
        text: texto,
        width: 150,
        height: 150,
        colorDark: "#ffffff",
        colorLight: "#000000",
      });
    });
  });
  