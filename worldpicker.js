const results = [
  `🎲 1 – Willow Creek: The Ashes of a Lie\n\nThe fire was no accident. You smelled the gasoline before the flames took hold, but no one believed you—not the police, not the insurance adjuster, not even your own family. They said it was faulty wiring, that you’d been careless. That the grief was making you paranoid.\n\nBut you know. Someone wanted you silenced.\n\nYou disappeared after that night, vanishing into the overgrown outskirts of Willow Creek. The swamp is dense, quiet, and mercifully forgetful. Here, you build your life out of rot and ruin—far from the eyes of the world that failed you.\n\nEach mosquito bite reminds you you're still alive. Each day you survive is a middle finger to whoever lit the match.`,

  `🎲 2 – Oasis Springs: The Exile’s Truth\n\nYou used to matter to someone. A friend. A lover. A family.\n\nUntil they turned on you. One betrayal became two, and soon you were the villain in a story you didn’t write. They cut you out of their lives like a tumor, took your name off the lease, wiped your contacts clean. You thought you'd break.\n\nBut the desert has no use for pity.\n\nYou wandered into Oasis Springs with nothing but your fists and a hunger to be reborn. The heat is brutal. The silence, punishing. But there's a kind of freedom in the emptiness.\n\nHere, no one knows your name. Here, you write a new one with blistered hands and sunburnt pride.`,

  `🎲 3 – Newcrest: The Promise That Collapsed\n\nThey promised you everything. A clean start. A government grant. A future.\n\nBut the program dissolved overnight. The land was cleared, the blueprints printed, but the investors pulled out and left you squatting on an empty grid of paved roads and dust. No phone calls returned. No help on the way.\n\nYou stayed anyway. Because hope—crushed and curled like burnt paper—is still hope.\n\nYou pitch your tent on a corner lot where a school was supposed to go. You grow tomatoes in dirt meant for sidewalks. You light candles where they promised LED chandeliers.\n\nYou’re not building what they promised. You’re building what they never could.`
];

let lastIndex = -1;

function rollWorld() {
  let index;
  do {
    index = Math.floor(Math.random() * results.length);
  } while (index === lastIndex);

  lastIndex = index;

  const resultBox = document.getElementById("worldResult");
  resultBox.textContent = results[index];

  // Reset animation
  resultBox.classList.remove("fade-in");
  void resultBox.offsetWidth; // Trigger reflow
  resultBox.classList.add("fade-in");
}

