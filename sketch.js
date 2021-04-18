let data;

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
    circle(c.x, c.y, 10);
  }
  
}
