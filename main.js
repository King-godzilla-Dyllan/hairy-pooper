song = "";
var x= 0
var y= 0

function preload()
{
    song = loadSound("music2.mp3");
}

function setup() {
    canvas = createCanvas(600, 700);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();
}

function draw() {
    image(video, 0, 0, 600, 400);
}

function play() {
    song.play();
}

function gotPoses() {
    x=gotPoses
    y=gotPoses
}