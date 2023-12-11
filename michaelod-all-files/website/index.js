const counter = document.querySelector(".counter-number");
async function updateCounter() {
    let response = await fetch("https://2i2o5najjwhp7vdfv3cmxebhfy0wfeyh.lambda-url.us-east-1.on.aws/");
    let data = await response.json();
    counter.innerHTML = ` This page has ${data} Views!`;
}

updateCounter();