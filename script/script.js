console.log("script");




// id: total-seats = 40
// id: selected-seats = 0
// id: apply-coupon = input field coupon btn
// id: coupon-field = input field coupon
// id: grand-total = 0
// id: total-price = 0
// id: form-next-btn = next btn
// id: phone-field


const seats = document.querySelectorAll(".bus-seat");
const seatClassPrice = document.getElementById("seat-class-price");
const phoneField = document.getElementById("phone-field");
const formBtnNext = document.getElementById("form-next-btn");


function seating() {
  for (const seat of seats) {
    seat.addEventListener("click", clickEventHandler)
  }
}

function modal() {
  for (const seat of seats) {
    seat.addEventListener("click", function () {
      formBtnNext.removeAttribute("disabled");
    })
  }
}

function clickEventHandler() {
  
      const seat = this
      const seatId = selectedSeat(seat);
      showClassPrice(seatClassPrice, seatId);
      disableSeat(seat);
      seatIsSelected(seat);
      showCoupon();

      const currentSeat = seatSelectVallueById("selected-seats");
      const newCurrentSeat = currentSeat + 1;
      setTextElementValueById("selected-seats", newCurrentSeat);

      const totalSeat = seatSelectVallueById("total-seats");
      const newTotalSeat = totalSeat - 1;

      setTextElementValueById("total-seats", newTotalSeat);
      const totalPriceValue = seatSelectVallueById("total-price");
      const newPrice = totalPrice(totalPriceValue);
      setTextElementValueById("total-price", newPrice);

      const newGrandTotal = grandTotal(newPrice);
      setTextElementValueById("grand-total", newGrandTotal);

      if (newTotalSeat === 0) {
        alert("Sorry, no seat left");

      }

      const buyTicketNumText = seatSelectVallueById("selected-seats");

      isExist("selected-seats", buyTicketNumText);

      if (newCurrentSeat >= 4) {
        for (const seat of seats) {
          
          seat.removeEventListener("click", clickEventHandler)
        }
      }
      seat.removeEventListener("click", clickEventHandler)

      // const totalSeatElement = document.getElementById("total-seats");
      // const totalSeatText = totalSeatElement.innerText;
      // const totalSeat = parseInt(totalSeatText);
      // const newTotalSeat = totalSeat - 1;
      // totalSeatElement.innerText = newTotalSeat;

      
      
    };




document
  .getElementById("coupon-field")
  .addEventListener("keyup", function (event) {
    const text = event.target.value;
    if (text === "NEW15" || text === "Couple 20") {
      enableApplyBtn();
      
    }
  });

document.getElementById("apply-coupon").addEventListener("click", function () {
  hideCoupon();

  const couponCode = document.getElementById("coupon-field").value;
  console.log(couponCode);

  if (couponCode === "Couple 20") {
    
    const grandPrice = seatSelectVallueById("grand-total");
    const newGrandTotal = grandTotal(grandPrice);
    const discountedGrandTotal = discountedPriceTwenty(newGrandTotal);
    const discount = newGrandTotal - discountedGrandTotal 
    setTextElementValueById("grand-total", discount);
    appendDivTwenty("grand-total-section", discountedGrandTotal);

  }
  else if (couponCode === "NEW15") {
    const grandPrice = seatSelectVallueById("grand-total");
    const newGrandTotal = grandTotal(grandPrice);
    const discountedGrandTotal = discountedPriceFifteen(newGrandTotal);
    const discount = newGrandTotal - discountedGrandTotal 
    setTextElementValueById("grand-total", discount);
    appendDivFifteen("grand-total-section", discountedGrandTotal);
  }
  else{
    alert("Enter Valid Coupon Code");
  }
  
});


const seatTicketing = seating();
const modalTicketing = modal();