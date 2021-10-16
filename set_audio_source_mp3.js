// Scott Starker - 10/14/2021
// sessionStorage.setItem("mp3", "mp3") in ScriptureEarg.org website
// if sessionStorage.setItem("mp3", "mp3") then remove the all of the other audio "source"s src
// assume the audio "source" have "id"s of "audio1", "audio2", "audio3", "audio4", and "audio5" maximum
// The HTML file must have <script type='text/javascript' src='get_audio_source_mp3.js' defer></script>
let srcmp3 = "";
if (typeof(Storage) !== "undefined") { // sessionStorage is found
    if (srcmp3 = sessionStorage.getItem("mp3")) { // if "mp3" is found from the users browser and assign it to srcmp3
        let re = /.*\.([a-z0-9]+)$/i; // regex
        let i = 1;
        for (; i <= 5; i++) { // assume 5 sources
            let audioZ = document.getElementById('audio' + i); // iterate through audio "source"
            if (audioZ.src.replace(re, '$1') != srcmp3) { // if file extension = "mp3"
                audioZ.removeAttribute("src"); // remove "*.mp3" from audio "source"
            } else {
                const mediaElement = document.querySelector("#audio");
                mediaElement.load(); // reload "audio"
                break;
            }
        }
        if (i == 6) {
            console.log("This isn't supposed to happen. mp3 is not found in audio sources.");
        }
    } else { // = "" or undefined
        console.log("mp3 sessionStorage is not found");
    }
} else {
    console.log("sessionStorage is not found");
}
