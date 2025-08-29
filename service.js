const cards = document.querySelectorAll(".card");

const outputDate = document.getElementById("output-date");
const outputTitle = document.getElementById("output-title");
const outputNumber = document.getElementById("output-number");

const showLove = document.getElementById("show-love");
const showCoins = document.getElementById("show-coins");
const showCopy = document.getElementById("show-copy");

let love = 0;
let coins = 100;
let copy = 0;

showLove.innerText = love;
showCoins.innerText = coins;
showCopy.innerText = copy;

function updateCopyDisplay() {
  showLove.innerText = love;
  if (coins < 0) {
    showCoins.innerText = 0;
  } else {
    showCoins.innerText = coins;
  }
  showCopy.innerText = copy;
}

const callHistory = [];
const historyList = document.getElementById("historyList");

function renderHistory() {
  historyList.innerHTML = "";
  callHistory.forEach((item, index) => {
    const div = document.createElement("div");
    div.classList.add(
      "history-item",
      "flex",
      "justify-between",
      "items-center",
      "pb-2"
    );

    div.innerHTML = `
      <div  class="bg-gray-100 flex w-full rounded-md justify-between px-6 py-2">
      <div>
        <strong>${item.title}</strong><br>
        <span class="text-gray-600">${item.number}</span>
      </div>
      <p class="text-gray-800 text-[16px]">${item.date}</p>
      </div>
    `;
    historyList.appendChild(div);
  });
}

cards.forEach((card) => {
  const copyBtn = card.querySelector(".copy-btn");
  const callBtn = card.querySelector(".call-btn");
  const ShowLove = card.querySelector(".love-count");

  ShowLove.addEventListener("click", () => {
    love++;
    updateCopyDisplay();
  });

  copyBtn.addEventListener("click", () => {
    const number = card.querySelector(".number").innerText;
    navigator.clipboard.writeText(number);

    copy++;
    updateCopyDisplay();
    console.log("Number copied:", number);
  });

  callBtn.addEventListener("click", () => {
    const number = card.querySelector(".number").innerText;
    const title = card.querySelector(".title").innerText;

    alert(`Calling ${title} ${number}...`);

    coins -= 20;
    if (coins < 0) {
      coins = 0;
      alert("Not enough coins!");
      return;
    } else {
      updateCopyDisplay();
    }

    const date = new Date();
    const localTime = date.toLocaleTimeString();

    callHistory.push({ title, number, date: localTime });

    renderHistory();
  });
});

const clearBtn = document.querySelector(".clear-btn");
clearBtn.addEventListener("click", () => {
  callHistory.length = 0;
  renderHistory();
});
