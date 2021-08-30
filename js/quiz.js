function updateState(gameState){
    database.ref('quizApp').set({
      'gameState': gameState
    })
  }
  
  function readState(){
    database.ref("quizApp/gameState").on("value", gstate => 
    {
        gameState = gstate.val();
    });
    
  }
  
  async function start(){
    if(gameState === 0){
      player = new Player;
      var playerCountRef = await database.ref("quiz/playerCount").once("value")
      if(!playerCountRef){
         playerCount = playerCountRef.val();
         player.getCount();
      }
      question = new Question();
      question.display();
    }
  }