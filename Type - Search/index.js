let timerPara = document.getElementById('timer');
let spinnerEl = document.getElementById('spinner');
let quoteDisplayPara = document.getElementById('quoteDisplay');
let resultPara = document.getElementById('result');
let quoteInputEl = document.getElementById('quoteInput');
let submitButton = document.getElementById('submitBtn');
let resetButton = document.getElementById('resetBtn');
let spanEl = document.getElementById('spanElement');
let uniqueId;
let url = "https://apis.ccbp.in/random-quote";
let options = {
    method: "GET"
};
fetch(url, options)
    .then(function(response) {
        return response.json();
    })
    .then(function(jsonData) {
        quoteDisplayPara.textContent = jsonData.content;
    });
let cnt = 0;
uniqueId = setInterval(function() {
    cnt = cnt + 1;
    spanEl.textContent = cnt;

}, 1000);

resetButton.onclick = function() {
    quoteInputEl.textContent = "";
    cnt = 0;
    spinnerEl.classList.remove('d-none');
    let url = "https://apis.ccbp.in/random-quote";
    let options = {
        method: "GET"
    };
    fetch(url, options)
        .then(function(response) {
            return response.json();
        })
        .then(function(jsonData) {
            quoteDisplayPara.textContent = jsonData.content;
        });
    spinnerEl.classList.add('d-none');
    resultPara.textContent = "";
};


submitButton.onclick = function() {

    if (quoteDisplayPara.textContent === quoteInputEl.value) {
        clearInterval(uniqueId);
        resultPara.textContent = "you typed in " + spanEl.textContent + " second";
    } else {
        resultPara.textContent = "You typed incorrect sentence";
    }
}
