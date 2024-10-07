import { distance } from 'three/examples/jsm/nodes/Nodes.js';
import hybrid_cutout from './hybrid.png'


function initCanvas(){ 
    
let canvas = document.getElementById('solflowernm_logo')
let ctx = canvas.getContext('2d')

//animation1 variables 
let animationActive = true; 
let crestPosition = 0; 
let waveMaxHeight = 10
let waveAttack = .3 //increment per frame till max
let waveDecay = .3 //decrement per frame till 0.
//hover effects
let increasingSize = false 
let decreaseingSize = false
let sizeSpeed = 3

ctx.font = "60pt Arial"; 
let padding = .5; 
let canvasPadding = 40
let x = 0
let y = 0
let size = 50
let setSpeed = .4
let speed = 1/setSpeed

//animation where letters go out from center on website load
let initAnimationAttack = 10; 
let initAnimationSustain = 10; 
let initAnimationDecay = 10; 

let globAngleChange = -Math.PI/2


//for HOVER
let minSize = size * 2 + canvasPadding
let maxSize = size * 2.2 + canvasPadding



let colorBackgroundImage = 'black'
let colorTextLayer = "darkblue"

let layerOneColor = "rgba(159, 247, 156, 0.99)"
let layerTwoColor = "rgba(159, 247, 156, 0.99)"

let layerOneColorHover = "rgba(255, 223, 156, 0.99)"
let layerTwoColorHover = "rgba(255, 232, 216, 0.99)"

let tree = new Image(); 
tree.src = hybrid_cutout


let dataOBJ = {}
let positions = []
let text = [
    `sungrown cannabis `
]

let layerTextData = []
text.forEach(layer => { 
    let curLayerData = []
    for(let i = 0; i < layer.length; i++){ 
        curLayerData.push({
            letter: layer[i],
            height: 0, 
            size: null,
            color: null
        })
    }
    layerTextData.push(curLayerData)
})

console.log('text data', layerTextData)
//hover effect for the logo text

canvas.width = size * 2 + canvasPadding
canvas.height = size * 2 + canvasPadding

canvas.addEventListener("mouseover", (e) => { 
   
    if(canvas.width < size * 4 + canvasPadding){ 
        increasingSize = true
        decreaseingSize = false
      
    }
})
canvas.addEventListener("mouseout", (e) => {

    if(canvas.width > size * 2 + canvasPadding){ 
        decreaseingSize = true 
        increasingSize = false 
        
    }
})
function logo(angle){ 
    ctx.beginPath(); 
    ctx.save()
    ctx.fillStyle = "black"; 
    ctx.arc(canvas.width/2, canvas.height/2, canvas.width/2 - 20, 0, Math.PI * 2)
    ctx.fill(); 
    ctx.restore()
}
function animate(){ 
    if(increasingSize){ 
       if(canvas.width < maxSize){ 
        canvas.width += sizeSpeed 
        canvas.height += sizeSpeed
       }
    }
    if(decreaseingSize){ 
        if(canvas.width > minSize){ 
            canvas.width -= sizeSpeed
            canvas.height -= sizeSpeed
        }
     
    }
    ctx.clearRect(0,0,window.innerWidth, window.innerHeight)
    logo(globAngleChange)
    globAngleChange += (Math.PI * 2)/(360 * speed)
    requestAnimationFrame(animate)

}

animate()
}

export default initCanvas; 