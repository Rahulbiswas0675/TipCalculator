
let tipinput;

let TipAmountTag = document.getElementById('tipamount');
let TotalAmountTag = document.getElementById('total');
let TipAheadTag = document.getElementById('tipahead');

let billinp = document.getElementById('bill');
let personinp = document.getElementById('people');

let custominputtag = document.getElementById('custominput');

TipAmountTag.innerHTML = "00";
TotalAmountTag.innerHTML = "00";
TipAheadTag.innerHTML = "00";

//TipAmount_Value_Set_________
function tip1() {
    tipinput = 0.05;
}
function tip2() {
    tipinput = 0.10;
}
function tip3() {
    tipinput = 0.15;
}
function tip4() {
    tipinput = 0.25;
}
function tip5() {
    tipinput = 0.50;
}
//TipAmount_Custom-Input-tag-style-change_
function custom() {
    custominputtag.style.visibility = "visible";
}
//TipAmount_Custom_Value_Set_____________
function customValue(val) {
    tipinput = val / 100;
}
function calculat() {
    //Calculat_Input_Value_________________________________
    const bill = document.getElementById('bill').value;
    const person = document.getElementById('people').value;

    if (bill && person && tipinput) {
        //Math_________________________________________________
        const TipAmount = tipinput * bill;
        const TotalAmount = TipAmount + Number(bill);
        const TipAhead = TipAmount / person;
        //Display_Upgrade______________________________________
        TipAmountTag.innerHTML = TipAmount;
        TotalAmountTag.innerHTML = TotalAmount;
        TipAheadTag.innerHTML = TipAhead;
    } else {
        alert("Please Fill The From");
    }
}
function reset() {
    //Calculat_Upgrade____________________
    tipinput = "";
    billinp.value = "";
    personinp.value = "";
    custominputtag.value = "";
    //Display_Upgrade_____________________
    TipAmountTag.innerHTML = "00";
    TotalAmountTag.innerHTML = "00";
    TipAheadTag.innerHTML = "00";
    //Change _Style_______________________
    custominputtag.style.visibility = "hidden";
}
