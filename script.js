var chessField = [];
var alphabet = ["A", "B", "C", "D", "E", "F", "G", "H"];
var selectedItem;
var arrayMoves = [];

//заполняем двумерный массив коорндинатами ячеек как на шахмотной доске
for (var i = 0; i < 8; i++) {
    chessField[i] = [];
    for (var j = 0; j < 8; j++) {
        chessField[i][j] = alphabet[j] + (8 - i);
    }
}

// очищаем закрашенные клетки удаляя класс отвечающий за добавление цвета
function clearField() {
    selectedItem.className = selectedItem.className.replace(/ paintBlue/g, "");
    var cell;
    for (var i = 0; i < arrayMoves.length; i++) {
        cell = document.getElementById(arrayMoves[i]);
        cell.className = "cell";
    }
}

// обрабатываем клик по клетке
function clickOnCell(event) {

    // если массив с координатами возможных ходов не пустой, то очищаем доску от цветных клеток
    if (arrayMoves.length) {
        clearField();
    }

    var currentPosition = event.target.getAttribute("id"); // записываем координаты выбранной клетки
    selectedItem = event.target;
    selectedItem.className = event.target.className + " paintBlue"; // определяем выбранной клетке синий цвет

    // находим нужную ячейку в двумерном массиве
    var y, x;
    for (var i = 0; i < 8; i++) {
        for (var j = 0; j < 8; j++) {
            if (chessField[i][j] === currentPosition) {
                y = i;
                x = j;
            }
        }
    }
    arrayMoves = moves(y, x); // записываем в массив координаты возможных ходов

    // добавляем выбранным клеткам класс paintGreen, чтобы они окрасились в зеленый цвет
    var cell;
    for (var k = 0; k < arrayMoves.length; k++) {
        cell = document.getElementById(arrayMoves[k]);
        cell.className = cell.className + " paintGreen";
    }
}

// Определяем возможные ходы и записываем их в массив
function moves(y, x) {

    var possibleMoves = [];

    if (y - 2 >= 0 && x - 1 >= 0) {
        possibleMoves.push(chessField[y - 2][x - 1]);
    }
    if (y - 2 >= 0 && x + 1 < 8) {
        possibleMoves.push(chessField[y - 2][x + 1]);
    }
    if (y - 1 >= 0 && x - 2 >= 0) {
        possibleMoves.push(chessField[y - 1][x - 2]);
    }
    if (y - 1 >= 0 && x + 2 < 8) {
        possibleMoves.push(chessField[y - 1][x + 2]);
    }
    if (y + 1 < 8 && x - 2 >= 0) {
        possibleMoves.push(chessField[y + 1][x - 2]);
    }
    if (y + 1 < 8 && x + 2 < 8) {
        possibleMoves.push(chessField[y + 1][x + 2]);
    }
    if (y + 2 < 8 && x - 1 >= 0) {
        possibleMoves.push(chessField[y + 2][x - 1]);
    }
    if (y + 2 < 8 && x + 1 < 8) {
        possibleMoves.push(chessField[y + 2][x + 1]);
    }
    return possibleMoves;
}


