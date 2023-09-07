const body = document.querySelector('body');
const btns = document.querySelector('.btns');
const gridBtn = document.createElement('button');
gridBtn.classList.add('grid-btn');
gridBtn.textContent = 'Click to change size of grid';
btns.appendChild(gridBtn);
const container = document.createElement('div');
container.classList.add('container');
body.appendChild(container);
const containerBlock = document.querySelector('.container');
const btnGrid = document.querySelector('.grid-btn');
const rainbow = document.querySelector('#rainbow');
const eraser = document.querySelector('#eraser');
const def = document.querySelector('#default');

//function to the change the size of grid
const changeGridSize = (newSize) => {  
    let newRow = newSize;
    let newColumn = newSize;
    container.innerHTML = '';
    for(let i = 0; i < newRow; i++){
        rowElement = document.createElement('div');
        rowElement.classList.add('row');
        for (let j = 0; j < newColumn; j++) {
            colElement = document.createElement('div');
            colElement.classList.add('col');
            rowElement.appendChild(colElement);
        }
        containerBlock.appendChild(rowElement);
    }
}

//function that enables hover effect
const hoverEffect = () => {       
    const items = document.querySelectorAll('.col');
    items.forEach(item => {
    item.addEventListener('mouseover', () => {
        item.style.backgroundColor = 'blue';
    });
});
}

//function that enables rainbow effect
const rainbowEffect = () => { 
    let colors = ['red','blue','green','yellow','cyan','black','grey','brown','orange','purple','violet'];
    const items = document.querySelectorAll('.col');
    items.forEach(item => {
    item.addEventListener('mouseover', () => {
        item.style.backgroundColor = `${colors[Math.floor(Math.random()*colors.length)]}`;
    });
});
}

//function that enables eraser effect
const eraserEffect = () => {       
    const items = document.querySelectorAll('.col');
    items.forEach(item => {
    item.addEventListener('mouseover', () => {
        item.style.backgroundColor = 'white';
    });
});
}

//function that enables default mode
const defaultEffect = () => { 
    hoverEffect();
}

btnGrid.addEventListener('click', () => {
    size = prompt("Enter the size of grid between 0 and 100:");
    changeGridSize(size);
    hoverEffect();
});

rainbow.addEventListener('click', () => {
    rainbowEffect();
});

eraser.addEventListener('click',() => {
    eraserEffect();
});

def.addEventListener('click', () => {
    hoverEffect();
});

changeGridSize(16);
hoverEffect();
