const Discord = require('discord.js');
module.exports= {
    name: 'join', 
    description: "joins the voicecall", 
    execute(message, args){
        const timer = setTimeout(() => {
            message.reactions.removeAll().catch(error => console.error('Whoops cannot clear reactions', error)); //deletes message after x(ms)
          }, 5000);
        if (message.author.bot) return;
        const voiceChannel = message.member.voice.channel;
        if (!voiceChannel) return message.channel.send ('**I cant find you in my curch my son**'),message.react('❌')
        voiceChannel.join().then(connection => {
            connection.play('hello.mp3')
            message.react('🙋‍♂️')
            message.channel.send('Hello children 😈')
            timer
    });
}};