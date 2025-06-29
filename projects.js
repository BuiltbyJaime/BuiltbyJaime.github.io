const container = document.getElementById("my-projects-container");

async function getUserRepo() {
  try {
    const res = await fetch(`https://api.github.com/users/builtByJaime/repos`);
    const repos = await res.json();

    repos.forEach(repo => {
      const card = document.createElement("div");
      card.className = "repository-card";
      card.innerHTML = `
        <h2>${repo.name}</h2>
        <p>${repo.description || "No description"}</p>
        <a href="${repo.html_url}" target="_blank">View on GitHub</a>
      `;
      container.appendChild(card);
    });
  } catch (err) {
    console.error("Did not get repos:", err);
  }
}

getUserRepo();
