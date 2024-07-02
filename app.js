
let gameturn=new Audio("click.mp3")
let gameover=new Audio("gameover.mp3")
let reset=document.querySelector(".btn");

let turn="X";
let isgameover=false;

let musicSwitch = "off"; // Renamed from 'switch'

// Assuming there is only one element with class 'musicbtn'
let musicbutn = document.querySelector(".musicbtn");

musicbutn.addEventListener("click", () => {
    // Get the audio element by id
    let music=new Audio("bgmusic.mp3");

    if (musicSwitch === "off") {
        music.play();
        musicSwitch = "on";
    } else{
        music.pause();
        music.currentTime = 0;
        musicSwitch = "off"; // Reset switch to "off" state
    }
});






//Function to change the turn 

const changeTurn=()=>{
    if (turn==="X"){
         turn="O";
         return turn;
    }else{
       turn="X";
       return turn;
    }
}


//Function to check the winner
const checkWin=()=>{
    let boxtext=document.getElementsByClassName("boxtext")
    let wins=[
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6]
    ]
    wins.forEach(e=>{
        if(boxtext[e[0]].innerText===boxtext[e[1]].innerText && boxtext[e[1]].innerText===boxtext[e[2]].innerText &&boxtext[e[0]].innerText!==""){
            document.getElementsByClassName("Info")[0].innerText= boxtext[e[0]].innerText + " Won";
            isgameover=true;
            document.querySelector(".imgbox").getElementsByTagName("img")[0].style.width="65%";
            gameover.play();
        }
    })

}

//Function to set the game logic

let boxes=document.getElementsByClassName("box");
Array.from(boxes).forEach(element=>{
    let boxtext=element.querySelector(".boxtext");
    element.addEventListener("click",()=>{
        if(boxtext.innerText===''){
            boxtext.innerText=turn;
            turn=changeTurn();
            gameturn.play();
            checkWin();
            if(isgameover===false){
            document.getElementsByClassName("Info")[0].innerText="Turn for  " + turn;}
        }
    })

})

// reset btton
reset.addEventListener('click',()=>{
    let boxtexts=document.querySelectorAll(".boxtext");
    Array.from(boxtexts).forEach(element=>{
        element.innerText="";
        
    });
    turn="X";
    isgameover===false
    document.getElementsByClassName("Info")[0].innerText="Turn for  " + turn;
    document.querySelector(".imgbox").getElementsByTagName("img")[0].style.width="0%";


})
