const colorInput = document.getElementById("color")
const weight = document.getElementById("weight")
const clear = document.querySelector("#clear")
const paths = [];
let currentPath = [];


const pencil = document.querySelector("#pencil")
const line = document.querySelector("#line")
const rect = document.querySelector("#rect")
const circle = document.querySelector("#circle")
// function to create canvas with p5 library
function setup(){
    createCanvas(window.innerWidth,window.innerHeight);
    background(255);
}
function draw(){
    noFill();
    if(mouseIsPressed){
        const point = {
            x : mouseX,
            y : mouseY,
            color:colorInput.value,
            weight:weight.value,
        };
        currentPath.push(point);
     
    }
    paths.forEach(path=>{
        // beginshape();
        path.forEach(point=>{
            stroke(point.color);
            strokeWeight(point.weight);
            vertex(point.x,point.y);
        });

        endShape();
    })
}
function mousePressed(){
    currentPath= [];
    if(pencil.checked){
        paths.push(currentPath)
    }

}
clear.addEventListener("click",()=>{
    paths.splice(0);
    background(255)

})
window.onload=()=>{
    var c = document.querySelector('#defaultcanvas0');
    var ctx = c.getContext("2d");
    let x1,y1,x2,y2,x3,y3;
    let gradient;
    let isDown=false;
    const color2 = document.querySelector("#color2")
    document.querySelector('#gradient').addEventListener("click",()=>{
        if(document.querySelector('#gradient').checked){
            color2.disabled=false;
        }
        else{
            color2.disabled=true;
        }
    })
    document.querySelector('#defaultcanvas0').addEventListener("mousedown",(e)=>{
        x1=e.clientX;
        y1=e.ClientY- 42;
        isDown = true

    })
    document.querySelector('#defaultcanvas0').addEventListener("mousemove",(e)=>{
       if(isDown){
        const image = new image();
        image.addEventListener("load",()=>{
            ctx.drawImage(image,0,0,window.innerWidth,innerHeight)
        })
        drawing(e)
       }

    });
    function drawing(e){
        if(line.checked){
            x2.e.clientX;
            y2.e.clientY - 42;
            ctx.beginpath();
            ctx.moveto(x1,y1)
        }
    }
}

