let time1, time2, finalResult
let x = document.querySelector('.wrapper').offsetWidth
let prntprnt = document.querySelector('.wrapper')

//Tömmer och visar nuvarande rummets beskrivning. Ändrar även css för att anpassa till mobilversion
function emptyandappend() {
    document.querySelector('#gameText').innerHTML = ""
    $('#gameText').append(rooms[currentRoom].description)
    x = document.querySelector('.wrapper').offsetWidth
    if (x < 550) {
        document.getElementById("box").style.marginTop = "65vh"
    }
}
//Funktion som anropas när man förlorar i spelet. Byter bakgrund och tar bort möjligheten att göra inputs.
function death() {
    currentRoom = 'death'
    document.getElementById("userInput").style.display = "none"
    document.querySelector('.wrapper').style.backgroundImage = 'url(spelare.png)'
    $('#gameText').append(rooms[currentRoom].description)
}

//Ändrar top-margin för att anpassa till mobilversion
function changeMargin10() {
    if (x < 550) {
        document.getElementById("box").style.marginTop = "10vh"
    }
}

//Spelet som avgör vilken väg spelaren tar. Olika resultat genererar olika platser.
function clickGame() {
    let prntGame = document.createElement('div')
    prntGame.className = 'gameDiv'
    prntGame.innerHTML = 'THE GIRL IS FALLING DOWN THE CLIFF. QUICKLY CLICK THE BRANCH'
    document.querySelector('.wrapper').append(prntGame)

    let game = document.createElement('div')
    game.className = 'branch'
    time1 = Date.now()

    game.onclick = function() {
        time2 = Date.now()
        finalResult = (time2 - time1) / 1000
        console.log(time1, time2, finalResult)
        if (finalResult > 10) {
            prntprnt.removeChild(prntGame)
            document.querySelector('#gameText').innerHTML = ""
            death()

        } else if (finalResult < 4) {
            prntprnt.removeChild(prntGame)
            currentRoom = 'path'
            emptyandappend()
            document.querySelector('.wrapper').style.backgroundImage = 'url(bra.png)'
        } else {
            prntprnt.removeChild(prntGame)
            currentRoom = 'cave'
            document.querySelector('.wrapper').style.backgroundImage = 'url(bad.png)'
            emptyandappend()
        }
    }
    prntGame.append(game)
}