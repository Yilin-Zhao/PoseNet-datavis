let data;
let w = 1000; // can change to any value

function preload(){
  data = loadJSON("pose.json");
}

function setup() {
  createCanvas(w, w);
  //console.log(data);
  // for(let i = 0; i<data.bodypoints.length; i++){
  //   let c = data.bodypoints[i];
  //   print(c.part);
  // }

}

function draw() {
  background(100);
  strokeWeight(4);
  // draw lines
  //print(findBodypoint("leftShoulder"));
  // left arm
  combineTwoPoints("leftShoulder", "leftElbow");
  combineTwoPoints("leftElbow", "leftWrist");
  // right arm
  combineTwoPoints("rightShoulder", "rightElbow");
  combineTwoPoints("rightElbow", "rightWrist");
  // left leg
  combineTwoPoints("leftHip", "leftKnee");
  combineTwoPoints("leftKnee", "leftAnkle");
  // right leg
  combineTwoPoints("rightHip", "rightKnee");
  combineTwoPoints("rightKnee", "rightAnkle");
  // body
  combineTwoPoints("leftShoulder", "rightHip");
  combineTwoPoints("rightShoulder", "leftHip");
  combineTwoPoints("leftShoulder", "rightShoulder");
  combineTwoPoints("leftHip", "rightHip");
  // neck
  let nose = findBodypoint("nose");
  let leftShoulder = findBodypoint("leftShoulder");
  let rightShoulder = findBodypoint("rightShoulder");
  line(mapX(nose)+20*(width/1000), mapY(nose)-10*(width/1000), 0.5*(mapX(leftShoulder)+mapX(rightShoulder)), 0.5*(mapY(leftShoulder)+mapY(rightShoulder)));

  let leftEar = findBodypoint("leftEar");
  let rightEar = findBodypoint("rightEar");
  // draw points
  for(let i = 0; i<data.bodypoints.length; i++){
    let c = data.bodypoints[i];
    let xm = mapX(c);
    let ym = mapY(c);
    
    strokeWeight(4);
    fill(255);
    // draw ears
    if(c.part == "leftEar" || c.part == "rightEar"){
      ellipse(xm, ym, 10*(width/1000), 20*(width/1000));
    }
    // draw eyes
    if(c.part == "leftEye" || c.part == "rightEye"){
      fill(0);
      circle(xm, ym, 20*(width/1000));
    }
    fill(255);
    // draw all data points
    circle(xm, ym, 10*(width/1000));
    // draw nose && mouth
    if(c.part == "nose"){
      ellipse(xm+30*(width/2000), ym-10*(width/2000), 90*(width/1000), 100*(width/1000));
      line(xm-2.5*(width/1500), ym, xm-5*(width/1500), ym+8*(width/1500));
      line(xm+2.5*(width/1500), ym, xm+5*(width/1500), ym+8*(width/1500));
      // mouth
      //curve(mapX(leftEar)-20*(width/1500), mapY(leftEar)-30*(width/1500), xm-5*(width/1500), ym+30*(width/1500), xm+5*(width/1500), ym+30*(width/1500), mapX(rightEar)+50*(width/1500), mapY(rightEar)-30*(width/1500));
      curve(mapX(leftEar)-50*(width/1500), mapY(leftEar)-60*(width/1500), xm-5*(width/1500), ym+30*(width/1500), xm+5*(width/1500), ym+30*(width/1500), mapX(rightEar)+100*(width/1500), mapY(rightEar)-60*(width/1500));
    }
    
  }

}

// function findBodypointIndex(partName) {
//   function bodypointHasName(point) {
//     return point.part === partName;
//   }
//   return data.bodypoints.findIndex(bodypointHasName);
// }

function findBodypoint(partName) {
  function bodypointHasName(point) {
    return point.part === partName;
  }
  return data.bodypoints.find(bodypointHasName);
}

function mapX(elem){
  let xmapped = map(elem.x-200, 0-200, 500-200, 0-200, width-200);
  return xmapped;
}

function mapY(elem){
  let ymapped = map(elem.y-60, 0-60, 500-60, 0-60, height-60);
  return ymapped;
}

function combineTwoPoints(part1, part2){
  let p1, p2;
  p1 = findBodypoint(part1);
  p2 = findBodypoint(part2);
  line(mapX(p1), mapY(p1), mapX(p2), mapY(p2));
}
