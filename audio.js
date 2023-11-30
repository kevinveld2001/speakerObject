const player = require('play-sound')(opts = {});

function playFile({file}) {
    player.play(__dirname + "/files/" + file, function(err){
        if (err) console.error(err);
    })
}

exports.playFile = playFile;