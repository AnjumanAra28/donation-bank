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
    // update card1 donate value
    const newDonateAmount = donateValue1 + getInputValue;
    document.getElementById('donate-amount1').innerText = newDonateAmount;
    // update total donate value
    const totalDonateAmountValue = getTextValueById('total-donate-amount');
    const newTotalDonateAmount = totalDonateAmountValue - getInputValue;
    document.getElementById('total-donate-amount').innerText = newTotalDonateAmount;

    // modal open
    // document.getElementById('my_modal_5').showModal();

    // create history element
    const donationArea = 'Donated for Flood at Noakhali, Bangladesh'
    createHistoryElement(getInputValue ,donationArea);

    // open modal
    my_modal_5.showModal()
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
    // update card2 donate value
    const newDonateAmount = donateValue1 + getInputValue;
    document.getElementById('donate-amount2').innerText = newDonateAmount;
    // update total donate value
    const totalDonateAmountValue = getTextValueById('total-donate-amount');
    const newTotalDonateAmount = totalDonateAmountValue - getInputValue;
    document.getElementById('total-donate-amount').innerText = newTotalDonateAmount;

    // create history section
    const donationArea = 'Donated for Flood Relief in Feni,Bangladesh'
    createHistoryElement(getInputValue ,donationArea);

    // open modal
    my_modal_5.showModal()
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
    // update card3 donate value
    const newDonateAmount = donateValue1 + getInputValue;
    document.getElementById('donate-amount3').innerText = newDonateAmount;
    // update total donate value
    const totalDonateAmountValue = getTextValueById('total-donate-amount');
    const newTotalDonateAmount = totalDonateAmountValue - getInputValue;
    document.getElementById('total-donate-amount').innerText = newTotalDonateAmount;

    // create history section
    const donationArea = 'Donated for Injured in the Quota Movement'
    createHistoryElement(getInputValue ,donationArea);

    // open modal
    my_modal_5.showModal() 
})

// show history section and hide donation section
document.getElementById('history-btn').addEventListener('click',function(){
    const historySection = document.getElementById('history-section');
    historySection.classList.remove('hidden');
    const donationSection = document.getElementById('donation-card-section');
    donationSection.classList.add('hidden')
    // history btn background change
    const historyBtn = document.getElementById('history-btn');
    historyBtn.classList.remove('btn-outline')
    historyBtn.classList.add('bg-primary')
    // donation btn background change
    const donationBtn = document.getElementById('donation-btn');
    donationBtn.classList.add('btn-outline');
    donationBtn.classList.remove('bg-primary');

})

// show donation section and hide history section
document.getElementById('donation-btn').addEventListener('click',function(){
    const donationSection = document.getElementById('donation-card-section');
    donationSection.classList.remove('hidden')
    const historySection = document.getElementById('history-section');
    historySection.classList.add('hidden');
    // donation btn background change
    const donationBtn = document.getElementById('donation-btn');
    donationBtn.classList.remove('btn-outline');
    donationBtn.classList.add('bg-primary');
    // history btn background change
    const historyBtn = document.getElementById('history-btn');
    historyBtn.classList.remove('bg-primary');
    historyBtn.classList.add('btn-outline');
})
