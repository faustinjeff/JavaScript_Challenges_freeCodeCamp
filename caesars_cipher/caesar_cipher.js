function rot13(str) {

  let arr = str.split("");
  
  let charCode = arr.map(item => item.charCodeAt());
  console.log(charCode)
  return charCode.map(function(e){
    if(e >= 65 && e <= 77) {
      return e+13;
    } else if(e >= 78 && e <= 90) {
      return e-13;
    } else {
      return e;
    }
  }).map(item => String.fromCharCode(item)).join("");
