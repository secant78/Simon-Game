$(document).ready(function(){
  //http://audiosoundclips.com/audio-sound-clips-drums/
  //audio files to play for only one second
  
  function playAudio(audio){
 
  var segmentEnd;
  audio.addEventListener('timeupdate', function (){
    if (segmentEnd && audio.currentTime >= segmentEnd) {
        audio.pause();
    }   
    console.log(audio.currentTime);
}, false);
function playSegment(startTime, endTime){
    segmentEnd = endTime;
    audio.currentTime = startTime;
    audio.play();
}
    playSegment(0,1.5);
    return false;
  }
    
  
  
  
  var musicCounter = 0;
  
  function start(){
    //defines if the game will start and continue or not
    this.continue = false;
  }
  
  var startGame = new start();
  
  function buttonClicked(){
    //determines whether button click is correct or not, contains the sequence of correct button clicks,  and contains the wrong button pressed
    this.correct = false;
    this.sequence = [];
    this.progress = [];
    this.currentIndex = 0;
    this.audioSequence = [];
  }
  
  var inputs = new buttonClicked();
  
  function continueGame (){
    //if correct button is clicked, this function is called again to create a new random input
   
    
    $('#displayScore').html(musicCounter.toString());
    if(startGame.continue === true){
    function randomButton(input) {
    return Math.floor(Math.random() * input.length);
}
  
  var buttonId = [0,1,2,3];
  var randomGeneratedButton = randomButton(buttonId);
    //console.log(tryThis);
    
  //$('#test').html($("." + tryThis).html());
 (inputs.audioSequence).push(randomGeneratedButton);
      var audioCounter = 0;
      
      
    while(audioCounter <inputs.audioSequence.length){
      var audioElem = $('#'+inputs.audioSequence[audioCounter]+'Audio')[0];
      playAudio(audioElem);
      audioCounter++;
    }
    
      
      
      
    var inputStr = $("." + tryThis).html();
      //var audioElem = $('#'+tryThis+'Audio')[0];
      //playAudio(audioElem);
    (inputs.sequence).push(inputStr);
      $('#test').html(inputs.sequence);
   // console.log(inputs.sequence);
  // console.log(inputStr);
    }
   
  }
  
  
  
  function stopGame(){
    //makes the variable startGame.continue false if the incorrect button is pressed. Also calls continueGame function
    
        startGame.continue = false;
    inputs.sequence = [];
        inputs.progress = [];
    inputs.currentIndex = 0;
     musicCounter = 0;
   alert('sorry, you picked the wrong button. try again!');
    $('#displayScore').html(musicCounter.toString());
     $('#test').html("");
      
    return false;
    
  }
  

  
  function resetCounters (){
     inputs.progress = [];
    inputs.currentIndex = 0;
  }
  
  function evaluateInput(color){
    
    var correct;
    var recentInput = (inputs.sequence);
   
    if(recentInput[inputs.progress.length] == color){
      correct = true;
      inputs.currentIndex+=1;
    
    }
    else if(recentInput[inputs.currentIndex]!== color){
      stopGame();
      return false;
     
    }
    (inputs.progress).push(correct);
   
    if((inputs.progress).length == (inputs.sequence).length){
      resetCounters();
      continueGame();
      musicCounter++;
    }
  
    
    
  }
  
  $('#start').on('click', function(){
    //when button is clicked, starts the game
    startGame.continue = true;
    continueGame();
  

    
  });
  
  $('#reset').on('click', function(){
    //when button is clicked, stops the game.
    stopGame();
    
  });
  
  
  var timeout;
  $('#green').on('click', function(){
    
  var green = 'Green';
 

    var audio = $('#0Audio')[0];
    playAudio(audio);
     evaluateInput(green);
   // $('#greenAudio')[0].play();
   
    
    /*
    $(this).css('background-color', 'white');
   timeout = setInterval(function(){
        // Do something continuously 
     audio.play();
    }, 500);
  $('#green').on('mouseup',function(){
    clearInterval(timeout);
    audio.pause();
     evaluateInput('Green');
    $(this).css('background-color', 'green');
    return false;
});
    */
    
  });
   
  /*
  $('#green').mouseup(function(){
    clearInterval(timeout);
    return false;
});
  */
  
  $('#blue').on('click', function(){
   
    var blue = 'Blue';
  
    var audio = $('#1Audio')[0];
    playAudio(audio);
    evaluateInput(blue);
    
   /*
    
    $(this).css('background-color', 'white');
   timeout = setInterval(function(){
        // Do something continuously 
     audio.play();
    }, 500);
    
    $('#blue').on('mouseup',function(){
    clearInterval(timeout);
    audio.pause();
       evaluateInput('Blue');
    $(this).css('background-color', 'blue');
    return false;
});

*/
    
  });
  
   $('#red').on('click', function(){
     var red = 'Red';
     var audio = $('#2Audio')[0];
    playAudio(audio);
    evaluateInput(red);
    
     /*
     $(this).css('background-color', 'white');
   timeout = setInterval(function(){
        // Do something continuously 
     audio.play();
    }, 500);
     
     $('#red').on('mouseup',function(){
    clearInterval(timeout);
    audio.pause();
       evaluateInput('Red');
    $(this).css('background-color', 'red');
    return false;
});\
*/
  
  });
  
   $('#yellow').on('mousedown', function(){
      var yellow = 'Yellow';
  
     var audio = $('#3Audio')[0];
      playAudio(audio);
     evaluateInput(yellow);
      
     /*
     $(this).css('background-color', 'white');
   timeout = setInterval(function(){
        // Do something continuously 
     audio.play();
    }, 500);
     
     $('#yellow').on('mouseup',function(){
    clearInterval(timeout);
    audio.pause();
       evaluateInput('Yellow');
    $(this).css('background-color', 'yellow');
    return false;
});
    */
  });
  
});