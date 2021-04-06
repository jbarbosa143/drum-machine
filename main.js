// Setup 'tick' sound
const tick = new Audio('sounds/tick.mp3');
const tock = new Audio('/sounds/tock.mp3');
const counter = document.querySelector('span');
const hiHat = new Audio('/sounds/hi-hat.mp3');
const kick = new Audio('/sounds/kick-drum.mp3');
const snare = new Audio('/sounds/snare-drum.mp3');
const checkBox = document.querySelectorAll('[type = "checkbox"]');
let count = 0;

// This function is called every 600ms
function update() {
    // Play the 'tick' sound
    tick.play();
    
    if(count % 4 === 0){
        for(const check of checkBox){
            if(check.checked === true){

                if(check.value === "kick-drum"){
                kick.play();
                }
                if(check.value === "snare-drum"){
                snare.play();
                }
                if(check.value === "hi-hat"){
                    hiHat.play();
                }
                else if(check.value === "tock"){
                    tock.play();
                }
            }
            
        }
        // tock.play();
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
