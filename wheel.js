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
window.rolledSkills = []; // ✅ Global store for traits.js

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

  // ✅ Extract base skill and store it globally for traits
  const baseSkill = result.split("–")[0].trim().replace(/[^\w\s]/gi, '').trim();
  if (!window.rolledSkills.includes(baseSkill)) {
    window.rolledSkills.push(baseSkill);
  }

  // Optional: update trait dropdown when all 3 are rolled
  if (window.rolledSkills.length === 3 && typeof updateSkillLinkedTrait === "function") {
    setTimeout(() => updateSkillLinkedTrait(window.rolledSkills), 1000);
  }
}
