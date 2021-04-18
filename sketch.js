let data;

function preload(){
  data = loadJSON("pose.json");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  //console.log(data);
  // for(let i = 0; i<data.bodypoints.length; i++){
  //   let c = data.bodypoints[i];
  //   print(c.part);
  // }
  
}

function draw() {
  background(100);
  
}
