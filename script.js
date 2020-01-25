let initialRows = [
    '👇🏿👇🏿👇🏿👇🏿👇🏿',
    '👉🏿👇🏾👇🏾👇🏾👇🏾',
    '👉🏿👉🏾👇🏽👇🏽👇🏽',
    '👉🏿👉🏾👉🏽👇🏼👇🏼',
    '👉🏿👉🏾👉🏽👉🏼👇🏻',
    '👉🏿👉🏾👉🏽👉🏼👉🏻',
    '👉🏿👉🏾👉🏽👉🏼👆🏻',
    '👉🏿👉🏾👉🏽👆🏼👆🏼',
    '👉🏿👉🏾👆🏽👆🏽👆🏽',
    '👉🏿👆🏾👆🏾👆🏾👆🏾',
    '👆🏿👆🏿👆🏿👆🏿👆🏿',
];
let middleRows = [
    '👇🏿',
    '👇🏾',
    '👇🏽',
    '👇🏼','👇🏻',
    '',
    '👆🏻',
    '👆🏼','👆🏽',
    '👆🏾',
    '👆🏿',
];
let endRows = [
    '👇🏿👇🏿👇🏿👇🏿👇🏿',
    '👇🏾👇🏾👇🏾👇🏾👈🏿',
    '👇🏽👇🏽👇🏽👈🏾👈🏿',
    '👇🏼👇🏼👈🏽👈🏾👈🏿',
    '👇🏻👈🏼👈🏽👈🏾👈🏿',
    '👈🏻👈🏼👈🏽👈🏾👈🏿',
    '👆🏻👈🏼👈🏽👈🏾👈🏿',
    '👆🏼👆🏼👈🏽👈🏾👈🏿',
    '👆🏽👆🏽👆🏽👈🏾👈🏿',
    '👆🏾👆🏾👆🏾👆🏾👈🏿',
    '👆🏿👆🏿👆🏿👆🏿👆🏿',
];

function response(text) {
    let numColumnsNeeded = parseInt(text.length / 1);
    let rows = initialRows;
    for (let i = 0; i < rows.length; i++) {
        // Add middle
        if (i == 5) {
            rows[i] += text;
        } else {
            for (let j = 0; j < numColumnsNeeded; j++) {
                rows[i] += middleRows[i];
            }
        }
        // Add ends to rows
        rows[i] += endRows[i];
    }
}

let input = document.getElementById('input'),
    output = document.getElementById('output');
function setOutput(e) {
    // InnerHTML used intentionally here, because italics are sometimes used.
    output.innerHTML = response(e.target.value);
}
input.onchange = setOutput;