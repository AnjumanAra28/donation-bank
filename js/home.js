let totalDonateAmount = document.getElementById('total-donate-amount');

// donate 1 button
document.getElementById('donate-btn1').addEventListener('click',function(){
    // get donate amount
    const getInputValue = getInputValueById('donate-input1')
    if (getInputValue<=0){
       return alert('Negative Amount is not Acceptable');
    }
    else if(isNaN(getInputValue)){
        return alert('Put An Valid Input Number')
    }
    let donateValue1 = getTextValueById('donate-amount1')
    // update card donate value
    const newDonateAmount = donateValue1 + getInputValue;
    document.getElementById('donate-amount1').innerText = newDonateAmount;
    // update total donate value
    const totalDonateAmountValue = getTextValueById('total-donate-amount');
    const newTotalDonateAmount = totalDonateAmountValue - getInputValue;
    document.getElementById('total-donate-amount').innerText = newTotalDonateAmount;
})

// donate 2 button
document.getElementById('donate-btn2').addEventListener('click',function(){
    // get donate amount
    const getInputValue = getInputValueById('donate-input2')
    if (getInputValue<=0){
       return alert('Negative Amount is not Acceptable');
    }
    else if(isNaN(getInputValue)){
        return alert('Put A Valid Input Number')
    }
    let donateValue1 = getTextValueById('donate-amount2')
    // update card donate value
    const newDonateAmount = donateValue1 + getInputValue;
    document.getElementById('donate-amount2').innerText = newDonateAmount;
    // update total donate value
    const totalDonateAmountValue = getTextValueById('total-donate-amount');
    const newTotalDonateAmount = totalDonateAmountValue - getInputValue;
    document.getElementById('total-donate-amount').innerText = newTotalDonateAmount;
})

// donate 3 button
document.getElementById('donate-btn3').addEventListener('click',function(){
    // get donate amount
    const getInputValue = getInputValueById('donate-input3')
    if (getInputValue<=0){
       return alert('Negative Amount is not Acceptable');
    }
    else if(isNaN(getInputValue)){
        return alert('Put A Valid Input Number')
    }
    let donateValue1 = getTextValueById('donate-amount3')
    // update card donate value
    const newDonateAmount = donateValue1 + getInputValue;
    document.getElementById('donate-amount3').innerText = newDonateAmount;
    // update total donate value
    const totalDonateAmountValue = getTextValueById('total-donate-amount');
    const newTotalDonateAmount = totalDonateAmountValue - getInputValue;
    document.getElementById('total-donate-amount').innerText = newTotalDonateAmount;
})
