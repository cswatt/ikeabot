require('dotenv').config();
const Discord = require('discord.js')
const giphyRandom = require("giphy-random");
const client = new Discord.Client()
let abbamap = new Map([
    ['waterloo', 'Sj_9CiNkkn4'],
    ['mamma mia', 'unfzfe8f9NI'], 
    ['fernando', 'dQsjAbZDx-4'], 
    ['dancing queen', 'xFrGuyw1V8s'],
    ['money money money', 'ETxmCCsMoD0'],
    ['money, money, money', 'ETxmCCsMoD0'],
    ['knowing me, knowing you', 'ETxmCCsMoD0'],
    ['the name of the game', 'iJ90ZqH0PWI'],
    ['take a chance on me', '-crgQGdpZR0'],
    ['summer night city', '_d5dPYHi17k'],
    ['chiquitita', 'p4QqMKe3rwY'],
    ['does your mother know', 'WkL7Fkigfn8'],
    ['voulez-vous', 'za05HBtGsgU'],
    ['angeleyes', 'Jv2B26475WE'],
    ['gimme gimme gimme', 'XEjLoHdbVeE'],
    ['i have a dream', '_HMjOiHqE18'],
    ['the winner takes it all', '92cwKCU8Z5c'],
    ['super trouper', 'BshxCIjNEjY'],
    ['lay all your love on me', 'wq7_8IPpPfE'],
    ['one of us', 'IIKAe8Wi0S0']
]);

let abbastrings = Array.from(abbamap.keys());


client.on('message', (receivedMessage) => {
    // Prevent bot from responding to its own messages
    if (receivedMessage.author == client.user) {
        return
    }

    // Prevent bot from doing shit in this channel
    if (receivedMessage.channel.id == 609901832004829221) {
        return
    }

    if (receivedMessage.channel.id == 727983603266486376) {

        if (Math.floor(Math.random()*10)==1) {
            (async () => {
                const API_KEY = process.env.GIPHY_API_KEY;
                
                try {
                const { data } = await giphyRandom(API_KEY, {
                    tag: "shark"
                });
                receivedMessage.channel.send(data['url']);
            } catch (error) {
                console.log(error);
            }
            })();
        }
    }

    var str = receivedMessage.content.toLowerCase();
    

    for (i = 0; i < abbastrings.length; i++){
        if (str.includes(abbastrings[i])){
            console.log("seen")
            receivedMessage.channel.send("https://www.youtube.com/watch?v="+abbamap.get(abbastrings[i]));
        }
    }



})


client.login(process.env.BOT_TOKEN)