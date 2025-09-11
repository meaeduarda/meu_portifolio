async function carregarProjetos() {
  const resposta = await fetch("https://api.github.com/users/meaeduarda/repos");
  const repositorios = await resposta.json();

  // Lista de nomes dos repositórios que você quer exibir
  const favoritos = [
    "banking_operation",
    "sitelegendary",
    "database_mechanical_workshop",
    "Company_project_DIO",
    "automation_python"
  ];

  const div = document.getElementById("lista-projetos");
  div.innerHTML = "";

  repositorios
    .filter(repo => favoritos.includes(repo.name))
    .forEach(repo => {
      const item = document.createElement("div");
      item.classList.add("repositorio");
      item.innerHTML = `
        <h3>${repo.name}</h3>
        <p>${repo.description || "Descrição não informada."}</p>
        <a href="${repo.html_url}" target="_blank">Ver no GitHub</a>
      `;
      div.appendChild(item);
    });
}

carregarProjetos();
