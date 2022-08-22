// common function for player selection

function selectPlayer(playerId, playerNameId) {
  const playerNameElement = document.getElementById(playerNameId);
  const playerNameValue = playerNameElement.innerText;

  const li = document.createElement("li");
  li.classList.add("text-white", "p-2", "mb-3");
  const playerName = document.createTextNode(playerNameValue);
  li.appendChild(playerName);

  const selectedVElement = document.getElementById("selected-V");
  const liTag = document.getElementsByTagName("li").length;
  if (liTag < 5) {
    selectedVElement.appendChild(li);
    const selectBtnElement = document.getElementById(playerId);
    selectBtnElement.style.backgroundColor = "DodgerBlue";
    selectBtnElement.disabled = true;
  } else {
    alert("Soory, you can't add more then 5 players.");
  }
}

// common function for getting values from input and convert the value into number.

function getInputValueById(elementId) {
  const playerCostElement = document.getElementById(elementId);
  const playerCostString = playerCostElement.value;
  const playerCost = parseInt(playerCostString);
  return playerCost;
}

// common function for getting values from element and convert the value into number.

function getElementValueById(elementId) {
  const playerCostElement = document.getElementById(elementId);
  const playerCostString = playerCostElement.innerText;
  const playerCost = parseInt(playerCostString);
  return playerCost;
}
