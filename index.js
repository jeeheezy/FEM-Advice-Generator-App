const url = "https://api.adviceslip.com/advice";
const adviceNumber = document.querySelector(".advice-number");
const adviceText = document.querySelector(".advice-text");
const rerollButton = document.querySelector(".dice-circle");
generateAdvice();

async function generateAdvice() {
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error("Network response was not OK");
        }
        const advice = await response.json();
        upDateAdvice(advice.slip.id, advice.slip.advice);
        console.log(advice);
    } catch(error) {
        console.error("There has been a problem with the fetch operation:", error)
    }
    
}

function upDateAdvice(adviceId, advice) {
    adviceNumber.innerText = "Advice #" + adviceId;
    adviceText.innerText = '"' + advice + '"';
}

rerollButton.addEventListener("click", generateAdvice);