
var bg;
var tree, treeImg;
var cloud1, cloud2, cloudGroup;
var chao, chaoImg;
var rafaelImg, oliviaImg, wesImg, thauanImg;
var rafael, olivia, wes, thauan;
var pc, pcImg;
var gameState=1;
var score=0;


function preload(){
 cloud1=loadImage("assets/nuvens 1.png");
 cloud2=loadImage("assets/nuvens 2.png"); 
 chaoImg=loadImage("assets/chao.png");
 treeImg=loadImage("assets/arvore.png");
 oliviaImg=loadImage("assets/olivia.png");
 rafaelImg=loadImage("assets/rafael.png");
 thauanImg=loadImage("assets/thauan.png");
 wesImg=loadImage("assets/wes.png");
 som1=loadSound("assets/finalruim1.mp3");
 som2=loadSound("assets/finalfeliz2.mp3");
 pcImg=loadAnimation("assets/andando1.png","assets/andando2.png", "assets/parado.png");

}

function setup(){
createCanvas(windowWidth, windowHeight);
tree=createSprite(300, 200, 600, 300);
tree.addImage("tree", treeImg)
tree.x=tree.height/10;

 
chao = createSprite(700,500,250,20);
chao.addImage(chaoImg);
chao.scale=1.9;

pc= createSprite( 500, 539, 15, 15);
pc.addAnimation("pc", pcImg);
pc.scale=0.1



}
function draw(){
background("lightBlue");
// image(tree, 0, -height * 5, width, height * 6);
 if (gameState===1){
text(" coraçao "+score, 70, 50);
if (keyDown(UP_ARROW)) {
pc.position.y+=-2


}   
if (keyDown(LEFT_ARROW)){
pc.position.x+=-2

} 
// if(pc.x=600){
// pc.changeAnimation("olivia", oliviaImg)
// }
tree.velocity.y=2;
if (tree.y>700){
    tree.y=tree.height/10;
}
    Clouds();
 }

drawSprites();


}

function Clouds(){
    if (frameCount % 60 === 0) {
    var cloud0 = createSprite(200,100,40,10);
    cloud0.velocity.x=3
    cloud0.position.y=random(60, 150);
    cloud0.scale=0.3
    var r=Math.round(random(1, 2));
    switch(r){
        case 1: cloud0.addImage(cloud1);
        break;
        case 2: cloud0.addImage(cloud2);
        break;
        default: break;
    }
    
      }
    
  }
  
  



