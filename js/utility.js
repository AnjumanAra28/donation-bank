// input value get
function getInputValueById(id){
    const inputField = document.getElementById(id);
    const inputFieldValue = parseFloat(inputField.value);
    // inputField.value = '';
    return inputFieldValue;
    
}

// text field value
function getTextValueById (id){
    const textField = document.getElementById(id);
    const textFieldValue = parseFloat(textField.innerText);
    return textFieldValue;
}

// create history section 
function createHistoryElement (id , string){
    const historySection = document.getElementById('history-section');
    const donationHistory = document.createElement('div');
    donationHistory.innerHTML = ` ${id} BDT is  ${string} .` 
    donationHistory.setAttribute('class', 'font-bold border text-center rounded-xl p-6 shadow-xl w-9/12 mx-auto mb-5' )
    historySection.append(donationHistory);
    return historySection;
}


