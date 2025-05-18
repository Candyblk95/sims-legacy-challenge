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

// Populate a dropdown with a list of trait options
function populateTraitDropdown(select, options) {
  select.innerHTML = "";
  options.forEach(trait => {
    const opt = document.createElement("option");
    opt.value = trait;
    opt.textContent = trait;
    select.appendChild(opt);
  });
}

// Randomly select a trait from the base list and assign to a dropdown
function rollTrait(selectId) {
  const trait = baseGameTraits[Math.floor(Math.random() * baseGameTraits.length)];
  const select = document.getElementById(selectId);
  if (select) {
    select.value = trait;
    localStorage.setItem(selectId, trait);
  }
}

// Called by skill spinner to update trait 3 options based on skill links
function updateSkillLinkedTrait(skillNames) {
  const trait3 = document.getElementById("trait3");
  const relatedTraits = new Set();

  skillNames.forEach(skill => {
    const baseSkill = skill
      .split("–")[0]
      .replace(/[🎨✍️💻🎸🔧🌿🪙📷🗣️]/g, "")
      .trim();

    (skillToTraits[baseSkill] || []).forEach(trait => relatedTraits.add(trait));
  });

  populateTraitDropdown(trait3, Array.from(relatedTraits));
}

// Roll one of the options currently shown in the Trait 3 dropdown
function rollSkillTrait() {
  const trait3Select = document.getElementById("trait3");
  if (!trait3Select || trait3Select.options.length === 0) return;

  const options = Array.from(trait3Select.options);
  const random = options[Math.floor(Math.random() * options.length)];

  trait3Select.value = random.value;
  localStorage.setItem("trait3", random.value);
}

// Initial setup
document.addEventListener("DOMContentLoaded", () => {
  // Populate Trait 1 & Trait 2 with all base traits
  ["trait1", "trait2"].forEach(id => {
    const el = document.getElementById(id);
    if (el) populateTraitDropdown(el, baseGameTraits);
  });

  // Load saved values
  document.getElementById("simName").value = localStorage.getItem("simName") || "";

  ["trait1", "trait2", "trait3"].forEach(id => {
    const el = document.getElementById(id);
    if (el && localStorage.getItem(id)) {
      el.value = localStorage.getItem(id);
    }

    if (el) {
      el.addEventListener("change", () => {
        localStorage.setItem(id, el.value);
      });
    }
  });

  document.getElementById("simName").addEventListener("input", (e) => {
    localStorage.setItem("simName", e.target.value);
  });
});
