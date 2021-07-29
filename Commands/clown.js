const Discord = require('discord.js');
const client = new Discord.Client()
module.exports= {
    name: 'clown', 
    description: "Sends clown gif", 
    execute(message, args){
            if (message.author.bot) return;


const Timer = setTimeout(() => {
    message.reactions.removeAll().catch(error => console.error('Cannot clear reactions', error));
        }, 3500);

let user; 
    if(message.mentions.users.first()) {
        user = message.mentions.users.first();
        }
        else user = message.author;

const clowns = [
    "https://media3.giphy.com/media/xxLszVeawO8zS/giphy.gif?cid=790b7611ead41efdc58be27a82025016d1653d9390f838bf&rid=giphy.gif&ct=g",
    "https://media1.tenor.com/images/f708b232a6534880bdd7bc2875440a7b/tenor.gif?itemid=14740508",
    "https://media1.tenor.com/images/4c59ba9a6a29abf37e85a5da9feb463b/tenor.gif?itemid=5173543",
    "https://thumbs.gfycat.com/DazzlingGrossComet-max-1mb.gif", 
    "https://media1.tenor.com/images/d6f5039e9f1b1c836351b4e160b9ded3/tenor.gif?itemid=19539918",
    "https://media1.tenor.com/images/7226c1ed9889920a873ff6bcc221664f/tenor.gif?itemid=15819140",
    "https://media.tenor.com/images/eefe12ee5158f8c9830fcdd96d27ba52/tenor.gif",
    "https://media1.tenor.com/images/df2b0abf408dd5d4899f4b016a4a2d79/tenor.gif?itemid=15387100",
    "https://i.gifer.com/6yrs.gif",
    "https://media1.tenor.com/images/6241c1c61fd91a53df15f5b18d28a244/tenor.gif?itemid=10162552",
    "https://i.pinimg.com/originals/07/49/b7/0749b70a4bced9f024018f2307612181.gif",
    "https://i2.wp.com/media.giphy.com/media/SurJgOYLEkN0Y/giphy.gif?resize=480%2C270&ssl=1",
    "https://giffiles.alphacoders.com/104/104272.gif",
    "https://media.tenor.com/images/485a82fba3cd197610307cc0f6b6f076/tenor.gif",
    "https://media0.giphy.com/media/13e1UmAEwdj7vG/giphy.gif?cid=ecf05e47rtril0nwpmilhhu2gf4w2jf9uya2lhamcvkp10c1&rid=giphy.gif&ct=g",
    "https://media.tenor.com/images/fcfac5cf4c55fe172aba8940f0b461f6/tenor.gif",
    "https://media1.tenor.com/images/e3a20b3fc0f2c4d80b8976a68fea1a79/tenor.gif?itemid=15312853"
    ];
const clowning = (" **Is Clowning**")
const Image = clowns[Math.floor(Math.random() * clowns.length)]
const ClownEmbed = new Discord.MessageEmbed()
        .setColor('#fbbd25')
        .setDescription(`<@${user.id}>` + clowning)
        .setImage(Image)

         message.react('🤡'),
        message.channel.send(ClownEmbed)
        Timer
    }
};