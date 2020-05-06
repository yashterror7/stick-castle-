var rect1,rect2,rect3,rect4,rect5,rect6;
var pillar1,pillar2;
var triangle1,triangle2;
var ch1,ch2,ch3,ch4,ch5,ch6,ch7,ch8,ch9;
var roof1,roof2;
var ch10,ch11,ch12,ch13,ch14,ch15,ch16,ch17,ch19;
function setup() {
  createCanvas(800,400);
  rect1 =createSprite(396.5, 380, 40, 300);
  rect2 = createSprite(355,380,40,300);
  rect3 = createSprite(438.5,380,40,300);
  rect4 = createSprite(480,380,40,300);
  rect5 = createSprite(521,380,40,300);
  rect6 = createSprite(314,380,40,300);
  pillar1 = createSprite(262,380,60,500);
  pillar2 = createSprite(573,380,60,500);
  triangle1 = createSprite(262,123.5,100,10);
  triangle2 = createSprite(573,123.5,100,10);
  ch1 =   createSprite(218,80,10,100);
  ch2 =   createSprite(229,103,10,30);
  ch3 =   createSprite(240,103,10,30);
  ch4 =   createSprite(251,103,10,30);
  ch5 =   createSprite(262,103,10,30);
  ch6 =   createSprite(273,103,10,30);
  ch7 =   createSprite(284,103,10,30);
  ch8 =   createSprite(295,103,10,30);
  ch9 =   createSprite(306,80,10,100);
  ch10 =  createSprite(523,80,10,100);
  ch11 =  createSprite(534,103,10,30);
  ch12 =  createSprite(545,103,10,30);
  ch13 =  createSprite(556,103,10,30);
  ch14 =  createSprite(567,103,10,30);
  ch15 =   createSprite(578,103,10,30);
  ch16 =   createSprite(589,103,10,30);
  ch17 =   createSprite(600,103,10,30);
  ch18 =   createSprite(611,103,10,30);
  ch19 =  createSprite(623,80,10,100);
  roof1=  createSprite(260,30,100,10);
  roof2=  createSprite(569,30,100,10);
}





function draw() {
  background(255,255,255);
    
  drawSprites();
}