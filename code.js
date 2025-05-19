const container = document.querySelector("#container")


function grid(size){  
    const gridSize = 680/ size

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
    box.classList.add("selected")
    // box.style.backgroundColor = "black";
    });
    
}
function remove(){
    container.innerHTML = ''
}

const button = document.querySelector("button")
button.addEventListener("click", function(){
    remove()
    let size = window.prompt("What size do you want your grid to be?")
    grid(size)
    trail()
})

grid(16)
trail()