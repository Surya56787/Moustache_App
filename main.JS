function preload(){

}

function setup(){
  canvas=createCanvas(300,300);
  canvas.center();
  video=createCapture(VIDEO);
  video.size(400,300);
  video.hide();
  posenet=ml5.poseNet(video,modelLoaded);
  posenet.on("pose",gotResults);

}

function modelLoaded(){
  console.log("modelLoaded");
}

function draw(){
  image(video,0,0,300,300);

}

function take_snapshot(){
    save("FilterImage.png");
}

function gotResults(results){
  console.log(results);
  console.log("nosex="+results[0].pose.nose.x);
  console.log("nosey="+results[0].pose.nose.y);
}