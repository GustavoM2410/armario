function setup() {
  createCanvas(400,400);
}

function draw() {
  background("white");
  
 fill ("black");
 textStyle(60);
  textAlign(CENTER,CENTER);
  

  let maximo =width
  let minimo =0;
  
  console.log("Armario". length);
  let palavra="Armario";
  let quantidade=map(mouseX,0,width,1,palavra.length)
  let parcial=palavra.substring(0,quantidade);
  text(parcial,200,200)




} 
  
  
