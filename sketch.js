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
    xmapped = map(c.x-200, 0-200, 500-200, 0-200, 1000-200);
    ymapped = map(c.y-60, 0-60, 500-60, 0-60, 1000-60);
    
    if(c.part == "nose"){
      circle(xmapped+20, ymapped-10, 100);
    }
    circle(xmapped, ymapped, 10);
  }
  
}
