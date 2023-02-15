AFRAME.registerComponent("rotate-island", {
    schema:{
        speedOfRotation:{type:"number",default:0},
    },
    init:function(){
        window.addEventListener("keydown",(e)=>{
            if(e.key==="ArrowRight"){
                if(this.data.speedOfRotation<0.1){
                    this.data.speedOfRotation +=0.3
                }
            }
            if(e.key==="ArrowLeft"){
                if(this.data.speedOfRotation>-0.1){
                    this.data.speedOfRotation -=0.3
                }
            }
        } )
    },
    tick: function(){
        var rotateTheLand = this.el.getAttribute("rotation")
        rotateTheLand.y += this.data.speedOfRotation
        this.el.setAttribute("rotation", {x:rotateTheLand.x, y:rotateTheLand.y, z:rotateTheLand.z})
    }
}) 
AFRAME.registerComponent("diver", {
    schema:{
        planeRotation:{type:"number",default:0},
        planeAscension:{type:"number",default:0},
    },
    init: function(){
        window.addEventListener("keydown",(e)=>{
            this.data.planeRotation = this.el.getAttribute("rotation")
            var planeRotate = this.data.planeRotation

            if(e.key==="ArrowRight"){
                if(planeRotate.z<10){
                    planeRotate.z +=0.5
                    this.el.setAttribute("rotation", planeRotate)
                }
            }
            if(e.key==="ArrowLeft"){
                if(planeRotate.z>-10){
                    planeRotate.z -=0.5
                    this.el.setAttribute("rotation", planeRotate)
                }
            }
        })
    }
})