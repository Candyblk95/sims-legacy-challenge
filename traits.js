// Complete Base Game Trait → Skill Mapping
const traitSkillMap = {
  "Active": ["Handiness"],
  "Ambitious": ["Collecting", "Charisma Hustling"],
  "Art Lover": ["Painting", "Photography"],
  "Bookworm": ["Writing"],
  "Bro": ["Music", "Charisma Hustling"],
  "Cheerful": ["Charisma Hustling"],
  "Childish": ["Painting"],
  "Clumsy": ["Programming", "Handiness"],
  "Creative": ["Painting", "Writing", "Music"],
  "Evil": ["Programming"],
  "Family-Oriented": ["Gardening"],
  "Foodie": ["Gardening"],
  "Geek": ["Programming", "Collecting"],
  "Genius": ["Programming", "Writing", "Collecting"],
  "Gloomy": ["Writing", "Gardening", "Painting"],
  "Glutton": ["Gardening"],
  "Good": ["Gardening", "Charisma Hustling", "Collecting"],
  "Goofball": ["Painting", "Charisma Hustling", "Music"],
  "Hates Children": ["Writing"],
  "Hot-Headed": ["Gardening", "Writing"],
  "Insane": ["Programming"],
  "Jealous": ["Charisma Hustling"],
  "Kleptomaniac": ["Collecting"],
  "Lazy": ["Writing"],
  "Loner": ["Writing", "Gardening", "Handiness", "Collecting"],
  "Loves Outdoors": ["Painting", "Gardening", "Handiness", "Collecting", "Photography"],
  "Loyal": ["Gardening"],
  "Materialistic": ["Handiness", "Collecting", "Photography"],
  "Mean": ["Charisma Hustling"],
  "Music Lover": ["Music"],
  "Neat": ["Gardening", "Handiness"],
  "Outgoing": ["Charisma Hustling", "Photography", "Music"],
  "Perfectionist": ["Painting", "Writing", "Photography", "Handiness"],
  "Romantic": ["Photography", "Music", "Charisma Hustling"],
  "Self-Assured": ["Photography", "Charisma Hustling", "Handiness", "Music"],
  "Slob": ["Handiness"],
  "Snob": ["Photography", "Collecting", "Writing"]
};

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

document.addEventListener("DOMContentLoaded", () => {
  const button = document.getElementById("rollAllTraits");
  if (button) button.addEventListener("click", rollAllTraitsFromSkills);
});
