mustacheX =0;
mustacheY =0;

function preload() {
  mustache = loadImage("https://i.postimg.cc/MpwvTfH5/m.png");
}

function setup() {
  canvas = createCanvas(300, 300);
  canvas.center();
  video = createCapture(VIDEO);
  video.size(300, 300);
  video.hide();

  poseNet = ml5.poseNet(video, modelLoaded);
  poseNet.on('pose', gotPoses);
}

function modelLoaded() {
  console.log('PoseNet Is Initialized');
}

function gotPoses(results)
{
  if(results.length > 0)
  {
    console.log(results);
    mustacheX = results[0].pose.nose.x-15;
    mustacheY = results[0].pose.nose.y-15;
  }
}

function draw() {
  image(video, 0, 0, 300, 300);
  image(mustache, mustacheX, mustacheY, 30, 30);
}

function take_snapshot(){    
  save('myFilterImage.png');
}
