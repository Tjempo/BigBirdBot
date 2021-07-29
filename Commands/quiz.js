const Discord = require('discord.js');
const client = new Discord.Client();
module.exports= {
    name: 'quiz', 
    description: "Create a quiz with some questions about bigbird",
    execute(message, args){
            if (message.author.bot) return;
    const quiz = require('./quiz/quiz.json');
    const item = quiz[Math.floor(Math.random() * quiz.length)];
    const Timer = setTimeout(() => {
        message.reactions.removeAll().catch(error => console.error('Whoops cannot clear reactions', error)); //deletes message after x(ms)
      }, 3000);
    const filter = response => {
        return item.answers.some(answer => answer.toLowerCase() === response.content.toLowerCase());
    };

    message.channel.send(item.question).then(() => {
        message.channel.awaitMessages(filter, { max: 1, time: 30000, errors: ['Whoops too slow'] })             //After 30 seconds when nobody answers it cancels
            .then(collected => {
                message.react("👌")
                message.channel.send(`${collected.first().author} is a the smart kid here.`)
                message.reactions.removeAll().catch(error => console.error('Whoops cannot clear reactions', error));
                
            })
            .catch(collected => {
                message.channel.send('**Looks like nobody got the answer, yall stupid?**');
                message.react('🤷‍♂️')
                message.reactions.removeAll().catch(error => console.error('Whoops cannot clear reactions', error));
            });
        });
}};