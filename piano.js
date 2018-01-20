window.addEventListener('keydown', function(event) {
    let note = document.querySelector(`audio[note="${event.keyCode}"`);
    if(!note) return; //Return if doesn't have any note(key pressed)

    let key = document.querySelector(`div[key-note="${event.keyCode}"`);

    key.classList.add("pressed");

    setInterval(function() {
        key.classList.remove("pressed");
    }, 300);

    note.currentTime = 0;
    note.play(); 
});

