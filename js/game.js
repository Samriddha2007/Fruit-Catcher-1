class Game
{
    constructor()
    {

    }
    getState() {
        var gameStateRef = database.ref('gameState');
        gameStateRef.on("value", function (data) {
            gameState = data.val();
        })

    }

    update(state) {
        database.ref('/').update({
            gameState: state
        });
    }
    async start() {
            if (gameState === 0) {
                player = new Player();
                var playerCountRef = await database.ref('playerCount').once("value");
                if (playerCountRef.exists()) {
                    playerCount = playerCountRef.val();
                    player.getCount();
                }
                form = new Form()
                form.display();
            }
    player1 = createSprite(200,500);
    player1.addImage("player1",player_img);
    
    player2 = createSprite(800,500);
    player2.addImage("player2", player_img);
    players=[player1,player2];

        }
    
    play(){
        
                form.hide();

                Player.getPlayerInfo();
                 image(back_img, 0, 0, 1000, 800);
                 var xx = 100;
                 var yy = 200;
                 var index = 0;
                 
                 drawSprites();
                 for(var plr in allPlayers){
                    
                    
                     index = index + 1;
                     xx = 500 - allPlayers[plr].distance;
                     yy = 500;
                     
                     players[index -1].x = xx;
                     players[index - 1].y = yy;

                     
                       
                     if(index === player.index){
                         
                         fill("black");
                         textSize(25);
                         text(allPlayers[plr].name ,xx-35,yy+25);
                     }
                    
                    
                     
                 
                 }

                if (keyIsDown(RIGHT_ARROW) && player.index !== null) {
                    player.distance -= 10
                    player.update();
                }
                if (keyIsDown(LEFT_ARROW) && player.index !== null) {
                    player.distance += 10
                    player.update();
                }
            
                 if (frameCount % 20 === 0) {
                     fruits = createSprite(random(100, 1000), 0, 100, 100);
                     fruits.velocityY = 6;
                     var rand = Math.round(random(1,5));
                     switch(rand){
                         case 1: fruits.addImage("fruit1",fruit1_img);
                         break;
                         case 2: fruits.addImage("fruit1", fruit2_img);
                         break;
                         case 3: fruits.addImage("fruit1", fruit3_img);
                         break;
                         case 4: fruits.addImage("fruit1", fruit4_img);
                         break;
                         case 5: fruits.addImage("fruit1", fruit5_img);
                         break;
                     }
                     fruitGroup.add(fruits);
                     
                 }
                 
                 player.getScore();
                         
                 spr1 = createSprite(player1.x,400,100,10);
                 spr1.visible = false;
              //   fruitGroup.collide(spr1);

                 if(fruits !== undefined)
                 {

              

                 if( fruitGroup.collide(spr1))
                 {
                        player1score = player1score + 1;
                        fruitGroup.setLifetimeEach(0);
                 }

                 if( fruitGroup.collide(player2))
                 {
                        player2score = player2score + 1;
                        fruitGroup.setLifetimeEach(0)
                 }
                }
  
                    player.updateScore();
                    player.displayScore()

                   

                    
              
                    
                if(player1score >= 5 || player2score >= 5)
                {
                    gameState = 2;
                }

                
                  
                 
        
                  

    }

    end(){
       console.log("Game Ended");
       textSize(70);
       fill("blue");
      

       if(player1score >= 5)
       {
          text("Player 1 Won!!",250,300)
       }
     else  if(player2score >= 5)
       {
          text("Player 2 Won!!",250,300)
       }
       else
       {
        text("Opponent Left!!",250,300);
       }
    }
}