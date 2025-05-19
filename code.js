const container = document.querySelector("#container")
const button = document.querySelector("button")

function grid(size){
    container.innerHTML = ''
    const gridSize = 960/ size

    for (let i = 0; i < size * size; i++){
        const grid = document.createElement("div")
        grid.style.width =`${gridSize}px`;
        grid.style.height =`${gridSize}px`;
        grid.classList.add("grid")
        container.appendChild(grid)
    }  
};


function trail(){
    const grid = document.querySelectorAll(".grid")
        for (const box of grid)
    box.addEventListener("mouseover", function(){
    box.classList.add("selected");
    box.style.backgroundColor = "black";
    let currentOpacity = parseFloat(box.style.opacity) || 0;
    if (currentOpacity < 1) {
        box.style.opacity = (currentOpacity + 0.1).toString();
    }
    });
}

button.addEventListener("click", function(){
    let size = window.prompt("What size do you want your grid to be? (Choose between 1 and 100)")
    if (size > 1 && size <= 100){
        grid(size)
        trail()
    }else{
        window.alert("Please enter a valid number between 1 and 100")
    }   
})

grid(16)
trail()