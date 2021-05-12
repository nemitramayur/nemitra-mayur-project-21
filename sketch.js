var canvas;
var block1,block2,block3,block4;
var ball, edges;
var music;

function preload(){
    music=loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    ball = createSprite(random(10,750),300, 20,20);
    ball.shapeColor = "white";
    ball.velocityY=3;
    ball.velocityX=3;

    block1 = createSprite(100,580,180,30);
    block1.shapeColor = "blue";

    block2 = createSprite(300,580,180,30);
    block2.shapeColor = "orange";

    block3 = createSprite(500,580,180,30);
    block3.shapeColor = "yellow";

    block4 = createSprite(700,580,180,30);
    block4.shapeColor = "green";

}

function draw() {
    background(rgb(169,169,169));
    edges=createEdgeSprites();
    ball.bounceOff(edges);

    if (ball.x<0){
     music.stop()
     ball.velocityX=3
    }
    else if(ball.x>=800){
    music.stop()
    ball.velocityX=-3
    }

    if(block1.isTouching(ball) && ball.bounceOff(block1)){
        ball.shapeColor = "blue";
        music.play();
    }

    if(block2.isTouching(ball)){
        ball.shapeColor = "orange";
        bounceOff(ball,block2)
        ball.velocityX=0;
        ball.velocityY=0;
        music.stop();
    }

    if(block3.isTouching(ball) && ball.bounceOff(block3)){
        ball.shapeColor = "yellow";
        music.stop();
    }


    if(block4.isTouching(ball) && ball.bounceOff(block4)){
        ball.shapeColor = "green";
        music.play();
    }

    if(ball.y<0){
        music.stop();
        ball.velocityY=3
    }
    drawSprites();
}
