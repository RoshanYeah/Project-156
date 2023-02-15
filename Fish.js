AFRAME.registerComponent("swimming-fish", {
    init: function(){
        
        for(i=1;i<=20;i++){
            var id = `obstacles${i}`;
            var positionX = (Math.random()*30+ (-10))
            var positionY = (Math.random()*6+ (-1))
            var positionZ = (Math.random()*10+ (-10))
            var position = {x:positionX,y:positionY,z:positionZ}
            
            this.flyingBirds(id,position)   
        }
    },
    flyingBirds: function(id,position){
        var subBirds = document.querySelector("#fishId")
        var bird = document.createElement("a-entity");
        bird.setAttribute("id", id);
        bird.setAttribute("position", position);
        bird.setAttribute("scale", {x:0.5, y:0.5, z:0.5})
        bird.setAttribute("gltf-model","./assets/fish/scene.gltf")
        //animating the model
        bird.setAttribute("animation-mixer",{})
        subBirds.appendChild(bird)
    }
})
