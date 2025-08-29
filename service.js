const cards = document.querySelectorAll('.card');

const outputDate = document.getElementById("output-date");
const outputTitle = document.getElementById("output-title");
const outputNumber = document.getElementById("output-number");

cards.forEach(card=> {
    const copyBtn = card.querySelector('.copy-btn');
    const callBtn = card.querySelector('.call-btn');

    copyBtn.addEventListener("click", ()=>{
        const number = card.querySelector(".number").innerText;
        navigator.clipboard.writeText(number);

        console.log("number copied:", number);
    })

    callBtn.addEventListener("click", ()=> {
        const number = card.querySelector(".number").innerText;
        const title = card.querySelector(".title").innerText;

        const date = new Date();
        const localTime = date.toLocaleString();
        const time = date.toLocaleTimeString();

        console.log(number, title, localTime);

        outputDate.innerText = time;
        outputTitle.innerText = title;
        outputNumber.innerText = number;
    })
})