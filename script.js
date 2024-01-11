let shapeContainer = document.getElementById("shape-container");
let shape = document.getElementById("shape")
let colorChangingBtn = document.getElementById("color-changer");
let shapeChangingBtn = document.getElementById("shape-changer")

function randomColor(){
    let str = "0123456789abcdef";
    let color = "#";
    for(let i = 0; i < 6; i++){
        let index = Math.floor(Math.random()*str.length);
        color += str.charAt(index);
    }
    return color;
}

function randomShape(){
    let shapes = ["square","rect","tri","diamond"];
    let index = Math.floor(Math.random() * shapes.length);
    return shapes[index];
}

colorChangingBtn.addEventListener("click",(e)=>{
    e.preventDefault();
    shapeContainer.style.backgroundColor = randomColor();
})

shapeChangingBtn.addEventListener("click",(e)=>{
    e.preventDefault();
    shape.classList.remove(shape.classList[0]);
    shape.classList.add(randomShape());
})
