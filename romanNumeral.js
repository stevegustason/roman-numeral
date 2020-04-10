function convertToRoman (num) {

  let thous = 0;
  let hund = 0;
  let ten = 0;
  let one = 0;

  let numStr = num.toString();
  let numArr = numStr.split("");

  switch(numArr.length) {
    case 4:
      thous = Number(numArr[0]);
      hund = Number(numArr[1]);
      ten = Number(numArr[2]);
      one = Number(numArr[3]);
      break;
    case 3:
      thous = undefined;
      hund = Number(numArr[0]);
      ten = Number(numArr[1]);
      one = Number(numArr[2]);
      break;
    case 2:
      thous = undefined;
      hund = undefined;
      ten = Number(numArr[0]);
      one = Number(numArr[1]);
      break;
    case 1:
      thous = undefined;
      hund = undefined;
      ten = undefined;
      one = Number(numArr[0]);
  };

  // Use A,B,C as placeholder numerals, which you can then convert to real numerals depending on the digit (e.g. tens place, hundreds place)
  function convertNumeral(numeral) {
    let holder = "";
    switch(numeral) {
      case 0:
        holder = "";
        break;
      case 1:
        holder = "A";
        break;
      case 2:
        holder = "AA";
        break;
      case 3:
        holder = "AAA"
        break;
      case 4:
        holder = "AB"
        break;
      case 5:
        holder = "B"
        break;
      case 6:
        holder = "BA"
        break;
      case 7:
        holder = "BAA"
        break;
      case 8:
        holder = "BAAA"
        break;
      case 9:
        holder = "AC"
        break;
    }
    return holder;
  };

  //Convert each digit to a placeholder
  if (thous != undefined){
    thous = convertNumeral(thous);
  };
  if (hund != undefined){
    hund = convertNumeral(hund);
  };
  if (ten != undefined){
    ten = convertNumeral(ten);
  };
  if (one != undefined){
    one = convertNumeral(one);
  };

  //Convert thousands place back to the correc roman numeral
  if (thous != undefined) {
    let thousHold = thous.split("");
    for (let i = 0; i < thousHold.length; i++) {
      switch (thousHold[i]) {
        case "A":
          thousHold[i] = "M";
          break;
      }
    }
    thous = thousHold.join("");
  }

  //Convert hundreds place back to the correc roman numeral
  if (hund != undefined) {
    let hundHold = hund.split("");
    for (let i = 0; i < hundHold.length; i++) {
      switch (hundHold[i]) {
        case "A":
          hundHold[i] = "C";
          break;
        case "B":
          hundHold[i] = "D";
          break;
        case "C":
          hundHold[i] = "M";
          break;
      }
    }
    hund = hundHold.join("");
  }

  //Convert tens place back to the correc roman numeral
  if (ten != undefined) {
    let tenHold = ten.split("");
    for (let i = 0; i < tenHold.length; i++) {
      switch (tenHold[i]) {
        case "A":
          tenHold[i] = "X";
          break;
        case "B":
          tenHold[i] = "L";
          break;
        case "C":
          tenHold[i] = "C";
          break;
      }
    }
    ten = tenHold.join("");
  }

  //Convert ones place back to the correc roman numeral
  if (one != undefined) {
    let oneHold = one.split("");
    for (let i = 0; i < oneHold.length; i++) {
      switch (oneHold[i]) {
        case "A":
          oneHold[i] = "I";
          break;
        case "B":
          oneHold[i] = "V";
          break;
        case "C":
          oneHold[i] = "X";
          break;
      }
    }
    one = oneHold.join("");
  }

  //Combine into final roman numeral
  let final = "";
  if (thous != undefined) {
    final = final + thous;
  }
  if (hund != undefined) {
    final = final + hund;
  }
  if (ten != undefined) {
    final = final + ten;
  }
  if (one != undefined) {
    final = final + one;
  }

  return final;
}

convertToRoman(36);
