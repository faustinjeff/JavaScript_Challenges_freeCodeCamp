function convertToRoman(num) {

  let roman = ["M",
    "CM",
    "D",
    "CD",
    "C",
    "XC",
    "L",
    "XL",
    "X",
    "IX",
    "V",
    "IV",
    "I"];

    let rom = "";

  let number = [1000, 900,500,400,100,90,50,40,10,9,5,4,1];

  
    for(let i=0; i < number.length; i++) {
      while(number[i] <= num ) {
          rom = rom+roman[i];
          num-=number[i];
      }

    }
      console.log(rom)


 return rom;
}
