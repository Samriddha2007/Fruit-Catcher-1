class Player {
    constructor() {
        this.index = null;
        this.distance = 0;
        this.name = null;
        this.score =0;
    }

    getCount() {
        var playerCountRef = database.ref('playerCount');
        playerCountRef.on("value", (data) => {
            playerCount = data.val();
        })
    }

    updateCount(count) {
        database.ref('/').update({
            playerCount: count
        });
    }

    update() {
        var playerIndex = "players/player" + this.index;
        database.ref(playerIndex).set({
            name: this.name,
            distance: this.distance,
            score:this.score
        });
    }

    static getPlayerInfo() {
        var playerInfoRef = database.ref('players');
        playerInfoRef.on("value", (data) => {
            allPlayers = data.val();
        })
    }

    getScore()
    {
        var player1scoreRef = database.ref('players/player1/score');
        player1scoreRef.on("value", (data) => {
            player1score = data.val();
        })
        var player2scoreRef = database.ref('players/player2/score');
        player2scoreRef.on("value", (data) => {
            player2score = data.val();
        })              
    }
    updateScore()
    { 
        
       if(player1score !== undefined)
        {
        database.ref('players/player1').update({
            score: player1score
        });
        }
        if(player2score !== undefined)
        {
        database.ref('players/player2').update({
            score: player2score
        });
        }
        
    }
    displayScore()
    {
        if(player1score !== undefined && player2score !== undefined)
        {
        textSize(35);
        fill("red");
        text("PLayer 1 : " + player1score,20,50);
        text("PLayer 2 : " + player2score,20,100);
        }
        
    }
    
}
