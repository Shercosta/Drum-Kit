//Plays sounds for each assigned key
function switchSound(buttonInnerHTML){
  switch (buttonInnerHTML) {

    case "w":
      var crash = new Audio('sounds/crash.mp3')
      crash.play()
      break;

    case "a":
      var kickBass = new Audio('sounds/kick-bass.mp3')
      kickBass.play()
      break;

    case "s":
      var snare = new Audio('sounds/snare.mp3')
      snare.play()
      break;

    case "d":
      var tom1 = new Audio('sounds/tom-1.mp3')
      tom1.play()

    case "j":
      var tom2 = new Audio('sounds/tom-2.mp3')
      tom2.play()
      break;

    case "k":
      var tom3 = new Audio('sounds/tom-3.mp3')
      tom3.play()
      break;

    case "l":
      var tom4 = new Audio('sounds/tom-4.mp3')
      tom4.play()
      break;

    default: console.log(buttonInnerHTML)

  }
}

//assigning the behavior of Playing Sound and Flashing Animation to all of the .drum button
for (var i = 0; i < document.querySelectorAll(".drum").length; i++){
  document.querySelectorAll("button")[i].addEventListener("click", function () {

    var buttonInnerHTML = this.innerHTML

    switchSound(buttonInnerHTML)

    buttonAnimation(buttonInnerHTML)

  })
}

//listens to keyboard presses
addEventListener("keydown", function(event) {
  switchSound(event.key) //event.key listens to what key was pressed
  buttonAnimation(event.key) //event.key listens to what key was pressed
})

//"pressed" animation effect
function buttonAnimation(currentKey){
  var activeButton = document.querySelector("." + currentKey)
  activeButton.classList.add("pressed") //adding the "pressed" animation effect
  setTimeout(function(){ //removing the "pressed" animation effect
    activeButton.classList.remove("pressed")
  }, 10)
}


// var audio = new Audio('sounds/tom-1.mp3')
// audio.play()
