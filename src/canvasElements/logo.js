import hybrid_cutout from './hybrid.png'

function initCanvas(){ 
    
let canvas = document.getElementById('solflowernm_logo')
let ctx = canvas.getContext('2d')



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
function renderTextLayers(radius, angle){ 

    let offSetX = canvas.width/2
    let offSetY = canvas.height/2 
    for(let i = 0 ; i < text.length; i++){
        let increment = (Math.PI * 2)/text[i].length;
        let split = text[i].split('')
        for(let j = 0; j < text[i].length; j++){ 
            ctx.save()
            i < 1 ? ctx.font = '9px Arial' : ctx.font = "12px Arial"
            let textX = Math.cos(angle) * radius/(i + 1.2) + offSetX
            let textY = Math.sin(angle) * radius/(i + 1.2) + offSetY

            i < 1 ? ctx.fillStyle = layerOneColor : ctx.fillStyle = layerTwoColor; 
            ctx.translate(textX, textY)
            ctx.rotate(angle + Math.PI/2)
            ctx.fillText(text[i][j], 0, 0)
            angle += increment
            ctx.restore()
        }
        angle = globAngleChange; 
    }
}

let imageAdjustX = 0
let imageAdjustY = 2.7
function logo(angle){ 
    let curX = canvas.width/2
    let curY = canvas.height/2

    renderTextLayers(canvas.width/2, angle)
    //tree image 
    ctx.save() 
    ctx.clip()
    // ctx.drawImage(tree, canvasPadding * .5 - imageAdjustX, canvasPadding *.5 - imageAdjustY, size * 2, size * 2 )
    ctx.drawImage(tree, 0, 0, canvas.width, canvas.height)
    ctx.globalCompositeOperation = 'source-in';
    
    // Set the fill color
    ctx.fillStyle = 'rgb(219, 201, 81)';
    
    // Fill the canvas with the fill color
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Reset the composite mode
    ctx.globalCompositeOperation = 'source-over';
    ctx.restore()
    //layer one
    ctx.save()
    ctx.beginPath()
    ctx.lineWidth = 2;
    ctx.strokeStyle = 'white'
    ctx.arc(curX, curY, size/2 - padding, 0, Math.PI * 2)
    // ctx.stroke()
    ctx.restore()


    //layer two
    ctx.save()
    ctx.beginPath()
    ctx.lineWidth = 1.6;
    ctx.strokeStyle = 'white'
    ctx.arc(curX, curY, size - padding, 0, Math.PI * 2)
    // ctx.stroke()
    ctx.restore()

    renderTextLayers(canvas.width/2, angle)
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