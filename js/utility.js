
function getInputValueById(id){
    const inputField = document.getElementById(id);
    const inputFieldValue = parseFloat(inputField.value);
    // inputField.value = '';
    return inputFieldValue;
    
}

function getTextValueById (id){
    const textField = document.getElementById(id);
    const textFieldValue = parseFloat(textField.innerText);
    return textFieldValue;
}
