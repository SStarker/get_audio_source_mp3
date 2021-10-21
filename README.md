# set an HTML audio source for mp3 in js

Scott Starker - 10/14/2021

The js file in the user browser must have sessionStorage.setItem("mp3", "mp3") (e.g. from ScriptureEarg.org website).

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

The HTML files need to have ```<script type='text/javascript' src='js/set_audio_source_mp3.js' defer></script>```

# Test
1. Copy the folder called "Test" to your drive.
2. In your drive, go to the folder called "Test".
3. In the browser run "test.html".
4. Click on either "Normal" or "Just MP3".
5. Click on "Ok".
6. A new window will come up.
7. It will play either the "ogg" or "MP3" depending on which you clicked on in the previous window.
8. Clivk of "Repeat" and it will play it again.
9. Once you are done, click on "Close".
10. In the first window, click the other one.
11. Click on "Ok".
12. Go back to step 6.
