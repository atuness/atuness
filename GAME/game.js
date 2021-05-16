let currentRoom = 'start'
let dir
let theCommands = ['go', 'look', 'climb', 'drink']


//Byter bakgrunden och skriver ut en text efter en viss tid
function changeBackground() {
    document.querySelector('.wrapper').style.backgroundImage = 'url(ocean.jpg)'
    setTimeout(function() {
        $('#gameText').append('<p>...</p><p>" ......... Huh, there is something shining to the <b>east</b> side of the cliff"')
    }, 3000)
}


//Byter nuvrande plats
function changeRoom(dir) {
    document.getElementById('userInput').value = ""
    if (rooms[currentRoom].directions[dir] !== undefined) {
        currentRoom = rooms[currentRoom].directions[dir]
        $('#gameText').append(rooms[currentRoom].description)
    } else {
        $('#gameText').append('<p>"What? I can not go there.."</p>')
    }
}

//Visar en lista på kommandon användaren kan ge
function showHelp() {
    $('#gameText').append('<p>These are the commands you can give me. Combine these with directions or objects.</p>')
    $('#gameText').append('<ul>')
    for (let i = 0; i < theCommands.length; i++) {
        $('#gameText').append('<li>' + theCommands[i] + '</li>')
    }
    $('#gameText').append('<ul>')
}

//En switch med olika cases som hanterar hur kommandonen ska utföras
function playerInput(input) {
    window.setInterval(function() {
        var elem = document.querySelector('#gameText')
        elem.scrollTop = elem.scrollHeight;
    }, 100);
    document.getElementById('userInput').value = ""
    let command = input.split(" ")[0]
    switch (command) {
        case 'go':
            dir = input.split(" ")[1]
            changeRoom(dir)
            if (currentRoom === 'falling') {
                clickGame()
                changeMargin10()
            }
            break
        case 'climb':
            dir = input.split(" ")[1]
            changeRoom(dir)
            break
        case 'drink':
            dir = input.split(" ")[1]
            changeRoom(dir)
            if (currentRoom === 'hydrated') {
                document.querySelector('.wrapper').style.backgroundImage = 'url(hydrated.png)'
            }
            case 'look':
                let around = input.split(" ")[1]
                $('#gameText').append(rooms[currentRoom].around)
                if (currentRoom === 'cliff') {
                    setTimeout(changeBackground, 5000) //ska jag ändra detta på något sätt?
                }
                break
            case 'help':
                showHelp()
                break
            case 'hi':
                if (currentRoom === 'start') {
                    $('#gameText').append('<p>...</p><p>"Oh, hi there. Sorry but could I ask you for a favour? The sun has started to set and it will soon be dark, could you perhaps guide me out of the forrest?"</p> <p><b>Ok?</b></p>')
                } else {
                    $('#gameText').append('<p>Uhm hi again??</p>')
                }

                break
            case 'ok':
                if (currentRoom === 'start') {
                    $('#gameText').append('<p>...</p><p>"Thank you! What should I do? Perhaps I should try to <b>look around</b> and see my options?"</p>')
                } else {
                    $('#gameText').append('<p>Oki doki</p>')
                }
                break
            default:
                $('#gameText').append('<p>"What? I do not understand that command.. If u need <b>help</b> just ask me"</p>')
    }
}

//Startsidans element som sedan tas bort
document.getElementById("startBTN").addEventListener("click", function() {
    document.getElementById("userInput").style.display = "flex"
    document.getElementById("welcome").style.display = "none"
    document.getElementById("startBTN").style.display = "none"
    //Läser in användarens input och skickar vidare till funktionen som bearbetar kommandonen
    $('#gameText').append(rooms.start.description)
    $(document).keypress(function(key) {
        if (key.which === 13 && $('#userInput').is(':focus')) {
            document.querySelector('#gameText').innerHTML = ""
            let input = $('#userInput').val().toLocaleLowerCase()
            playerInput(input)
        }
    })
})
document.getElementById('userInput').value = ""
