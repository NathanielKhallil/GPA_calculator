
let combined_gpa = [];


// Calculate GPA for year one in Alberta, Canada

function calculateGpaOne(arg) {
    let element_list = arg.elements;
    let number_list = [];
    let letter_list = [];
    let gpa_list = [];

    for (let i = 0; i < element_list.length; i++)
        if (element_list[i].value !== '')
            number_list.push((element_list[i].value));
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

    let sum = gpa_list.reduce((a, b) => a + b);
    let gpa = sum / letter_list.length;

    gpa = Number((Math.abs(gpa) * 100).toPrecision(15));
    gpa = Math.round(gpa) / 100 * Math.sign(gpa)

    const gpa_results = arg.querySelector('ul');
    const gpa_input = gpa_results.lastElementChild;
    gpa_input.value = gpa;  
}

// reset First Year GPA, delete entry from cummulative GPA
function resetGpa(resultText) {
    resultText.reset();
}




// cumulative GPA - under construction

// combined_gpa.push(gpa);
// combined_gpa = combined_gpa.splice(combined_gpa[0], 1);
// console.log(combined_gpa)