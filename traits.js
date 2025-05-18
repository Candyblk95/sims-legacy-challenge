// ✅ Base Game Trait → Skill Mapping
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

function rollSkillBasedTraits(skills, count = 3) {
  const pool = [];

  skills.forEach(skill => {
    const baseSkill = skill.replace(/[^\w\s]/gi, "").trim();
    for (const [trait, linkedSkills] of Object.entries(traitSkillMap)) {
      if (linkedSkills.includes(baseSkill)) {
        pool.push(trait);
      }
    }
  });

  const uniqueTraits = [...new Set(pool)];
  const rolled = [];
  while (rolled.length < count && uniqueTraits.length > 0) {
    const i = Math.floor(Math.random() * uniqueTraits.length);
    rolled.push(uniqueTraits[i]);
    uniqueTraits.splice(i, 1);
  }

  return rolled;
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
  const rolledSkills = window.rolledSkills || [];
  if (rolledSkills.length < 1) {
    console.warn("❗ No rolled skills found. Roll skills first.");
    return;
  }

  const traits = rollSkillBasedTraits(rolledSkills, 3);
  applyRolledSkillTraits(traits);
}

document.addEventListener("DOMContentLoaded", () => {
  const rollButton = document.getElementById("rollAllTraits");
  if (rollButton) {
    rollButton.addEventListener("click", rollAllTraitsFromSkills);
  }
});
