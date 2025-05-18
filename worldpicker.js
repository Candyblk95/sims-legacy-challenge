const results = [
  `🎲 1 – Willow Creek: The Ashes of a Lie\n\nThe fire was no accident...`,
  `🎲 2 – Oasis Springs: The Exile’s Truth\n\nYou used to matter to someone...`,
  `🎲 3 – Newcrest: The Promise That Collapsed\n\nThey promised you everything...`
];

let lastIndex = -1;

function rollWorld() {
  let index;
  do {
    index = Math.floor(Math.random() * results.length);
  } while (index === lastIndex);

  lastIndex = index;
  document.getElementById("worldResult").innerText = results[index];
}
