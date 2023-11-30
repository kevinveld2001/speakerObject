require('dotenv').config()
const mqtt = require("mqtt");
const {handleTtsInput} = require("./tts");

const client = mqtt.connect("tls://mqtt.toto.io:8883", {
  // rejectUnauthorized: false,
  username: process.env.TOTO_USERNAME,
  password: process.env.TOTO_PASSWORD,
});

client.on('connect', () => {
  console.log('Connected to MQTT broker');
  client.subscribe(process.env.TOTO_TOPIC, (err) => {});
});


// Handle incoming messages
client.on('message', (topic, message) => {
    if(topic !== process.env.TOTO_TOPIC) return;
    const {type, ...props} = JSON.parse(message.toString());

    if (type === "tts") {
        handleTtsInput(props);
    } else if (type === "file") {
        //implement file playing
    } else {
        console.error("Unknown type");``
    }
});

// Handle disconnects
client.on('close', () => {
  console.log('Disconnected from MQTT broker');
  client.end();
  process.exit();
});
