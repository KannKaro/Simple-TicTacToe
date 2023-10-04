let player = 'X';
let gameEnd = false;
let win = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
]
for (let i = 0; i <= 8; i++) {       //Gdy klikam wstawia sie symbol gracza
    document.getElementById(i.toString()).addEventListener('click',
        function () {
            if (this.innerHTML === "" && !gameEnd) {
                this.innerHTML = player;
                this.classList.add(player.toLowerCase());

                if (player === "X") {//zmiana u miedzy X i O
                    player = "O"
                }
                else {
                    player = "X"
                }
                check();
            }
        }
    )
}
document.getElementById("reset").addEventListener('click',  //reset planszy 
    function () {
        for (let i = 0; i <= 8; i++) {
            document.getElementById(i.toString()).innerHTML = "";
            document.getElementById(i.toString()).classList.remove("x");
            document.getElementById(i.toString()).classList.remove("o");
            document.getElementById(i.toString()).classList.remove("win");
            gameEnd = false;
        }
    }
)
function check() {
    for (let i = 0; i < win.length; i++) {
        if (
            document.getElementById(win[i][0]).innerHTML === player &&
            document.getElementById(win[i][1]).innerHTML === player &&
            document.getElementById(win[i][2]).innerHTML === player
        ) {
            document.getElementById(win[i][0]).classList.add("win");
            document.getElementById(win[i][1]).classList.add("win");
            document.getElementById(win[i][2]).classList.add("win");
            gameEnded = true;

            setTimeout(function () {
                alert(player + " wins!");
            }, 500);
        }
    }
}
