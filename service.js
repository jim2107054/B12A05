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

cards.forEach((card) => {
  const copyBtn = card.querySelector(".copy-btn");
  const callBtn = card.querySelector(".call-btn");
  const ShowLove = card.querySelector(".love-count")

  ShowLove.addEventListener("click", () => {
    love++;
    updateCopyDisplay();
  })

  copyBtn.addEventListener("click", () => {
    const number = card.querySelector(".number").innerText;
    navigator.clipboard.writeText(number);

    copy++;
    updateCopyDisplay();
    console.log("number copied:", number);
  });

  callBtn.addEventListener("click", () => {
    const number = card.querySelector(".number").innerText;
    const title = card.querySelector(".title").innerText;

    coins -= 20;

    if (coins < 0) {
      alert("Not enough coins");
    } else {
      updateCopyDisplay();
    }

    const date = new Date();
    const localTime = date.toLocaleString();
    const time = date.toLocaleTimeString();

    console.log(number, title, localTime);

    outputDate.innerText = time;
    outputTitle.innerText = title;
    outputNumber.innerText = number;
  });
});
