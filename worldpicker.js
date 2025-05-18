const worlds = [
  "Willow Creek — A fire forced you to flee into the swamp.",
  "Oasis Springs — Betrayed, you found exile in the desert.",
  "Newcrest — Abandoned, you’re starting from nothing on empty land."
];

function rollWorld() {
  const result = worlds[Math.floor(Math.random() * worlds.length)];
  document.getElementById("worldResult").textContent = `🗺️ Your world is: ${result}`;
}
