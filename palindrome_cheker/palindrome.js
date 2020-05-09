function palindrome(str) {
  
  let alpha = str.replace(/[\W_]/g, "").toLowerCase();

  let rev = str.replace(/[\W_]/g, "").toLowerCase().split("").reverse().join("");



  return alpha === rev;
}
