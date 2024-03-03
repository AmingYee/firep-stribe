class Model {
    constructor() {
        this.board = [
            [0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0]
        ];
        this.currentPlayer = 1;
    }

    addCoin(column) {
        for (let row = 5; row >= 0; row--) {
            if (this.board[row][column] === 0) {
                this.board[row][column] = this.currentPlayer;
                return { row, column };
            }
        }
        return null;
    }

    checkWinner(row, column) {
        const directions = [
            [0, 1], [1, 0], [1, 1], [1, -1]
        ];
        for (const [dire, dire2] of directions) {
            let count = 1;
            count += this.countInDirection(row, column, dire, dire2);
            count += this.countInDirection(row, column, -dire, -dire2);
            if (count >= 4) return true;
        }
        return false;
    }

    countInDirection(row, column, dire, dire2) {
        let count = 0;
        let rd = row + dire;
        let cd = column + dire2;
        while (rd >= 0 && rd < 6 && cd >= 0 && cd < 7 && this.board[rd][cd] === this.currentPlayer) {
            count++;
            rd += dire;
            cd += dire2;
        }
        return count;
    }

    switchPlayer() {
        this.currentPlayer = this.currentPlayer === 1 ? 2 : 1;
    }

    reset() {
        this.board = [
            [0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0]
        ];
        this.currentPlayer = 1;
    }
}

export default Model;