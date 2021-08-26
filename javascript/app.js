
function addDate() {

  const idSelection = document.getElementById("footer__text");
  
  const currentTime = new Date();

  idSelection.textContent = "Current date & time: " 
    + currentTime.getDate().toString().padStart(2, '0') + "/"
    + (currentTime.getMonth()+1).toString().padStart(2, '0') + "/"
    + currentTime.getFullYear() + "  "  
    + currentTime.getHours().toString().padStart(2, '0') + ":"  
    + currentTime.getMinutes().toString().padStart(2, '0') + ":" 
    + currentTime.getSeconds().toString().padStart(2, '0');
    }

window.onload = function() {
        setInterval(addDate, 1000)
};

// calculate GPA for year one in Alberta, Canada

function calculateGpa(arg) {
    let elementList = arg.elements;
    let numberList = [];
    let gpaList = [];
    
    const testForRerun = arg.querySelector('ul').lastElementChild.lastElementChild;
    
    if (testForRerun.value > 0) {
        testForRerun.value = '';
    }
    
    for (let i = 0; i < elementList.length; i++)
        if (elementList[i].value !== '')
            numberList.push((elementList[i].value));
    numberList = numberList.map(x => Number(x));
    
    for (let i = 0; i < numberList.length; i++) {
        if (numberList[i] < 50)
            gpaList.push(0);

        if (numberList[i] > 49 && numberList[i] < 55)
            gpaList.push(1);

        if (numberList[i] > 54 && numberList[i] < 60)
            gpaList.push(1.3);

        if (numberList[i] > 59 && numberList[i] < 64)
            gpaList.push(1.7);

        if (numberList[i] > 63 && numberList[i] < 67)
            gpaList.push(2);

        if (numberList[i] > 66 && numberList[i] < 70)
            gpaList.push(2.3);;

        if (numberList[i] > 69 && numberList[i] < 73)
            gpaList.push(2.7);

        if (numberList[i] > 72 && numberList[i] < 76)
            gpaList.push(3);

        if (numberList[i] > 75 && numberList[i] < 80)
            gpaList.push(3.3);

        if (numberList[i] > 79 && numberList[i] < 85)
            gpaList.push(3.7);

        if (numberList[i] > 84)
            gpaList.push(4);
    }
        console.log(gpaList);

    
    let sum = gpaList.reduce((a, b) => a + b);
    let gpa = sum / numberList.length;

    gpa = Number((Math.abs(gpa) * 100).toPrecision(15));
    gpa = Math.round(gpa) / 100 * Math.sign(gpa)

    const gpaInput = arg.querySelector('ul').lastElementChild.lastElementChild;
   
    gpaInput.value = gpa;  
}

// reset First Year GPA, delete entry from cumulative GPA
function resetGpa(resultText) {
    resultText.reset();
}


// cumulative GPA

totalButton = document.getElementById('finalGpaBtn');

totalButton.onclick = function() {  
    let gpaTotals = [];
    
    totalGpa = document.getElementsByClassName('yearGpa');
    
    for (i = 0; i < totalGpa.length; i++) {
        gpaTotals.push(totalGpa[i].value);
    }

    gpaTotals = gpaTotals.map(x => Number(x)).filter(index => index !== 0);;
   
    let endGpa = gpaTotals.reduce((a, b) => a + b);
    endGpa = endGpa / gpaTotals.length;

    endGpa = Number((Math.abs(endGpa) * 100).toPrecision(15));
    endGpa = Math.round(endGpa) / 100 * Math.sign(endGpa);

    const result = document.getElementById("totalGpa");
    result.value = endGpa;


}



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