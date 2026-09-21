fetch("data/team.json")
  .then(res => res.json())
  .then(renderTeam);

function renderTeam(team) {
  const list = document.getElementById("team-list");
  list.innerHTML = "";
  team.forEach(member => {
    const li = document.createElement("li");
    li.textContent = `${member.name} — ${member.role}: ${member.status}`;
    list.appendChild(li);
  });
}