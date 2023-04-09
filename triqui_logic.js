const square = document.querySelectorAll('.square');
let jugadorActual = 'X';
let player1 = 0;
let player2 = 0;

const jugadores = ['X', 'O'];
square.forEach(square => {
    square.addEventListener('click', () => {
        if (square.textContent === '') {
            square.textContent = jugadorActual;
            square.setAttribute('jugador-data', jugadorActual);
            validWinner();
            jugadorActual = jugadorActual === jugadores[0] ? jugadores[1] : jugadores[0];
        }
    })
}
);

const buttonReset = document.querySelector('#reset-btn');
buttonReset.addEventListener('click', () => {
//location.reload(); //Recargar página
resetTriqui();
});

function validWinner(){
    const winnerCombination = [
        [0, 1, 2],
        [3, 4 ,5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];

    for (let i = 0; i < winnerCombination.length; i++ ){
        const [a, b, c] = winnerCombination[i];
        const squareA = square[a];
        const squareB = square[b];
        const squareC = square[c];
        if(squareA.textContent === jugadorActual &&
            squareB.textContent === jugadorActual &&
            squareC.textContent === jugadorActual)
            {
                const winnerTag = document.querySelector('#winner-tag');
                winnerTag.textContent = `El ganador fue ${jugadorActual}, ¡Felicitaciones!`;
                sum();
                setTimeout(() =>{
                    resetTriqui();
                }, 3000
                );
                return;
            }
    }
}
function resetTriqui(){
    square.forEach(square => {
        square.textContent = '';
        square.removeAttribute('jugador-data');
    });
    jugadorActual = 'X';
    const winnerTag = document.querySelector('#winner-tag');
    winnerTag.textContent = "No ha ganado nadie por ahora";
}
function sum(){
    if(jugadorActual === jugadores[0]){
        player1 = player1 + 1;
        const player1Tag = document.querySelector('#player1-tag');
        player1Tag.textContent = `Score player 1 (X) = ${player1}`;
    }
    else if(jugadorActual === jugadores[1]){
        player2 = player2 + 1;
        const player2Tag = document.querySelector('#player2-tag');
        player2Tag.textContent = `Score player 2 (X) = ${player2}`;
    }
}