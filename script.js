let rock = document.querySelector("#rock");
let paper = document.querySelector("#paper");
let scissor = document.querySelector("#scissor");
let player = document.querySelector("#player");
let comp = document.querySelector("#comp");

let pscore = document.querySelector("#pscore");
let cscore = document.querySelector("#cscore");
let msg = document.querySelector("#msg");
let reset = document.querySelector("#reset");

let pcount = 0;
let ccount = 0;

pscore.textContent = `${pcount}`;
cscore.textContent = `${ccount}`;

let winPattern = 
[
    "rs", "pr", "sp"
]

let losePattern = 
[
    "sr", "rp", "ps"
]

let drawPattern = 
[
    "rr", "ss", "pp"
]

let setComp = ()=>
{
    let rand = Math.floor(Math.random()*10)%3;
    if (rand == 0) 
        comp.src = "crock.png";
    else if (rand == 1)
        comp.src = "cpaper.png";
    else
        comp.src = "cscissor.png";
}

let checkWinner = ()=>
{
    let p1 = player.src;
    let p2 = comp.src;

    let val1, val2;

    if (p1 == "http://127.0.0.1:5500/Projects/rock-paper-scissor/prock.png")
        val1 = "r";
    else if (p1 == "http://127.0.0.1:5500/Projects/rock-paper-scissor/ppaper.png")
        val1 = "p";
    else
        val1 = "s";

    if (p2 == "http://127.0.0.1:5500/Projects/rock-paper-scissor/crock.png")
        val2 = "r";
    else if (p2 == "http://127.0.0.1:5500/Projects/rock-paper-scissor/cpaper.png")
        val2 = "p";
    else
        val2 = "s";

    let arr = val1 + val2;

    winPattern.forEach((win)=>
    {
        if (win == arr)
        {
            pcount++;
            pscore.textContent = `${pcount}`;
            msg.textContent = "You Won!";
            msg.style.color = "green";
            msg.style.fontSize = "5vw";

        }
    })

    losePattern.forEach((lose)=>
    {
        if (lose == arr)
        {
            ccount++;
            cscore.textContent = `${ccount}`;
            msg.textContent = "You Lose";
            msg.style.color = "red";
            msg.style.fontSize = "5vw";
        }
    })

    drawPattern.forEach((draw)=>
    {
        if (draw == arr)
        {
            msg.textContent = "It's a draw";
            msg.style.color = "yellow";
            msg.style.fontSize = "5vw";
        }
    })
}

reset.addEventListener("click", ()=>
{
    pcount=0;
    ccount=0;
    pscore.textContent = `${pcount}`;
    cscore.textContent = `${ccount}`;

    msg.textContent = "Start";
    msg.style.color = "white";
    msg.style.fontSize = "5vw";

    player.src = "prock.png";
    comp.src = "crock.png";
})

rock.addEventListener("click", ()=>
{
    player.src = "prock.png";
    setComp();
    checkWinner();
})

paper.addEventListener("click", ()=>
{
    player.src = "ppaper.png";
    setComp();
    checkWinner();

})

scissor.addEventListener("click", ()=>
{
    player.src = "pscissor.png";
    setComp();
    checkWinner()
})
            