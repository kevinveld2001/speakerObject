const player = require('play-sound')(opts = {});

function playFile({file}) {
    player.play(__dirname + "/files/" + file, function(err){
        if (err) throw err
    })
}

exports.playFile = playFile;