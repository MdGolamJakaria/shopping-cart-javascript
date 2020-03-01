
//plus button
const plusButton = document.getElementById("plus");
plusButton.addEventListener("click", function(){
  const quantityButton = document.getElementById("item").value;
  const plusQuantityNumber = parseFloat(quantityButton);

  console.log(plusQuantityNumber);

  const showQuantityplus = plusQuantityNumber + 1;
  document.getElementById("item").value = showQuantityplus;
})


//minus button
const minusButton = document.getElementById("minus");
minusButton.addEventListener("click",function(){
  const quantityButton = document.getElementById("item").value;
  const minusQuantityNumber = parseFloat (quantityButton);
  
  console.log(minusQuantityNumber);

  const showQuantityMinus = minusQuantityNumber -1 ;
  document.getElementById("item").value = showQuantityMinus;

})

//////////////// product price with quantity 

const iphonePrice = document.getElementById("iphone-price").innerText;
const priceamount = parseFloat(iphonePrice);

const priceWithProduct.innerText = showQuantityplus*priceamount;