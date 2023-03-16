noseX=0;
noseY=0;
difference = 0;
Keya = 0;
rightWristX = 0;
leftWristX = 0;

function setup() {
    video = createCapture(VIDEO)
    video.size(550,500)

    canvas = createCanvas(500, 500);
    canvas.position(560,150)

    poseNet = ml5.poseNet(video);
    poseNet.on('pose', gotPoses);
}


function draw() {
    background("#969a97");
    fill('#F90093');
    stroke('#F0093');
    text( "Keya", 100, 200);
    textSize(difference);

}


function gotPoses(results)
{
    if(results.length > 0)
    {
        console.log(results);
        noseX= results[0].pose.nose.x;
        noseY= results[0].pose.nose.y;
        console.log("noseX ="+ noseX+ "noseY = "+ noseY);

        leftWristX = results[0].pose.leftWrist.x;
        rightWristX = results[0].pose.rightWrist.x;
        difference = floor(leftWristX - rightWristX);
        console.log("leftWristX = " + leftWristX +" rightWristX = " + rightWristX + " difference = " + difference);
        document.getElementById("font_size").innerHTML = "The width and height of the font is  " + difference;
    }
}