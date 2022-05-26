var database;
var back_img;
var gameState =0;
var playercount =0;
var allplayers;
var score;
var player, form, game;
var player1,player2;
var players;
var fruits;
var fruitsGroup;
var fruit1_img, fruit2_img, fruit3_img, fruit4_img, fruit5_img ;
var player_img;
var player1score =0;
var player2score =0;

function preload(){
    back_img = loadImage ("images/ background.jpg");
    
}
function setup(){
    createCanvas(1000,600);
    database = firebase.database();
    game = new Game();
    game.gameState();
    game.start();
}