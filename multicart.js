
// step-1:
function inputFunction(product, increasing, number){
const inputFunctionField = document.getElementById(product + '-inputs')
let inputFunctionValue = inputFunctionField.value;
if(increasing){
    inputFunctionValue = parseInt(inputFunctionValue) + 1;
}else if(inputFunctionValue > 0){
    inputFunctionValue = parseInt(inputFunctionValue) - 1;
}
inputFunctionField.value = inputFunctionValue;

 const upadateInputFunction = document.getElementById(product + '-price');
 upadateInputFunction.innerText = inputFunctionValue * number;
 totalPriceUpdate();
// console.log(inputFunctionValue);
}
// step-2:
function updateProductOuantity(quantity){
  const inputProductQuantity =  document.getElementById(quantity + '-inputs');
  const numberProductQuantity = parseInt(inputProductQuantity.value);
  return numberProductQuantity;
}
// step-3:
function totalPriceUpdate(){
  const phoneAmount = updateProductOuantity('productOne') * 549;
  const goldenphnAmount = updateProductOuantity('productTwo') * 850;
  const spaceBlacknphnAmount = updateProductOuantity('productThree') * 1000;
  const whitePhnAmount = updateProductOuantity('productFour') * 1200;
  const subTotal = phoneAmount + goldenphnAmount + spaceBlacknphnAmount + whitePhnAmount;
  const tax = subTotal / 10;
  const total = subTotal + tax;

//   console.log(subTotal);

document.getElementById('sub-total').innerText = subTotal;
document.getElementById('tax-ammount').innerText = tax;
document.getElementById('total-cost').innerText = total;
}


// Product#1 btn
document.getElementById('productOne-plus').addEventListener('click', function(){
    inputFunction('productOne', true, 549)
})


document.getElementById('productOne-minus').addEventListener('click', function(){
    inputFunction('productOne', false, 549)
})

// Product#2 btn
document.getElementById('productTwo-plus').addEventListener('click', function(){
    inputFunction('productTwo', true, 850)
})


document.getElementById('productTwo-minus').addEventListener('click', function(){
    inputFunction('productTwo', false, 850)
})
// Product#3 btn
document.getElementById('productThree-plus').addEventListener('click', function(){
    inputFunction('productThree', true, 1000)
})


document.getElementById('productThree-minus').addEventListener('click', function(){
    inputFunction('productThree', false, 1000)
})
// Product#4 btn
document.getElementById('productFour-plus').addEventListener('click', function(){
    inputFunction('productFour', true, 1200)
})


document.getElementById('productFour-minus').addEventListener('click', function(){
    inputFunction('productFour', false, 1200)
})