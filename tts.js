const { spawn } = require('child_process');
const shellEscape = require('any-shell-escape');

function handleTtsInput(props) {
    const {text, voice, gap, speed, pitch, amplitude} = props;
    if (!text) {
        console.error("No text provided");
        return;
    }
    
    speak({text, voice, gap, speed, pitch, amplitude});
}

function speak({text, voice, gap, speed, pitch, amplitude}) {
    const options = [`"${shellEscape(text)}"`];

    if (voice) options.push('-v', shellEscape(voice));
    if (gap) options.push('-g', gap);
    if (speed) options.push('-s', speed);
    if (pitch) options.push('-p', pitch);
    if (amplitude) options.push('-a', amplitude);

    spawn('espeak', options);
}

exports.handleTtsInput = handleTtsInput;