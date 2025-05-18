const container = document.querySelector("#container")


function grid(row, column){   
    for (let i = 0; i < row * column; i++){
        const grid = document.createElement("div")
        container.appendChild(grid)
        grid.classList.add("grid")
    }  
};





grid(16, 16)