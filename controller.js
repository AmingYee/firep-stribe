import Model from './model.js';
import View from './view.js';

const model = new Model();
const view = new View();

for (let col = 0; col < 7; col++) {
    view.cells[col].addEventListener('click', () => {
        if (model.currentPlayer === 1) {
            const column = col;
            const { row } = model.addCoin(column);
            if (row !== null) {
                view.addCoin(row, column, model.currentPlayer);
                if (model.checkWinner(row, column)) {
                    alert(`Player ${model.currentPlayer} wins!`);
                    model.reset();
                    view.clearBoard();
                } else {
                    model.switchPlayer();
                    setTimeout(aiMove, 1000)
                }
            } else {
                alert('Column is full!');
            }
        }
    });
}

function aiMove() {
    const column = Math.floor(Math.random() * 7);
    const { row } = model.addCoin(column);
    if (row !== null) {
        view.addCoin(row, column, model.currentPlayer);
        if (model.checkWinner(row, column)) {
            alert(`Player ${model.currentPlayer} wins!`);
            model.reset();
            view.clearBoard();
        } else {
            model.switchPlayer();
        }
    } else {
        aiMove();
    }
}