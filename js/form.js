        class Form{
    constructor(){
       this.input = createInput("Name");
       this.button = createButton('Play');
       this.greeting = createElement('h2');
       this.title = createElement('h2');
       this.reset = createButton('Reset');

       this.a = createElement('h2');
       this.b = createElement('h2');
    }
    hide() {
        this.greeting.hide();
        this.button.hide();
        this.input.hide();
        this.title.hide();
        this.a.hide();
        this.b.hide();
    }
    display() {
        this.title.html("FRUIT CATCHER");
        this.title.position(350, 50);
        this.title.style('font-size', '70px');
        this.title.style('color', 'skyblue');
        this.input.position(550,400);
        this.input.style('width', '200px');
        this.input.style('height', '20px');
        this.input.style('background', 'lavender');
        this.button.position(560,500);
        this.button.style('width', '200px');
        this.button.style('height', '40px');
        this.button.style('background', 'lightpink');
        this.reset.position(900, 660);
        this.reset.style('width', '100px');
        this.reset.style('height', '30px');
        this.reset.style('background', 'lightpink');

        this.a.html("IT'S A DO-OR-DIE SITUATION");
        this.a.position(150, 550);
        this.a.style('font-size', '25px');
        this.a.style('color', 'teal');

        this.b.html("Score 1 to Win");
        this.b.position(200, 580);
        this.b.style('font-size', '35px');
        this.b.style('color', 'teal');

        this.button.mousePressed(() => {
            this.input.hide();
            this.title.hide();
            this.button.hide();
            this.a.hide();
            this.b.hide();

            player.name = this.input.value();
            playerCount += 1;
            player.index = playerCount;
            player.update();
            player.updateCount(playerCount);
            this.greeting.html("Hello " + player.name)
            this.greeting.position(400,250);
            this.greeting.style('color', 'white');
            this.greeting.style('font-size', '100px');
        });

        this.reset.mousePressed(() => {
            player.updateCount(0);
            game.update(0);
            gameState = 2;
        });

    }
}
