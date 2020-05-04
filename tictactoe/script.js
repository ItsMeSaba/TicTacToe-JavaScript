//Getting BLocks
let td = document.getElementsByTagName('td');

// Win Combinations
let win = [
    "012",
    "345",
    "678",
    "036",
    "147",
    "258",
    "048",
    "246"
];

let pos = {
    'O' : '',
    'X' : ''
}

let play = 1; //Play Count
let freeSpots = 9;

for(let i = 0; i < td.length; i++) {
    td[i].addEventListener('click', function(x) {
        let id = x.target.id;

        if(this.innerHTML) return false;

        play++;
        freeSpots--;

        let action = (player, char) => {
            player[char] += id;
            player[char] = player[char].split('').sort().join('');

            if(player[char].length < 3) return false;

            for(let a = 0; a < win.length; a++) {
                if(!player[char].includes(win[a][0])) continue;
                if(!player[char].includes(win[a][1])) continue;
                if(!player[char].includes(win[a][2])) continue;

                document.getElementsByClassName('end')[0].style.display = 'flex';
                document.getElementsByClassName('winner')[0].innerHTML = char + ' WON';
                return true;
            }
        }

        if(!freeSpots) {
            document.getElementsByClassName('end')[0].style.display = 'flex';
            document.getElementsByClassName('winner')[0].innerHTML = 'Tie';
        }


        let change = (first, second) => {
            first.style.backgroundColor = "white";
            first.style.color = "black";
            second.style.backgroundColor = "rgb(40,40,40)";
            second.style.color = "white";
        }

        let spans = document.getElementsByTagName('span');

        if(play%2 == 1) {
            this.innerHTML = 'O';
            action(pos, 'O');
            change(spans[0], spans[1]);
        } else {
            this.innerHTML = 'X';
            action(pos, 'X');
            change(spans[1], spans[0]);
        }
    });
}

document.getElementById('restart').addEventListener('click', () => { location.reload() })