class View {
    constructor() {
        this.boardElement = document.getElementById('board');
        this.cells = [];

        for (let row = 0; row < 6; row++) {
            for (let col = 0; col < 7; col++) {
                const cell = document.createElement('div');
                cell.classList.add('cell');
                this.cells.push(cell);
                this.boardElement.appendChild(cell);
            }
        }
    }

    clearBoard() {
        for (const cell of this.cells) {
            cell.classList.remove('player1', 'player2');
        }
    }

    addCoin(row, column, currentPlayer) {
        const cellIndex = row * 7 + column;
        this.cells[cellIndex].classList.add(`player${currentPlayer}`);
    }
}

export default View;