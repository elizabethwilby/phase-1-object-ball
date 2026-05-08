function gameObject() {
    return {
        home: {
          teamName: "Brooklyn Nets", 
          colors:['Black', 'White'],
          players: {
            'Alan Anderson': {
                number: 0,
                shoe: 16,
                points: 22,
                rebounds: 12,
                assists: 12,
                steals: 3,
                blocks: 1,
                slamDunks: 1
            },
            'Reggie Evans': {
                 number: 30,
                shoe: 14,
                points: 12,
                rebounds: 12,
                assists: 12,
                steals: 12,
                blocks: 12,
                slamDunks: 7 
            },
            'Brook Lopez': {
                 number: 11,
                shoe: 17,
                points: 17,
                rebounds: 19,
                assists: 10,
                steals: 3,
                blocks: 1,
                slamDunks: 15 
            },
            'Mason Plumlee': {
                 number: 1,
                shoe: 19,
                points: 26,
                rebounds: 12,
                assists: 6,
                steals: 3,
                blocks: 8,
                slamDunks: 5 
            },
            'Jason Terry': {
                 number: 31,
                shoe: 15,
                points: 19,
                rebounds: 2,
                assists: 2,
                steals: 4,
                blocks: 11,
                slamDunks: 1
            }
           }
        },
        away: { 
            teamName: "Charlotte Hornets", 
            colors: ['Turquoise', 'Purple'],
            players: {
                'Jeff Adrien': {
                number: 4,
                shoe: 18,
                points: 10,
                rebounds: 1,
                assists: 1,
                steals: 2,
                blocks: 7,
                slamDunks: 2 
                },
                'Bismak Biyombo': {
                number: 0,
                shoe: 16,
                points: 12,
                rebounds: 4,
                assists: 7,
                steals: 7,
                blocks: 15,
                slamDunks: 10 
                },
                'DeSagna Diop': {
                number: 2,
                shoe: 14,
                points: 24,
                rebounds: 12,
                assists: 12,
                steals: 4,
                blocks: 5,
                slamDunks: 5 
                },
                'Ben Gordon': { 
                number: 8,
                shoe: 15,
                points: 33,
                rebounds: 3,
                assists: 2,
                steals: 1,
                blocks: 1,
                slamDunks: 0
             },
                'Brendan Haywood': {
                number: 33,
                shoe: 15,
                points: 6,
                rebounds: 12,
                assists: 12,
                steals: 22,
                blocks: 5,
                slamDunks: 12 
                }

            }
        }
    }
}
console.log(gameObject())

function teamName() {
    let game = gameObject();
    return [
        game.home.teamName,
        game.away.teamName
    ]

}
console.log(teamName())

function numPointsScored(playerName) {
    let game = gameObject();
    if (game.home.players[playerName]) {
        return game.home.players[playerName].points
    }
    if (game.away.players[playerName]) {
        return game.away.players[playerName].points
    }
    

}
console.log(numPointsScored("Alan Anderson"));

function shoeSize(playerName) {
    let game = gameObject();
    if (game.home.players[playerName]) {
        return game.home.players[playerName].shoe
    }
    if (game.away.players[playerName]) {
        return game.away.players[playerName].shoe
    }
}
console.log(shoeSize('Alan Anderson'));


function teamColors(playerName) {
    let game = gameObject();
    if (game.home.players[playerName]) {
        return game.home.colors
    }
    if (game.away.players[playerName]) {
        return game.away.colors
    }
}
   console.log(teamColors('Jeff Adrien'))

   function teamName(playerName) {
     let game = gameObject();
    if (game.home.players[playerName]) {
        return game.home.teamName
    }
    if (game.away.players[playerName]) {
        return game.away.teamName
    }
   }
   console.log(teamName('Jeff Adrien'));

   function playerNumbers(playerName) {
    let game = gameObject();
    if (game.home.players[playerName]) {
        return game.home.players[playerName].number
    }
    if (game.away.players[playerName]) {
        return game.away.players[playerName].number
    }
}
console.log(playerNumbers('Alan Anderson'));

 function playerStats(playerName) {
    let game = gameObject();
    if (game.home.players[playerName]) {
        return game.home.players[playerName]
    }
    if (game.away.players[playerName]) {
        return game.away.players[playerName]
    }
}
console.log(playerStats('Alan Anderson'));

function bigShoeRebounds() {
    let game = gameObject();

    let everyPlayer = {
        ...game.home.players,
        ...game.away.players
    };

    let theBiggestShoe = Object.values(everyPlayer).map(function(player) {
        return player.shoe;
    });

    let biggestShoe = Math.max(...theBiggestShoe);

    for (let playerName in everyPlayer){
        if (everyPlayer[playerName].shoe === biggestShoe) {
            return everyPlayer[playerName].rebounds;
        }
    }
}
console.log(bigShoeRebounds());

function mostPointsScored() {
    let game = gameObject();

    let everyPlayer = {
        ...game.home.players,
        ...game.away.players
    };

    let allPoints = Object.values(everyPlayer).map(function(player) {
        return player.points;
    });

    let mostPoints = Math.max(...allPoints);

    for (let playerName in everyPlayer) {
        if (everyPlayer[playerName].points === mostPoints) {
            return everyPlayer[playerName].points;
        }
    }
}

console.log(mostPointsScored());




