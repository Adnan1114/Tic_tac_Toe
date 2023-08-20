const cells = document.querySelectorAll('.cell');
let currentPlayer = 'X';

cells.forEach(cell => {
    cell.addEventListener('click', () => {
        if (!cell.textContent) {
            cell.textContent = currentPlayer;
            function checkForWin(player) {
                const winningCombos = [
                    [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
                    [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
                    [0, 4, 8], [2, 4, 6] // Diagonals
                ];
            
                return winningCombos.some(combination => {
                    return combination.every(index => cells[index].textContent === player);
                });
            }

            function checkForDraw() {
                return Array.from(cells).every(cell => cell.textContent !== '');
            }            
            
            if (checkForWin(currentPlayer)) {
                // Display win message
                const winMessage = document.getElementById('win-message');
                winMessage.style.display = 'flex';
                setTimeout(() => {
                    resetGame();
                    winMessage.style.display = 'none';
                }, 3000);
            } else if (checkForDraw()) {
                // Display draw message
                const drawMessage = document.getElementById('draw-message');
                drawMessage.style.display = 'flex';
                setTimeout(() => {
                    resetGame();
                    drawMessage.style.display = 'none';
                }, 3000);
            } else {
                // Switch players
                currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
            }
        }
    });
});
