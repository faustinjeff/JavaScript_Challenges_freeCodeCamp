function checkCashRegister(price, cash, cid) {
  var change = {status: "", change: []};

  var leftOver = cash-price;

   var currency = [
      {unit: ["ONE HUNDRED", 100.0]},
      {unit: ["TWENTY", 20.0]},
      {unit: ["TEN", 10.0]},
      {unit: ["FIVE", 5.0]},
      {unit: ["ONE", 1.0]},
      {unit: ["QUARTER", 0.25]},
      {unit: ["DIME", 0.1]},
      {unit: ["NICKEL", 0.05]},
      {unit: ["PENNY", 0.01]} 
   ];

   let register = cid.reduce(function(acc,money){
     return acc+money[1];
   }, 0);
    
  if(register === leftOver) {
    change.status = "CLOSED";
    change.change = cid;
    return change;
  
  } else if(leftOver > register) {
    change.status = "INSUFFICIENT_FUNDS";
    return change;
  }

  let arr = [];

  let rev = cid.reverse();

  for(let i = 0; i < rev.length; i++) {
    let m = currency[i].unit[1];
    let b = rev[i][1];
    let c = 0;
    while(leftOver >= m && b > 0) {
        leftOver = leftOver.toFixed(2)-currency[i].unit[1].toFixed(2);
        leftOver.toFixed(2);
        c = c+currency[i].unit[1];
        b = b-currency[i].unit[1];
    }
    arr.push([currency[i].unit[0], c]);
  }

    if(leftOver > 0) {
      change.status = "INSUFFICIENT_FUNDS"
      return change;
    }
    
    let a = arr.filter(item => item[1] != 0).sort(function(a, b){return b[1]-a[1]});
    
    change.change = a;
    change.status = "OPEN";
    console.log(change);

  return change;
}
