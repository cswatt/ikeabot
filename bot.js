const Discord = require('discord.js')
const client = new Discord.Client()
var danestrings = ['denmark', 'danish', 'danes', 'copenhagen', 'dannish', 'hygge'];


client.on('message', (receivedMessage) => {
    // Prevent bot from responding to its own messages
    if (receivedMessage.author == client.user) {
        return
    }

    var str = receivedMessage.content.toLowerCase();
    

    for (i = 0; i < danestrings.length; i++){
    	if (str.includes(danestrings[i])){
    		receivedMessage.channel.send("fuck d*nmark")
    	}
    }

    if (str.includes("stop")) {
    	res = receivedMessage.content.replace(/stop/gi, "slut");
    	receivedMessage.channel.send(res)
    }

    if (str.includes("fast")) {
    	res = receivedMessage.content.replace(/fast/gi, "fart");
    	receivedMessage.channel.send(res)
    }


})


client.login(process.env.BOT_TOKEN)


