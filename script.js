async function carregarProjetos() {
  try {
    const resposta = await fetch("https://api.github.com/users/meaeduarda/repos");
    
    if (!resposta.ok) {
      throw new Error(`Erro ao carregar repositórios: ${resposta.status}`);
    }
    
    const repositorios = await resposta.json();

    const favoritos = [
      "banking_operation",
      "sitelegendary",
      "database_mechanical_workshop",
      "Company_project_DIO"
    ];

    const div = document.getElementById("lista-projetos");
    div.innerHTML = "";

    const filtrados = repositorios.filter(repo => favoritos.includes(repo.name));

    if (filtrados.length === 0) {
      div.innerHTML = "<p>Nenhum projeto encontrado.</p>";
    }

    filtrados.forEach(repo => {
      const item = document.createElement("div");
      item.classList.add("repositorio");
      item.innerHTML = `
        <h3>${repo.name}</h3>
        <p>${repo.description || "Descrição não informada."}</p>
        <a href="${repo.html_url}" target="_blank">Ver no GitHub</a>
      `;
      div.appendChild(item);
    });

  } catch (erro) {
    console.error(erro);
    document.getElementById("lista-projetos").innerHTML = "<p>Erro ao carregar projetos.</p>";
  }
}

carregarProjetos();

