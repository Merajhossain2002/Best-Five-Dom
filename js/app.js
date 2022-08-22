// Player-1 onClick.

document
  .getElementById("player-one-select")
  .addEventListener("click", function () {
    selectPlayer("player-one-select", "player-one-name");
  });

// Player-2 onClick.

document
  .getElementById("player-two-select")
  .addEventListener("click", function () {
    selectPlayer("player-two-select", "player-two-name");
  });

// Player-3 onClick.

document
  .getElementById("player-three-select")
  .addEventListener("click", function () {
    selectPlayer("player-three-select", "player-three-name");
  });

// Player-4 onClick.

document
  .getElementById("player-four-select")
  .addEventListener("click", function () {
    selectPlayer("player-four-select", "player-four-name");
  });

// Player-5 onClick.

document
  .getElementById("player-five-select")
  .addEventListener("click", function () {
    selectPlayer("player-five-select", "player-five-name");
  });

// Player-6 onClick.

document
  .getElementById("player-six-select")
  .addEventListener("click", function () {
    selectPlayer("player-six-select", "player-six-name");
  });

// calculate onClick.

document.getElementById("calculate").addEventListener("click", function () {
  const playerCost = getInputValueById("player-cost-input");
  if (isNaN(playerCost)) {
    alert("Please Provide a valid number.");
    return;
  } else {
    const liTag = document.getElementsByTagName("li").length;

    const perPlayerCost = liTag * playerCost;

    const playerExpenses = document.getElementById("expense-amount");
    playerExpenses.innerText = perPlayerCost;
  }
});

// calculate total onClick.

document
  .getElementById("calculate-total")
  .addEventListener("click", function () {
    const playerExpenses = getElementValueById("expense-amount");
    const managerCost = getInputValueById("manager");
    const coachCost = getInputValueById("coach");

    if (isNaN(managerCost)) {
      alert("Please Provide a valid manager cost number.");
      const managerElement = document.getElementById("manager");
      managerElement.value = "";
      return;
    } else if (isNaN(coachCost)) {
      alert("Please Provide a valid coach cost number.");
      const coachElement = document.getElementById("coach");
      coachElement.value = "";
      return;
    } else {
      const calculateTotal = playerExpenses + managerCost + coachCost;

      const total = document.getElementById("total");
      total.innerText = calculateTotal;
    }
  });
