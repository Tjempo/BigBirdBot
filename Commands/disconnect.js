const Discord = require('discord.js');
const client = new Discord.Client()
const fs = require('fs'); 
const channel = client.channels.cache.get('819036279835852810')
module.exports = {
    
    name: 'disconnect',
    description: "This command disconnects the member",
    execute(message, args){
        if (message.author.bot) return;
        if(!message.member.permissions.has('MOVE_MEMBERS')) return message.channel.send('**Are you black? Because you don\'t have the rights.**')
        const target = message.mentions.users.first();
        const voiceChannel = message.member.voice.channel;
        const Timer = setTimeout(() => {
            message.reactions.removeAll().catch(error => console.error('Whoops cannot clear reactions', error)); //deletes message after x(ms)
          }, 3000);
        if (!voiceChannel) return message.channel.send ('**I cant find the person in the curch**'),message.react('❌')
        
        let user; 
        if(message.mentions.users.first()) {
        user = message.mentions.users.first();
        }
        else user = message.author;
        
        if (target){
            let mainrole = message.guild.roles.cache.find(role => role.name === 'MOVE')
            let memberTarget = message.guild.members.cache.get(target.id);
            
            memberTarget.voice.setChannel(null)
            .then(()=> message.channel.send("**Kicked **" + `<@${user.id}>`))
            .then(()=> message.react('🦶'))
            .then(() => Timer)

        } else{
            message.channel.send('**I Cant find the person you are looking for...**')
        }
 
    }
}
    