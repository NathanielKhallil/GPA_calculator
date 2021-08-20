const formTwo = document.getElementById("year_two").elements;


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

function calculateGpaOne() {
    let formOne = document.getElementById("year_one").elements;
    let number_list = [];
    let letter_list = [];
    let gpa_list = [];

    for (let i = 0; i < formOne.length; i++)
        if (formOne[i].value !== '')
            number_list.push((formOne[i].value));
    number_list = number_list.map(x => Number(x));

    for (let i = 0; i < number_list.length; i++) {
        if (number_list[i] < 50)
            letter_list.push('F');

        if (number_list[i] > 49 && number_list[i] < 55)
            letter_list.push('D');

        if (number_list[i] > 54 && number_list[i] < 60)
            letter_list.push('D+');

        if (number_list[i] > 59 && number_list[i] < 64)
            letter_list.push('C-');

        if (number_list[i] > 63 && number_list[i] < 67)
            letter_list.push('C');

        if (number_list[i] > 66 && number_list[i] < 70)
            letter_list.push('C+');

        if (number_list[i] > 69 && number_list[i] < 73)
            letter_list.push('B-');

        if (number_list[i] > 72 && number_list[i] < 76)
            letter_list.push('B');

        if (number_list[i] > 75 && number_list[i] < 80)
            letter_list.push('B+');

        if (number_list[i] > 79 && number_list[i] < 85)
            letter_list.push('A-');

        if (number_list[i] > 84)
            letter_list.push('A');
    }

    for (let i = 0; i < letter_list.length; i++) {
        if (letter_list[i] == 'f')
            gpa_list.push(0);
        if (letter_list[i] == 'D')
            gpa_list.push(1);
        if (letter_list[i] == 'D+')
            gpa_list.push(1.3);
        if (letter_list[i] == 'C-')
            gpa_list.push(1.7);
        if (letter_list[i] == 'C')
            gpa_list.push(2);
        if (letter_list[i] == 'C+')
            gpa_list.push(2.3);
        if (letter_list[i] == 'B-')
            gpa_list.push(2.7);
        if (letter_list[i] == 'B')
            gpa_list.push(3);
        if (letter_list[i] == 'B+')
            gpa_list.push(3.3);
        if (letter_list[i] == 'A-')
            gpa_list.push(3.7);
        if (letter_list[i] == 'A')
            gpa_list.push(4);
    }

    if (checkUpdate = true) {
        let reset = document.getElementById('listOne');
        reset.removeChild(reset.childNodes[48]);
        combined_gpa = combined_gpa.splice(combined_gpa[0], 1);
        console.log(combined_gpa);

    }

    let sum = gpa_list.reduce((a, b) => a + b);
    let gpa = sum / letter_list.length;

    gpa = Number((Math.abs(gpa) * 100).toPrecision(15));
    gpa = Math.round(gpa) / 100 * Math.sign(gpa)

    combined_gpa.push(gpa);

    const yearOneGpa = document.getElementById('listOne');

    let gpaResult = document.createElement('p');
    gpaResult.setAttribute("id", "result1");

    gpaResult.textContent = 'Year 1 GPA:' + gpa;

    yearOneGpa.appendChild(gpaResult);

    checkUpdate = true;
    console.log(number_list);
    console.log(letter_list);
    console.log(gpa_list);

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
    let letter_list = [];
    let gpa_list = [];

    for (let i = 0; i < formTwo.length; i++)
        if (formTwo[i].value !== '')
            year_one.push((formTwo[i].value));

    year_one = year_one.map(x => Number(x));

    for (let i = 0; i < year_one.length; i++) {
        if (year_one[i] < 50)
            letter_list.push('F');

        if (year_one[i] > 49 && year_one[i] < 55)
            letter_list.push('D');

        if (year_one[i] > 54 && year_one[i] < 60)
            letter_list.push('D+');

        if (year_one[i] > 59 && year_one[i] < 64)
            letter_list.push('C-');

        if (year_one[i] > 63 && year_one[i] < 67)
            letter_list.push('C');

        if (year_one[i] > 66 && year_one[i] < 70)
            letter_list.push('C+');

        if (year_one[i] > 69 && year_one[i] < 73)
            letter_list.push('B-');

        if (year_one[i] > 72 && year_one[i] < 76)
            letter_list.push('B');

        if (year_one[i] > 75 && year_one[i] < 80)
            letter_list.push('B+');

        if (year_one[i] > 79 && year_one[i] < 85)
            letter_list.push('A-');

        if (year_one[i] > 84)
            letter_list.push('A');
    }

    for (let i = 0; i < letter_list.length; i++) {
        if (letter_list[i] == 'f')
            gpa_list.push(0);
        if (letter_list[i] == 'D')
            gpa_list.push(1);
        if (letter_list[i] == 'D+')
            gpa_list.push(1.3);
        if (letter_list[i] == 'C-')
            gpa_list.push(1.7);
        if (letter_list[i] == 'C')
            gpa_list.push(2);
        if (letter_list[i] == 'C+')
            gpa_list.push(2.3);
        if (letter_list[i] == 'B-')
            gpa_list.push(2.7);
        if (letter_list[i] == 'B')
            gpa_list.push(3);
        if (letter_list[i] == 'B+')
            gpa_list.push(3.3);
        if (letter_list[i] == 'A-')
            gpa_list.push(3.7);
        if (letter_list[i] == 'A')
            gpa_list.push(4);
    }


    if (checkUpdate = true) {
        let reset = document.getElementById('listTwo');
        reset.removeChild(reset.childNodes[48]);
        combined_gpa = combined_gpa.splice(combined_gpa[0], 1);
        console.log(combined_gpa);

    }

    let sum = gpa_list.reduce((a, b) => a + b);
    let gpa = sum / letter_list.length;

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