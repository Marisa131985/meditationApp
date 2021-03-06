const circleProgress = document.querySelector(".circle-progress");
const numberOfBreaths = document.querySelector(".breath-input");
const start = document.querySelector(".start");
const instructions = document.querySelector(".instructions");
const breathsText = document.querySelector(".breaths-text");
let breathsLeft = 3;

// Watching for selectiv breaths from user
numberOfBreaths.addEventListener("change", function() {
    breathsLeft = numberOfBreaths.value;
    breathsText.innerText = breathsLeft;
    
});

// Grow/Shrink Circle

const growCircle = () =>  {
    circleProgress.classList.add("circle-grow");
    setTimeout (() =>  {
        circleProgress.classList.remove("circle-grow");
    }, 4000);
};

// Breathing Instructions
const breathTextUpdate = () => {
    breathsLeft--;
    breathsText.innerText = breathsLeft;
    instructions.innerText = "Breath in";
    setTimeout(() => {
      instructions.innerText = "Hold Breath";
      setTimeout(() => {
        instructions.innerText = "Exhale Breath Slowly";
      }, 8000);
    }, 8000);
  };
  
  // Breathing App Function
  const breathingApp = () => {
    const breathingAnimtaion = setInterval(() => {
      if (breathsLeft === 0) {
        clearInterval(breathingAnimtaion);
        instructions.innerText = "Breathing session completed. Click 'Begin' to start another session!";
        start.classList.remove("button-inactive");
        breathsLeft = numberOfBreaths.value;
        breathsText.innerText = breathsLeft;
        return;
      }
      growCircle();
      breathTextUpdate();
    }, 10000);
  };
  

//Start Breathing
start.addEventListener("click", () => {
    start.classList.add("button-inactive");
    instructions.innerText = "Get relaxed, and ready to begin breathing";
    setTimeout(() => {
      instructions.innerText = "Breathing is about to begin...";
      setTimeout(() => {
        breathingApp();
        growCircle();
        breathTextUpdate();
      }, 2000);
    }, 2000);
  });


  // Audio
var myMusic= document.getElementById("music");

function play() {

myMusic.play();

}

 

function pause() {

myMusic.pause();

}
