const Discord = require('discord.js');
module.exports= {
    name: 'version', 
    description: "This command sends the version", 
    execute(message, args){
            if (message.author.bot) return;
            message.react('🔧')
            message.channel.send('Version 3.1.3');
            const timer = setTimeout(() => {
                message.reactions.removeAll().catch(error => console.error('Whoops cannot clear reactions', error)); //deletes message after x(ms)
              }, 5000);
            timer
    }      
};