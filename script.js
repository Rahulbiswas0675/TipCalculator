//Onload function
window.onload = () =>{
    document.querySelector('#calculate').onclick = calculateTip;
}
//calculatetip finction
function calculateTip() {
    let amount = document.querySelector('#amount').value;
    let persons = document.querySelector('#persons').value;
    let service = document.querySelector('#services').value;
    //if value is empty 
    if (amount === '' && service === 'Select') {
        alert("Please enter valid values");
        return;
    }
    //if persons is 1
    if (persons === '1')
        document.querySelector('#each').style.display = 'none';
    else
        document.querySelector('#each').style.display = 'block';

    let total = (amount * service) / persons;
    total = total.toFixed(2);
    //showing statement div
    document.querySelector('.tip').style.display = 'block';
    document.querySelector('#total').innerHTML = total;
}
