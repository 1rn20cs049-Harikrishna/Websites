let inputBill = document.getElementById('billAmount');
let inputPercentage = document.getElementById('percentageTip');
let inputTipAmount = document.getElementById('tipAmount');
let inputTotal = document.getElementById('totalAmount');
let paraMessage = document.getElementById('errorMessage');

// FUNTION is called from HTML button itself using onclick
function tipCalculator() {
    if (inputBill.value === ""  || isNaN(inputBill.value))
       paraMessage.textContent = "Please Enter a Valid Input.";
    
    else if ( inputPercentage.value === "" ||  isNaN(inputPercentage.value) ){
        paraMessage.textContent = "Please Enter valid tip percentage.";
    } else {
        inputTipAmount.value = parseFloat(inputPercentage.value / 100) * parseInt(inputBill.value);
        inputTotal.value = parseInt(inputBill.value) + parseInt(inputTipAmount.value);
        paraMessage.textContent = "";

    }
}
