const Discord = require('discord.js');
const client = new Discord.Client();
const fs = require('fs'); 
const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));
client.commands = new Discord.Collection
PREFIX = '!';

for(const file of commandFiles){
    const command = require(`./commands/${file}`);
    client.commands.set(command.name, command);
}

client.on('ready', () => {
    console.log('BigBird is watching');
    client.user.setActivity('Eternally', { type: 'WATCHING'}).catch(console.error);
    });
;

client.on('message', message =>{
    if (!message.content.startsWith(PREFIX) || message.author.bot) return;

    const args = message.content.slice(PREFIX.length).split(/ +/);
    const command = args.shift().toLowerCase();

    if(!client.commands.has(command)) return;
    try{
    client.commands.get(command).execute(message, args);
    }catch(error){
    console.error(error);
    message.reply('Big F, That fucked up')
    message.react('🛑')
    }
});

client.login(process.env.token);
