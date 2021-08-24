// calculate GPA for year one in Alberta, Canada

function calculateGpa(arg) {
    let elementList = arg.elements;
    let numberList = [];
    let letterList = [];
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
            letterList.push('F');

        if (numberList[i] > 49 && numberList[i] < 55)
            letterList.push('D');

        if (numberList[i] > 54 && numberList[i] < 60)
            letterList.push('D+');

        if (numberList[i] > 59 && numberList[i] < 64)
            letterList.push('C-');

        if (numberList[i] > 63 && numberList[i] < 67)
            letterList.push('C');

        if (numberList[i] > 66 && numberList[i] < 70)
            letterList.push('C+');

        if (numberList[i] > 69 && numberList[i] < 73)
            letterList.push('B-');

        if (numberList[i] > 72 && numberList[i] < 76)
            letterList.push('B');

        if (numberList[i] > 75 && numberList[i] < 80)
            letterList.push('B+');

        if (numberList[i] > 79 && numberList[i] < 85)
            letterList.push('A-');

        if (numberList[i] > 84)
            letterList.push('A');
    }
        
    for (let i = 0; i < letterList.length; i++) {
        if (letterList[i] == 'f')
            gpaList.push(0);
        if (letterList[i] == 'D')
            gpaList.push(1);
        if (letterList[i] == 'D+')
            gpaList.push(1.3);
        if (letterList[i] == 'C-')
            gpaList.push(1.7);
        if (letterList[i] == 'C')
            gpaList.push(2);
        if (letterList[i] == 'C+')
            gpaList.push(2.3);
        if (letterList[i] == 'B-')
            gpaList.push(2.7);
        if (letterList[i] == 'B')
            gpaList.push(3);
        if (letterList[i] == 'B+')
            gpaList.push(3.3);
        if (letterList[i] == 'A-')
            gpaList.push(3.7);
        if (letterList[i] == 'A')
            gpaList.push(4);
    }
    
    let sum = gpaList.reduce((a, b) => a + b);
    let gpa = sum / letterList.length;

    gpa = Number((Math.abs(gpa) * 100).toPrecision(15));
    gpa = Math.round(gpa) / 100 * Math.sign(gpa)

    const gpaInput = arg.querySelector('ul').lastElementChild.lastElementChild;
   
    gpaInput.value = gpa;  
}

// reset First Year GPA, delete entry from cummulative GPA
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