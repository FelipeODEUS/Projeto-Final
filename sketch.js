var parede1, parede2, parede3, parede4, parede5, parede6, parede7, parede8, parede9, parede10, parede11, parede12,parede13,parede14,parede15,parede16,parede17,parede18,parede19;
var jogador, Pc1, Pc2,Pc3;
var fundo1,fundo2,fundo3;
var luffy,Kaido;
var Grupoparede1, Grupoparede2, Grupoparede3;
var estado = "Fase1";
var Titan_Fundador,Titan_Blindado,Asta,Rei_demonio;
var trofeu;
var ponto1,ponto2;
var placar = 0;
var borda;

function preload(){
fundo1 = loadImage("./Imagens/Tela de fundo 1.png");
fundo2 = loadImage("./Imagens/shingashina.jpg")
luffy = loadAnimation("./Imagens/Luffy.png");
Kaido = loadAnimation("./Imagens/Kaido.png");
Titan_Fundador = loadAnimation("./Imagens/Titã Eren.png");
Titan_Blindado = loadAnimation("./Imagens/Titã blindado.png");
Asta = loadAnimation("./Imagens/Asta.png");
Rei_demonio = loadAnimation("./Imagens/Rei demônio.png");
trofeu = loadImage("./Imagens/troféu.png");
fundo3 = loadImage("./Imagens/aa.jpg");
}


function setup(){
createCanvas(400,400);

borda = createEdgeSprites();

Fase1();

jogador = createSprite(50,140,15,15);
jogador.addAnimation("Luffy", luffy);
jogador.addAnimation("Eren",Titan_Fundador);
jogador.addAnimation("asta",Asta);
jogador.scale = 0.07;

Pc1 = createSprite(120,50,15,15);
Pc1.addAnimation("Kaido", Kaido);
Pc1.scale = 0.1;

Pc2 = createSprite(350,300,15,15);
Pc2.addAnimation("Blindado",Titan_Blindado);
Pc2.scale = 0.08;
Pc2.velocityX = -2;
Pc2.velocityY = 3;
Pc2.visible = false;

Pc3 = createSprite(350,300,15,15);
Pc3.addAnimation("rei_demonio",Rei_demonio );
Pc3.scale = 0.2;
Pc3.velocityX = -2;
Pc3.velocityY = 3;
Pc3.visible = false;

ponto1 = createSprite(random(0,400),random(0,400),10,10);
ponto2 = createSprite(random(0,400),random(0,400),10,10);
ponto1.shapeColor = 'red';
ponto2.shapeColor = 'red';
ponto1.visible = false;
ponto2.visible = false;
}


function draw(){
if(estado ==="Fase1"){
    background(fundo1);
}

if(estado === "Fase2"){
    background(fundo2);
}

if(estado === "Fase3"){
    background(fundo3);
}

if(estado === "win"){
    background("blue");
    textAlign(CENTER,CENTER);
    textSize(30);
    fill("white");
    text('you win',200,200);
    
}

moveJogador();

jogador.bounceOff(borda);
Pc2.bounceOff(borda);
Pc3.bounceOff(borda);

if(jogador.isTouching(Grupoparede1)){
    jogador.x = 50;
    jogador.y = 140;
}

if(jogador.isTouching(parede11)||jogador.isTouching(parede12)){
    jogador.x = 50;
    jogador.y = 50;
    Grupoparede1.destroyEach();
    parede11.destroy();
    parede12.destroy();
    Pc1.destroy();
    Pc2.visible = true;
    estado = "Fase2";
    Fase2();
}

if(estado === "Fase2"){
    jogador.changeAnimation("Eren",Titan_Fundador);
    jogador.scale = 0.2;
    Pc2.bounceOff(Grupoparede2);
    ponto1.visible = true;
    ponto2.visible = true;
    if(jogador.isTouching(ponto1)){
        ponto1.destroy();
        placar++;
    }
    if(jogador.isTouching(ponto2)){
        ponto2.destroy();
        placar++;
    }
    if(jogador.isTouching(Pc2)){
        jogador.x = 50;
        jogador.y = 50;
    }
    if(placar === 2){
        estado = "Fase3";
        Fase3();
        Grupoparede2.destroyEach();
        Pc2.destroy();
        jogador.x = 350;
        jogador.y = 350;
    }
}
if(estado === 'Fase3'){
    jogador.changeAnimation("asta", Asta);
    jogador.scale = 0.08;
    Pc3.visible = true;
    if(jogador.isTouching(Grupoparede3) || jogador.isTouching(Pc3)){
        jogador.x = 350;
        jogador.y = 350; 
    }
    if(jogador.isTouching(parede19)){
        estado = 'win';
        Pc3.destroy();
        jogador.destroy();
        Grupoparede3.destroyEach();
        parede19.destroy();
    }
}

drawSprites();
}

function moveJogador(){
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
}

function Fase1(){
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
}

function Fase2(){
Grupoparede2 = createGroup();
parede13 = createSprite(200,0,400,10);
parede14 = createSprite(400,200,10,400);
parede15 = createSprite(200,400,400,10);
parede16 = createSprite(0,200,10,400);
Grupoparede2.add(parede13);
Grupoparede2.add(parede14);
Grupoparede2.add(parede15);
Grupoparede2.add(parede16);
}
function Fase3(){
    Grupoparede3 = createGroup();
    parede17 = createSprite(150,130,300,15);
    parede18 = createSprite(250,280,300,15);
    parede19 = createSprite(50,50,50,50);
    parede19.addImage(trofeu);
    parede19.scale = 0.08;
    Grupoparede3.add(parede17);
    Grupoparede3.add(parede18);
    }