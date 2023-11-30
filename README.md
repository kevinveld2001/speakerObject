# speakerObject
SpeakerObject is a physical device connected with toto.io. It will allow you to play audio files and convert text to speech. This can be controlled from the gameplay in toto.


# Install
You should have a Raspberry Pi and flash it with Raspberry Pi OS. In the settings, you should turn on ssh and set the hostname to something you can remember. If you want it to automatically connect to the wifi you can also configure that with the Raspberry Pi imager.

Make sure you are connected to the same network.
If you don't have FileZilla already installed make sure to install that first.
Then connect to the Pi with FileZilla using the credentials you filled into the Raspberry Pi imager.

Make an object using `create.toto.io`
In the files of this project copy the .env.example to .env and fill out the cridentials for the toto object.

When you are connected. Make a folder on the Pi called `speaker`. Then drop all the files from this project in there.

Open a terminal on your computer. Type this:
`ssh {username}@{ip OR {hostname}.local}`

If you are connected type
`cd ./speaker` to go to the speaker folder
`chmod +x ./install.sh` to make the install script executeble
`sudo ./install.sh` this will run the install script.


# Use with toto
The trigger should be formatted as JSON. To tell the pi if you want to use text to speech or a sound file you should add
`"type": "tts"` or `"type": "file"` to the json object.
### tts
The `text` property is mandetory.
optional properties:
 - `voice` like "en-US", "europe/it", etc...
 - `gap` gap between words as a number. 1 = 10ms, 2 = 20ms, etc...
 - `speed` speed of the words in words per minutes default is 160.
 - `pitch` pitch of the voice from 0 to 99 default 50
 - `amplitude` from 0 to 200 default is 100. it can be used to make it quite or loud.

example:
```
{
    "type": "tts",
    "text": "Is that a cat",
    "voice": "en-us",
    "gap": 10,
    "pitch": 200
}
```
### file
Upload the sound file you want to play to the files folder. By using the "file" property you can tell the pi what file it should play.

```
{
    "type": "file",
    "file": "cat.wav"
}
```
