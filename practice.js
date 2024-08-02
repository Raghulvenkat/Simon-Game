$("#green").click(function(event){
    var audio = new Audio("./sounds/green.mp3");
    audio.play();
    console.log(event.target.id);
})

$("#red").click(function(event){
    var audio = new Audio("./sounds/red.mp3");
    audio.play();
    console.log(event.target.id);
})

$("#yellow").click(function(event){
    
    console.log(event.target.id);
})

$("#blue").click(function(event){
    var audio = new Audio("./sounds/blue.mp3");
    audio.play();
    console.log(event.target.id);
})

var color = ["red" , "yellow" , "green" , "blue"];

function randomValueGenerator(){
    return Math.floor(Math.random() * 4);
}

var test= [];
var currentStep = 0;
var level = 1;

function gameOver(){
    $("body").css("background-color" , "red");
    $("h1").text("Game Over.Press Any key To Restart")
    var audio = new Audio("./sounds/wrong.mp3");
    audio.play();

    test = [];
    currentStep = 0;
    level = 1;

    $("h2").fadeIn(100);
    $("p").fadeIn(100);

    $(document).one("keypress" , function(){
        location.reload();
    })
}

function pattern(){
    var value = randomValueGenerator();
    $("h1").text("level " + level)
    test.push(color[value]);
    console.log(test);

    var startSound = new Audio("./sounds/" + color[value] + ".mp3");
    startSound.play();
    $("#" + color[value]).fadeOut(100).fadeIn(100);
    $("h2").fadeOut(100);
    $("p").fadeOut(100);
}

function patternChecker(){
    $("button").off("click").click(function (){
        var clicked = $(this).val();
    
        if (clicked === test[currentStep]){
            currentStep++;

            if (clicked === "red"){
                var audio = new Audio("./sounds/red.mp3");
                audio.play();
            }

            if (clicked === "green"){
                var audio = new Audio("./sounds/green.mp3");
                audio.play();
            }

            if (clicked === "blue"){
                var audio = new Audio("./sounds/blue.mp3");
                audio.play();
            }

            if (clicked === "yellow"){
                var audio = new Audio("./sounds/yellow.mp3");
                audio.play();
            }

            if (currentStep === test.length){
                level++;
                currentStep = 0;
                setTimeout(function(){} , 200);
                pattern();
            }
        }else{
            gameOver();
        }
        
    })
}

function startGame(){
    $(document).one("keypress" , function(){
        if (test.length === 0){
            setTimeout(function(){} , 200);
            pattern();
            patternChecker();
        }
    })

    $(document).one("click" , function(){
        if (test.length === 0){
            setTimeout(function(){} , 200);
            pattern();
            patternChecker();
        }
    })
}


startGame();

