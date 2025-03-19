let buffer = [];
let lastKeyTime = Date.now();
document.addEventListener("keydown", function(event) {
    const key = event.key.toLowerCase();
    const currentTime = Date.now();
    if (currentTime - lastKeyTime > 1000) {
        buffer = [];
    }
    if(buffer.indexOf(key)==-1)buffer.push(key);
    lastKeyTime = currentTime;
    if(buffer.join('+')=='control+shift+f1'){
        document.getElementsByClassName("fs")[0].style.display='block'
        console.log("Fileserver Unlocked")
    }
    if(buffer.join('+')=='control+alt+ '){
        document.getElementsByClassName("ch")[0].style.display='block'
        console.log("Chat Unlocked")
    }
    console.log(buffer);
}, false);