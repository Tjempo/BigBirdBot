const discord = require('discord.js')
const client = new discord.Client();
const ffmpeg = require('ffmpeg')
const broadcast = client.voice.createBroadcast();
module.exports= {
    name: 'watching', 
    description: "Bot joins voice channel and plays audio.mp3", 
    execute(message, args){
        const timer = setTimeout(() => {
            message.reactions.removeAll().catch(error => console.error('Whoops cannot clear reactions', error)); //deletes message after x(ms)
          }, 5000);
        if (message.author.bot) return;
        const voiceChannel = message.member.voice.channel;
        if (!voiceChannel) return message.channel.send ('`I cant find you in my curch my son`'),message.react('❌'),timer
        voiceChannel.join().then(connection => {
            connection.play('message.mp3')
        message.channel.send('Im watching you...')
        });
    }
}; 