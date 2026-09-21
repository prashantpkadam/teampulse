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

document.getElementById("search-box").addEventListener("input", (e) => {
  const query = e.target.value.toLowerCase();
  document.querySelectorAll("#team-list li").forEach(li => {
    li.style.display = li.textContent.toLowerCase().includes(query) ? "" : "none";
  });
});

function updateCount() {
  const visible = Array.from(document.querySelectorAll("#team-list li"))
    .filter(li => li.style.display !== "none").length;
  document.getElementById("team-count").textContent =
    `Showing ${visible} team member${visible === 1 ? "" : "s"}`;
}
 
// Call once after initial render, then on every search input
document.addEventListener("DOMContentLoaded", () => {
  updateCount();
  document.getElementById("search-box").addEventListener("input", () => {
    setTimeout(updateCount, 0);
  });
});
