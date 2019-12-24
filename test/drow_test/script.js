size_x = parseInt(prompt('size x', '60'));
size_y = parseInt(prompt('size y', '40'));

let coords = [0, 0];
let is_clicked = false;
let mode = 0;

function fill(i, j, block = false){
    let current_bg = cells[i][j].style.backgroundColor;
    colorize(cells[i][j]);
    // Bottom
    if(i + 1 < size_y && block != 'b')
        if(cells[i + 1][j].style.backgroundColor === current_bg)
            fill(i + 1, j, 't');
    // Top
    if(i - 1 > -1 && block != 't')
        if(cells[i - 1][j].style.backgroundColor === current_bg)
            fill(i - 1, j, 'b');
    // Right
    if(j + 1 < size_x && block != 'r')
        if(cells[i][j + 1].style.backgroundColor === current_bg)
            fill(i, j + 1, 'l');
    // Left
    if(j - 1 > -1 && block != 'l')
        if(cells[i][j - 1].style.backgroundColor === current_bg)
            fill(i, j - 1, 'r');
}

function set_mode(m) {
    mode = m;
}

let color = 'black';
document.getElementById('changeColor').onchange = function(){color = this.value};

function colorize(element) {
    element.style.backgroundColor = color;
}

function rectangle(cells, row, column) {
    if (row === coords[0] || column === coords[1])
        return;

    line(cells, coords[0], coords[1], row, coords[1]);
    line(cells, coords[0], coords[1], coords[0], column);
    line(cells, coords[0], column, row, column);
    line(cells, row, coords[1], row, column);

    is_clicked = false;
}

function new_click(element, row, column) {
    coords = [row, column];
    element.style.backgroundColor = color;
    is_clicked = true;
}

function line(cells, start_y, start_x, end_y, end_x) {
    if (end_y === start_y) {
        let positive = (1);
        if (end_x - start_x < 0)
            positive = -1;

        for (let i = 0; i < Math.abs(end_x - start_x); i++) {
            colorize(cells[end_y][end_x - (i * positive)]);
        }
        is_clicked = false;
    } else if (end_x === start_x) {
        let positive = (1);
        if (end_y - start_y < 0)
            positive = -1;

        for (let i = 0; i < Math.abs(end_y - start_y); i++) {
            colorize(cells[end_y - (i * positive)][end_x]);
        }
        is_clicked = false;
    }
}

let parent = document.getElementById('p');

let out = '';

for (let i = 0; i < size_y; i++) {
    out += '<tr id="row-' + i + '">';
    for (let j = 0; j < size_x; j++) {
        out += '<td id="cell-' + i + '-' + j + '"></td>';
    }
    out += '</td>';
}

parent.innerHTML = out;

let cells = [];

for (let i = 0; i < size_y; i++) {
    cells[i] = [];
    for (let j = 0; j < size_x; j++) {
        cells[i][j] = document.getElementById('cell-' + i + '-' + j);
        cells[i][j].onclick = function () {
            switch (mode) {
                case 0:
                    if (!is_clicked) {
                        new_click(this, i, j);
                    } else {
                        line(cells, coords[0], coords[1], i, j);
                    }
                    break;
                case 1:
                    if (!is_clicked) {
                        new_click(this, i, j);
                    } else {
                        rectangle(cells, i, j);
                    }
                    break;
                case 2:
                    fill(i, j);
            }
        }
    }
}