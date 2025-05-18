const skills = [
  "🎨 Painting – Painter Extraordinaire",
  "✍️ Writing – Bestselling Author",
  "💻 Programming – Computer Whiz (solar required)",
  "🎸 Music – Musical Genius",
  "🔧 Handiness – Nerd Brain",
  "🌿 Gardening – Freelance Botanist",
  "🪙 Collecting – The Curator",
  "📷 Photography – Fabulously Wealthy",
  "🗣️ Charisma Hustling – Friend of the World (or Wealthy)"
];

const usedSkills = new Set();

function typewriterEffect(text, element, speed = 25) {
  element.textContent = "";
  let i = 0;

  const interval = setInterval(() => {
    element.textContent += text.charAt(i);

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

  const availableIndexes = skills
    .map((_, i) => i)
    .filter(i => !usedSkills.has(i));

  const index = availableIndexes[Math.floor(Math.random() * availableIndexes.length)];
  usedSkills.add(index);

  const result = skills[index];
  const list = document.getElementById("skillResults");

  // Create new list item
  const li = document.createElement("li");
  list.appendChild(li);

  // Play dice sound
  const rollSound = document.getElementById("rollSound");
  if (rollSound) {
    rollSound.currentTime = 0;
    rollSound.play();
  }

  // Type out the result
  typewriterEffect(result, li, 25);

  // Check if all 3 skills are rolled, then update Trait 3 dropdown
  setTimeout(() => {
    const rolledSkills = Array.from(document.querySelectorAll("#skillResults li")).map(li => li.textContent);
    if (rolledSkills.length === 3 && typeof updateSkillLinkedTrait === "function") {
      updateSkillLinkedTrait(rolledSkills);
    }
  }, 1000); // wait for typing to complete before updating
}
