AFRAME.registerComponent("game-play", {
    schema:{
        elementId: {type:"string",default:'#coinsId'}
    },
    init: function(){
        this.startTimer()
        this.collision()
    },
    collision: function(elementId){
        const element = document.querySelector(elementId)
        element.addEventListener("collide", (e)=>{
            if(elementId.includes("#coinsId")){
                element.setAttribute("visible", false);
                console.log("coin collision")
                this.updateScore();
            }
            else{
                this.gameOver()
            }
        });
    },
    startTimer: function(duration, timerEl){
        var minutes;
        var seconds;

        setInterval(()=>{
            if(duration >=0){
                minutes = parseInt(duration / 60);
                seconds = parseInt(duration % 60);

                if(minutes < 10){
                    minutes = "0" + minutes
                }
                if(seconds < 10){
                    seconds = "0" + seconds
                }

                timerEl.setAttribute("text",{
                    value: minutes + ":" + seconds,
                });

                duration-=1
            }
            else{
                this.gameOver();
            }
        },1000)
    },
    updateScore :function(){
        var element = document.querySelector("#score")
        var count = element.getAttribute("text").value;
        var totalCount = parseInt(count)
        totalCount += 50;
        element.setAttribute("text", {value: totalCount})
      },
      gameOver:function(){

        var swimmer = document.querySelector("#under_diver")
        var text = document.querySelector("#game_over")
    
        text.setAttribute("visible", true)
    
        swimmer.setAttribute("dynamic-body", {mass:1})
    
      }
})