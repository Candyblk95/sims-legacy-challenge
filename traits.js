const baseGameTraits = [
  "Active", "Cheerful", "Creative", "Genius", "Gloomy", "Goofball", "Hot-Headed", "Romantic", "Self-Assured", "Unflirty",
  "Bookworm", "Foodie", "Geek", "Glutton", "Lazy", "Materialistic", "Music Lover", "Neat", "Perfectionist", "Slob", "Snob",
  "Art Lover", "Ambitious", "Childish", "Clumsy", "Dance Machine", "Loner", "Mean", "Outgoing"
];

const skillToTraits = {
  "Painting": ["Creative", "Art Lover"],
  "Writing": ["Bookworm", "Loner"],
  "Programming": ["Geek", "Genius"],
  "Music": ["Music Lover", "Creative"],
  "Handiness": ["Perfectionist", "Clumsy"],
  "Gardening": ["Loner", "Gloomy"],
  "Collecting": ["Genius", "Ambitious"],
  "Photography": ["Self-Assured", "Snob"],
  "Charisma Hustling": ["Outgoing", "Cheerful"]
};

function populateTraitDropdown(select, options) {
  select.innerHTML = "";
  options.forEach(trait => {
    const opt = document.createElement("option");
    opt.value = trait;
    opt.textContent = trait;
    select.appendChild(opt);
  });
}

function rollTrait(selectId) {
  const trait = baseGameTraits[Math.floor(Math.random() * baseGameTraits.length)];
  document.getElementById(selectId).value = trait;
  localStorage.setItem(selectId, trait);
}

function updateSkillLinkedTrait(skillNames) {
  const trait3 = document.getElementById("trait3");
  const relatedTraits = new Set();

  skillNames.forEach(skill => {
    const baseSkill = skill.split("–")[0].trim().replace("🎨", "").replace("✍️", "").replace("💻", "").replace("🎸", "").replace("🔧", "").replace("🌿", "").replace("🪙", "").replace("📷", "").replace("🗣️", "").trim();
    (skillToTraits[baseSkill] || []).forEach(trait => relatedTraits.add(trait));
  });

  populateTraitDropdown(trait3, Array.from(relatedTraits));
}

document.addEventListener("DOMContentLoaded", () => {
  // Populate all trait dropdowns
  ["trait1", "trait2"].forEach(id => populateTraitDropdown(document.getElementById(id), baseGameTraits));

  // Load saved data
  document.getElementById("simName").value = localStorage.getItem("simName") || "";
  ["trait1", "trait2", "trait3"].forEach(id => {
    const el = document.getElementById(id);
    if (localStorage.getItem(id)) {
      el.value = localStorage.getItem(id);
    }
    el.addEventListener("change", () => localStorage.setItem(id, el.value));
  });

  document.getElementById("simName").addEventListener("input", e => {
    localStorage.setItem("simName", e.target.value);
  });
});
