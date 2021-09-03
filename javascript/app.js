/*jshint esversion: 6 */

// calculate GPA for each year in Alberta, Canada

window.calculateGpa = function calculateGpa(arg) {
  let elementList = arg,
    numberList1 = [],
    numberList2 = [],
    gpaList = [],
    weightFactor = [],
    testForRerun =
      arg.nextElementSibling.nextElementSibling.lastElementChild
        .lastElementChild,
    errorMessage = "Enter a valid number between 0 and 100.";

  if (testForRerun.value >= 0) {
    testForRerun.value = "";
  }

  if (arg.firstElementChild.textContent === errorMessage) {
    arg.removeChild(arg.firstElementChild);
  }
  // Error message from incorrect values.
  Array.from(elementList.children).forEach((element) => {
    if (
      element.lastElementChild.value > 100 ||
      element.lastElementChild.value < 0 ||
      isNaN(element.lastElementChild.value)
    ) {
      let errorElement = document.createElement("h4");
      errorElement.textContent = errorMessage;
      errorElement.style.color = "red";
      arg.insertBefore(errorElement, arg.firstElementChild);
    }
    // Push first ul values from the form & map to number type.
    if (element.lastElementChild.value !== "")
      numberList1.push(element.lastElementChild.value);
  });

  numberList1 = numberList1.map((x) => Number(x));

  numberList1.forEach((element) => {
    if (element < 50) gpaList.push(0);

    if (element > 49 && element < 55) gpaList.push(1 * 3);

    if (element > 54 && element < 60) gpaList.push(1.3 * 3);

    if (element > 59 && element < 64) gpaList.push(1.7 * 3);

    if (element > 63 && element < 67) gpaList.push(2 * 3);

    if (element > 66 && element < 70) gpaList.push(2.3 * 3);

    if (element > 69 && element < 73) gpaList.push(2.7 * 3);

    if (element > 72 && element < 76) gpaList.push(3 * 3);

    if (element > 75 && element < 80) gpaList.push(3.3 * 3);

    if (element > 79 && element < 85) gpaList.push(3.7 * 3);

    if (element > 84) gpaList.push(4 * 3);

    weightFactor.push(3);
  });

  // check for 1.5 weighted courses

  Array.from(elementList.nextElementSibling.children).forEach((element) => {
    if (element.lastElementChild.value !== "")
      numberList2.push(element.lastElementChild.value);
  });

  numberList2 = numberList2.map((x) => Number(x));

  numberList2.forEach((element) => {
    if (element < 50) gpaList.push(0);

    if (element > 49 && element < 55) gpaList.push(1 * 1.5);

    if (element > 54 && element < 60) gpaList.push(1.3 * 1.5);

    if (element > 59 && element < 64) gpaList.push(1.7 * 1.5);

    if (element > 63 && element < 67) gpaList.push(2 * 1.5);

    if (element > 66 && element < 70) gpaList.push(2.3 * 1.5);

    if (element > 69 && element < 73) gpaList.push(2.7 * 1.5);

    if (element > 72 && element < 76) gpaList.push(3 * 1.5);

    if (element > 75 && element < 80) gpaList.push(3.3 * 1.5);

    if (element > 79 && element < 85) gpaList.push(3.7 * 1.5);

    if (element > 84) gpaList.push(4 * 1.5);

    weightFactor.push(1.5);
  });
  // total and rounding to 2 decimals
  let sum = gpaList.reduce((a, b) => a + b),
    weightTotal = weightFactor.reduce((a, b) => a + b);

  let gpa = sum / weightTotal;

  gpa = Number((Math.abs(gpa) * 100).toPrecision(15));
  gpa = (Math.round(gpa) / 100) * Math.sign(gpa);

  let gpaInput =
    arg.nextElementSibling.nextElementSibling.lastElementChild.lastElementChild;
  gpaInput.value = gpa;
};

// reset Year GPA, delete entry from cumulative GPA

window.resetGpa = function resetGpa(resultText) {
  let errorMessage = "Enter a valid number between 0 and 100.";
  resultText.reset();

  if (resultText.firstElementChild.textContent === errorMessage) {
    resultText.removeChild(resultText.firstElementChild);
  }
};

// cumulative GPA

let totalButton = document.getElementById("finalGpaBtn");

totalButton.onclick = function () {
  let gpaTotals = [];

  let totalGpa = document.getElementsByClassName("yearGpa");

  Array.from(totalGpa).forEach((element) => {
    if (element.value == "0") {
      gpaTotals.push(5);
    }
    if (element.value != "0") {
      gpaTotals.push(element.value);
    }
  });
  gpaTotals = gpaTotals.map((x) => Number(x)).filter((index) => index !== 0);

  gpaTotals.forEach(function (element, index) {
    if (element === 5) {
      gpaTotals[index] = 0;
    }
  });
  console.log(gpaTotals);
  const result = document.getElementById("totalGpa");

  let endGpa = gpaTotals.reduce((a, b) => a + b) / gpaTotals.length;
  endGpa = Number((Math.abs(endGpa) * 100).toPrecision(15));

  result.value = (Math.round(endGpa) / 100) * Math.sign(endGpa);
};

function addDate() {
  const idSelection = document.getElementById("footer__text"),
    currentTime = new Date();

  idSelection.textContent =
    "Current date & time: " +
    currentTime.getDate().toString().padStart(2, "0") +
    "/" +
    (currentTime.getMonth() + 1).toString().padStart(2, "0") +
    "/" +
    currentTime.getFullYear() +
    "  " +
    currentTime.getHours().toString().padStart(2, "0") +
    ":" +
    currentTime.getMinutes().toString().padStart(2, "0") +
    ":" +
    currentTime.getSeconds().toString().padStart(2, "0");
}

window.onload = function () {
  setInterval(addDate, 1000);
};

// code for potential letter grade version
// for (let i = 0; i < letterList.length; i++) {
//     if (letterList[i] == 'f')
//         gpaList.push('0');//
//     if (letterList[i] == 'D')
//         gpaList.push(1); //
//     if (letterList[i] == 'D+')
//         gpaList.push(1.3);//
//     if (letterList[i] == 'C-')
//         gpaList.push(1.7);//
//     if (letterList[i] == 'C')
//         gpaList.push(2);//
//     if (letterList[i] == 'C+')
//         gpaList.push(2.3);//
//     if (letterList[i] == 'B-')
//         gpaList.push(2.7);//
//     if (letterList[i] == 'B')
//         gpaList.push(3);//
//     if (letterList[i] == 'B+')
//         gpaList.push(3.3);//
//     if (letterList[i] == 'A-')
//         gpaList.push(3.7);//
//     if (letterList[i] == 'A')
//         gpaList.push(4);
// }
