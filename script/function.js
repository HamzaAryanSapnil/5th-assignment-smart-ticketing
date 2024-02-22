console.log("function");

function remainingSeat(elementId){
    const totalSeatRemainingText = document.getElementById(elementId);
    const totalSeatRemaining = parseInt(totalSeatRemainingText.innerText);
    return totalSeatRemaining;
}
function seatSelectVallueById(elementId){
    const element = document.getElementById(elementId);
    const elementValueText = element.innerText;
    const elementValue = parseInt(elementValueText);
    return elementValue;
}

function setTextElementValueById(elementId, value) {
    const element = document.getElementById(elementId);
    element.innerText = value;

}
function selectedSeat(elementId) {
    // console.log(elementId);
    const seatNumber = elementId.innerText;
    // console.log(seatNumber);
    return seatNumber;

}

let count = 0;

function disableSeat(selectSeat) {
    const seatSelected = selectSeat;
    if (count < 4) {
        seatSelected.classList.add("seat-selected", "bg-navBtnColor", "text-white");
        count++;
       

    }
    else if (seatSelected.classList.contains('seat-selected')) {
        // If the seat is already selected, you can handle the logic here
        console.log("Seat is already selected");
    }
        
    
    else{
        alert("You can only select 4 seats")
     }

     
    
}




function showCoupon() {
    if (count === 4) {
        const applyCoupon = document.getElementById("coupon-section");
        applyCoupon.classList.remove("hidden");
    }
}

function enableApplyBtn () {
    const applyBtn = document.getElementById("apply-coupon");
    applyBtn.removeAttribute("disabled");
}
function disableApplyBtn() {
    const applyBtn = document.getElementById("apply-coupon");
    applyBtn.setAttribute("disabled");
}
function hideCoupon() {
    const applyCoupon = document.getElementById("coupon-section");
    applyCoupon.classList.add("hidden");
}

// if value exist on that element remove click handler
function isExist(elementId, value) {
    const element = document.getElementById(elementId);
    if (element.classList.contains(value)) {
        console.log("exist");
        
    }else{
        element.classList.add(value);
        console.log("not exist");

    }
}
// add child elements h5 and p. h5 is for Seat, p is for class and another p is for price 

let seatNumber = null;
function showClassPrice(elementId, seatNum) {
    // where to add
    const appendedDivs = document.getElementsByClassName("appended-div");

    function appendedDivText() {
        let appendedDivTextNum = "";
        for (const appendedDiv of appendedDivs) {
             appendedDivTextNum += appendedDiv.innerText;
            console.log(appendedDivTextNum);
         }
         return appendedDivTextNum;
    } 
    const appendDiv = appendedDivText();
    
    // what to be added
    if (seatNum !== seatNumber && appendDiv !== seatNum) {
        const div = document.createElement("div");
    const h5 = document.createElement("h5");
    const p = document.createElement("p");
    const p2 = document.createElement("p");

    div.appendChild(h5);
    div.appendChild(p);
    div.appendChild(p2);
    div.classList.add("flex", "w-full", "justify-between", "items-center", "font-inter", "text-lg", "text-navHeadingColorSixty", "pt-4");

    h5.innerText = seatNum;
    p.innerText = "Economy";
    p2.innerText = "550";
    h5.classList.add("appended-div");
    

   

    
    // add the child
        if (count < 4) {
            elementId.appendChild(div);
            seatNumber = seatNum;
            // console.log(seatNumber);
            
        }
        
    
    }else{
        return;
    }
    
    
}
let selectSeatCount = null;
function seatIsSelected(selectedSeat) {
    if (selectedSeat === selectSeatCount && count < 4) { 
        if (selectedSeat.classList.contains('seat-selected')) {
            
            console.log("seat is selected");
            alert("seat is selected")
            const totalPriceText = document.getElementById("total-price");
            const grandTotalText = document.getElementById("grand-total");
            const totalPriceValue = parseInt(totalPriceText.innerText);
            const grandTotalValue = parseInt(grandTotalText.innerText);
            const totalPrice = totalPriceValue - 550;
            const grandTotal = grandTotalValue - 550;
        
            setTextElementValueById("total-price", totalPrice);
            setTextElementValueById("grand-total", grandTotal);

            // seat

            const totalSeatRemaining = remainingSeat("total-seats");
            const selectedSeatRemaining = remainingSeat("selected-seats");
            const totalSeat = totalSeatRemaining + 1;
            const selectedSeat = selectedSeatRemaining - 1;

            setTextElementValueById("total-seats", totalSeat);
            setTextElementValueById("selected-seats", selectedSeat);

            
            
        }else{
            console.log("seat is reselected");
            alert("seat is reselected")
        }
        selectedSeat.classList.toggle("seat-selected");

        
    }
    else{
        if (selectSeatCount) {
            selectSeatCount.classList.remove("seat-selected");
        }
        selectSeatCount = selectedSeat;
        selectSeatCount.classList.add("seat-selected");
    }
}




// total price calculation
function totalPrice(price) {
    const newPrice = price + 550;
    return newPrice;
    
}

function grandTotal(value) {
    const newGrandTotal =  value;
    return newGrandTotal;
}

// discount 
function discountedPriceFifteen(value) {
    const price = value;
    const discount = (price * 15) / 100;
    // const newPrice = price - discount;
    return discount;
}
function discountedPriceTwenty(value) {
    const price = value;
    const discount = (price * 20) / 100;
    // const newPrice = price - discount;
    return discount;
}

function appendDivFifteen(elementId,value) {
    const element = document.getElementById(elementId); 
    const p1 = document.createElement("p");
    const p2 = document.createElement("p");
    const div = document.createElement("div");

    p1.innerText = "Discount 15%";
    p2.innerText = value;
    div.appendChild(p1);
    div.appendChild(p2);
    div.classList.add("flex", "w-full", "justify-between");

    element.appendChild(div);
}
function appendDivTwenty(elementId,value) {
    const element = document.getElementById(elementId); 
    const p1 = document.createElement("p");
    const p2 = document.createElement("p");
    const div = document.createElement("div");

    p1.innerText = "Discount 20%";
    p2.innerText = value;
    div.appendChild(p1);
    div.appendChild(p2);
    div.classList.add("flex", "w-full", "justify-between");

    element.appendChild(div);
}