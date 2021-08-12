nose_x="";
nose_y="";
left_wrist_x="";
right_wrist_x="";
font_size="";

function setup(){
    video=createCapture(VIDEO);
    video.size(300,300);
    canvas=createCanvas(300,300);
    canvas.position(700,190);
    video.position(200,100);
    poseNet=ml5.poseNet(video,modelloaded);
    poseNet.on('pose',getposes)
    }
function modelloaded(){
    console.log("model loaded succesfully")
}
function draw(){
    background("#eb10d1");
    fill("#dceb10");
    stroke("#1100ff");
    textSize(font_size);
    text("Aleesha",nose_x,nose_y);
}
function getposes(Result){
    if (Result.length>0){
        console.log(Result);
        nose_x=Result[0].pose.nose.x;
        nose_y=Result[0].pose.nose.y;
        left_wrist_x=Result[0].pose.leftWrist.x;
        right_wrist_x=Result[0].pose.rightWrist.x;
        font_size=Math.floor(left_wrist_x-right_wrist_x);
    }
    }