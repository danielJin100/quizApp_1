class Player {
    constructor(){
      this.index = null;
      this.name = null;
    }
  
    getCount(){
      var playerCountRef = database.ref('quizApp/playerCount');
      playerCountRef.on("value",(data)=>{
        playerCount = data.val();
      })
    }
  
    updateCount(count){
      database.ref('quizApp').update({
        playerCount: count
      });
    }
  
    update(){
      var playerIndex = "players/player" + this.index;
      this.index = this.getCount() + 1;
      database.ref("quizApp").set({
          playerCount: this.index
      })
      database.ref("quizApp/" + playerIndex).set({
        name:this.name,
        index: this.index
      });
      
    }
  
    static getPlayerInfo(){
      var playerInfoRef = database.ref('quizApp/players');
      playerInfoRef.on("value",(data)=>{
        allPlayers = data.val();
      })
    }
}