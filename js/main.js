
//plus button
const plusButton = document.getElementById("plus");
plusButton.addEventListener("click", function(){
  const quantityButton = document.getElementById("item").value;
  const plusQuantityNumber = parseFloat(quantityButton);
  

  
  const showQuantity = plusQuantityNumber + 1;


  console.log(showQuantity);
})


//minus button
const minusButton = document.getElementById("minus");
minusButton.addEventListener("click",function(){
  const quantityButton = document.getElementById("item").value;
  const minusQuantityNumber = parseFloat (quantityButton);
  console.log(minusQuantityNumber)
})


