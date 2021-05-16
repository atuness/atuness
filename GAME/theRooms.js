//Detta är olika objekt som skapar dem olika platserna i spelet
let rooms = {
    'start': {
        'description': '<p>There is a girl on the screen. Perhaps say <b>hi</b> to her.</p>',
        'around': '<p>...</p><p>"Hmm.. I do not see any paths but there is a steep hill to the <b>north</b> and I hear the sound of water <b>south</b>. Should I <b>go north</b> or <b>go south</b>?"</p>',
        'directions': {
            'north': 'cliff',
            'south': 'bridge'
        },
    },
    'startPoint': {
        'description': '<p>...</p><p>I am back where we met. Feels like it was forever ago..</p>',
        'around': '<p>...</p><p>"Well, I see the hill. And when I listen closely I can here the sound of running water to the <b>south</b>"</p>',
        'directions': {
            'north': 'cliffAgain',
            'south': 'bridgeFromCliff'
        }
    },
    'startIgen': {
        'description': '<p><p>...</p>"We are back where we started"</p>',
        'around': '<p>...</p><p>"I do not see any paths but there is a steep hill to the <b>north</b> and I hear the sound of water <b>south</b>. Should I <b>go north</b> or <b>go south</b>?"</p>',
        'directions': {
            'north': 'cliff',
            'south': 'bridge'
        }
    },
    'cliff': {
        'description': '<p><p>...</p>Sure, the hill is really quite steep but I will try climb up.</p><p>...</p><p>I made it! Woah, the wind is strong here.</p>',
        'around': '<p>...</p><p>"I am standing on a cliff right now facing nothing but the sky and ocean. The view is so beautiful. I wish you could see it, the ocean is so majestic. Oh wait, I can maybe make you see it. Hold on a second"</p>',
        'directions': {
            'east': 'falling',
            'south': 'startIgen'
        }
    },
    'cliffAgain': {
        'description': '<p><p>...</p>Why would you make me climb up here again..?</p>',
        'around': '<p>...</p><p>"I am standing on a cliff right. AGAIN. Facing nothing but the sky and ocean. The view was so beautiful WHEN I WAS HERE THE FIRST TIME. I do not care if you can see it."</p>',
        'directions': {
            'east': 'falling',
            'south': 'startPoint'
        }
    },
    'cliffShook': {
        'description': '<p>...</p><p>I made it up again. My fingers are bleeding. I am very thirsty, can we go find some water?</p>',
        'around': '<p>...</p><p>"I see the pitch black ocean and the gloomy nightsky. When I turn around I see the hill I climbed to get up here. Remember that I heard the sound of running water at the start? "</p>',
        'directions': {
            'south': 'startPoint'
        }
    },
    'falling': {
        'description': '<p><p>...</p>"HELP ME"</p>'
    },
    'path': {
        'description': '<p>...</p><p>"T-thank you! I managed to grab a petruding branch thanks to you. I climbed to a safe space again. But... Where am I? I am very shaken up, please guide me out of here as fast as you can."</p>',
        'directions': {
            'north': 'cliff',
            'south': 'cabin'
        }
    },
    'pathBridge': {
        'description': '<p>...</p>"Im on a path."<p></p>',
        'around': '<p>...</p>"I see a steep hill to the <b>north</b> and ... a cabin to the <b>west</b>!"<p></p>',
        'directions': {
            'north': 'cliff',
            'south': 'cabin'
        }
    },
    'cave': {
        'description': '<p>...</p><p>Why did you not click faster...? Everytyhing hurts from the fall...</p><p>I can barely stand up and it is so dark here</p>',
        'around': '<p>...</p><p>"I am in some sort of cave. The only thing I see is the moon light shining down from the hole I fell into. Perhaps I should try <b>climb up</b> the same way I came from"</p>',
        'directions': {
            'up': 'cliffWall'
        }
    },
    'cliffWall': {
        'description': '<p>...</p><p>I can not do it for any longer</p>',
        'around': '<p>...</p><p>"How to you expect me to look around while barely holding myself up on the cliffwall?"</p>',
        'directions': {
            'up': 'cliffShook',
            'down': 'cave'
        }
    },
    'bridge': {
        'description': '<p>...</p><p>Yay! Running water!</p>',
        'around': '<p>...</p><p>I see a current of water flowing down and a bridge leading to a path, in the <b>west</b></p>',
        'directions': {
            'west': 'pathBridge',
            'water': 'hydratedForTheFirstTime',
            'north': 'startIgen'
        }
    },
    'bridgeFromCliff': {
        'description': '<p>...</p><p>There is the water!</p>',
        'around': '<p>...</p><p>I see a current of water flowing down and a bridge leading to a path, in the <b>west</b></p>',
        'directions': {
            'west': 'pathBridge',
            'water': 'hydrated'
        }
    },
    'hydrated': {
        'description': '<p>...</p><p>That felt nice. Thank you for helping me find water. I know I have been rude to you but it is simply due to the stress. I just want to get out of this compu.. Oh er, I mean forrest..</p>',
        'around': '<p>...</p><p>I can still see a current of water flowing down. And the bridge to the <b>west</b></p>',
        'directions': {
            'west': 'path'
        }
    },
    'hydratedForTheFirstTime': {
        'description': '<p>...</p><p>"I cupped my hands and collected some water from the current to drink. You are very kind to me, I can not thank you enough for spending your time helping me out of here."</p>',
        'around': '<p>...</p><p>I can still see a current of water flowing down. And the bridge to the <b>west</b></p>',
        'directions': {
            'west': 'path'
        }
    },
    'waterCave': {
        'description': '<p>...</p><p>Why did you not click faster...? Everytyhing hurts from the fall...</p><p>I can barely stand up</p>',
        'directions': {
            'up': 'cliffWall'
        }
    },
    'death': {
        'description': '<p>...</p><p>...u killed me</p>'
    },
    'cabin': {
        'description': '<p>...</p><p>A cabin!</p>',
        'around': '<p>...</p><p>"There is a small cabin here. It looks abandoned."</p>',
        'directions': {
            'inside': 'insideCabin',
            'west': 'bridge'
        }
    },
    'insideCabin': {
        'description': '<p>...</p><p>"cozy"</p>',
        'around': '<p>...</p><p>"There is nothing in here."</p>',
        'directions': {
            'out': 'cabin'
        }
    }

}