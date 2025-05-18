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

function typeSkillLine(text, container, speed = 25) {
  const li = document.createElement("li");
  container.appendChild(li);

  let i = 0;
  const interval = setInterval(() => {
    li.textContent += text.charAt(i);

    if (i % 2 === 0 && text.charAt(i) !== " ") {
      const typeSound = document.getElementById("typeSound");
      if (typeSound) {
        const clone = typeSound.cloneNode();
        clone.volume = 0.4;
        clone.play();
      }
    }

    i++;
    if (i >= text.length) {
      clearInterval(interval);
    }
  }, speed);
}

function spinSkill() {
  if (usedSkills.size >= 3) return;

  const indexPool = skills.map((_, i) => i).filter(i => !usedSkills.has(i));
  const index = indexPool[Math.floor(Math.random() * indexPool.length)];
  usedSkills.add(index);

  const result = skills[index];
  const list = document.getElementById("skillResults");

  // Play dice sound
  const rollSound = document.getElementById("rollSound");
  if (rollSound) {
    rollSound.currentTime = 0;
    rollSound.play();
  }

  // Animate typing the skill
  typeSkillLine(result, list);
}
