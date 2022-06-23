
let win = 0;
let lose = 0;
let draw = 0;
let score = 0;

const game = (choice) => {
    let player = choice;
    let option = ["gunting","batu","kertas"];
    let pc = option[Math.floor(Math.random()*3)];

    document.getElementById("img-player").src = `./${player}.png`;

    let combine = player + pc;

    if (combine == "kertaskertas" || combine == "batubatu" || combine == "guntinggunting") {
        shuffleImage(pc);
        setTimeout(() => { document.getElementById("game-status").innerHTML = "DRAW!!!"}, 1000);
        
        draw += 1;
    } else if (combine == "batugunting" || combine == "kertasbatu" || combine == "guntingkertas") {
        shuffleImage(pc);
        setTimeout(() => { document.getElementById("game-status").innerHTML = "PLAYER WIN!!!" }, 1000);

        win += 1;
        score += 25;
    } else {
        shuffleImage(pc);
        setTimeout(() => { document.getElementById("game-status").innerHTML = "PLAYER LOSE!!!" }, 1000);

        lose += 1;
    }
    
}

const shuffleImage = (pcChoice) => {
    for (let i = 1; i < 3000; i++) {
        setTimeout(() => { kertas() }, 125);
        setTimeout(() => { gunting() }, 125);
        setTimeout(() => { batu() }, 125);
    }
    
    setTimeout(() => { document.getElementById("img-pc").src = `./${pcChoice}.png`; }, 1000);
    setTimeout(() => { document.getElementById("game-result").innerHTML = `
    <br>RESULT
    <br>WIN: ${win}
    <br>LOSE: ${lose}
    <br>DRAW: ${draw}
    <br><br>SCORE: ${score}` }, 1000);
}

const kertas = () => {
    document.getElementById("img-pc").src = `./kertas.png`;
}
const gunting = () => {
    document.getElementById("img-pc").src = `./gunting.png`;
}
const batu = () => {
    document.getElementById("img-pc").src = `./batu.png`;
}

