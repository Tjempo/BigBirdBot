const Discord = require('discord.js');
const MemeImage = (new Discord.MessageAttachment('./bigbird/'+Math.floor(Math.random()*64)+'.jpg'))
const ImageEmbed = new Discord.MessageEmbed()
    .setTitle('Meme')
    .setColor('#676767')

const client = new Discord.Client();
module.exports= {
    name: 'image', 
    description: "This command will send random bigbird meme", 
    execute(message, args){
            if (message.author.bot) return;
            message.react('🐥')
            message.channel.send(new Discord.MessageAttachment('./bigbird/'+Math.floor(Math.random()*64)+'.jpg'))
            message.reactions.removeAll().catch(error => console.error('Whoops cannot clear reactions', error));
    } 
};