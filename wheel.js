const skills = [
  "Painting",
  "Writing",
  "Programming",
  "Music",
  "Handiness",
  "Gardening",
  "Collecting Only",
  "Photography",
  "Charisma Hustling"
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
  li.textContent = `🎯 ${result}`;
  ul.appendChild(li);
} 
