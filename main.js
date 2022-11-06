function createGame(player1, hour, player2) {
  return `
    <li>
        <img
            src="./assets/icon-${player1}.svg"
            alt="bandeira da Suíça"
        />
        <strong>${hour}</strong>
        <img
            src="./assets/icon-${player2}.svg"
            alt="bandeira de Camarões"
        />
    </li>
    `;
}

let delay = -0.3;
function createCard(date, day, games) {
  delay = delay + 0.3;
  return `
    <div class="card" style="animation-delay: ${delay}s">
        <h2>${date} <span>${day}</span></h2>
        <ul>
            ${games}            
        </ul>
    </div>
    `;
}

// 1) injetando o código dos cards dentro da div #app
document.querySelector("#cards").innerHTML =
  createCard(
    "24/11",
    "quinta",
    createGame("switzerland", "07:00", "cameroon")
  ) +
  createCard("24/11", "quinta", createGame("brazil", "16:00", "serbia")) +
  createCard("28/11", "segunda", createGame("brazil", "13:00", "switzerland")) +
  createCard("02/12", "sexta", createGame("brazil", "16:00", "cameroon"));
