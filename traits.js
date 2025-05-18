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

function getTraitsForSkill(skillName) {
  const baseSkill = skillName.replace(/[^\w\s]/gi, "").trim();
  return Object.entries(traitSkillMap)
    .filter(([_, skills]) => skills.includes(baseSkill))
    .map(([trait]) => trait);
}

function rollTraitFromList(traits) {
  if (!traits.length) return "";
  const index = Math.floor(Math.random() * traits.length);
  return traits[index];
}

function rollAllTraitsFromSkills() {
  const rolledSkills = window.rolledSkills || [];
  if (rolledSkills.length < 3) {
    console.warn("⚠️ You must roll 3 skills first!");
    return;
  }

  const traitIds = ["trait1", "trait2", "trait3"];

  rolledSkills.forEach((skill, i) => {
    const dropdown = document.getElementById(traitIds[i]);
    const traitOptions = getTraitsForSkill(skill);
    const chosenTrait = rollTraitFromList(traitOptions);

    if (dropdown) {
      populateTraitDropdown(dropdown, traitOptions);
      dropdown.value = chosenTrait;
      localStorage.setItem(traitIds[i], chosenTrait);
    }
  });
}


