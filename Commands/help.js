const Discord = require('discord.js');
const client = new Discord.Client()
module.exports= {
    name: 'help', 
    description: "This command will send random meme", 
    execute(message, args){
            if (message.author.bot) return;

            const Timer = setTimeout(() => {
                message.reactions.removeAll().catch(error => console.error('Whoops cannot clear reactions', error)); //deletes message after x(ms)
              }, 3000);

            message.react('❓')
            const HelpEmbed = new Discord.MessageEmbed()    //The Embed that sends the information
            .setTitle('Help')
            .setDescription('See list of all commands')
            .setAuthor('BigBird', 'https://i.imgur.com/SyZRFt8.jpeg')
            .addField('Image', '`Sends Bigbird meme`')
            .addField('Clown', '`Sends random clown image`')
            .addField('Version', '`Shows Version`')
            .addField('Join', '`Joins Voice Call`')
            .addField('Leave', '`Leaves Voice Call`')
            .addField('Watching', '`Watches You`')
            .addField('Quiz', '`Play a quiz`')
            .addField('Move [Person]', '`Move someone *admin only`')
            .setFooter(`More commands coming soon`)
            .setColor('#fbbd25')
        
            message.channel.send(HelpEmbed)
            .then(() => Timer)
    } 
};