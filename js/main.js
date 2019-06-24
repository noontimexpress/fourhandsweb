function setup() {
}

let speechRec = new p5.SpeechRec('en-US', gotSpeech);

var numbers = document.getElementById("numbers");
var button = document.getElementById("start");
var zero = document.getElementById("zero")
var five = document.getElementById("five")
var ten = document.getElementById("ten")
var fifteen = document.getElementById("fifteen")
var twenty = document.getElementById("twenty")

var firsthand = document.getElementById("firsthand")
var secondhand = document.getElementById("secondhand")

var time = 4;
var myInterval;

function gotSpeech() {
    if (speechRec.resultValue) {
        cool = speechRec.resultString;
        console.log(cool)
        if (cool == "0") {
            zero.style.color = "#dc3545"
        }
        if (cool == "5") {
            five.style.color = "#dc3545"
        }
        if (cool == "10") {
            ten.style.color = "#dc3545"
        }
        if (cool == "15") {
            fifteen.style.color = "#dc3545"
        }
        if (cool == "20") {
            twenty.style.color = "#dc3545"
        }
    }
}

 function getComputerChoice() {
    const rand = Math.random();
    if(rand < 0.25) {
        firsthand.src = 'fistleft.png';
        secondhand.src = 'fistright.png';
        console.log('0,0');
        return '0,0';
    } if(rand <= .50) {
        firsthand.src = 'fistleft.png';
        secondhand.src = 'fiveright.png';
        console.log('0,5');
        return '0,5';
    } else if(rand <= .75) {
        firsthand.src = 'fiveleft.png';
        secondhand.src = 'fistright.png';
        console.log('5,0');
        return '5,0';
    } else {
        firsthand.src = 'fiveleft.png';
        secondhand.src = 'fiveright.png';
        console.log('5,5');
        return '5,5';
    }
} 

button.addEventListener("click", function(event){
    zero.style.color = "#333333"
    five.style.color = "#333333"
    ten.style.color = "#333333"
    fifteen.style.color = "#333333"
    twenty.style.color = "#333333"
    speechRec.start(); 
    setTimeout("getComputerChoice()", 3000);
    clearInterval(myInterval);
    myInterval = setInterval(function(){
        time--;
        if (time == -1){
            button.innerHTML = "Again";
            clearInterval(myInterval);
            time = 4;
        }
        else {
            button.innerHTML = "Start";
            numbers.innerHTML = time;
        }
    }, 1000);
})

