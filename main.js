// Setup 'tick' sound
const tick = new Audio('sounds/tick.mp3');
const tock = new Audio('sounds/tock.mp3');
const counter = document.querySelector('span');
const hiHat = new Audio('sounds/hi-hat.mp3');
const kick = new Audio('sounds/kick-drum.mp3');
const snare = new Audio('sounds/snare-drum.mp3');
const checkBox = document.querySelectorAll('[type = "checkbox"]');
const radios = document.querySelectorAll("[type = 'radio']");
let count = 0;

// This function is called every 600ms
function update() {
    // Play the 'tick' sound
    
    // On the Fourth tick play a sound
    
        for(const check of checkBox){
// Check to see if a input box was selected 
            if(check.checked === true){
// Then check to see which box is selected and play that sound
                if(check.value === "kick-drum"){
                    for(const radio of radios){
                        // kick.play();
                        if(radio.checked === true){
                            if(radio.value === "1"){
                                if(count % 4) +1;
                                kick.play();
                            }if(radio.value === 2){
                                kick.play();
                            }if(radio.value === 3){
                                kick.play();
                            }if(radio.value === 4){
                                kick.play();
                            }

                        }
                    }
                    
                }
                if(check.value === "snare-drum"){
                    snare.play();
                }
                if(check.value === "hi-hat"){
                    hiHat.play();
                }
                else if(check.value === "tock"){
                    tick.play();
                    if(count % 4 === 0){
                    tock.play();
                }
            }
            
        }
}
counter.innerText = count;
if(count <= 3){ 
    count ++;
}
else if(count > 3){
    count = 1;
}
    console.log(counter.innerText)
}
// This function sets up update() to be called every 600ms
function setupUpdate() {
    setInterval(update, 600);
}


// Call setupUpdate() once after 300ms
setTimeout(setupUpdate, 300);
