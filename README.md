# set_audio_source_mp3
get a js audio source for mp3

Scott Starker - 10/14/2021

The js file in the user browser must have sessionStorage.setItem("mp3", "mp3") (e.g. in ScriptureEarg.org website).

If sessionStorage.setItem("mp3", "mp3") then remove the all of the other audio "source"s src.

For example, in the HTML
```
    <audio id="audio" controls>
        <source id='audio1' src="audio.ogg" />
        <source id='audio2' src="audio.mp3" />
    </audio>
```

results in
```
    <audio id="audio" controls>
        <source id='audio1' src="" />
        <source id='audio2' src="audio.mp3" />
    </audio>
    ```

And, therefore plays the mp3 file.

The assumption is the audio "source" have "id"s of "audio1", "audio2", "audio3", "audio4", and "audio5" maximum.

The HTML files need to have <script type='text/javascript' src='js/set_audio_source_mp3.js' defer></script>
