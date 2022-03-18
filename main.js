function preload(){
  
}
function draw(){
    image(video,0,0,400,315);
}

function take_Snapshot(){
    save("moustache.jpg")
}
function setup(){
    canvas = createCanvas(400,315)
    canvas.center()
    video = createCapture(VIDEO)
    video.size(400,315)
    video.hide();
    poseNet = ml5.poseNet(video,modelLoaded)
    poseNet.on('pose',gotPoses)
}

function modelLoaded(){
    alert("PoseNet initialized")
}

noseXYD = document.getElementById("display")

function gotPoses(results){
  if (results.length > 0){
      noseX = Math.floor(results[0].pose.nose.x)
      noseY = Math.floor(results[0].pose.nose.y)
      noseXYD.innerHTML = "Nose x,y = "+noseX+","+noseY

  }
}