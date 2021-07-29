const Discord = require('discord.js');
module.exports= {
    name: 'leave', 
    description: "leaves the voicecall", 
    execute(message, args){
            if (message.author.bot) return;
            const timer = setTimeout(() => {
                message.reactions.removeAll().catch(error => console.error('Whoops cannot clear reactions', error)); //deletes message after x(ms)
              }, 5000);
              
            if(!message.guild.me.voice.channel) return message.channel.send("Im not in my church"); //If the bot is not in a voice channel, then return a message
            message.react('🚪')
			.then(() => message.react('🐤'))
			.then(() => message.react('💨'))
            .then(timer)
			.catch(error => console.error('One of the emojis failed to react:', error));
                message.guild.me.voice.channel.leave(); //Leave the voice channel
                message.channel.send("Oke im leaving, fuck you too I guess")
                }
};
