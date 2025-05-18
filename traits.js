// Expanded trait associations: each trait is now linked to relevant skills
const traitSkillMap = {
  "Creative": ["Painting", "Music", "Photography"],
  "Art Lover": ["Painting", "Photography"],
  "Bookworm": ["Writing", "Programming"],
  "Loner": ["Writing", "Gardening", "Handiness"],
  "Geek": ["Programming", "Collecting", "Photography"],
  "Genius": ["Programming", "Collecting"],
  "Music Lover": ["Music", "Charisma Hustling"],
  "Clumsy": ["Handiness"],
  "Perfectionist": ["Painting", "Handiness"],
  "Self-Assured": ["Photography", "Charisma Hustling"],
  "Outgoing": ["Charisma Hustling"],
  "Cheerful": ["Charisma Hustling"],
  "Goofball": ["Painting", "Charisma Hustling"],
  "Hot-Headed": ["Programming", "Writing"],
  "Gloomy": ["Writing", "Gardening"],
  "Loves Outdoors": ["Gardening", "Painting", "Photography"],
  "Snob": ["Photography", "Writing"],
  "Ambitious": ["Collecting", "Charisma Hustling"],
  "Lazy": ["Writing"],
  "Neat": ["Handiness", "Gardening"],
  "Materialistic": ["Photography"]
};

// Get all unique traits linked to at least one skill
const allSkillTraits = Object.keys(traitSkillMap);

function rollSkillBasedTraits(skills, count = 3) {
  const pool = [];
  skills.forEach(skill => {
    const name = skill
      .split("–")[0]
      .replace(/[🎨✍️💻🎸🔧🌿🪙📷🗣️]/g, "")
      .trim();

    for (const [trait, mappedSkills] of Object.entries(traitSkillMap)) {
      if (mappedSkills.includes(name)) {
        pool.push(trait);
      }
    }
  });

  const unique = [...new Set(pool)];
  const results = [];
  while (results.length < count && unique.length > 0) {
    const i = Math.floor(Math.random() * unique.length);
    results.push(unique[i]);
    unique.splice(i, 1);
  }
  return results;
}

// Update dropdowns with rolled traits
function applyRolledSkillTraits(traits) {
  const fields = ["trait1", "trait2", "trait3"];
  fields.forEach((id, i) => {
    const el = document.getElementById(id);
    if (el && traits[i]) {
      el.value = traits[i];
      localStorage.setItem(id, traits[i]);
    }
  });
}

function rollAllTraitsFromSkills() {
  const skillList = Array.from(document.querySelectorAll("#skillResults li"))
    .map(el => el.textContent.trim());
  const rolledTraits = rollSkillBasedTraits(skillList);
  applyRolledSkillTraits(rolledTraits);
}

// Add event
document.addEventListener("DOMContentLoaded", () => {
  const button = document.getElementById("rollAllTraits");
  if (button) button.addEventListener("click", rollAllTraitsFromSkills);
});
