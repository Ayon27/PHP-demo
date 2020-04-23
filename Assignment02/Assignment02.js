var index = 0; // value for which unit to convert. 0 means lb to kg, 1 means kg to lb
var doCapital = true; //toggle for capitalize functino

function convert() {
  var value = document.getElementById("convertInput").value; //fetches the user's input
  var unit; // unit to be attached after result

  // user input has to be positive
  if (value >= 0) {
    {
      if (index == 0) {
        value = value * 0.4536;
        unit = " kilograms";
      } else if (index == 1) {
        value = value * 2.2046;
        unit = " pounds";
      }
      document.getElementById("convertResult").innerHTML = value + unit;
    }
  }
}

// changes the value of index
function changeSelection() {
  index = parseFloat(document.getElementById("convertSelect").value);
  convert(); // calls convert function everytime after changing index
}

//function for task 02
function task02() {
  var task02Input = document.getElementById("inputTask2").value;
  var inputChars = task02Input.split(","); //from the input series
  document.getElementById("max").innerHTML = Math.max(...inputChars);
  document.getElementById("min").innerHTML = Math.min(...inputChars);
  document.getElementById("sum").innerHTML = findSum(inputChars);
  document.getElementById("avg").innerHTML = findAvg(inputChars);
  document.getElementById("reverseOrder").innerHTML = findReverse(inputChars);
}

//finds the sum from an array
function findSum(inputArr) {
  var total = 0;
  for (i = 0; i < inputArr.length; i++) {
    total += Number(inputArr[i]);
    console.log(Number(inputArr[i]));
  }
  return total;
}

//finds average from array
function findAvg(inputArr) {
  var sum = findSum(inputArr); //to get the sum
  var count = 0;
  var avg = 0;

  for (i = 0; i < inputArr.length; i++) {
    if (inputArr[i] != 0) {
      count++;
    }
  }

  avg = sum / count;

  if (isNaN(avg)) {
    avg = 0;
  }

  return avg;
}

//function to find reverse
function findReverse(inputArr) {
  var count = 0;
  var reverseArr = [];
  for (i = inputArr.length - 1; i >= 0; i--) {
    reverseArr[count] = Number(inputArr[i]);
    count++;
  }

  var emptyArr = true;
  for (i = 0; i < reverseArr.length; i++) {
    if (reverseArr[i] != 0) emptyArr = false;
  }

  if (!emptyArr) {
    return reverseArr;
  } else return " ";
}

//function of task03 (clears textarea)
function clearAll() {
  document.getElementById("magicInput").value = "";
}

//function to capitalize entire arrays
function capitalize() {
  var inputArr = document.getElementById("magicInput").value.split("\n");
  if (doCapital) {
    for (var i = 0; i < inputArr.length; i++) {
      inputArr[i] = inputArr[i].toUpperCase();
    }
    doCapital = false;
  } else {
    for (var i = 0; i < inputArr.length; i++) {
      inputArr[i] = inputArr[i].toLowerCase();
    }
    doCapital = true;
  }
  document.getElementById("magicInput").value = inputArr.join("\n");
}

//function to sort inputs
function letsSort() {
  var inputArr = document.getElementById("magicInput").value.split("\n");
  inputArr.sort();
  document.getElementById("magicInput").value = inputArr.join("\n");
}

//function to reverse array
function letsReverse() {
  var inputArr = document.getElementById("magicInput").value.split("\n");
  inputArr = inputArr.reverse();
  document.getElementById("magicInput").value = inputArr.join("\n");
}

//function to strip blank
function stripBlank() {
  var inputArr = document.getElementById("magicInput").value.split("\n");

  for (var i = 0; i < inputArr.length; i++) {
    inputArr[i] = inputArr[i].trim();
  }

  var filteredArr = inputArr.filter(checkNull);

  document.getElementById("magicInput").value = filteredArr.join("\n");
}

//for checking null values in array
function checkNull(checkArr) {
  for (var i = 0; i < checkArr.length; i++) {
    if (checkArr[i] != null && checkArr[i] != "") {
      return checkArr[i];
    }
  }
}

//function to add number
function addNum() {
  var inputArr = document.getElementById("magicInput").value.split("\n");

  for (var i = 0; i < inputArr.length; i++) {
    inputArr[i] = [i + 1] + ". " + inputArr[i];
  }

  document.getElementById("magicInput").value = inputArr.join("\n");
}

//shuffles user input
function letsShuffle() {
  var inputArr = document.getElementById("magicInput").value.split("\n");

  for (var i = 0; i < inputArr.length; i++) {
    var rnd = Math.floor(Math.random() * inputArr.length);
    var temp = inputArr[i];
    inputArr[i] = inputArr[rnd];
    inputArr[rnd] = temp;
  }

  document.getElementById("magicInput").value = inputArr.join("\n");
}

//function to generate random quote
function randomQuote() {
  var quoteArr = [
    "Change yourself and fortune will change",
    "A body makes his own luck, be it good or bad",
    "A wise man turns chance into good fortune",
    "Fortune favors the prepared mind",
    "There is frequently a poison in fortune's gifts",
    "True wisdom comes not from knowledge, but from understanding"
  ];

  //for random box color
  var clrArr = ["crimson", "#6082b6", "#50C875", "#5f5f5f", "#F4C431"];
  var clr = Math.floor(Math.random() * clrArr.length);
  document.getElementById("quoteLabel").style.background = clrArr[clr];

  //for random border color
  var borderClrArr = ["black", "purple", "green"];
  var brdrClr = Math.floor(Math.random() * borderClrArr.length);
  document.getElementById("quoteLabel").style.borderColor =
    borderClrArr[brdrClr];

  //for random font size
  var fontSizeArr = ["16px", "18px", "17px"];
  var fontSize = Math.floor(Math.random() * fontSizeArr.length);
  document.getElementById("quoteLabel").style.fontSize = fontSizeArr[fontSize];

  //for random font family
  var fontFamilyArr = ["Courier", "Consolas", "Helvetica"];
  var fontFamily = Math.floor(Math.random() * fontFamilyArr.length);
  document.getElementById("quoteLabel").style.fontFamily =
    fontFamilyArr[fontFamily];

  //for random font color
  var fontClrArr = ["white", "black"];
  var fontClr = Math.floor(Math.random() * fontClrArr.length);
  document.getElementById("quoteLabel").style.color = fontClrArr[fontClr];

  var rnd = Math.floor(Math.random() * quoteArr.length);
  document.getElementById("quoteLabel").innerHTML = quoteArr[rnd];
}
