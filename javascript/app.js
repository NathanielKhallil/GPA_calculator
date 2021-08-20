const formOne = document.getElementById("year_one").elements;
const formTwo = document.getElementById("year_two").elements;

let buttonOne = document.getElementById('gpa_one');
let buttonTwo = document.getElementById('gpa_two');
let buttonThree = document.getElementById('gpa_three');
let buttonFour = document.getElementById('gpa_four');

let resetButtonOne = document.getElementById('reset_gpa1');
let resetButtonTwo = document.getElementById('reset_gpa2');
let resetButtonThree = document.getElementById('reset_gpa3');
let resetButtonFour = document.getElementById('reset_gpa4');


let checkUpdate = false;

let combined_gpa = [];


// Calculate GPA for year one in Alberta, Canada

buttonOne.onclick = function () {
    let year_one = [];
    let first_year = [];
    let gpa_one = [];

    for (let i = 0; i < formOne.length; i++)
        if (formOne[i].value !== '')
            year_one.push((formOne[i].value));
    year_one = year_one.map(x => Number(x));

    for (let i = 0; i < year_one.length; i++) {
        if (year_one[i] < 50)
            first_year.push('F');

        if (year_one[i] > 49 && year_one[i] < 55)
            first_year.push('D');

        if (year_one[i] > 54 && year_one[i] < 60)
            first_year.push('D+');

        if (year_one[i] > 59 && year_one[i] < 64)
            first_year.push('C-');

        if (year_one[i] > 63 && year_one[i] < 67)
            first_year.push('C');

        if (year_one[i] > 66 && year_one[i] < 70)
            first_year.push('C+');

        if (year_one[i] > 69 && year_one[i] < 73)
            first_year.push('B-');

        if (year_one[i] > 72 && year_one[i] < 76)
            first_year.push('B');

        if (year_one[i] > 75 && year_one[i] < 80)
            first_year.push('B+');

        if (year_one[i] > 79 && year_one[i] < 85)
            first_year.push('A-');

        if (year_one[i] > 84)
            first_year.push('A');
    }

    for (let i = 0; i < first_year.length; i++) {
        if (first_year[i] == 'f')
            gpa_one.push(0);
        if (first_year[i] == 'D')
            gpa_one.push(1);
        if (first_year[i] == 'D+')
            gpa_one.push(1.3);
        if (first_year[i] == 'C-')
            gpa_one.push(1.7);
        if (first_year[i] == 'C')
            gpa_one.push(2);
        if (first_year[i] == 'C+')
            gpa_one.push(2.3);
        if (first_year[i] == 'B-')
            gpa_one.push(2.7);
        if (first_year[i] == 'B')
            gpa_one.push(3);
        if (first_year[i] == 'B+')
            gpa_one.push(3.3);
        if (first_year[i] == 'A-')
            gpa_one.push(3.7);
        if (first_year[i] == 'A')
            gpa_one.push(4);
    }


    if (checkUpdate = true) {
        let reset = document.getElementById('listOne');
        reset.removeChild(reset.childNodes[48]);
        combined_gpa = combined_gpa.splice(combined_gpa[0], 1);
        console.log(combined_gpa);

    }

    let sum = gpa_one.reduce((a, b) => a + b);
    let gpa = sum / first_year.length;

    gpa = Number((Math.abs(gpa) * 100).toPrecision(15));
    gpa = Math.round(gpa) / 100 * Math.sign(gpa)

    combined_gpa.push(gpa);

    const yearOneGpa = document.getElementById('listOne');

    let gpaResult = document.createElement('p');
    gpaResult.setAttribute("id", "result1");

    gpaResult.textContent = 'Year 1 GPA:' + gpa;

    yearOneGpa.appendChild(gpaResult);

    checkUpdate = true;
    console.log(combined_gpa);
}

// reset First Year GPA, delete entry from cummulative GPA
resetButtonOne.onclick = function () {
    let reset = document.getElementById("result1");
    reset.textContent = '';
    combined_gpa = combined_gpa.splice(combined_gpa[0], 1);
    console.log(combined_gpa)
}


buttonTwo.onclick = function () {
    let year_one = [];
    let first_year = [];
    let gpa_one = [];

    for (let i = 0; i < formTwo.length; i++)
        if (formTwo[i].value !== '')
            year_one.push((formTwo[i].value));

    year_one = year_one.map(x => Number(x));

    for (let i = 0; i < year_one.length; i++) {
        if (year_one[i] < 50)
            first_year.push('F');

        if (year_one[i] > 49 && year_one[i] < 55)
            first_year.push('D');

        if (year_one[i] > 54 && year_one[i] < 60)
            first_year.push('D+');

        if (year_one[i] > 59 && year_one[i] < 64)
            first_year.push('C-');

        if (year_one[i] > 63 && year_one[i] < 67)
            first_year.push('C');

        if (year_one[i] > 66 && year_one[i] < 70)
            first_year.push('C+');

        if (year_one[i] > 69 && year_one[i] < 73)
            first_year.push('B-');

        if (year_one[i] > 72 && year_one[i] < 76)
            first_year.push('B');

        if (year_one[i] > 75 && year_one[i] < 80)
            first_year.push('B+');

        if (year_one[i] > 79 && year_one[i] < 85)
            first_year.push('A-');

        if (year_one[i] > 84)
            first_year.push('A');
    }

    for (let i = 0; i < first_year.length; i++) {
        if (first_year[i] == 'f')
            gpa_one.push(0);
        if (first_year[i] == 'D')
            gpa_one.push(1);
        if (first_year[i] == 'D+')
            gpa_one.push(1.3);
        if (first_year[i] == 'C-')
            gpa_one.push(1.7);
        if (first_year[i] == 'C')
            gpa_one.push(2);
        if (first_year[i] == 'C+')
            gpa_one.push(2.3);
        if (first_year[i] == 'B-')
            gpa_one.push(2.7);
        if (first_year[i] == 'B')
            gpa_one.push(3);
        if (first_year[i] == 'B+')
            gpa_one.push(3.3);
        if (first_year[i] == 'A-')
            gpa_one.push(3.7);
        if (first_year[i] == 'A')
            gpa_one.push(4);
    }


    if (checkUpdate = true) {
        let reset = document.getElementById('listTwo');
        reset.removeChild(reset.childNodes[48]);
        combined_gpa = combined_gpa.splice(combined_gpa[0], 1);
        console.log(combined_gpa);

    }

    let sum = gpa_one.reduce((a, b) => a + b);
    let gpa = sum / first_year.length;

    gpa = Number((Math.abs(gpa) * 100).toPrecision(15));
    gpa = Math.round(gpa) / 100 * Math.sign(gpa)

    combined_gpa.push(gpa);

    const yearOneGpa = document.getElementById('listTwo');

    let gpaResult = document.createElement('p');
    gpaResult.setAttribute("id", "result2");

    gpaResult.textContent = 'Year 2 GPA:' + gpa;

    yearOneGpa.appendChild(gpaResult);

    checkUpdate = true;
    console.log(combined_gpa);
}

// reset First Year GPA, delete entry from cummulative GPA
resetButtonTwo.onclick = function () {
    let reset = document.getElementById("result2");
    reset.textContent = '';
    combined_gpa = combined_gpa.splice(combined_gpa[0], 1);
    console.log(combined_gpa)
}