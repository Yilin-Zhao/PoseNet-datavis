let data;
let p1, p2;

function preload(){
  data = loadJSON("pose.json");
}

function setup() {
  createCanvas(1000, 1000);
  //console.log(data);
  // for(let i = 0; i<data.bodypoints.length; i++){
  //   let c = data.bodypoints[i];
  //   print(c.part);
  // }

}

function draw() {
  background(100);
  for(let i = 0; i<data.bodypoints.length; i++){
    let c = data.bodypoints[i];
    let xm = mapX(c);
    let ym = mapY(c);
    
    if(c.part == "nose"){
      circle(xm+20, ym-10, 100);
    }
    circle(xm, ym, 10);

  }
  
  // draw line
  //print(findBodypoint("leftShoulder"));
  // p1 = findBodypoint("leftShoulder");
  // p2 = findBodypoint("leftElbow");
  // line(mapX(p1), mapY(p1), mapX(p2), mapY(p2));

  combineTwoPoints("leftShoulder", "leftElbow");

  // p1 = findBodypoint("leftElbow");
  // p2 = findBodypoint("leftWrist");
  // line(mapX(p1), mapY(p1), mapX(p2), mapY(p2));

  combineTwoPoints("leftElbow", "leftWrist");

  // p1 = findBodypoint("rightShoulder");
  // p2 = findBodypoint("rightElbow");
  // line(mapX(p1), mapY(p1), mapX(p2), mapY(p2));

  combineTwoPoints("rightShoulder", "rightElbow");

  // p1 = findBodypoint("rightElbow");
  // p2 = findBodypoint("rightWrist");
  // line(mapX(p1), mapY(p1), mapX(p2), mapY(p2));

  combineTwoPoints("rightElbow", "rightWrist");

  // p1 = findBodypoint("leftHip");
  // p2 = findBodypoint("leftKnee");
  // line(mapX(p1), mapY(p1), mapX(p2), mapY(p2));

  combineTwoPoints("leftHip", "leftKnee");

  // p1 = findBodypoint("leftKnee");
  // p2 = findBodypoint("leftAnkle");
  // line(mapX(p1), mapY(p1), mapX(p2), mapY(p2));

  combineTwoPoints("leftKnee", "leftAnkle");

  // p1 = findBodypoint("rightHip");
  // p2 = findBodypoint("rightKnee");
  // line(mapX(p1), mapY(p1), mapX(p2), mapY(p2));

  combineTwoPoints("rightHip", "rightKnee");

  // p1 = findBodypoint("rightKnee");
  // p2 = findBodypoint("rightAnkle");
  // line(mapX(p1), mapY(p1), mapX(p2), mapY(p2));

  combineTwoPoints("rightKnee", "rightAnkle");

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
  let xmapped = map(elem.x-200, 0-200, 500-200, 0-200, 1000-200);
  return xmapped;
}

function mapY(elem){
  let ymapped = map(elem.y-60, 0-60, 500-60, 0-60, 1000-60);
  return ymapped;
}

function combineTwoPoints(part1, part2){
  let p1, p2;
  p1 = findBodypoint(part1);
  p2 = findBodypoint(part2);
  line(mapX(p1), mapY(p1), mapX(p2), mapY(p2));
}
