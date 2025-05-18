const skills = [
  "🎨 Painting – Painter Extraordinaire",
  "✍️ Writing – Bestselling Author",
  "💻 Programming – Computer Whiz (solar required)",
  "🎸 Music – Musical Genius",
  "🔧 Handiness – Nerd Brain",
  "🌿 Gardening – Freelance Botanist",
  "💎 Collecting – The Curator",
  "📷 Photography – Fabulously Wealthy",
  "🗣️ Charisma Hustling – Friend of the World (or Wealthy)"
];

const usedSkills = new Set();

function spinSkill() {
  if (usedSkills.size === 3) return;

  let result;
  do {
    result = skills[Math.floor(Math.random() * skills.length)];
  } while (usedSkills.has(result));

  usedSkills.add(result);
  const ul = document.getElementById("skillResults");
  const li = document.createElement("li");
  li.textContent = result;
  ul.appendChild(li);
}
