var parede1, parede2, parede3, parede4, parede5, parede6, parede7, parede8, parede9, parede10, parede11, parede12;
var jogador, Pc;
var fundo;
var luffy,Kaido;
var Grupoparede1;


function preload(){
fundo = loadImage("./Imagens/Tela de fundo 1.png");
luffy = loadAnimation("./Imagens/Luffy.png");
Kaido = loadAnimation("./Imagens/Kaido.png");
}



function setup(){
createCanvas(400,400);
Grupoparede1 = createGroup();
parede1 = createSprite(50,87,100,25);
parede2 = createSprite(112,200,25,200);
parede3 = createSprite(12,250,25,325);
parede4 = createSprite(150,280,85,25);
parede5 = createSprite(125,387,225,25);
parede6 = createSprite(250,262,25,300);
parede7 = createSprite(170,150,25,225);
parede8 = createSprite(287,30,225,25);
parede9 = createSprite(300,125,100,25);
parede10 = createSprite(337,200,25,150);
parede11 = createSprite(312,312,40,75);
parede12 = createSprite(362,362,75,25);
Grupoparede1.add(parede1);
Grupoparede1.add(parede2);
Grupoparede1.add(parede3);
Grupoparede1.add(parede4);
Grupoparede1.add(parede5);
Grupoparede1.add(parede6);
Grupoparede1.add(parede7);
Grupoparede1.add(parede8);
Grupoparede1.add(parede9);
Grupoparede1.add(parede10);

jogador = createSprite(50,140,15,15);
jogador.addAnimation("Luffy", luffy);
jogador.scale = 0.07;

Pc = createSprite(120,50,15,15);
Pc.addAnimation("Kaido", Kaido);
Pc.scale = 0.1;

}




function draw(){
background(fundo);

if(keyDown("UP")){
    jogador.y -=2;
}

if(keyDown("Down")){
    jogador.y +=2;
}

if(keyDown("LEFT")){
    jogador.x -=2;
}

if(keyDown("RIGHT")){
    jogador.x +=2;
}


if(jogador.isTouching(Grupoparede1)){
    jogador.x = 50;
    jogador.y = 140;
}

if(jogador.isTouching(parede11)||jogador.isTouching(parede12)){
    jogador.x = 10;
    jogador.y = 10;
    Grupoparede1.destroyEach();
    parede11.destroy();
    parede12.destroy();
    Pc.x = 350;
    Pc.y = 350;
}

drawSprites();
}
