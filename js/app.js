document
  .getElementById("player-one-select")
  .addEventListener("click", function () {
    selectPlayer("player-one-select", "player-one-name");
  });
document
  .getElementById("player-two-select")
  .addEventListener("click", function () {
    selectPlayer("player-two-select", "player-two-name");
  });
document
  .getElementById("player-three-select")
  .addEventListener("click", function () {
    selectPlayer("player-three-select", "player-three-name");
  });
document
  .getElementById("player-four-select")
  .addEventListener("click", function () {
    selectPlayer("player-four-select", "player-four-name");
  });
document
  .getElementById("player-five-select")
  .addEventListener("click", function () {
    selectPlayer("player-five-select", "player-five-name");
  });
document
  .getElementById("player-six-select")
  .addEventListener("click", function () {
    selectPlayer("player-six-select", "player-six-name");
  });

document.getElementById("calculate").addEventListener("click", function () {
  const playerCost = getInputValueById("player-cost-input");

  const liTag = document.getElementsByTagName("li").length;

  const perPlayerCost = liTag * playerCost;

  const playerExpenses = document.getElementById("expense-amount");
  playerExpenses.innerText = perPlayerCost;
});

document
  .getElementById("calculate-total")
  .addEventListener("click", function () {
    const playerExpenses = getElementValueById("expense-amount");
    const managerCost = getInputValueById("manager");
    const coachCost = getInputValueById("coach");

    const calculateTotal = playerExpenses + managerCost + coachCost;

    const total = document.getElementById("total");
    total.innerText = calculateTotal;
  });
