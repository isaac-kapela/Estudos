document.getElementById('formularioContato').addEventListener('submit', function (evento) {
    evento.preventDefault(); 
  
    let nome = document.getElementById('nome').value;
    let email = document.getElementById('email').value;
    let mensagem = document.getElementById('mensagem').value;
  
    if (!nome || !email || !mensagem ) {
      alert('Por favor, preencha todos os campos.');
    } else {
      alert('Mensagem enviada com sucesso!');
  
      const subject = "Olá, Isaac! estava no seu portfólio e gostaria de falar com você!";
      const body = `Olá, espero que esteja bem. Me chamo ${nome}. Gostaria de falar com você sobre uma oportunidade de trabalho ${mensagem}`;
  
      const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(
        "kapelajoao4@gmail.com"
      )}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(
        body
      )}&bcc=${encodeURIComponent(email)}`;
  
      window.open(gmailUrl, "_blank");
    }
  });
  
  async function buscarRepositoriosGitHub() {
    const resposta = await fetch('https://api.github.com/users/isaac-kapela/repos');
    const repositorios = await resposta.json();
  
    const secaoProjetos = document.querySelector('.container-projetos');
  
    repositorios.forEach(repositorio => {
      const divRepositorio = document.createElement('div');
      divRepositorio.classList.add('item-projeto');
  
      const conteudoRepositorio = `
        <div class="imagem-projeto">
          <img src="/assets/IMG-placeholder.jpg" alt="${repositorio.name}" />
        </div>
        <h3>${repositorio.name}</h3>
        <p>${repositorio.description || 'Descrição não disponível'}</p>
        <a href="${repositorio.html_url}"><button class="btn-card">Repositório</button></a>
        

      `;
  
      divRepositorio.innerHTML = conteudoRepositorio;
      secaoProjetos.appendChild(divRepositorio);
    });
  }
  
  buscarRepositoriosGitHub();
  